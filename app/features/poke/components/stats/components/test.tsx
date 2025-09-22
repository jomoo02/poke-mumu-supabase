import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

/* ===== Context & 타입 ===== */
type ItemData = { label: React.ReactNode; render?: () => React.ReactNode };
type SelectCtx = {
  selected?: string;
  open: boolean;
  setOpen: (v: boolean) => void;
  select: (v: string) => void;
  preRegister: (val: string, label: React.ReactNode) => void;
  register: (
    val: string,
    label: React.ReactNode,
    render: () => React.ReactNode,
  ) => void;
  unregister: (val: string) => void;
  itemsRef: React.MutableRefObject<Map<string, ItemData>>;
  orderRef: React.MutableRefObject<string[]>;
};
const SelectContext = createContext<SelectCtx | null>(null);

/* ===== SelectRoot ===== */
export function SelectRoot({
  children,
  defaultValue,
  value,
  onChange,
  portalRoot = typeof document !== 'undefined' ? document.body : null,
}: {
  children?: React.ReactNode;
  defaultValue?: string | number;
  value?: string | number;
  onChange?: (v: string) => void;
  portalRoot?: Element | null;
}) {
  const itemsRef = useRef<Map<string, ItemData>>(new Map());
  const orderRef = useRef<string[]>([]);
  const [open, setOpen] = useState(false);
  const [uncontrolledSelected, setUncontrolledSelected] = useState<
    string | undefined
  >(
    value != null
      ? String(value)
      : defaultValue != null
        ? String(defaultValue)
        : undefined,
  );

  useEffect(() => {
    if (value != null) setUncontrolledSelected(String(value));
  }, [value]);

  const selected = value != null ? String(value) : uncontrolledSelected;

  const preRegister = useCallback((val: string, label: React.ReactNode) => {
    const map = itemsRef.current;
    if (!map.has(val)) {
      map.set(val, { label });
      orderRef.current.push(val);
    } else {
      map.get(val)!.label = label;
    }
  }, []);

  const register = useCallback(
    (val: string, label: React.ReactNode, render: () => React.ReactNode) => {
      preRegister(val, label);
      itemsRef.current.get(val)!.render = render;
    },
    [preRegister],
  );

  const unregister = useCallback((val: string) => {
    itemsRef.current.delete(val);
    orderRef.current = orderRef.current.filter((v) => v !== val);
  }, []);

  const select = useCallback(
    (val: string) => {
      if (value == null) setUncontrolledSelected(val);
      onChange?.(val);
      setOpen(false);
    },
    [value, onChange],
  );

  return (
    <SelectContext.Provider
      value={{
        selected,
        open,
        setOpen,
        select,
        preRegister,
        register,
        unregister,
        itemsRef,
        orderRef,
      }}
    >
      <div>{children}</div>
      {/* SelectContent는 별도 컴포넌트로 둠(아래) */}
      {portalRoot ? <SelectContent portalRoot={portalRoot} /> : null}
    </SelectContext.Provider>
  );
}

/* ===== SelectTrigger ===== */
export function SelectTrigger({ className }: { className?: string }) {
  const ctx = useContext(SelectContext)!;
  const label =
    (ctx.itemsRef.current.get(String(ctx.selected ?? ''))
      ?.label as React.ReactNode) ?? 'Select';
  return (
    <button
      type="button"
      className={className}
      onClick={() => ctx.setOpen(!ctx.open)}
      aria-expanded={ctx.open}
    >
      {label}
    </button>
  );
}

/* ===== SelectContent (포탈 렌더) ===== */
export function SelectContent({
  portalRoot = document.body,
}: {
  portalRoot?: Element;
}) {
  const ctx = useContext(SelectContext)!;
  if (!ctx.open) return null;

  const items = ctx.orderRef.current.map((key) => {
    const it = ctx.itemsRef.current.get(key);
    return it?.render ? <div key={key}>{it.render()}</div> : null;
  });

  return createPortal(
    <div role="listbox" aria-activedescendant={ctx.selected}>
      {items}
    </div>,
    portalRoot,
  );
}

/* ===== SelectItem (바깥에 선언되어도 동작) ===== */
export function SelectItem({
  value,
  children,
  className,
}: {
  value: string | number;
  children: React.ReactNode;
  className?: string;
}) {
  const ctx = useContext(SelectContext)!;
  const v = String(value);

  // 렌더 중 동기 pre-register: Trigger가 즉시 label 읽을 수 있게 함
  ctx.preRegister(v, children);

  useEffect(() => {
    // 포탈에 실제 렌더할 node(클릭 핸들러 포함)를 등록
    ctx.register(v, children, () => (
      <div
        role="option"
        aria-selected={ctx.selected === v}
        onClick={() => ctx.select(v)}
        className={className}
      >
        {children}
      </div>
    ));
    return () => ctx.unregister(v);
  }, [ctx, v, children, className]);

  // SelectItem은 자신이 UI를 직접 렌더하지 않음 (필요하면 복제본을 렌더 가능)
  return null;
}

/* ===== 사용 예 (Items는 SelectContent 바깥에 둠) ===== */
/*
<SelectRoot defaultValue={20} onChange={(v)=>console.log("selected", v)}>
  <SelectTrigger />
  <SelectItem value={10}>Lv10</SelectItem>
  <SelectItem value={20}>Lv20</SelectItem>
  <SelectItem value={30}>Lv30</SelectItem>
  // SelectContent는 SelectRoot에서 자동으로 포탈로 렌더됨
</SelectRoot>
*/

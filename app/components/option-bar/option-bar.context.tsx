import { createContext, createRef, RefObject, useContext } from 'react';

interface OptionBarProviderProps {
  selectedValue: string | undefined;
  onValueSelect: (value: string) => void;
  optionValues: string[];
  optionValueRefMap: RefObject<Map<string, HTMLDivElement | null> | null>;
  contentRef: RefObject<HTMLDivElement | null>;
  registerOption: (value: string, ref: HTMLDivElement | null) => void;
}

const SelectedValueContext =
  createContext<OptionBarProviderProps['selectedValue']>(undefined);

const OnValueSelectContext = createContext<
  OptionBarProviderProps['onValueSelect']
>(() => {});

const OptionValuesContext = createContext<
  OptionBarProviderProps['optionValues']
>([]);

const OptionValueRefMapContext =
  createContext<OptionBarProviderProps['optionValueRefMap']>(createRef());

const ContentRefContext =
  createContext<OptionBarProviderProps['contentRef']>(createRef());

const RegisterOptionContext = createContext<
  OptionBarProviderProps['registerOption']
>(() => {});

export function OptionBarProvider({
  children,
  selectedValue,
  onValueSelect,
  optionValues,
  registerOption,
  optionValueRefMap,
  contentRef,
}: OptionBarProviderProps & { children: React.ReactNode }) {
  return (
    <SelectedValueContext.Provider value={selectedValue}>
      <OnValueSelectContext.Provider value={onValueSelect}>
        <OptionValuesContext.Provider value={optionValues}>
          <RegisterOptionContext.Provider value={registerOption}>
            <OptionValueRefMapContext.Provider value={optionValueRefMap}>
              <ContentRefContext.Provider value={contentRef}>
                {children}
              </ContentRefContext.Provider>
            </OptionValueRefMapContext.Provider>
          </RegisterOptionContext.Provider>
        </OptionValuesContext.Provider>
      </OnValueSelectContext.Provider>
    </SelectedValueContext.Provider>
  );
}

export function useSelectedValue() {
  const selectedValue = useContext(SelectedValueContext);
  return { selectedValue };
}

export function useOnValueSelect() {
  const onValueSelct = useContext(OnValueSelectContext);
  return { onValueSelct };
}

export function useOptionValues() {
  const optionValues = useContext(OptionValuesContext);
  return { optionValues };
}

export function useRegisterOption() {
  const registerOption = useContext(RegisterOptionContext);
  return { registerOption };
}

export function useOptionValueRefMap() {
  const optionValueRefMap = useContext(OptionValueRefMapContext);
  return { optionValueRefMap };
}

export function useContentRef() {
  const contentRef = useContext(ContentRefContext);
  return { contentRef };
}

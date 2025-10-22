interface TitleProps {
  title: string;
  content?: string;
}

export default function Title({ title, content }: TitleProps) {
  return (
    <div className="">
      <h1 className="scroll-m-20 text-3xl font-semibold text-foreground">
        {title}
      </h1>
      <div className="text-foreground my-6">{content}</div>
    </div>
  );
}

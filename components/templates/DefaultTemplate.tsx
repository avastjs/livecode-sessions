
interface DefaultTemplateProps {
  children: React.ReactNode;
}

export function DefaultTemplate({
  children,
}: DefaultTemplateProps) {
  return (
    <div className="grid place-items-center h-screen">
        {children}
    </div>
  );
}

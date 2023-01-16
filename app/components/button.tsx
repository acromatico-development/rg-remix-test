type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button(props: ButtonProps) {
  return (
    <button
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.4",
        ...props.style,
      }}
      {...props}
    />
  );
}
interface GrayTextBoxProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const GrayTextBox = ({ children, style }: GrayTextBoxProps) => {
  console.log(style);
  return (
    <div
      style={{
        boxSizing: "border-box",
        backgroundColor: "rgb(245, 247, 248)",
        borderRadius: "4px",
        height: "50px",
        padding: "0 12px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default GrayTextBox;

const DividerSlash = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <i
        style={{
          position: "absolute",
          top: "5px",
          left: "1px",
          width: "1px",
          height: "15px",
          background: "rgb(211, 213, 215)",
          transform: "rotate(15deg)",
        }}
      />
    </div>
  );
};

export default DividerSlash;

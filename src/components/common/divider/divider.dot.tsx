const DividerDot = () => {
  return (
    <div
      style={{
        width: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <i
        style={{
          width: "3px",
          height: "3px",
          backgroundColor: "rgb(211, 213, 215)",
          borderRadius: "50%",
        }}
      />
    </div>
  );
};

export default DividerDot;

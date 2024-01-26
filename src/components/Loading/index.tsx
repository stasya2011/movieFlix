import loading from "./loading.gif";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 100,
      }}
    >
      <img height={80} src={loading} alt="laoding" />
    </div>
  );
};

export default Loading;

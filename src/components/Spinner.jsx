import DotLoader from "react-spinners/DotLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <DotLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={150}
      speedMultiplier={1.5}
    />
  );
};

export default Spinner;

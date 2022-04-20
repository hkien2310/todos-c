import { Link } from "react-router-dom";
import appPaths from "../constants/appPaths";

const BackHome = () => {
  return (
    <div className="btn-back-home">
      <Link to={appPaths.homepage}>
        <button> Back Home </button>
      </Link>
    </div>
  );
};
export default BackHome;

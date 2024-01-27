import { Link } from "react-router-dom";

const BottomWarning = ({ label, buttonText, to }) => {
  return (
    <>
      <div className="flex justify-center text-sm py-3">
        {label}
        <Link className="pointer underline cursor-pointer pl-1" to={to}>
          {buttonText}
        </Link>
      </div>
    </>
  );
};

export default BottomWarning;

import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <Link to="/cart">
      <div>
        <BsFillCartCheckFill size={50} color={"#fff"} />
      </div>
    </Link>
  );
};

import { FaChevronDown } from "react-icons/fa";
import "../Tab/style.css";
import { useLocation } from "react-router-dom";
import { getCurrentRouteName } from "../../utils/getHeader";

const Header = () => {
  const location = useLocation();
  const formattedRouteName = getCurrentRouteName(location.pathname);
  return (
    <div className="tab-header">
      <div className="head-tools">
        <span>{formattedRouteName}</span>
        <FaChevronDown className="svg-icon-down" />
      </div>
    </div>
  );
};

export default Header;

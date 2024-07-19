import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/ndVjk.png";
import { hideTab, showTab } from "../../data/actions";
import { RootState } from "../../data/rootReducer";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const Logo = () => {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const isTabVisible = useSelector(
    (state: RootState) => state.tab.isTabVisible
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 6000);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    if (isTabVisible) {
      dispatch(hideTab());
    } else {
      dispatch(showTab());
    }
  };
  return (
    <div>
      {showPopup && (
        <div className="popup1">
          <span className="down">
            <FaArrowLeft />
          </span>
          <p>Click here to hide / open the Tab!</p>
        </div>
      )}
      <div className="logo-container">
        <img className="logo-global" src={logo} onClick={handleClick} />
      </div>
    </div>
  );
};

export default Logo;

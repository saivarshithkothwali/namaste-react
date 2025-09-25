import { LOGO_URL } from "../utils/constants";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  console.log("Header rendered");
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("useEffect rendered");
  }, []);

  const data = useContext(UserContext);
  //console.log(data);

  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  return (
    <div className="flex justify-between items-center px-5 py-1.5 bg-white shadow-md font-sans h-[60px] overflow-hidden">
      <div className="logo-container">
        <Link to="/">
          <img
            className="w-[100px] h-auto py-1 px-2.5 my-0 mx-2.5 object-contain transition-transform duration-300 ease-in-out 
             hover:scale-110"
            src={LOGO_URL}
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex  flex-row items-center list-none m-0 p-0 mr-5 ">
        <ul className="flex space-x-6 text-sm font-medium ">
          <li
            className={`status ${onlineStatus ? "online" : "offline"} py-1.5`}
          >
            Online Status:{" "}
            <span style={{ lineHeight: 1 }}>{onlineStatus ? "🟢" : "🔴"}</span>
          </li>

          <li className="hover:text-red-500  cursor-pointer py-1.5">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-red-500 cursor-pointer py-1.5">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-red-500 cursor-pointer py-1.5">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:text-red-500 cursor-pointer py-1.5">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="hover:text-red-500 cursor-pointer py-1.5">
            <Link to="/cart">Cart-{cartItems.length} items</Link>
          </li>
          <li>
            <button
              className="px-[14px] py-[6px] text-sm text-red-600 border border-red-600 rounded-md cursor-pointer transition-all duration-200 ease-in-out hover:bg-red-600 hover:text-white hover:scale-105 hover:shadow-md"
              onClick={() =>
                setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
              }
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

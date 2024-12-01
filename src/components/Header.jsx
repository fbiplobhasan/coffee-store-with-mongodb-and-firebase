import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const links = <>
     <NavLink className="mr-5" to="/">Home</NavLink>
    <NavLink className="mr-5" to="signin">SigIn</NavLink>
     <NavLink className="mr-5" to="coffee">Add coffee</NavLink>
     <NavLink className="mr-5" to="signup">SignUp</NavLink>
     <NavLink className="mr-5" to="users">Users</NavLink>
    </>
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
       <h1 className="text-3xl"> Coffee Store</h1>
      </div>
      <div className="flex-none">
        {links}
      </div>
    </div>
  );
};

export default Header;

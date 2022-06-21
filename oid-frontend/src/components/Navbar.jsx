import React, { useState } from "react";

const Navbar = () => {

  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: "gray",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h1>My openID provider</h1>
      </nav>
  );
};

export default Navbar;

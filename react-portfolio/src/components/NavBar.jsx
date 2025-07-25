import React from "react";

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <a href="/">
        <img
          src="./src/assets/images/logo/arnavsLogo.svg"
          alt="Logo"
          style={styles.logo}
        />
      </a>
        <ul className="flex space-x-4" style={styles.ul}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  );
};

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    padding: "10px 20px",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    height: "60px",
    cursor: "pointer"
  },
  ul: {
    display: "flex",
    margin: 0,
    padding: 0,
    right: "0",
    alignItems: "center",
    gap: "20px",
    fontFamily: "NoirdenBold, helvetica",
  }
};

export default NavBar;

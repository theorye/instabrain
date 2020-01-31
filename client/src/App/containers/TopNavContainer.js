import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useScroll } from "../hooks/useScroll";
import TopNav from "../../features/Navigation/TopNav";
import useAppState from "../hooks/useAppState";

const TopNavContainer = () => {
  console.log("TopNavContainer rendered...");
  const [navBarHidden, setNavBarHidden] = useState(true);
  const location = useLocation();
  const scroll = useScroll();
  const [state] = useAppState();

  useEffect(() => {
    const { pathname } = location;
    const navBarHidden =
      (pathname === "/" && !state.isAuthenticated) ||
      pathname === "/accounts/signup" ||
      pathname === "/accounts/login";
    setNavBarHidden(navBarHidden);
  }, [location, state.isAuthenticated]);
  return !navBarHidden ? <TopNav scrollY={scroll.y} username={state.username} /> : null;
};

export default TopNavContainer;

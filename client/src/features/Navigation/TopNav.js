import React from "react";
import StyledTopNav from "./StyledTopNav";
import ExploreSVG from "../shared/ExploreSVG";
import HeartSVG from "../shared/HeartSVG";
import ProfileSVG from "../shared/ProfileSVG";
import { NavLink, Link, Route } from "react-router-dom";

const TopNav = ({ shrink, username }) => {
  console.log("TopNav rendered");
  return (
    <StyledTopNav height={shrink ? "3.2rem" : "4.75rem"}>
      <ul>
        <li style={{ marginLeft: "1rem", marginTop: ".5rem" }}>
          <Link to="/">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                alt="logo"
                src="/assets/brain.svg"
                style={{ height: "1.5rem" }}
              />
              <div
                style={{
                  backgroundColor: "#262626",
                  height: "1.8rem",
                  margin: "0 .8rem",
                  width: "1px",
                  display: `${shrink ? "none" : "block"}`
                }}
              ></div>
              <span
                style={{
                  display: `${shrink ? "none" : "block"}`,
                  fontFamily: "Billabong",
                  fontSize: "2.2rem",
                  fontWeight: "300",
                  textAlign: "center",
                  marginTop: ".5rem"
                }}
              >
                Instabrain
              </span>
            </div>
          </Link>
        </li>

        <li style={{ marginTop: ".5rem", backgroundColor: "green" }}>
          <input
            style={{
              width: "20rem",
              border: "solid 1px #dbdbdb",
              borderRadius: "3px",
              color: "#262626",
              outline: 0,
              padding: "3px 10px 3px 26px"
            }}
            placeholder="Search"
          />
        </li>
        <li style={{ marginRight: "1rem", marginTop: ".5rem" }}>
          <div>
            <NavLink to="/explore">
              <ExploreSVG />
            </NavLink>
            <NavLink to="/accounts/activity">
              <HeartSVG />
            </NavLink>
            <NavLink exact to={`/${username}`}>
              <Route
                path={`/${username}`}
                children={({ match }) => (
                  <ProfileSVG isActive={match ? true : false} />
                )}
              />
            </NavLink>
          </div>
        </li>
      </ul>
    </StyledTopNav>
  );
};

export default React.memo(TopNav) 

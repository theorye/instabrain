import React from "react";
import StyledProfileInfo from "./StyledProfileInfo";

export const ProfileHeaderInfo = ({
  username,
  name,
  introduction,
  children
}) => {
  return (
    <StyledProfileInfo>
      <div className="profile-user-settings">
        <h1 className="profile-user-name">{username}</h1>        
        {children}
      </div>
      <div className="profile-stats">
        <ul>
          <li>
            <span className="profile-stat-count">164</span> posts
          </li>
          <li>
            <span className="profile-stat-count">188</span> followers
          </li>
          <li>
            <span className="profile-stat-count">206</span> following
          </li>
        </ul>
      </div>

      <div className="profile-bio">
        <span className="profile-real-name">{name}</span>
        <span style={{ width: 'auto'}}>
          {introduction}
        </span>
      </div>
    </StyledProfileInfo>
  );
};

export default ProfileHeaderInfo;

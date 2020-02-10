import React from "react";
import StyledProfileInfo from "./StyledProfileInfo";

export const ProfileHeaderInfo = ({
  username,
  isModalOpen,
  setIsModalOpen,
  children
}) => {
  return (
    <StyledProfileInfo>
      <div className="profile-user-settings">
        <h1 className="profile-user-name">{username}</h1>

        <button className="btn profile-edit-btn">Edit Profile</button>
        
        {/* children is the settings modal */}
        {isModalOpen && children}

        <button
          className="btn profile-settings-btn"
          aria-label="profile settings"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <span role="img" aria-label="settings">
            &#9881;
          </span>
        </button>
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
        <span className="profile-real-name">Jane Doe</span>
        <span role="img" aria-label="message button">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️
        </span>
      </div>
    </StyledProfileInfo>
  );
};

export default ProfileHeaderInfo;

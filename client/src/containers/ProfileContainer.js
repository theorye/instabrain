import React, { useEffect, useState } from "react";
import {
  ProfileGallery,
  ProfileTabs,
  ProfileHeaderInfo,
  StyledProfileHeader
} from "../features/profile";
import { SettingsModal } from "../features/modals/SettingsModal";
import useApi from "../hooks/useApi";
import Api from "../services/agent";
import useAppState from "../hooks/useAppState";
import FollowButtonContainer from "./FollowButtonContainer2";

function ProfileContainer({ handle }) {
  console.log("Profile Container Rendered");
  const [{ status, response }, types, handleRequest] = useApi(Api.getProfile);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appState, appDispatch, appActions] = useAppState();

  useEffect(() => {
    handleRequest(handle).then(data => {
      // console.log("PROFILE CONTAINER HANDLE REQUEST");
      // console.log(data);
    });
  }, [handleRequest, handle]);

  if (status === types.FETCHING) {
    return <p>Loading...</p>;
  }

  let button;
  let button2;

  if (status === types.SUCCESS && response.username) {
    if (appState.username === handle) {
      button = <button className="btn profile-edit-btn">Edit Profile</button>;
      button2 = (
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
      );
    } else {
      console.log('proile response')
      console.log(response)
  
      button = <FollowButtonContainer userId={response.id} following={response.following} />;
      button2 = <button>another butto2n</button>;
    }
    return (
      <>
        <StyledProfileHeader>
          <div className="profile-image">
            <img src={response.avatar || "/assets/defaultUser.jpg"} alt="" />
          </div>
          <ProfileHeaderInfo username={response.username}>
            {button}
            {button2}
            {isModalOpen && <SettingsModal setIsModalOpen={setIsModalOpen} />}
          </ProfileHeaderInfo>
        </StyledProfileHeader>
        <ProfileTabs />
        <ProfileGallery pictures={response.posts || []} />
      </>
    );
  } else {
    return (
      <>
        <h1>Sorry, this page isn't available.</h1>
        <p>
          The link you followed may be broken, or the page may have been
          removed. Go back to Instagram.
        </p>
      </>
    );
  }
}

export default ProfileContainer;

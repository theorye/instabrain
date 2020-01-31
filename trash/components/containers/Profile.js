import React, { useEffect } from "react";
import StyledProfile from "../styles/StyledProfile";
import ProfileGallery from "./ProfileGallery";
import ProfileHeader from "./ProfileHeader";
import ProfileTabs from "./ProfileTabs";
import { useParams } from "react-router-dom";
import useDb from "../../services/agent";
import { setProfile, useStore } from "../stores/store";

function Profile() {
  const { id } = useParams();
  const { Profiles } = useDb();
  const [state, dispatch] = useStore();

  useEffect(() => {
    Profiles.get(id).then(res => {
      console.log(res);
      if (res === "not found") {
        document.title = "Page Not Found - Instabrain";
        dispatch(setProfile({}));
      } else {
        document.title = res.profile.username;
        dispatch(setProfile(res));
      }
    });
  }, [Profiles, dispatch, id]);

  return (
    <StyledProfile>
      {state.profile.username ? (
        <>
          <ProfileHeader username={state.profile.username} />
          <ProfileTabs />
          <ProfileGallery pictures={state.profile.posts || []} />
        </>
      ) : (
        <>
          <h1>Sorry, this page isn't available.</h1>
          <p>
            The link you followed may be broken, or the page may have been
            removed. Go back to Instagram.
          </p>
        </>
      )}
    </StyledProfile>
  );
}

export default Profile;

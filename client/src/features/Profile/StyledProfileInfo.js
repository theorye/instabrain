import styled from "styled-components";

export const StyledProfileInfo = styled.div`
    // background: purple;
    // padding-left: 1rem;
    margin-right: 1rem;

    .profile-user-settings {
        display: flex;
        align-items: baseline;        
    }

    .profile-user-name {
        margin-right: 1rem;
        font-weight: 300;
    }

    .profile-edit-btn {
        font-size: .8rem;
        line-height: 1.8;
        border: 0.1rem solid #dbdbdb;
        border-radius: 0.3rem;
        margin-left: .5rem;        
    }

    .profile-settings-btn {
        // display:block;
        margin-left: .5rem;
        font-size: 1.5rem;
        color: white;
        border: none;
    }

    .profile-settings-btn:active {
        border: none;
    }

    .profile-stats {

    }



    .profile-stats ul {
        // background-color: green;
        display: flex;
        // padding-left: 0;
        // list-style-type: none;
        // flex-direction: row;
        font-size: 1rem;
        line-height: 1.2;
        // margin-right: 2rem;
        cursor: pointer;
    }

    .profile-stats li {
        margin-right: 2rem;
    }

    .profile-stats li:last-of-type {
        margin-right: 0;
    }
    
    .profile-bio {
        display: flex;
        flex-direction: column;
    }

    .profile-real-name {
        font-size: 1rem;
        font-weight: 600;    
    }

    .btn {
        background-color: transparent;
        color: #262626;
        cursor: pointer;
    }
`;

export default StyledProfileInfo;

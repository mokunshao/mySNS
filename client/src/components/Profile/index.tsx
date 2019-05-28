import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import ProfileHeader from "../ProfileHeader";
import ProfileAbout from "../ProfileAbout";
import ProfileDetail from "../ProfileDetail";
import ProfileGithub from "../ProfileGithub";
import { connect } from "react-redux";
import { getProfileByHandle } from "../../redux/actions/profileActions";

interface Props {
  match: any;
  getProfileByHandle: Function;
  profile: any;
}

function Profile(props: Props) {
  useEffect(() => {
    props.getProfileByHandle(props.match.params.handle);
    console.log(props.match.params.handle);
  }, []);
  return (
    <div className={styles.profile}>
      {props.profile.profile ? (
        <>
          <ProfileHeader />
          <ProfileAbout />
          <ProfileDetail />
          <ProfileGithub />
        </>
      ) : (
        <div>没有该用户</div>
      )}
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return { profile: state.profile };
};

const mapDispatchToProps = {
  getProfileByHandle
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import ProfileHeader from "../ProfileHeader";
import ProfileAbout from "../ProfileAbout";
import ProfileDetail from "../ProfileDetail";
import ProfileGithub from "../ProfileGithub";
import { connect } from "react-redux";
import { getProfileByHandle } from "../../redux/actions/profileActions";
import Loading from "../Loading";

interface Props {
  match: any;
  getProfileByHandle: Function;
  profile: any;
  history: any;
}

function Profile(props: Props) {
  useEffect(() => {
    props.getProfileByHandle(props.match.params.handle);
  }, []);
  let mainContent;
  if (props.profile.loading) {
    mainContent = <Loading />;
  } else {
    if (props.profile.profile) {
      mainContent = (
        <>
          <div>
            <button
              className={styles.button}
              onClick={() => {
                props.history.go(-1);
              }}
            >
              返回
            </button>
          </div>
          <ProfileHeader data={props.profile.profile} />
          <ProfileAbout data={props.profile.profile} />
          <ProfileDetail data={props.profile.profile} />
          {props.profile.profile.github ? (
            <ProfileGithub data={props.profile.profile} />
          ) : null}
        </>
      );
    } else {
      mainContent = <div className={styles.noUser}>没有该用户</div>;
    }
  }
  return <div className={styles.profile}>{mainContent}</div>;
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

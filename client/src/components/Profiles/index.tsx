import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProfiles } from "../../redux/actions/profileActions";
import styles from "./styles.module.scss";
import Loading from "../Loading";
import ProfileItem from "../ProfileItem";
interface Props {
  getProfiles: Function;
  history: any;
  profile: any;
}

function Profiles(props: Props) {
  useEffect(() => {
    props.getProfiles();
  }, []);
  let mainContent;
  if (props.profile.profiles) {
    if (props.profile.profiles.length > 0) {
      mainContent = props.profile.profiles.map((profile:any) => <ProfileItem key={profile._id} data={profile}/>);
    } else {
      mainContent = <div className={styles.noData}>没有相关开发人员信息</div>;
    }
  }
  return (
    <div className={styles.profiles}>
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
      <h1>开发者们</h1>
      {props.profile.loading && <Loading />}
      {/* {profiles && profiles.length === 1 ? (
        <div className={styles.noData}>没有相关开发人员信息</div>
      ) : null} */}
      {mainContent}
    </div>
  );
}

const mapDispatchToProps = {
  getProfiles
};

const mapStateToProps = (state: any) => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profiles);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../redux/actions/profileActions";
import Loading from "../Loading";
import { Link } from "react-router-dom";
import styles from './styles.module.scss'

function Dashboard(props: any) {
  let dashboardContent;
  if (!props.profile.profile || props.profile.loading) {
    dashboardContent = <Loading />;
  } else if (Object.keys(props.profile.profile).length > 0) {
    dashboardContent = <React.Fragment>TODO：展示数据</React.Fragment>;
  } else {
    dashboardContent = (
      <>
        <div>欢迎 {props.auth.user.username}</div>
        <div>您没有任何个人信息，请添加一些您的个人信息</div>
        <Link to="/create-profile" className={styles.button}>创建个人信息</Link>
      </>
    );
  }
  useEffect(() => {
    props.getCurrentProfile();
  }, []);
  return (
    <div className={styles.Dashboard}>
      <h1>Dashboard</h1>
      <div>{dashboardContent}</div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    auth: state.auth,
    profile: state.profile
  };
};

const mapDispatchToProps = {
  getCurrentProfile
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

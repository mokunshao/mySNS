import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../redux/actions/profileActions";
import Loading from "../Loading";

function Dashboard(props: any) {
  let dashboardContent;
  if (!props.profile.profile || props.profile.loading) {
    dashboardContent = (
      <div>
        <Loading />
      </div>
    );
  } else {
    dashboardContent = <div>hello world</div>;
  }
  useEffect(() => {
    props.getCurrentProfile();
  }, []);
  return (
    <div>
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

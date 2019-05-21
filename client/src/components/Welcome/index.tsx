import React from "react";
import { connect } from "react-redux";

interface Props {
  auth: {
    isAuthenticated: string;
  };
  history: {
    push: Function;
  };
}

function Welcome(props: Props) {
  if (props.auth.isAuthenticated) {
    props.history.push("/dashboard");
  }
  return <div>Welcome</div>;
}

const mapStateToProps = (state: any) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(Welcome);

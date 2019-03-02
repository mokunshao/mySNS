import React, {Component} from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">米修在线
                </h1>
                <p className="lead"> 专注于线上教育, 用心做课程, 用心做服务! </p>
                <hr />
                <button to="/register" className="btn btn-lg btn-info mr-2">注册</button>
                <button to="/login" className="btn btn-lg btn-light">登录</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Landing;
import React, { FormEvent, useState, useEffect } from "react";
import TextAreaFieldGroup from "../TextAreaFieldGroup";
import TextFieldGroup from "../TextFieldGroup";
import SelectListGroup from "../SelectListGroup";
import styles from "./styles.module.scss";
import InputGroup from "../InputGroup";
import { connect } from "react-redux";
import {
  createProfile,
  getCurrentProfile
} from "../../redux/actions/profileActions";
import { resetErrors } from "../../redux/actions/authActions";

interface Input {
  target: {
    name: string;
    value: string;
  };
}

const options = [
  { label: "* 请选择您的职业", value: "* 请选择您的职业" },
  { label: "Junior Developer", value: "前端初级工程师" },
  { label: "Senior Developer", value: "前端中级工程师" },
  { label: "HighDeveloper", value: "前端高级工程师" },
  { label: "Manager", value: "前端管理" },
  { label: "backend Developer", value: "后端开发" },
  { label: "python machine learning", value: "Python机器学习" },
  { label: "Other", value: "其他" }
];

interface Props {
  errors: {
    handle: string;
    status: string;
    company: string;
    website: string;
    location: string;
    skills: string;
    bio: string;
    qq: string;
    github: string;
    wechat: string;
    weibo: string;
  };
  createProfile: Function;
  history: any;
  resetErrors: Function;
  getCurrentProfile: Function;
  profile: any;
}

function EditProfile(props: Props) {
  const [displaySocial, setDisplaySocial] = useState(false);
  const [handle, setHandle] = useState("");
  const [status, setStatus] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState("");
  const [github, setGithub] = useState("");
  const [bio, setBio] = useState("");
  const [qq, setQQ] = useState("");
  const [wechat, setWechat] = useState("");
  const [weibo, setWeibo] = useState("");
  useEffect(() => {
    props.getCurrentProfile();
    props.resetErrors();
  }, []);
  useEffect(() => {
    if (!props.profile.profile) {
      return;
    }
    if (props.profile.profile.handle) {
      setHandle(props.profile.profile.handle);
    }
    if (props.profile.profile.status) {
      setStatus(props.profile.profile.status);
    }
    if (props.profile.profile.company) {
      setCompany(props.profile.profile.company);
    }
    if (props.profile.profile.website) {
      setWebsite(props.profile.profile.website);
    }
    if (props.profile.profile.location) {
      setLocation(props.profile.profile.location);
    }
    if (props.profile.profile.skills) {
      setSkills(props.profile.profile.skills.join(","));
    }
    if (props.profile.profile.github) {
      setGithub(props.profile.profile.github);
    }
    if (props.profile.profile.bio) {
      setBio(props.profile.profile.bio);
    }
    if (props.profile.profile.social) {
      const { qq, weibo, wechat } = props.profile.profile.social;
      setQQ(qq);
      setWechat(wechat);
      setWeibo(weibo);
    }
  }, [props.profile.profile]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const profileData = {
      handle,
      status,
      company,
      website,
      location,
      skills,
      github,
      bio,
      qq,
      wechat,
      weibo
    };
    props.createProfile(profileData, props.history);
  }
  function handleChange(e: FormEvent & Input) {
    switch (e.target.name) {
      case "handle":
        setHandle(e.target.value);
        break;
      case "status":
        setStatus(e.target.value);
        break;
      case "company":
        setCompany(e.target.value);
        break;
      case "website":
        setWebsite(e.target.value);
        break;
      case "location":
        setLocation(e.target.value);
        break;
      case "skills":
        setSkills(e.target.value);
        break;
      case "github":
        setGithub(e.target.value);
        break;
      case "bio":
        setBio(e.target.value);
        break;
      case "qq":
        setQQ(e.target.value);
        break;
      case "wechat":
        setWechat(e.target.value);
        break;
      case "weibo":
        setWeibo(e.target.value);
        break;
      default:
        break;
    }
  }
  return (
    <div className={styles.createProfile}>
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
      <h1>编辑个人信息</h1>
      <form onSubmit={handleSubmit}>
        <TextFieldGroup
          name="handle"
          value={handle}
          onChange={handleChange}
          type="text"
          errors={props.errors.handle}
          placeholder="* handle"
          info="此处的 handle 是在后端接口中需要用来查询数据的, 通常是写你 email 的名字"
        />
        <SelectListGroup
          options={options}
          name="status"
          value={status}
          onChange={handleChange}
          errors={props.errors.status}
          info="请告知我们您目前所从事的岗位"
        />
        <TextFieldGroup
          name="company"
          value={company}
          onChange={handleChange}
          type="text"
          errors={props.errors.company}
          placeholder="公司"
          info="公司"
        />
        <TextFieldGroup
          name="website"
          value={website}
          onChange={handleChange}
          type="text"
          errors={props.errors.website}
          placeholder="网址"
          info="网址"
        />
        <TextFieldGroup
          name="location"
          value={location}
          onChange={handleChange}
          type="text"
          errors={props.errors.location}
          placeholder="地点"
          info="地点"
        />
        <TextFieldGroup
          name="skills"
          value={skills}
          onChange={handleChange}
          type="text"
          errors={props.errors.skills}
          placeholder="* 编程技能"
          info="技能( 例如 HTML,CSS,JavaScript,PHP )"
        />
        <TextFieldGroup
          name="github"
          value={github}
          onChange={handleChange}
          type="text"
          errors={props.errors.github}
          placeholder="Github 用户名"
          info="Github 用户名"
        />
        <TextAreaFieldGroup
          name="bio"
          value={bio}
          onChange={handleChange}
          errors={props.errors.bio}
          placeholder="个人介绍"
          info="个人介绍"
        />
        <div>
          <div style={{ marginBottom: "10px" }}>
            <button
              type="button"
              className={styles.button}
              onClick={() => {
                setDisplaySocial(!displaySocial);
              }}
            >
              添加社交账号
            </button>
          </div>
          {displaySocial ? (
            <div>
              <InputGroup
                name="qq"
                value={qq}
                onChange={handleChange}
                errors={props.errors.qq}
                placeholder="QQ"
                icon="qq"
              />
              <InputGroup
                name="wechat"
                value={wechat}
                onChange={handleChange}
                errors={props.errors.wechat}
                placeholder="微信"
                icon="weixin"
              />
              <InputGroup
                name="weibo"
                value={weibo}
                onChange={handleChange}
                errors={props.errors.weibo}
                placeholder="微博"
                icon="weibo"
              />
            </div>
          ) : null}
        </div>
        <input
          type="submit"
          onClick={handleSubmit}
          className={styles.submit}
          value="提交"
        />
      </form>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    errors: state.errors,
    profile: state.profile
  };
};

const mapDispatchToProps = { createProfile, resetErrors, getCurrentProfile };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);

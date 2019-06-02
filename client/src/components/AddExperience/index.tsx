import React, { useState, FormEvent, useEffect, ChangeEvent } from "react";
import { connect } from "react-redux";
import styles from "./styles.module.scss";
import TextFieldGroup from "../TextFieldGroup";
import TextAreaFieldGroup from "../TextAreaFieldGroup";
import { addExperience } from "../../redux/actions/profileActions";
import { resetErrors } from "../../redux/actions/authActions";

interface Props {
  history: any;
  errors: any;
  addExperience: Function;
  resetErrors: Function;
}

function AddExperience(props: Props) {
  useEffect(() => {
    props.resetErrors();
  }, []);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [current, setCurrent] = useState(false);
  const [description, setDescription] = useState("");
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const experienceData = {
      title,
      company,
      location,
      from,
      to,
      description
    };
    console.log(experienceData);
    props.addExperience(experienceData, props.history);
  }
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "company":
        setCompany(e.target.value);
        break;
      case "location":
        setLocation(e.target.value);
        break;
      case "from":
        setFrom(e.target.value);
        break;
      case "to":
        setTo(e.target.value);
        break;
      case "current":
        setCurrent(!current);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      default:
        break;
    }
  }
  return (
    <div className={styles.AddExperience}>
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
      <h1>添加个人经历</h1>
      <form onSubmit={handleSubmit}>
        <TextFieldGroup
          name="title"
          value={title}
          onChange={handleChange}
          type="text"
          error={props.errors.title}
          placeholder="* 工作职位"
        />
        <TextFieldGroup
          name="company"
          value={company}
          onChange={handleChange}
          type="text"
          error={props.errors.company}
          placeholder="* 公司"
        />
        <TextFieldGroup
          name="location"
          value={location}
          onChange={handleChange}
          type="text"
          error={props.errors.location}
          placeholder="地点"
        />
        <h6>开始时间</h6>
        <TextFieldGroup
          name="from"
          value={from}
          onChange={handleChange}
          type="date"
          error={props.errors.from}
        />
        <h6>结束时间</h6>
        <TextFieldGroup
          name="to"
          value={to}
          onChange={handleChange}
          type="date"
          error={props.errors.to}
          disable={current}
        />
        <div style={{ marginBottom: "10px" }}>
          <input
            type="checkbox"
            name="current"
            checked={current}
            onChange={handleChange}
            id="current"
          />
          <label htmlFor="current" className="form-check-label">
            当前在职
          </label>
        </div>
        <TextAreaFieldGroup
          placeholder="工作内容"
          name="description"
          value={description}
          onChange={handleChange}
          error={props.errors.description}
          info="说明有关工作的相关内容等"
        />
        <input type="submit" value="提交" className={styles.submit} />
      </form>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  profile: state.profile,
  errors: state.errors
});

const mapDispatchToProps = {
  addExperience,
  resetErrors
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddExperience);

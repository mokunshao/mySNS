import React, { useState, FormEvent, useEffect } from "react";
import { connect } from "react-redux";
import styles from "./styles.module.scss";
import TextFieldGroup from "../TextFieldGroup";
import TextAreaFieldGroup from "../TextAreaFieldGroup";
import { addEducation } from "../../redux/actions/profileActions";
import { resetErrors } from "../../redux/actions/authActions";

interface Props {
  history: any;
  errors: any;
  addEducation: Function;
  resetErrors: Function;
}

interface E {
  target: {
    name: string;
    value: string;
  };
}

function AddEducation(props: Props) {
  useEffect(() => {
    props.resetErrors();
  }, []);
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [fieldofstudy, setFieldofstudy] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [current, setCurrent] = useState(false);
  const [description, setDescription] = useState("");
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const experienceData = {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      description
    };
    console.log(experienceData);
    props.addEducation(experienceData, props.history);
  }
  function handleChange(e: E) {
    switch (e.target.name) {
      case "school":
        setSchool(e.target.value);
        break;
      case "degree":
        setDegree(e.target.value);
        break;
      case "fieldofstudy":
        setFieldofstudy(e.target.value);
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
    <div className={styles.AddEducation}>
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
      <h1>添加教育经历</h1>
      <form onSubmit={handleSubmit}>
        <TextFieldGroup
          name="school"
          value={school}
          onChange={handleChange}
          type="text"
          error={props.errors.school}
          placeholder="* 学校"
        />
        <TextFieldGroup
          name="degree"
          value={degree}
          onChange={handleChange}
          type="text"
          error={props.errors.degree}
          placeholder="* 学历"
        />
        <TextFieldGroup
          name="fieldofstudy"
          value={fieldofstudy}
          onChange={handleChange}
          type="text"
          error={props.errors.fieldofstudy}
          placeholder="* 专业"
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
            当前在校
          </label>
        </div>
        <TextAreaFieldGroup
          placeholder="在校表现"
          name="description"
          value={description}
          onChange={handleChange}
          error={props.errors.description}
          info="说说你在学习过程中的经历"
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
  addEducation,
  resetErrors
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEducation);

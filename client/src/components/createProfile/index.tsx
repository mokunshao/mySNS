import React, { FormEvent } from "react";
import TextAreaFieldGroup from "../TextAreaFieldGroup";
import TextFieldGroup from "../TextFieldGroup";
import SelectListGroup from "../SelectListGroup";
import styles from "./styles.module.scss";

interface Input {
  target: {
    name: string;
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

export default function createProfile() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("handleSubmit");
  }
  function handleChange(e: FormEvent & Input) {
    console.log(e.target.name);
  }
  return (
    <div className={styles.createProfile}>
      <h1>创建个人信息</h1>
      <p>填写您的个人信息，让人们更多地了解您</p>
      <form onSubmit={handleSubmit}>
        <TextFieldGroup
          name="handle"
          value=""
          onChange={handleChange}
          type="text"
          errors=""
          placeholder="handle"
          info="此处的handle是在后端接口中需要用来查询数据的, 通常是写你email的名字"
        />
        <SelectListGroup
          options={options}
          name="status"
          value="0"
          onChange={handleChange}
          errors=""
          info="请告知我们您目前所从事的岗位"
        />
        <TextFieldGroup
          name="company"
          value=""
          onChange={handleChange}
          type="text"
          errors=""
          placeholder="公司"
          info="公司"
        />
        <TextFieldGroup
          name="website"
          value=""
          onChange={handleChange}
          type="text"
          errors=""
          placeholder="网址"
          info="网址"
        />
        <TextFieldGroup
          name="location"
          value=""
          onChange={handleChange}
          type="text"
          errors=""
          placeholder="地点"
          info="地点"
        />
        <TextFieldGroup
          name="skills"
          value=""
          onChange={handleChange}
          type="text"
          errors=""
          placeholder="技能"
          info="技能( 例如 HTML, CSS, JavaScript, PHP 等)"
        />
        <TextFieldGroup
          name="github"
          value=""
          onChange={handleChange}
          type="text"
          errors=""
          placeholder="Github 用户名"
          info="Github 用户名"
        />
        <TextAreaFieldGroup
          name="bio"
          value=""
          onChange={handleChange}
          errors=""
          placeholder="个人介绍"
          info="个人介绍"
        />
        <div>
          <div>添加社交账号</div>
        </div>
      </form>
    </div>
  );
}

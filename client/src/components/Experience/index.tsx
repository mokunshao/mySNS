import React from "react";
import styles from "./styles.module.scss";
import { connect } from "react-redux";
import { deleteExperience } from "../../redux/actions/profileActions";
interface Props {
  data: any;
  deleteExperience: Function;
}

function Experience(props: Props) {
  const experienceData = props.data.map((item: any) => (
    <tr key={item._id}>
      <td>{item.company}</td>
      <td>{item.title}</td>
      <td>
        {item.from} 至 {item.to === "" ? "至今" : item.to}
      </td>
      <td>
        <button
          onClick={() => props.deleteExperience(item._id)}
          className="btn btn-danger"
        >
          删除
        </button>
      </td>
    </tr>
  ));
  const emptyEducationData = (
    <tr>
      <td colSpan={4} className={styles.noData}>
        无数据
      </td>
    </tr>
  );
  return (
    <div className={styles.experience}>
      <h4>个人履历</h4>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>公司</th>
            <th>职位</th>
            <th>年份</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {props.data.length > 0 ? experienceData : emptyEducationData}
        </tbody>
      </table>
    </div>
  );
}

export default connect(
  null,
  { deleteExperience }
)(Experience);

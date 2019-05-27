import React from "react";
import styles from "./styles.module.scss";
import { connect } from "react-redux";
import { deleteEducation } from "../../redux/actions/profileActions";

interface Props {
  data: any;
  deleteEducation: Function;
}

function Education(props: Props) {
  const educationData = props.data.map((item: any) => (
    <tr key={item._id}>
      <td>{item.school}</td>
      <td>{item.fieldofstudy}</td>
      <td>
        {item.from} 至 {item.to === "" ? "至今" : item.to}
      </td>
      <td>
        <button onClick={() => props.deleteEducation(item._id)} className="btn btn-danger">
          删除
        </button>
      </td>
    </tr>
  ));

  return (
    <div className={styles.education}>
      <h4>教育经历</h4>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>学校</th>
            <th>专业</th>
            <th>年份</th>
            <th />
          </tr>
        </thead>
        <tbody>{educationData}</tbody>
      </table>
    </div>
  );
}

export default connect(
  null,
  { deleteEducation }
)(Education);

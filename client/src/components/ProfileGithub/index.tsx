import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

interface Props {
  data: any;
}
export default function ProfileGithub(props: Props) {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.github.com/users/${
        props.data.github
      }/repos?per_page=5&sort=created`
    )
      .then(response => response.json())
      .then(json => setRepos(json));
  });
  const repoItems = repos.map((repo: any) => (
    <div key={repo.id} className={styles.repo}>
      <div className={`${styles.part} ${styles.left}`}>
        <h4>
          <a href={repo.html_url} target="_blank">
            {repo.name}
          </a>
        </h4>
        <p>{repo.description}</p>
      </div>
      <div className={`${styles.part} ${styles.right}`}>
        <span className={`${styles.badge} ${styles.Stars}`}>Stars: {repo.stargazers_count}</span>
        <span className={`${styles.badge} ${styles.Watchers}`}>Watchers: {repo.watchers_count}</span>
        <span className={`${styles.badge} ${styles.Forks}`}>Forks: {repo.forks_count}</span>
      </div>
    </div>
  ));
  return (
    <div className={styles.ProfileGithub}>
      <h3>Github</h3>
      {repoItems}
    </div>
  );
}

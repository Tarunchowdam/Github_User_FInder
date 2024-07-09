import React from "react";
import "./Repo.css"; // Import the CSS file

const Repo = ({ users }) => {
  return (
    <>
      {users.map((s, idx) => (
        <div key={idx} className="repoItem">
          <a
            href={s.html_url}
            target="_blank"
            className="repoLink"
            rel="noopener noreferrer"
          >
            {s.full_name}
          </a>
          <div className="repoDetails">
            <h1 className="repoLanguage">{"🟢" + s.language}</h1>
            <h1 className="repoForks">forks : {s.forks}</h1>
            <h1 className="repoStars">stars : {s.stargazers_count}</h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default Repo;

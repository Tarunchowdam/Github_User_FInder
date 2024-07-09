import React from "react";
import { Link } from "react-router-dom";
import "./UsersContainer.css"; // Import the CSS file

const UsersContainer = ({ users }) => {
  return (
    <div className="usersContainer">
      {users &&
        users.map((user, idx) =>
          user.login ? (
            <div key={idx} className="userItem">
              <img
                src={user.avatar_url}
                className="userAvatar"
                alt="User Avatar"
              />
              <h1 className="username">{user.login}</h1>
              <h1 className="userFullname">{user.name}</h1>
              <Link to={`/${user.login}`}>
                <span className="viewButton">View</span>
              </Link>
            </div>
          ) : (
            <div className="noUserText"> User Not found</div>
          )
        )}
    </div>
  );
};

export default UsersContainer;

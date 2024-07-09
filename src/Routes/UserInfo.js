import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Events from "../components/Events";
import Loading from "../components/Loading";
import Repo from "../components/Repo";
import Tabs from "../components/Tabs";
import UsersContainer from "../components/UsersContainer";
import "./UserInfo.css"; // Import the CSS file

const UserInfo = () => {
  const [user, setUser] = useState([]);
  const [type, setType] = useState("repos");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(null);
  let EndPoint = "https://api.github.com/users";
  const { pathname } = useLocation();
  const navigate = useNavigate();

  async function GetUserInfo() {
    const res = await fetch(EndPoint + pathname);
    const data = await res.json();
    setUser(() => [data]);
  }

  async function GetUrls() {
    setUsers([]);
    setLoading(true);
    const res = await fetch(EndPoint + pathname + `/${type}`);
    const data = await res.json();
    setUsers(data);
    setLoading(null);
  }

  useEffect(() => {
    GetUserInfo();
    GetUrls();
    console.log(users);
  }, [pathname, type]);

  return (
    <div className="userInfoContainer">
  <button onClick={() => navigate("/")} className="backButton">
    BACK
  </button>
  {user &&
    user.map((uinfo, i) => (
      <div key={i} className="userDetails">
        <img src={uinfo.avatar_url} className="userAvatar" alt="avatar" />
        <div className="userInfo">
          <h1 className="userName">{uinfo.name}</h1>
          <h1>
            <span className="infoLabel">ID</span> :{uinfo.id}
          </h1>
          <h1>
            <span className="infoLabel">Login</span> :{uinfo.login}
          </h1>
          <h1>
            <span className="infoLabel">followers : </span>
            {uinfo.followers}
          </h1>
          <h1>
            <span className="infoLabel">following : </span>
            {uinfo.following}
          </h1>
          <h1>
            <span className="infoLabel">public_repositories : </span>
            {uinfo.public_repos}
          </h1>
          <h1>
            <span className="infoLabel">Join : </span>
            {new Date(uinfo.created_at).toLocaleDateString()}
          </h1>
          <a href={uinfo.html_url} target="_blank" className="visitButton" rel="noreferrer">
            Visit
          </a>
        </div>
      </div>
    ))}
  <div className="tabsContainer">
    <Tabs type={type} setType={setType} />
  </div>
  {loading && <Loading />}
  {type === "repos" && (
    <div className="reposContainer">
      {users && <Repo users={users} />}
    </div>
  )}
  {type === "received_events" && (
    <div className="eventsContainer">
      {users && <Events data={users} />}
    </div>
  )}
  {type === "followers" && <UsersContainer users={users} />}
</div>

  );
};

export default UserInfo;

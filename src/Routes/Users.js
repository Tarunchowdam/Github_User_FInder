import React, { useEffect, useState, useRef } from "react";
import Loading from "../components/Loading";
import UsersContainer from "../components/UsersContainer";
import "./Users.css"; // Import the CSS file

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(null);
  const user = useRef("");
  const EndPoint = "https://api.github.com/users";

  async function AllUsers() {
    if (user.current.value === "") {
      setLoading(true);
      const res = await fetch(EndPoint);
      const data = await res.json();
      setUsers(data);
      setLoading(null);
    }
  }

  async function FindUser() {
    setLoading(true);
    if (user.current.value !== "") {
      setUsers([]);
      const res = await fetch(EndPoint + "/" + user.current.value);
      const data = await res.json();
      setUsers(() => [data]);
      console.log(users);
      user.current.value = "";
    } else {
      AllUsers();
    }
    setLoading(null);
  }

  useEffect(() => {
    AllUsers();
  }, [user, setUsers]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        FindUser();
      }
    };

    const currentInput = user.current;
    currentInput.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener on component unmount
    return () => {
      currentInput.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <div className="searchContainer">
        <input
          placeholder="Search github username"
          ref={user}
          type="text"
          className="searchInput"
        />
        <button onClick={FindUser} className="searchButton">
          Search
        </button>
      </div>
      <div>{loading ? <Loading /> : <UsersContainer users={users} />}</div>
    </div>
  );
};

export default Users;

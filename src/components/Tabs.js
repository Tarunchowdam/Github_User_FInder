import React from "react";
import "./Tabs.css"; // Import the CSS file

const Tabs = ({ type, setType }) => {
  return (
    <>
      <button
        className={type === "repos" ? "tabButton activeTab" : "tabButton"}
        onClick={() => setType("repos")}
      >
        Repositories
      </button>
      <button
        className={type === "received_events" ? "tabButton activeTab" : "tabButton"}
        onClick={() => setType("received_events")}
      >
        Activity
      </button>
      <button
        className={type === "followers" ? "tabButton activeTab" : "tabButton"}
        onClick={() => setType("followers")}
      >
        Followers
      </button>
    </>
  );
};

export default Tabs;

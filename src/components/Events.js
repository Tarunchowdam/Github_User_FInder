import React from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import "./Events.css"; // Import the CSS file

const Events = ({ data }) => {
  return (
    <>
      {data?.map((ev, i) => (
        <div key={i} className="eventItem">
          <Link to={`/${ev.actor?.login}`}>
            <img src={ev.actor?.avatar_url} className="actorAvatar" alt="avatar" />
          </Link>
          <div className="eventDetails">
            <h1 className="eventText">
              {ev?.actor?.login} {ev?.type}
              <br />
              {ev?.repo?.name}
              <br />
              <span className="eventTimestamp">{format(ev?.created_at)}</span>
            </h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default Events;

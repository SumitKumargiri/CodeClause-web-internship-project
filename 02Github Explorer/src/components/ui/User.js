import React from "react";
import { Link } from "react-router-dom";
const User = ({ user }) => {
  const { avatar_url, login, id } = user;
  return (
    <div className="user">
      <div className="image">
        <img src={avatar_url} alt={login} />
      </div>
      <div className="user-info">
        <h3>{login}</h3>
        <small>{id}</small>
        <Link to={`/user/${login}`}>View profile</Link>
      </div>
    </div>
  );
};

export default User;

import React, { useContext } from "react";
import User from "./User";
import GithubContext from "../../context/github/githubContext";
import Spinner from "../layouts/Spinner"

const Users = () => {
  const gitHubContext = useContext(GithubContext);
  const {users, load} = gitHubContext
  return (
    (load) ? <Spinner/> : ( <div style={userStyle}>
        {users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>)
  );
};
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
  };

export default Users;

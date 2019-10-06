import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import { SEARCH_USERS, GET_USER, GET_REPO, SETLOAD, CLEAR } from "../types";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
    const initialState  = {
        users: [],
        text : null,
        user: {},
        res: [], 
        load: false,



    }
    const [state, dispatch] = useReducer(GithubReducer, initialState);
    // Search Users
    const searchUsers = async text => {
    setLoad();
    const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };

  //Get user
  const getUser = async (login) => {
    setLoad();
    const res = await axios.get(
        `https://api.github.com/users/${login}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    
    dispatch({
        type: GET_USER,
        payload: res.data
    })

  }

 // getUserRepos
  
 const getUserRepos = async (login) => {
    setLoad();
    const res = await axios.get(
        `https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`

    );
    
    dispatch({
        type: GET_REPO,
        payload: res.data
    })

 }
 // setload
 const setLoad = () => {
    dispatch({
        type: SETLOAD
    })
}

//clear
const Clear = () => {
    dispatch({
        type: CLEAR
    })
}
  return (
    <GithubContext.Provider value={{users : state.users, searchUsers, getUser, user : state.user, getUserRepos, Clear, res : state.res, load : state.load}}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;

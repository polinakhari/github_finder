import React, {useContext, useState} from 'react'
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

    const {searchUsers, users, Clear} = githubContext
    const {setAlert} = alertContext;
    const [text, setText] = useState('');

     // onChange
    const onChange = (e) => {
        const {value} = e.target;
        setText(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === "") {
            setAlert('Please enter something', 'light');
    } else {
        searchUsers(text);
        setText("");
    }}


    return (
        <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={Clear}
        >
          Clear
        </button>
      )}
    </div>
    )
}

export default Search

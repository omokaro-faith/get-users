import React, { useEffect } from 'react'
import PropTypes from 'prop-types';

const Users = ({ getUsers, users, message }) => {
  useEffect(() => {
    getUsers()
  }, [getUsers])

  return (
    <ul>
      { message === 'error fetching users' && <p> An error occurred while fetching users information</p>}
      { message === 'fetching user success' && users.map((user) => (
        <ol key={user.id}>
          <img src={user.avatar} alt={user.avatar}/>
          <p>{user.first_name} {user.last_name}</p>
        </ol>
      ))}
    </ul>
  )
}

Users.defaultProps = {
  users: [],
  message: ''
}

Users.propTypes = {
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  message: PropTypes.string.isRequired,
};


export default Users
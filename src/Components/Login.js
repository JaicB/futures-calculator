import React, { useState } from 'react'
import axios from 'axios'

const Login = (props) => {
  const [email_address, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [full_name, setFullName] = useState('');
  const [error, setError] = useState('');

  const login = () => {
    axios.post('/api/login', { email_address, password })
      .then((results) => {
        props.history.replace('/home')
      }).catch(e => {
       setError('Failed to login') 
      })
  }

  const createNewUser = () => {
    axios.post('/api/user', { full_name, email_address, password })
      .then((results) => {
        props.history.replace('/home')
      }).catch(e => {
        setError('Failed to create new user')
      })
  }

  // const updateUser = () => {
  //   axios.put('/api/user', { full_name, email_address })
  //     .then((results) => {
  //       console.log(results.data)
  //     }).catch(e => console.log(e))
  // }

  return (
    <div className='Login'>
      <div className="login_user">
        <h2>Login Placeholder</h2>
        <input className='email_address' onChange={(e) => setEmail(e.target.value)} />
        <input className='password' onChange={(e) => setPassword(e.target.value)} />
        <button className='submit' onClick={(e) => login()}>Submit</button>
      </div>
      <div className="create_user">
        <h2>Create User Placeholder</h2>
        <input className="full_name" onChange={(e) => setFullName(e.target.value)} />
        <input className="email_address" onChange={(e) => setEmail(e.target.value)} />
        <input className="password" onChange={(e) => setPassword(e.target.value)} />
        <button className="create" onClick={(e) => createNewUser()}>Create Account</button>
      </div>
      {error && <span>{error}</span>}
      {/* <div className="update_user">
        <h2>Update User Placeholder</h2>
        <input className="full_name" onChange={(e) => setFullName(e.target.value)} />
        <input className="password" onChange={(e) => setPassword(e.target.value)} />
        <button className="edit_user" onClick={(e) => updateUser(e.target.value)}></button>
      </div> */}
    </div>
  )
}

export default Login
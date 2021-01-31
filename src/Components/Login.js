import React, { useState } from 'react'
import axios from 'axios'
import img7 from '../futures_toolbox.png'

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
      <div>
        <h2>Already have an account</h2>
        <div className="login_user">
          <input
            className='email_address'
            placeholder="Email Address"
            style={{ padding: "5px" }}
            onChange={(e) => setEmail(e.target.value)} />
          <input
            className='password'
            placeholder="Password"
            style={{ padding: "5px", margin: "15px 0px 0px" }}
            onChange={(e) => setPassword(e.target.value)} />
          <button className='submit'
            style={{ padding: "5px" }}
            onClick={(e) => login()}>Submit</button>
        </div>
        <h2>Need an account?</h2>
        <div className="create_user">
          <input className="full_name"
            placeholder="Full Name"
            style={{ padding: "5px" }}
            onChange={(e) => setFullName(e.target.value)} />
          <input className="email_address"
            placeholder="Email Address / Login"
            style={{ padding: "5px", margin: "15px 0px" }}
            onChange={(e) => setEmail(e.target.value)} />
          <input className="password"
            placeholder="Password"
            style={{ padding: "5px" }}
            onChange={(e) => setPassword(e.target.value)} />
          <button className="create"
            style={{ padding: "5px" }}
            onClick={(e) => createNewUser()}>Create Account</button>
        </div>
      </div>

      <div>
        <img className="ft-logo" src={img7} alt="Futures Toolbox" />
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
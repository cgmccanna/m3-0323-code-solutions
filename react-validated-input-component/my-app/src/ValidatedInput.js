import { useState } from 'react';

export default function ValidatedInput(color) {
const [password, setPassword] = useState('')

function handleChange(e) {
  setPassword(e.target.value);
}

function setMessage() {
  if (!password) return 'A password is required';
  if (password.length < 8) return 'Your password is too short';
}

function setIcon() {
  if (password.length >= 8) return 'fa-check green';
  return 'fa-xmark red';
}

  return (
    <div className='container'>
      <label> Password:</label>
        <div className='row'>
          <input onChange={handleChange} type="password" value={password}></input>
          <i className={`fa-solid ${setIcon()}`}></i>
        </div>
      <p className='red'>{setMessage()}</p>
    </div>
  )
}

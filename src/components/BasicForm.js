import React from 'react';
import './Style.css';
import { useState } from 'react';

const BasicForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [allEntry, setAllEntry] = useState([]);

  const SubmitForm = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password }
    setAllEntry([...allEntry, newEntry]);

    console.log(allEntry)
  }

  return (
    <>
      <div class="login-box">
        <h2>Contact Form</h2>
        <form action='' onSubmit={SubmitForm}>
          <div class="user-box">
            <label htmlFor='email'></label>
            <input type="text" placeholder='Email' name="email" autoComplete='off'
            value={email}
            onChange={(e) => setEmail(e.target.value) } ></input>
          </div>
          <div class="user-box">
            <label htmlFor='password'></label>
            <input type="password" placeholder='Password' name="password" autoComplete='off'
             value={password}
              onChange={(e) => setPassword(e.target.value)}></input>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      <div>
        {
          allEntry.map((curElem)=>{
            return(
              <div>
                <p>curElem.email</p>
                <p>curElem.password</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default BasicForm

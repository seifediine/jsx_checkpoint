import React from "react";
import "./Subscribe.css";

function Subscribe() {
  return (
    <div className='subscribe'>
      <h2 className='header'>Subscribe</h2>
      <p>Sign up with your email address to receive news and updates.</p>
      <form className='form-control'>
        <div className='form-group'>
          <input type="text" placeholder="First Name"></input>
          <input type="text" placeholder="Last Name"></input>
          <input type="email" placeholder="Email"></input>
        </div>
        <br/>
        <input type='submit' value="Subscribe" className='submit'></input>
      </form>
    </div>
  );
}

export default Subscribe;
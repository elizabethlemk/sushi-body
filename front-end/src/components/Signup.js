import React from 'react'

const Signup = () => {
  return (
    <div className="signup-form">
      <h2>Sign up!</h2>
      <form>
        Username:
        <input type="text" name="username"/> <br/>
        Password:
        <input type="text" name="password"/><br/>
        Retype Password:
        <input type="text" name="password_confirmation"/><br/>

        First name:
        <input type="text" name="first_name"/><br/>
        Last name:
        <input type="text" name="last_name"/><br/>
        Location:
        <input type="text" name="location"/><br/>
        Birthday:
        <input type="date" name="birthday"/><br/>
      </form>
      <button>Submit</button>
    </div>
  )
}

export default Signup

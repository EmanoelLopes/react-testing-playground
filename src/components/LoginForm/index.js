import React from 'react';

const Login = () => {
  return (
    <form className="form login-form" data-testid="login-form" noValidate>
      <div className="form-control">
        <label htmlFor="email-or-login">
          Email address or Login:
        </label>
        <input
          type="email"
          id="email-or-login"
          autoComplete="current-password"
          placeholder="Enter you email"
        />
      </div>
      <div className="form-control">
        <label htmlFor="password">
          Your password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password" />
      </div>
      <div className="form-control">
        <label htmlFor="terms">
          <input
            type="checkbox"
            id="terms"
          />
          <span>
            I accept the <a href="https://www.example.com"> terms and conditions</a>
          </span>
        </label>
      </div>
      <div className="form-control">
        <button type="submit" disabled={true} onClick={() => console.log('submited!')}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
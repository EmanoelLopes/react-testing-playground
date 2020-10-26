import React, { useState } from 'react';
import Button from 'components/Button';
import InputText from 'components/InputText';
import Checkbox from 'components/Checkbox';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  return (
    <form className="form login-form" data-testid="login-form" noValidate>
      <div className="form-control">
        <label htmlFor="email-or-login">
          Email address or Login:
        </label>
        <InputText
          type="email"
          id="email-or-login"
          label="Email or Login"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter you email"
          data-testid="email-or-login"
        />
      </div>
      <div className="form-control">
        <label htmlFor="password">
          Your password:
        </label>
        <InputText
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          data-testid="password"
        />
      </div>
      <div className="form-control">
        <label htmlFor="terms">
          <Checkbox
            id="terms-and-conditions"
            value={terms}
            checked={terms}
            onChange={(e) => {
              setTerms(e.target.checked);
            }}
            data-testid="terms-and-conditions"
          />
          <span>
            I accept the <a href="https://www.example.com"> terms and conditions</a>
          </span>
        </label>
      </div>
      <div className="form-control">
        <Button
          className="btn-primary"
          type={`submit`}
          disabled={!terms}
          onClick={(e) => {
            e.preventDefault();
            setSubmitSuccess(true);
          }}
          text={`Submit`}
        />
      </div>
      <div className="form-control">
        {submitSuccess && (
          <p className="submit-success" data-testid="submit-success">Formulário enviado com sucesso.</p>
        )}
      </div>
    </form>
  );
};

export default Login;
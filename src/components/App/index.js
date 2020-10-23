import React from 'react';
import Main from 'components/Main';
import Login from 'components/LoginForm'
import 'styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Login Page</h1>
      </header>
      <Main>
        <Login />
      </Main>
    </div>
  );
}

export default App;

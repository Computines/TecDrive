import React from 'react';
import Background from './Background';
import '../styles/LogIn.css';
import Form from './Form';

function LogIn() {
  return (
    <div className="login">
        <Background bg />
        <h1>We were waiting for<br/><b>You.</b></h1>
        <Form formType="login" />
    </div>
  );
}

export default LogIn;
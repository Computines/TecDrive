import React from 'react';
import Background from './Background';
import '../styles/SingUp.css';
import Form from './Form';

function SingUp() {
  return (
    <div className="singup">
        <Background bg />
        <h1>Keep your files in one<br/><b>Box.</b></h1>
        <Form formType="signup" />
    </div>
  );
}

export default SingUp;

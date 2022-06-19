import React from 'react';
import '../styles/SingUp.css';
import Form from './Form';

function SingUp() {
  return (
    <div className="singup">
        <h1>Keep your files in one<br/><b>Box.</b></h1>
        <Form formType="signup" />
    </div>
  );
}

export default SingUp;

import React, { useState } from 'react';
import styled from 'styled-components';

export const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

export default function FormCadastro() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isFormInvalid, setIsFormInvalid] = useState(true);

  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);

  function handleClick(event) {
    event.preventDefault();
    setIsFormSubmited(true);

    fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Erro ao salvar.');
      })
      .then((json) => {
        setSubmissionStatus(formStates.DONE);
        setTimeout(() => {
          setUserInfo({
            ...userInfo,
            message: '',
          });
          setIsFormSubmited(false);
        }, 5000);
        console.log(json);
      })
      .catch((error) => {
        setSubmissionStatus(formStates.ERROR);
        console.error(error);
      });
  }

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });

    setIsFormInvalid(checkFormIsInvalid);
  }

  function checkFormIsInvalid() {
    const { name, email, message } = userInfo;
    const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    if (name.length === 0 || email.length === 0 || message.length === 0) return true;
    if (!emailRegex.test(email)) return true;

    return false;
  }

  return (
    <Form>
      <Container>
        <h1>Leave a message!</h1>
        <InputContainer>
          <input
            placeholder="Name"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <input
            placeholder="Email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer textArea>
          <input
            placeholder="Message"
            name="message"
            value={userInfo.message}
            onChange={handleChange}
          />
        </InputContainer>
      </Container>
      <Button
        type="submit"
        disabled={isFormInvalid}
        onClick={handleClick}
      >
        oi
      </Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
  width: 100%;
`;

const InputContainer = styled.div`
  height: ${({ textArea }) => ((textArea) ? '5em' : '2em')};
  width: 100%;
  margin: 0.5em 0;

  input {
    height: 100%;
    border-radius: 15px;
  }
`;

const Button = styled.button`
  height: 2em;
`;

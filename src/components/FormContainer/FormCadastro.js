import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Lottie } from '@crello/react-lottie';
import { string } from 'prop-types';
import successAnimation from './Animations/success.json';
import errorAnimation from './Animations/error.json';
import submitingAnimation from './Animations/submiting.json';

export default function FormCadastro() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isFormInvalid, setIsFormInvalid] = useState('Fill all the fields.');

  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);

  function handleClick(event) {
    event.preventDefault();
    setIsFormSubmited(true);
    setSubmissionStatus(formStates.LOADING);

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
      .then(() => {
        setSubmissionStatus(formStates.DONE);
        setTimeout(() => {
          setUserInfo({
            ...userInfo,
            message: '',
          });
          setIsFormSubmited(false);
          setSubmissionStatus(formStates.DEFAULT);
        }, 5000);
      })
      .catch(() => {
        setSubmissionStatus(formStates.ERROR);
        setIsFormSubmited(false);
      });
  }

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  useEffect(() => {
    setIsFormInvalid(checkFormIsInvalid(userInfo));
  }, [userInfo]);

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
        disabled={isFormInvalid || isFormSubmited}
        onClick={handleClick}
      >
        {isFormInvalid || 'Submit'}
      </Button>
      <AnimationLottie
        state={submissionStatus}
      />
    </Form>
  );
}

function checkFormIsInvalid({ name, email, message }) {
  const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  if (name.length === 0 || email.length === 0 || message.length === 0) return 'Fill all the fields.';
  if (!emailRegex.test(email)) return 'Invalid email address.';

  return false;
}

function AnimationLottie({ state }) {
  const [animation, setAnimation] = useState({
    animation: null,
    loop: false,
  });

  useEffect(() => {
    if (state === formStates.DEFAULT) setAnimation(null);
    if (state === formStates.LOADING) setAnimation({ animation: submitingAnimation, loop: true });
    if (state === formStates.ERROR) setAnimation({ animation: errorAnimation, loop: false });
    if (state === formStates.DONE) setAnimation({ animation: successAnimation, loop: false });
  }, [state]);

  return animation && (
    <LottieContainer>
      <Lottie
        config={{ animationData: animation.animation, loop: animation.loop, autoplay: true }}
      />
    </LottieContainer>
  );
}

AnimationLottie.propTypes = {
  state: string.isRequired,
};

export const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

const LottieContainer = styled.div`
  height: 150px;
  width: 150px;
  align-self: center;
  margin-top: 2em;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
  width: 100%;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;

const InputContainer = styled.div`
  height: ${({ textArea }) => ((textArea) ? '5em' : '2em')};
  width: 100%;
  margin: 0.5em 0;

  input {
    height: 100%;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.colors.inputBg};
  }
`;

const Button = styled.button`
  height: 2em;
  font-weight: bold;
  border-radius: 15px;

  &:disabled {
    background-color: rgba(255, 0, 0, 0.1);
    color: red;
  }
`;

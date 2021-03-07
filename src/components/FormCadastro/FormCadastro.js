/* eslint-disable no-use-before-define */
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import FloaterButton from '../FloatButton/FloatButton';

export default function FormContainer() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      >
        <FormCadastro />
      </Modal>
      <FloaterButton
        show={!modalIsOpen}
        clickHandle={() => { setModalIsOpen(true); }}
      />
    </>
  );
}

function FormCadastro() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isFormInvalid, setIsFormInvalid] = useState(true);

  function handleClick(event) {
    event.preventDefault(); console.log(userInfo);
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
    const { nome, email, mensagem } = userInfo;
    const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (nome.length === 0 || email.length === 0 || mensagem.length === 0) return true;
    if (!emailRegex.test(email)) return true;

    return false;
  }

  return (
    <form>
      <div>
        <div>
          <input
            placeholder="Name"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            placeholder="Email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            placeholder="Mensagem"
            name="mensagem"
            value={userInfo.message}
            onChange={handleChange}
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={isFormInvalid}
        onClick={handleClick}
      >
        oi
      </button>
    </form>
  );
}

function Modal({ isOpen, onClose, children }) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
        if (!isSafeArea) onClose();
      }}
    >
      {isOpen && <LockScroll />}
      <SafeArea isOpen={isOpen}>
        {children}
      </SafeArea>
    </ModalWrapper>
  );
}

function SafeArea({ children, isOpen }) {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  return (
    <ModalSafeArea data-modal-safe-area="true">
      <motion.div
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
      >
        {children}
      </motion.div>
    </ModalSafeArea>
  );
}

const ModalSafeArea = styled.div`
  background-color: white;
  flex: 1;
  max-width: 30%;
  color: black;

`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0,0,255,0.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  opacity: 0;
  pointer-events: none;
  z-index: -1;

  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
        z-index: 9999;
      `;
    }
  }}
`;

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

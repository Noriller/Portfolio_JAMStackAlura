/* eslint-disable no-use-before-define */
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    window.addEventListener('keydown', listenEsc);
    return () => window.removeEventListener('keydown', listenEsc);
  }, []);

  function listenEsc(e) {
    if (e.key === 'Escape') {
      onClose();
    }
  }

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
        <CloseButton
          type="button"
          onClick={onClose}
        >
          <Icon viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </Icon>
        </CloseButton>
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

const Icon = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})`
  width: 80%;
  height: 80%;
  fill: red;
`;

const CloseButton = styled.button`
  flex: none;
  transition: fill 0.25s;
  width: 35px;
  height: 35px;
  background-color: transparent;
  margin-left: 100%;
`;

const ModalSafeArea = styled.div`
  background-color: ${({ theme }) => theme.bg};
  display: flex;
  flex: 1;
  max-width: ${({ theme }) => theme.getBreakpointValue('100%', '50%', '40%', '30%')};
  align-items: center;
  justify-content: center;
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

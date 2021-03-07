import { motion } from 'framer-motion';
import React from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';

export default function Modal({ isOpen, onClose, children }) {
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

/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import FloaterButton from '../FloatButton/FloatButton';
import FormCadastro from './FormCadastro';
import Modal from '../Modal/Modal';

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

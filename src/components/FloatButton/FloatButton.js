import { bool, func } from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FooterIcon from '../FooterIcon/FooterIcon';

export default function FloaterButton({ show = false, clickHandle }) {
  const [toTop, setToTop] = useState(150);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    const winScrollTop = window.scrollY;
    const winHeight = window.innerHeight;
    // const floaterHeight = floater.offsetHeight;
    const toBottom = 150;
    const top = winScrollTop + winHeight - toBottom;

    setToTop(top);
  }

  return (
    show ? (
      <Floater style={{ top: toTop }} onClick={clickHandle}>
        <FooterIcon variant="mail" />
      </Floater>
    ) : null
  );
}

FloaterButton.propTypes = {
  clickHandle: func.isRequired,
  show: bool,
};

FloaterButton.defaultProps = {
  show: false,
};

const Floater = styled.button`
  position: absolute;
  top: 150px;
  right: 1px;
  width: auto;
  height: auto;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  z-index: 1;
  border-radius: 15px 0 0 15px;
  padding: 1px;
  color: #3333;
  text-align: center;
  box-sizing: border-box
`;

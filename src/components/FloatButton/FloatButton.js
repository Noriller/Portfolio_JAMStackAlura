/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Floater = styled.div`
  position: absolute;
  top: 150px;
  right: 1px;
  width: auto;
  height: auto;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  z-index: 1;
  border-radius: 15px 0 0 15px;
  padding: 15px;
  color: white;
  text-align: center;
  box-sizing: border-box
`;

export default function FloaterButton() {
  const [toTop, setToTop] = useState(150);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll(e) {
    const window = e.path[1];
    const winScrollTop = window.scrollY;
    const winHeight = window.innerHeight;
    // const floaterHeight = floater.offsetHeight;
    const toBottom = 150;
    const top = winScrollTop + winHeight - toBottom;

    setToTop(top);
  }

  return (
    <Floater style={{ top: toTop }}>
      oi
    </Floater>
  );
}

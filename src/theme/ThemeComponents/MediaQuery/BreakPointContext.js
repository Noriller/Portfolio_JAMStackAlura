import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import { node } from 'prop-types';
import breakpoints from './CustomBreakpoints';

const BreakpointContext = createContext({ breakpoint: 9999, width: 1200, height: 900 });

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

function getIndex(points, width) {
  if (width === undefined || width === null) return points.length;

  const tryPoint = points.pop();
  const index = points.length;
  if (width > tryPoint) return index;

  return getIndex(points, width);
}

function getBreakpoint(width) {
  const retorno = getIndex([...breakpoints], width);
  return retorno;
}

export default function BreakpointContextProvider({ children }) {
  const [breakpoint, setBreakpoint] = useState();
  const { width, height } = useWindowSize();

  useEffect(() => {
    setBreakpoint(
      {
        breakpoint: getBreakpoint(width),
        width,
        height,
      },
    );
  }, [width]);

  return (
    <BreakpointContext.Provider value={breakpoint}>
      {children}
    </BreakpointContext.Provider>
  );
}

BreakpointContextProvider.propTypes = {
  children: node.isRequired,
};

export function useBreakpoint() {
  return useContext(BreakpointContext);
}

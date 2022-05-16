/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef } from 'react';
import SplashPresenter from './SplashPresenter';
import { Container } from './types';
// import SplashScreen from 'react-native-splash-screen';

const SplashContainer: React.FC<Container> = ({ setIsLoading }) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const start = useCallback(() => {
    if (timeoutRef.current !== null) {
      return;
    } else {
      timeoutRef.current = setTimeout(() => {
        // SplashScreen.hide();
        setIsLoading(true);
      }, 3000);
    }
  }, []);

  const stop = useCallback(() => {
    if (timeoutRef.current === null) {
      return;
    } else {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    start();
    return () => {
      stop();
    };
  }, []);

  return <SplashPresenter />;
};

export default SplashContainer;

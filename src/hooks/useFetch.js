import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

const useCallbackRef = (callback) => {
  const callbackRef = useRef(callback);
  useLayoutEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  return callbackRef;
};

export const useFetch = (options) => {
  const [data, setData] = useState(null);
  const savedOnSuccess = useCallbackRef(options.onSuccess);

  useEffect(
    () => {
      console.log('useFetch useEffect');
      if (options.url) {
        fetch(options.url)
          .then((response) => response.json())
          .then((json) => {
            savedOnSuccess.current?.();
            setData(json);
          });
      }
    },
    //   [options]
    [options.url]
  );

  return { data };
};

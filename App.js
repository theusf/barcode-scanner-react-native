/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Scanner from './src/barcodeSacanner';

const App: () => React$Node = () => {
  return (
    <>
      <Scanner />
    </>
  );
};

export default App;

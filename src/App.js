import React from 'react';
import StoreProvider from './storeManagement/StoreProvider';
import Main from './components/Main';

function App() {
  return (
    <StoreProvider>
        <Main/>
    </StoreProvider>
  );
}

export default App;

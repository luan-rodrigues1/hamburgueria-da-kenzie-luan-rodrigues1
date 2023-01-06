import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserProvider from './contexts/UserContext';
import { GlobalStyle } from './styles/global';
import { TypographyStyle } from './styles/typography';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserProvider>
      <GlobalStyle/>
      <TypographyStyle/>
      <App />
      <ToastContainer
      position="top-center"
      autoClose={1200}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
    </UserProvider>
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import App from './App';

function getLibrary(provider) {
    const library = new Web3Provider(provider, "any");
    return library;
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Web3ReactProvider getLibrary={getLibrary}>
    <App />
    </Web3ReactProvider>
);


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Container from './component/container';
import Containeraction from './component/containeraction';
import Containerright from './component/containerright';
import Footer from './component/footer';
import Header from './component/header';
import Welcome from './component/welcome';

ReactDOM.render(
  <React.StrictMode>
      <Container/>
      <Containeraction/>
      <Containerright/>
      <Footer/>
      <Header/>
      <Welcome/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

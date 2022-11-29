import React from "react";
import ReactDOM from "react-dom/client";
import PrimeraAPP from "./PrimerApp";
import './index.css';

//const saludo = <h1>Hola Mundo</h1>;

const divRoot = document.querySelector('#root');

const root = ReactDOM.createRoot(divRoot);
root.render(<PrimeraAPP saludo="Hola mundo"/>);
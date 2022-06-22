import React from 'react'

const qs = (s) => document.querySelector(s);
const create = (s) => document.createElement(s);
const appendToElement = (x, s) =>  x.appendChild(s);


export {qs, create, appendToElement}
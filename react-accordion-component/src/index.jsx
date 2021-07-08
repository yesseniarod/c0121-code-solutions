import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const themes = [
  {
    id: 1,
    title: 'Hypertext Markup Languages',
    description: 'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser'
  },
  {
    id: 2,
    title: 'Cascading Style Sheets',
    description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML'
  },
  {
    id: 3,
    title: 'JavaScript',
    description: 'JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype- based object - orientation, and first - class functions'
  }
];

ReactDOM.render(
  <Accordion themes={themes} />,
  document.getElementById('root')
);

// in progress

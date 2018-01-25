import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

const MyTitle = function(props) {
  return React.createElement('div', null, ce('h1', { style: { color: props.color } }, props.title));
};

const MyFirstComponent = function() {
  return ce(
    'div',
    { id: 'my-first-component' },
    ce(MyTitle, { title: 'Pineapple Express', color: 'YellowGreen' }),
    ce(MyTitle, { title: 'Silicon Valley', color: 'GreenYellow' }),
    ce(MyTitle, { title: 'Crashing', color: 'peru' }),
    ce(MyTitle, { title: 'Seinfeld', color: 'Blue' })
  );
};

render(ce(MyFirstComponent), document.getElementById('app'));

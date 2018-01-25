import React from 'react';
import { render } from 'react-dom';

const MyTitle = function(props) {
  // return React.createElement('div', null, ce('h1', { style: { color: props.color } }, props.title));
  const style = {color: props.color}
  return (
    <div>
      <h1 style={style}>{props.title}</h1>
    </div>
  );
};

const MyFirstComponent = function() {
  return(
      <div id="my-first-component">
        <MyTitle title="Game of Thrones" color="YellowGreen" />
        <MyTitle title="Silicon Valley" color="Peru" />
        <MyTitle title="Seinfeld" color="SteelBlue" />
        <MyTitle title="Bob Ross" color="Turquoise" />
      </div>
    );
};

render(<MyFirstComponent />, document.getElementById('app'));

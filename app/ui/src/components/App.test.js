import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App userID={1} posts={[]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

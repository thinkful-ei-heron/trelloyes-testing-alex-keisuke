import React from 'react';
import ReactDOM from 'react-dom';
import STORE from './STORE';
import Card from './Card';
import renderer from 'react-test-renderer';


describe('Card Tests', () => {
  //smoke test
  it('render with prop', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card 
      key = {STORE.allCards.a.id}
      title = {STORE.allCards.a.title}
      content = {STORE.allCards.a.content}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  //snapshot test
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Card 
        key = {STORE.allCards.a.id}
        title = {STORE.allCards.a.title}
        content = {STORE.allCards.a.content}
      />)
      .toJSON();
      expect(tree).toMatchSnapshot();
  });

});
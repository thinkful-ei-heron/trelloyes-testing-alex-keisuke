import React from 'react';
import ReactDOM from 'react-dom';
import STORE from './STORE';
import List from './List';
import renderer from 'react-test-renderer';
import { exportAllDeclaration } from '@babel/types';


describe('List Tests', () => {
  //smoke test
  it('render with prop', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List 
      key = {STORE.lists[0].id}
      header = {STORE.lists[0].header}
      cards = {STORE.lists[0].cardIds}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  //snapshot test
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List 
        key = {STORE.lists[0].id}
        header = {STORE.lists[0].header}
        cards = {STORE.lists[0].cardIds}
      />)
      .toJSON();
      expect(tree).toMatchSnapshot();
  });

});
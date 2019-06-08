// import React from 'react';
// import {mount} from 'enzyme';
// import App from './App';
// import './data/setupTests';

// it("renders without crashing", () => {
//   let wrapper = mount(<App />);
//   expect(wrapper.find(".Charts").length).toBe(1);
// });

import React from 'react';
import {mount} from 'enzyme';
import './data/setupTests';
import App from './App';

it('redners without crashing', ()=>{
  let wrapper = mount(<App/>)
  expect(wrapper.find('.Charts').length).toBe(1);
})
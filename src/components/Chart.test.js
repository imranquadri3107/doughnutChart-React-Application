import React from 'react';
import Chart from './Chart';
import {mount} from 'enzyme';
import {store} from '../store';
import data from '../data/givenData';
import {Provider} from 'react-redux';
import '../data/setupTests';

// window.HTMLCanvasElement.prototype.getContext =()=>{};

jest.mock('react-chart-js-2', ()=>({
    Doughnut: ()=> null
}));

// 

it('renders without crashing', ()=>{
    let props = {
        getData: jest.fn(),//some ways to create a muocking function 
        userValues: {}
    };

    store.getState().myproject={
        data: []
    };
    let wrapper = mount(
        <Provider store = {store}>
            <Chart {...props}/>
        </Provider>
    );
    expect(wrapper.find('.Charts').length.toBe(1));
});

if('should have task component',()=>{
    let props = {
        getData : jest.fn(),
        userValues: {}
    };
    store.getState().myproject ={
        ...data
    };

    let wrapper = mount(
        <Provider store ={store}>
            <Chart {...props}/>
        </Provider>
    );
    expect(wrapper.find('Task').length.toBe(4))
});
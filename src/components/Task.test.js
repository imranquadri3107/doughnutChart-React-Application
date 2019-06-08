import Task from './Task';
import store from '../store';
import {Provider } from 'react-redux';
import {Mount} from 'enzyme';
import '../data/setupTests';
import React from 'react';

window.HTMLCanvasElement.prototype.getContext=()=>{};

jest.mock("react-chart-js-2", ()=>({
    Doughnut: ()=> null
}));

it('It renders without crashing', ()=>{
    let props = {
        taskData:{
            title: 'Task Status',
            summary: [
                {
                  title: "Completed",
                  value: 2
                },
                {
                  title: "On Target",
                  value: 155
                }
              ],
              total: 157
        }
    };
    store.getState().myproject={
        userData:{}
    };
    let wrapper = Mount(
        <Provider store ={store}>
            <Task {...props}/>
        </Provider>
    );
    expect(wrapper.find('.Task').length).toBe(1);
})

describe("Progressive card layout", ()=>{
    let props={
        taskData : {
            title: "Task Status",
            summary: [
          {
            title: "Completed",
            value: 2
          },
          {
            title: "On Target",
            value: 155
          }
        ],
        total: 157
        }
    };
    store.getState().myproject = {
        userData :{}
    };

    let wrapper = Mount(
        <Provider store = {store}>
            <Task {...props}/>
        </Provider>
    );

    it('should render without crashing', ()=>{
        expect(wrapper.find('Doughnut').length).toBe(1);
    });
    it('should render without crashing', ()=>{
        expect(wrapper.find('.footer').length).toBe(2);
    });

    it('should render without crashing', ()=>{
        expect(wrapper.find('.footerTitle').length).toBe(2)
    });

    it('should render without crahing', ()=>{
        expect(wrapper.find('.footerValue').length).toBe(2);
    });
});

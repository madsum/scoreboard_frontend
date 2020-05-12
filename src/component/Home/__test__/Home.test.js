import React from 'react';
import { shallow } from 'enzyme';
import {findByTestAtrr} from '../../../Utils/TestUtils'
import Home from '../Home'

const setUp = (props={}) => {
    const component = shallow(<Home {...props} />);
    return component;
};

describe('ScoreTable Component', () => {

    let component;
    beforeEach(() => {
        component = setUp(); 
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'HomeComponent');
        expect(wrapper.length).toBe(1);
    });


    it('Should have Home Form', () => {
        const wrapper = findByTestAtrr(component, 'HomeForm');
        expect(wrapper.length).toBe(1);
    });

});




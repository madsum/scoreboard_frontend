import React from 'react';
import { shallow } from 'enzyme';
import {findByTestAtrr} from '../../../Utils/TestUtils'
import NewScoreForm from '../NewScoreForm'

const setUp = (props={}) => {
    const component = shallow(<NewScoreForm {...props} />);
    return component;
};

describe('NewScoreForm Component', () => {

    let component;
    beforeEach(() => {
        component = setUp(); 
    });

    it('Should render NewScoreForm  without errors', () => {
        const wrapper = findByTestAtrr(component, 'NewScoreForm');
        expect(wrapper.length).toBe(1);
    });

});




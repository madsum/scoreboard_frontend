import React from 'react';
import { shallow } from 'enzyme';
import {findByTestAtrr} from '../../../Utils/TestUtils'
import ScoreTable from '../ScoreTable'

const setUp = (props={}) => {
    const component = shallow(<ScoreTable {...props} />);
    return component;
};

describe('ScoreTable Component', () => {

    let component;
    beforeEach(() => {
        component = setUp(); 
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'ScoreTableComponent');
        expect(wrapper.length).toBe(1);
    });

});




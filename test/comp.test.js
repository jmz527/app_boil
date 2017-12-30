import React from 'react';
import chai from 'chai';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { Route } from 'react-router-dom';
import BasicExample from '../src/js/basic_router.js';

describe("<BasicExample />", () => {

	it("should render one <Route /> component", () => {

		const wrapper = shallow(<BasicExample />);
		chai.expect(wrapper.find(Route)).to.have.length(3);

	})

})

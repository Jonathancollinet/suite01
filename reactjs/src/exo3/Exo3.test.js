import React from 'react';
import { mount } from 'enzyme';

import Exo3 from './Exo3';

xdescribe('Exo3', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<Exo3 />);
    expect(wrapper).toBeDefined();
  });

  it('has a classname "Exo3"', () => {
    const wrapper = mount(<Exo3 />);
    expect(wrapper.find('.Exo3').length).toEqual(1);
  });

  it('display "I\'m a prop and I know it" ', () => {
    const wrapper = mount(<Exo3 displayText="I'm a prop and I know it" />);
    expect(wrapper.props().displayText).toEqual("I'm a prop and I know it");
    expect(wrapper.text()).toEqual("I'm a prop and I know it");
  });
});
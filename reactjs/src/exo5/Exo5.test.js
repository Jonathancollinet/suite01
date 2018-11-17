import React from 'react';
import { mount } from 'enzyme';

import Exo5 from './Exo5';

xdescribe('Exo4', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<Exo5 />);
    expect(wrapper).toBeDefined();
  });

  it('is correctly displayed', () => {
    const wrapper = mount(<Exo5 />);
    expect(wrapper.find('.Exo5').length).toEqual(1);
    expect(wrapper.find('.zone').length).toEqual(1);
    expect(wrapper.find('.btn').length).toEqual(1);
    expect(wrapper.state().display).toBeFalsy();
  });

  it('display "not displayed" by default', () => {
    const wrapper = mount(<Exo5 />);
    expect(wrapper.find('.zone').text()).toEqual("not displayed");
  });

  it('change state of component and change text', () => {
    const wrapper = mount(<Exo5 />);
    expect(wrapper.state().display).toBeFalsy();
    wrapper.find('.btn').simulate('click');
    expect(wrapper.state().display).toBeTruthy();
    expect(wrapper.find('.zone').text()).toEqual("displayed");
  });
});
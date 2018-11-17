import React from 'react';
import { mount } from 'enzyme';

import Exo1 from './Exo1';

xdescribe('Exo1', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<Exo1 />);
    expect(wrapper).toBeDefined();
  });

  it('renders a h1', () => {
    const wrapper = mount(<Exo1 />);
    expect(wrapper.exists('h1')).toEqual(true);
  });

  it('renders "Bienvenue en JS !"', () => {
    const wrapper = mount(<Exo1 />);
    expect(wrapper.text()).toEqual("Bienvenue en JS !");
  });
});
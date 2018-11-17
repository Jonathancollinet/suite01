import React from 'react';
import { mount } from 'enzyme';

import Exo2 from './Exo2';

xdescribe('Exo2', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<Exo2 />);
    expect(wrapper).toBeDefined();
  });

  it('has a classname "container"', () => {
    const wrapper = mount(<Exo2 />);
    expect(wrapper.find('.container').length).toEqual(1);
  });

  it('renders a h2 containing "Mon super composant', () => {
    const wrapper = mount(<Exo2 />);
    expect(wrapper.exists('h2')).toEqual(true);
    expect(wrapper.find('h2').text()).toEqual("Mon super composant");
  });

  it('renders a p containing "Je suis un paragraphe.', () => {
    const wrapper = mount(<Exo2 />);
    expect(wrapper.exists('p')).toEqual(true);
    expect(wrapper.find('p').text()).toEqual("Je suis un paragraphe.");
  });
});
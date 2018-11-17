import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import Exo4 from './Exo4';

xdescribe('Exo4', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<Exo4 />);
    expect(wrapper).toBeDefined();
  });

  it('has a classname "Exo4"', () => {
    const wrapper = mount(<Exo4 />);
    expect(wrapper.find('.Exo4').length).toEqual(1);
  });

  it('display 3 paragraphs', () => {
    const wrapper = mount(<Exo4 />);
    expect(wrapper.find('p').length).toEqual(3);
  });

  it('simulate click on div', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount(<Exo4 onUpdate={onButtonClick} />);
    wrapper.find('.Exo4').simulate('click');
    expect(onButtonClick.callCount).toEqual(1);
  });

  it('display text props in 1st p', () => {
    const wrapper = mount(<Exo4 text="Im a text" />);
    expect(wrapper.find('p').at(0).text()).toEqual("Im a text");
  });

  it('display "is active" in 2nd p', () => {
    const wrapper = mount(<Exo4 text="Im a text" isActive />);
    expect(wrapper.find('p').at(1).text()).toEqual("is active");
  });

  it('display "is not active" in 2nd p', () => {
    const wrapper = mount(<Exo4 text="Im a text" />);
    expect(wrapper.find('p').at(1).text()).toEqual("is not active");
  });

  it('display number props in 3rd p', () => {
    const wrapper = mount(<Exo4 nbParams={5} />);
    expect(wrapper.find('p').at(2).text()).toEqual("5");
  });
});
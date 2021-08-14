import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import 'react-native';

import {Home, Signin, Signup, MyAssessments,MyProfile, PrevReports} from '../../components/views'

it('Home page renders correct', () => {
    const home = renderer.create(<Home/>);
    expect(home).toMatchSnapshot();
});

it('MyProfile page renders correct', () => {
    const home = renderer.create(<MyProfile/>);
    expect(home).toMatchSnapshot();
});

it('Signin page renders correct', () => {
    const home = renderer.create(<Signin/>);
    expect(home).toMatchSnapshot();
});

it('Signup page renders correct', () => {
    const home = renderer.create(<Signup/>);
    expect(home).toMatchSnapshot();
});

it('MyAssessments page renders correct', () => {
    const home = renderer.create(<MyAssessments/>);
    expect(home).toMatchSnapshot();
});
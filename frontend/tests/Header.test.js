import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../src/components/Header';

//testing that the header component renders
describe('Snapshot test', () => {
    it('Renders correctly', () => {
        const tree = renderer.create( < Header / > ).toJSON();
        expect(tree).toMatchSnapshot();
    });
})
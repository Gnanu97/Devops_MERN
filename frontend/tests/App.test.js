import React from 'react';
import {
    render as rtlRender,
    screen
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderer from 'react-test-renderer';
import {
    BrowserRouter as Router,
} from 'react-router-dom'

import App from '../src/App';

//a snapshot test on our App component which holds all our other components.

describe('Snapshot test for main app component', () => {
    it('Main app renders correctly', () => {
        const tree = renderer.create( < App / > ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});


describe('Render screen elements correctly', () => {
    const render = (ui, {
        route = '/'
    } = {}) => {
        window.history.pushState({}, 'Test page', route)

        return rtlRender(ui, {
            wrapper: Router
        })
    }
    //testing to see if the url routing is working
    test('full app rendering/navigating', () => {
        render( < App / > )
        expect(screen.getByText(/buting life insurance/i)).toBeInTheDocument()

        userEvent.click(screen.getByText(/about/i))

        expect(screen.getByText(/simple life /i)).toBeInTheDocument()
    })
})
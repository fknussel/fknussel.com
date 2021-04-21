import React from 'react';
import renderer from 'react-test-renderer';

import { NotFound } from '../not-found';

describe('NotFound', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<NotFound />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});

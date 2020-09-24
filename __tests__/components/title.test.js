import React from 'react';
import { render, screen } from "@testing-library/react";

import Title from '../../components/Title';

/** @test {Title Component} */
test('Title Component', () => {
    const { getByText } = render(<Title label="test" />)
    const linkElement = getByText(/test/);
    expect(linkElement).toBeInTheDocument();
});
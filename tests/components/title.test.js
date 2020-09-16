import React from 'react';
import { render, screen } from "@testing-library/react";

import Title from '../../components/Title';

/** @test {Title Component} */
describe('Title Component', () => {
    it("renders without crashing", () => {
        render(<Title label="test" />);
        expect(
            screen.getByRole("heading", { name: "test" })
        ).toBeInTheDocument();
    });

});
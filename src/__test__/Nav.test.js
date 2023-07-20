import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from '../components/Nav';

describe('Nav', () => {
  test('NAV TEST 1: renders Space Travelers\' Hub heading', () => {
    render(<Router><Nav /></Router>);
    const headingElement = screen.getByText(/Space Travelers' Hub/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('NAV TEST 2: renders Rockets link', () => {
    render(<Router><Nav /></Router>);
    const linkElement = screen.getByText(/Rockets/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('NAV TEST 3: renders Missions link', () => {
    render(<Router><Nav /></Router>);
    const linkElement = screen.getByText(/Missions/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('NAV TEST 4: renders My Profile link', () => {
    render(<Router><Nav /></Router>);
    const linkElement = screen.getByText(/My Profile/i);
    expect(linkElement).toBeInTheDocument();
  });
});

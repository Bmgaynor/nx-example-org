import React from 'react';
import { render } from '@testing-library/react';
import Books from '../src/app/books/page';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Books />);
    expect(baseElement).toBeTruthy();
  });
});

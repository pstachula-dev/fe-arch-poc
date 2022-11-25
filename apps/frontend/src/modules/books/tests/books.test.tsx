import { render, screen } from '@testing-library/react';

import { Books } from '../components/Books';
import { setupBooksStore } from './book-store.mock';

const setup = (): void => {
  setupBooksStore();
  render(<Books />);
};

describe('Books', () => {
  it('renders a heading', () => {
    setup();
    expect(screen.getByText('Harry Potter')).toBeInTheDocument();
  });
});

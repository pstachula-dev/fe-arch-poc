import { render, screen } from '@testing-library/react';
import { setupBooksStore } from './book-store.mock';
import { Books } from '../components/Books';

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

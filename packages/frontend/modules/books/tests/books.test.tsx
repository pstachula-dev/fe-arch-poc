import { render, screen } from '@testing-library/react'
import { setupBooksStore } from './book-store.mock';
import { Books } from '../Books';

const setup = () => {
    setupBooksStore();
    render(<Books />);
}

describe('Books', () => {
  it('renders a heading', () => {
    setup();
    expect(screen.getByText('Harry Potter')).toBeInTheDocument()
  })
})
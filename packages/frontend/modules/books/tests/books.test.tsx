import { render, screen } from '@testing-library/react'
import { useBookStore } from '../../../utils/stores/books-store';
import { Books } from '../Books';

const setup = () => {
    useBookStore.setState({
        books: [{ name: "Harry Potter", pages: 1 }]
    })
    render(<Books />);
}

describe('Books', () => {
  it('renders a heading', () => {
    setup();
    expect(screen.getByText('Harry Potter')).toBeInTheDocument()
  })
})
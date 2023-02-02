import { screen, fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { SERIE } from '../../mocks/seriesMock';
import { SerieStructure } from '../../models/serieStructure';
import { Serie } from './serie';

describe('Given Card component', () => {
  const deleteMock = jest.fn();
  const updateMock = jest.fn();
  const mockTask: SerieStructure = SERIE[0];
  let element: Serie;
  beforeEach(() => {
    document.body.innerHTML = '<ul></ul>';
    element = new Serie('ul', mockTask, deleteMock, updateMock);
  });

  test('It should be in the document', () => {
    expect(element).toBeInstanceOf(Serie);
  });
  test('It render the card in the document', () => {
    const h4 = screen.getByRole('heading');
    expect(h4).toBeInTheDocument();
    const span = screen.getByText(mockTask.name);
    expect(span).toBeInTheDocument();
  });
  test('It should be used the stars', () => {
    const star = screen.getByTitle('1/5');
    fireEvent.click(star);
    expect(updateMock).toHaveBeenCalled();
  });

  test('It should be used the button', () => {
    const button = screen.getByTitle('delete-button');
    fireEvent.click(button);
    expect(deleteMock).toHaveBeenCalled();
  });
});

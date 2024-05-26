import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ConverterDataInput from '../ConverterDataInput';
import ConvertedFile from '../ConvertedFile';
import { convertTextToPdf } from '../../../api/pdf-convert';
import { blobToBase64 } from '../utils';

jest.mock('../../../api/pdf-convert', () => ({
  convertTextToPdf: jest.fn(),
}));

jest.mock('../utils', () => ({
  blobToBase64: jest.fn(),
}));

describe('ConverterDataInput', () => {
  it('disable the button when input is empty', () => {
    render(<ConverterDataInput />);

    const textAreaElement = screen.getByPlaceholderText('Enter text here');
    expect(textAreaElement).toBeInTheDocument();
    expect(textAreaElement).toBeEmptyDOMElement();

    const button = screen.getByRole('button', { name: 'Convert' });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it('enables the button when text is inputted', () => {
    render(<ConverterDataInput />);
    const textAreaElement = screen.getByPlaceholderText('Enter text here');

    fireEvent.change(textAreaElement, { target: { value: 'Some text' } });
    const button = screen.getByRole('button', { name: 'Convert' });
    expect(button).not.toBeDisabled();
  });

  it('sends a request when the Convert button is clicked', async () => {
    const mockBlob = new Blob(['Mock PDF Data'], { type: 'application/pdf' });
    const mockBase64String = 'Mock Base64 Data';

    convertTextToPdf.mockResolvedValue(mockBlob);
    blobToBase64.mockResolvedValue(mockBase64String);

    render(<ConverterDataInput />);

    const textArea = screen.getByPlaceholderText('Enter text here');
    fireEvent.change(textArea, { target: { value: 'Some text' } });

    const convertButton = screen.getByText('Convert');
    fireEvent.click(convertButton);

    await waitFor(() => {
      expect(convertTextToPdf).toHaveBeenCalledWith('Some text');
      expect(blobToBase64).toHaveBeenCalledWith(mockBlob);
    });

    render(<ConvertedFile />);
    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(1);
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ConvertedHistory from '../ConvertedHistory';

describe('ConvertedHistory', () => {
  it('renders  message when there are no files', () => {
    render(<ConvertedHistory pdfUrls={[]} />);

    const messageElement = screen.getByText('No converted files yet');
    expect(messageElement).toBeInTheDocument();
  });

  it('renders converted files and handles deletion', () => {
    const pdfUrls = [
      { name: 'File1.pdf', url: 'file1-url', value: 'file1-value' },
      { name: 'File2.pdf', url: 'file2-url', value: 'file2-value' },
      { name: 'File3.pdf', url: 'file3-url', value: 'file3-value' },
    ];
    const setPdfUrls = jest.fn();
    const setActiveUrl = jest.fn();

    render(
      <ConvertedHistory
        pdfUrls={pdfUrls}
        setPdfUrls={setPdfUrls}
        setActiveUrl={setActiveUrl}
        activeUrl=""
      />
    );
    const messageElement = screen.getByText('Converted files');
    expect(messageElement).toBeInTheDocument();

    const fileElements = screen.getAllByRole('listitem');
    expect(fileElements).toHaveLength(3);

    const file1 = screen.getByTestId('file-File1.pdf');
    fireEvent.click(file1);

    const deleteFile2Button = screen.getByTestId('delete-File2.pdf');
    fireEvent.click(deleteFile2Button);

    expect(setPdfUrls).toHaveBeenCalledWith([
      { name: 'File1.pdf', url: 'file1-url', value: 'file1-value' },
      { name: 'File3.pdf', url: 'file3-url', value: 'file3-value' },
    ]);
    expect(setActiveUrl).toHaveBeenCalledWith('file1-url');
  });
});

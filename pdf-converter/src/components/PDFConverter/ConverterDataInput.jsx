import React, { useState } from 'react';
import { convertTextToPdf } from '../../api/pdf-convert';
import { blobToBase64 } from './utils';

const ConverterDataInput = ({ pdfUrls, setActiveUrl, setPdfUrls }) => {
  const [text, setText] = useState('');

  const onConvert = async () => {
    try {
      const blob = await convertTextToPdf(text);
      const base64String = await blobToBase64(blob);

      const existingBlobData =
        JSON.parse(localStorage.getItem('blobData')) || [];

      const fileName = crypto.randomUUID() + '.pdf';

      const PDFUrl = {
        name: fileName,
        value: base64String,
        url: URL.createObjectURL(blob),
      };
      const updatedPdfUrls = [PDFUrl, ...pdfUrls];

      existingBlobData.unshift({
        name: fileName,
        value: base64String,
      });

      setText('');
      setActiveUrl(PDFUrl.url);
      setPdfUrls(updatedPdfUrls);
      localStorage.setItem('blobData', JSON.stringify(existingBlobData));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here"
        rows={10}
        className="w-full px-3 py-2 text-gray-700 border rounded-sm focus:outline-none"
      />
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onConvert}
          disabled={!text.trim()}
          className="px-8 py-2 text-white bg-blue-bright rounded-sm hover:opacity-80 cursor-pointer disabled:cursor-default disabled:bg-blue-light disabled:hover:opacity-100"
        >
          Convert
        </button>
      </div>
    </div>
  );
};

export default ConverterDataInput;

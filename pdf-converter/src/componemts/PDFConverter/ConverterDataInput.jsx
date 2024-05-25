import React, { useState } from 'react';
import { convertTextToPdf } from '../../api/pdf-convert';
import { blobToBase64 } from './utils';

const ConverterDataInput = ({ pdfUrls, setActiveUrl, setPdfUrls }) => {
  const [text, setText] = useState('');

  const onConvert = () => {
    convertTextToPdf(text)
      .then((blob) => {
        blobToBase64(blob)
          .then((base64String) => {
            const existingBlobData =
              JSON.parse(localStorage.getItem('blobData')) || [];

            const fileName = crypto.randomUUID();
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
          })
          .catch((error) => {
            console.error('Error converting Blob to Base64:', error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here"
        rows={10}
        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none m-2"
      />
      <div className="flex justify-end">
        <button
          onClick={onConvert}
          disabled={!text.trim()}
          className="px-8 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700 cursor-pointer disabled:opacity-50 disabled:cursor-default disabled:bg-blue-500"
        >
          Convert
        </button>
      </div>
    </div>
  );
};

export default ConverterDataInput;

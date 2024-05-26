import React, { useEffect, useState } from 'react';
import { base64ToBlob } from '../../components/PDFConverter/utils';
import ConverterDataInput from '../../components/PDFConverter/ConverterDataInput';
import ConvertedHistory from '../../components/PDFConverter/ConvertedHistory';
import PDFViewer from '../../components/PDFViewer';

const PDFConverter = () => {
  const [pdfUrls, setPdfUrls] = useState([]);
  const [activeUrl, setActiveUrl] = useState('');

  useEffect(() => {
    const storedBlobData = JSON.parse(localStorage.getItem('blobData')) || [];
    const storedPdfUrls = storedBlobData.map(({ name, value }) => ({
      name,
      value,
      url: URL.createObjectURL(base64ToBlob(value)),
    }));
    setPdfUrls(storedPdfUrls);
  }, []);

  return (
    <div className="flex flex-row gap-4 overflow-hidden h-full">
      <div className="flex-1">
        <ConverterDataInput
          pdfUrls={pdfUrls}
          setActiveUrl={setActiveUrl}
          setPdfUrls={setPdfUrls}
        />
        <ConvertedHistory
          pdfUrls={pdfUrls}
          activeUrl={activeUrl}
          setPdfUrls={setPdfUrls}
          setActiveUrl={setActiveUrl}
        />
      </div>

      <div className="flex-1">
        <PDFViewer url={activeUrl} />
      </div>
    </div>
  );
};

export default PDFConverter;

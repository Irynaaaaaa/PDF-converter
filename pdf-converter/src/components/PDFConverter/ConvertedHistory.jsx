import React from 'react';
import ConvertedFile from './ConvertedFile';
import { getNextActiveUrl } from './utils';

const ConvertedHistory = ({ pdfUrls, activeUrl, setPdfUrls, setActiveUrl }) => {
  const onDelete = (e, fileName, i) => {
    e.stopPropagation();
    const updatedPdfUrls = pdfUrls.filter(({ name }) => name !== fileName);

    if (pdfUrls[i].url === activeUrl) {
      const nextActiveUrl = getNextActiveUrl(pdfUrls, i);
      setActiveUrl(nextActiveUrl);
    }

    setPdfUrls(updatedPdfUrls);
    const updatedBlobData = updatedPdfUrls.map(({ name, value }) => ({
      name,
      value,
    }));
    localStorage.setItem('blobData', JSON.stringify(updatedBlobData));
  };

  return (
    <div className="mt-3 h-full flex flex-col gap-3">
      <span className="text-xl">
        {pdfUrls.length ? 'Converted files' : 'No converted files yet'}
      </span>
      <ul className="flex flex-col gap-1 h-full max-h-[315px] overflow-auto scrollbar-thin">
        {pdfUrls.map(({ name, url }, i) => (
          <ConvertedFile
            fileName={name}
            key={name}
            onDelete={(e) => onDelete(e, name, i)}
            onClick={() => setActiveUrl(url)}
            isActive={url === activeUrl}
          />
        ))}
      </ul>
    </div>
  );
};

export default ConvertedHistory;

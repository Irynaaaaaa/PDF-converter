export const blobToBase64 = async (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result.split(',')[1];
      resolve(base64String);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

export const base64ToBlob = (base64) => {
  const byteCharacters = atob(base64);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray]);
};

export const getNextActiveUrl = (pdfUrls, i) => {
  if (pdfUrls[i + 1]) return pdfUrls[i + 1].url;
  if (pdfUrls[i - 1]) return pdfUrls[i - 1].url;
  return '';
};

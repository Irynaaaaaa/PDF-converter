const API_KEY = '78684310-850d-427a-8432-4a6487f6dbc4';
const baseUrl = `http://95.217.134.12:4010/create-pdf?apiKey=${API_KEY}`;

export const convertTextToPdf = async (text) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  });

  const data = await response.blob();
  return data;
};

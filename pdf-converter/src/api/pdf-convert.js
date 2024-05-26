const route = 'create-pdf';
const baseUrl = `${process.env.REACT_APP_API_BASE_URL}${route}?apiKey=${process.env.REACT_APP_API_KEY}`;

export const convertTextToPdf = async (text) => {
  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (response.ok) {
      const data = await response.blob();
      return data;
    } else {
      throw new Error('Failed to call api');
    }
  } catch (error) {
    console.error(error);
  }
};

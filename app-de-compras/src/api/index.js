export const getData = async () => {
  try {
    const response = await fetch("http://localhost:3090/");
    const data = await response.json(); // Transforma os dados em JSON para um objeto JavaScript
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

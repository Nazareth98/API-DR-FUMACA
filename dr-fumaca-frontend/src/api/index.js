const path = "http://localhost:8020";

export const postData = async (route, data) => {
  try {
    const url = `${path}/${route}/`;
    const headers = {
      "Content-Type": "application/json",
    };
    // Se um token for fornecido, adicione-o ao cabeçalho de autorização
    if (data.token) {
      headers["Authorization"] = `Bearer ${data.token}`;
      console.log(headers);
    }

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to post data");
    }

    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getData = async (route) => {
  try {
    const url = `${path}/${route}/`;
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const path = "http://localhost:8020";

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

export const postData = async (route, data) => {
  try {
    const url = `${path}/${route}/`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to post data");
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteData = async (route, id) => {
  try {
    const url = `${path}/${route}/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete data");
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
    alert(
      "Não é possivel deletar essa categoria! Você ainda possui produtos cadastrados à ela."
    );
  }
};

export const updateData = async (route, data, id) => {
  try {
    const url = `${path}/${route}/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to update data");
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

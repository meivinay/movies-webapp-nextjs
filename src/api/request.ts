const TOKEN = process.env.TOKEN;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
};

export const get = async (url = "") => {
  return await (await fetch(url, options)).json();
};

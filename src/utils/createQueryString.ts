const createQueryString = (data) => {
  let tempString = "";

  (() => {
    Object.entries(data).forEach(([key, value]) => {
      if (typeof value === "object" && value !== null) {
        const _query = createQueryString(value);
        if (tempString) {
          tempString = `${tempString}&${_query}`;
        } else {
          tempString = _query;
        }
      } else {
        if (tempString) {
          tempString = `${tempString}&${encodeURIComponent(
            key
          )}=${encodeURIComponent(value)}`;
        } else {
          tempString = `${encodeURIComponent(key)}=${encodeURIComponent(
            value
          )}`;
        }
      }
    });
  })();
  return tempString;
};

export default createQueryString;

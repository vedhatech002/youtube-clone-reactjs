const getSearchSuggestion = async (query) => {
  // const url = "https://cors-proxy3.p.rapidapi.com/api";
  // const options = {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/x-www-form-urlencoded",
  //     "X-RapidAPI-Key": ,
  //     "X-RapidAPI-Host": "cors-proxy3.p.rapidapi.com",
  //   },
  //   body: new URLSearchParams({
  //     "my-url": `http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=${query}`,
  //   }),
  // };

  // try {
  //   const response = await fetch(url, options);
  //   const result = await response.json();
  //   return result;
  // } catch (error) {
  //   return error;
  // }
  try {
    const response = await fetch(
      `http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=${query}`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

export default getSearchSuggestion;

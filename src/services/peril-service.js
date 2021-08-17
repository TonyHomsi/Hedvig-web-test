const fetchPerils = async () => {
  try {
    const response = await fetch(
      `https://hedvig-staging-rest-api.vercel.app/api/perils?contractType=SE_APARTMENT_RENT&locale=en_SE`
    );
    if (response.status !== 200) {
      throw new Error("invalid response");
    }
    const json = await response.json();

    return json;
  } catch (err) {
    console.log("something went wrong");
    return [];
  }
};

export {fetchPerils}
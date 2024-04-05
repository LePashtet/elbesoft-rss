import axios from "axios";

export const getNewsletters = async () => {
  try {
    const response = await axios.get(
      "https://localhost:3001/newsletter"
    );
    const fetchedNewsletters = [];
    for (let key in response.data) {
      fetchedNewsletters.push({
        id: key,
        ...response.data[key],
      });
    }
    console.log(fetchedNewsletters);

    return fetchedNewsletters;
  } catch (error) {
    console.error("Error fetching newsletters:", error);
    throw error;
  }
};

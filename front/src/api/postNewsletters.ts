import axios from "axios";

interface Source {
  link: string;
  keywords: string[];
  type: string;
}

export const postNewsletters = async (data: {
  email: string;
  sources: Source[];
  time: any[];
  location: any[];
}) => {
  try {
    await axios.post(
      "https://localhost:3001/newsletter/",
      data
    );
  } catch (error) {
    throw new Error("Failed to post data: " + error);
  }
};

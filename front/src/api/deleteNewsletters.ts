import axios from "axios";

interface DeleteNewslettersProps {
  newsletters: any[];
  setNewsletters: React.Dispatch<React.SetStateAction<any[]>>;
}

export const deleteNewsletters = async ({
  newsletters,
  setNewsletters,
}: DeleteNewslettersProps): Promise<void> => {
  try {
    await Promise.all(
      newsletters.map(async (newsletter) => {
        console.log(newsletter.id);
        await axios.delete(
          `https://localhost:3001/newsletter/${newsletter.id}`
        );
      })
    );

    setNewsletters([]);
  } catch (error) {
    console.error("Error deleting newsletters:", error);
  }
};

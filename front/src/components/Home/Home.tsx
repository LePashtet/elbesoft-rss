import { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import { getNewsletters } from "../../api/GetNewsletters";
import "./Home.scss";
import { deleteNewsletters } from "../../api/deleteNewsletters";

export const Home = () => {
  const [newsletters, setNewsletters] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedNewsletters = await getNewsletters();
      setNewsletters(fetchedNewsletters);
    };

    fetchData();
  }, []);

  const removeAllNewsletters = async () => {
    await deleteNewsletters({ newsletters, setNewsletters });
  };
  return (
    <div className='home'>
      <h1 className='home-title'>Telegram + Email</h1>
      <span className='home-text'>5 AM + 5 PM</span>
      <div className='home-button'>
        <Button onClick={removeAllNewsletters} label='Remove' />
      </div>

      <a className='home-link'
        href='mailto:contact@elbesoft.agency?subject=Want%20to%20have%20more?%20Let%20us%20know!'
      >
        Want to have more? Let us know!
      </a>
    </div>
  )
}

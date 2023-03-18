import { getAllNews } from '../API';
import { useEffect, useState } from 'react';

export const App = () => {
  const [transactionList, setTransactionList] = useState([]);
  useEffect(() => {
    async function get() {
      try {
        const { data } = await getAllNews();
        setTransactionList(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    get();
  }, []);
  return (
    <>
      {transactionList.map(({ _id, date, description, url }) => (
        <ul key={_id}>
          <li>{date}</li>
          <li>{description}</li>
          <li>{url}</li>
        </ul>
      ))}
    </>
  );
};

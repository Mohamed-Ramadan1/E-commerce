import { useEffect, useState } from 'react';
import axios from 'axios';
const App = () => {
  const [data, setData] = useState<string>('');

  const getAllProducts = async () => {
    const res = await axios.get('http://localhost:3000/api/v1/products');
    setData(res.data);
    console.log(res);
  };
  // getAllProducts();
  useEffect(() => {
    getAllProducts();
  }, []);
  console.log(data);
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
};

export default App;

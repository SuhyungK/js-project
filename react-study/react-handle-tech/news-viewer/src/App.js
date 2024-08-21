import { useState } from 'react';
import './App.css';
import axios from '../node_modules/axios/index';

function App() {
  const [data, setData] = useState(null);
  // const onClick = () => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/todos/1')
  //     .then((response) => {
  //       console.log(response);
  //       setData(response.data);
  //     });
  // };

  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=ccb79b13da5f4b1184009049594cf50e',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
}

export default App;

import axios from 'axios';
import React, {useState} from 'react';

const Item = ({name, age}) => {
  return (
    <li>
      name: {name} / age: {age}
    </li>
  );
};

const url = 'https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json?id=react';

const TestMocking = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = () => {
    axios
      .get(url)
      .then((res) => setData(res.data.data))
      .catch((err) => setError(err));
  };
  const handleClick2 = () => {
    axios
      .get('/login')
      .then((res) => console.log(res.data))
      .catch((err) => setError(err));
  };

  if (error) {
    return <p>{error}</p>;
  }

  console.log(data);

  return (
    <div>
      <button onClick={handleClick}>데이터 가져오기</button>
      <button onClick={handleClick2}>데이터 가져오기</button>
      {data && (
        <ul>
          {data.people.map((person) => (
            <Item key={`${person.name}-${person.age}`} name={person.name} age={person.age} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TestMocking;

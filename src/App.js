import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import ListOfUsers from './ListOfUsers';


function App() {
  const [data,setData] = useState([]);
  const [error,setError] = useState(null);
  useEffect(() =>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => setData(res.data))
    .catch(err =>setError(err))
  },[])
  return (
    <div className="App">
     <h1 className='title'>List of Users</h1>
     <div className='cardes'>
     {data.map(user =>{
      return <ListOfUsers key={user.id} user={user} />
     })}
     </div>
    </div>
  );
}

export default App;

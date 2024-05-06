import './App.css';
import {useState} from 'react';
import HomeAdmin from './components/HomeAdmin';
import HomeUser from './components/HomeUser';

function App() {
  const [userType, setUserType] = useState("admin")

  // const handleUserType = () => {
  //   if (userType === "admin") {
  //     setUserType("user")
  //   } else {
  //     setUserType("admin")
  //   }
  // }

  const changeToAdmin = () => {
    setUserType("admin")
  }

  const changeToUser = () => {
    setUserType("user")
  }

  return (
    <div>
      {userType === "admin" ? <HomeAdmin></HomeAdmin> : <HomeUser></HomeUser>}
      <button onClick={changeToAdmin}>yo soy admin</button>
      <button onClick={changeToUser}>yo soy user</button>
    </div>
  );
}

export default App;

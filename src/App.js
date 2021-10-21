import React, { useEffect } from 'react' 
import { useDispatch } from 'react-redux'
import CheckLogin from './components/views/persistLogin'
import StepsPage from './components/views/StepsPage'
import './App.css';

const App = () => {
  const dispatch = useDispatch()
  // useEffect(() => {
  //   return (
  //     <CheckLogin />
  //   )
  // })
  return (
    <div className="App">
      <StepsPage />
      {/* <CheckLogin /> */}
    </div>
  );
}

export default App;

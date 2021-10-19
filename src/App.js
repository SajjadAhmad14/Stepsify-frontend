import React, { useEffect } from 'react' 
import { useDispatch } from 'react-redux'
import checkLogin from './components/store/actions/persistLogin'
import StepsPage from './components/views/StepsPage'
import StepsifyPage from './components/views/StepsifyPage'
import './App.css';

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkLogin)
  })
  return (
    <div className="App">
      <StepsPage />
      <StepsifyPage />
    </div>
  );
}

export default App;

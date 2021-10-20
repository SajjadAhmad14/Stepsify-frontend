import React, { useEffect } from 'react' 
import { useDispatch } from 'react-redux'
import CheckLogin from './components/store/actions/persistLogin'
import StepsPage from './components/views/StepsPage'
import StepsifyPage from './components/views/StepsifyPage'
import MorePage from './components/views/MorePage'
import ProgressPage from './components/views/ProgressPage'
import './App.css';

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(CheckLogin)
  })
  return (
    <div className="App">
      <StepsPage />
    </div>
  );
}

export default App;

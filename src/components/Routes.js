import { FaEllipsisH, FaPlus, FaUserCircle } from "react-icons/fa";
import { BiTrendingUp } from "react-icons/bi";
import { AiTwotonePieChart } from "react-icons/ai";
import App from '../App';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import StepsPage from './views/StepsPage';
import StepsifyPage from './views/StepsifyPage';
import MorePage from './views/MorePage';
import ProgressPage from './views/ProgressPage'
import SignUp from './views/SignUp';
import Login from './views/LogIn';
import SignOut from './views/SignOut'

const Routes = () => (
  <Router>
    <div className='nav-bar'>
      {window.sessionStorage.getItem('token') ?
        <Link to='/signout'>
          <div className='text-center'>
            <FaUserCircle className='user-icon' />
            <div>Log Out</div>
          </div>
        </Link>
        :
        <Link to="/login">
          <div className='text-center'>
            <FaUserCircle className='user-icon' />
            <div>Log in</div>
          </div>
        </Link>
      }
      <Link to="/">
        <div className='text-center'>
          <FaPlus className='add-icon' />
          <div>Add Steps</div>
        </div>
      </Link>
      <Link to="/addsteps">
        <div className='text-center'>
          <BiTrendingUp className='trend-icon' />
          <div>Stepsify</div>
        </div>
      </Link>
      <Link to="/progresspage">
        <div className='text-center'>
          <AiTwotonePieChart className='progress-icon' />
          <div>Progress</div>
        </div>
      </Link>
      <Link to="/morepage">
        <div className='text-center'>
          <FaEllipsisH className='more-icon' />
          <div>More</div>
        </div>
      </Link>
    </div>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/addtarget" component={StepsPage} />
      <Route exact path="/addsteps" component={StepsifyPage} />
      <Route exact path="/progresspage" component={ProgressPage} />
      <Route exact path="/morepage" component={MorePage} />
      <Route exact path="/signout" component={SignOut} />
    </Switch>
  </Router>
);

export default Routes;
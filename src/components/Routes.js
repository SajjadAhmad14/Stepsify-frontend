import { FaEllipsisH, FaPlus } from "react-icons/fa";
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

const Routes = () => (
  <Router>
    <div className='nav-bar'>
      <Link to="/">
        <div className='text-center'>
          <FaPlus className='add-icon' />
          <div>Add Steps</div>
        </div>
      </Link>
      <Link to="/addtarget">
        <div className='text-center'>
          <BiTrendingUp className='trend-icon' />
          <div>Stepsify</div>
        </div>
      </Link>
      <Link to="/progresspage">
        <div className='text-center'>
          <AiTwotonePieChart className='progress-icon' />
          <div>Your Progress</div>
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
      <Route exact path="/addtarget" component={StepsPage} />
      <Route exact path="/addsteps" component={StepsifyPage} />
      <Route exact path="/progresspage" component={ProgressPage} />
      <Route exact path="/morepage" component={MorePage} />
    </Switch>
  </Router>
);

export default Routes;
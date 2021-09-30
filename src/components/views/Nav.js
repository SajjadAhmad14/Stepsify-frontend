import { FaEllipsisH, FaPlus } from "react-icons/fa";
import { BiTrendingUp } from "react-icons/bi";
import { AiTwotonePieChart } from "react-icons/ai";

const Nav = () => (
  <div className='nav-bar'>
    <div className='text-center'>
      <FaPlus className='add-icon'/>
      <div>Add Steps</div>
    </div>
    <div className='text-center'>
      <BiTrendingUp className='trend-icon'/>
      <div>Stepsify</div>
    </div>
    <div className='text-center'>
      <AiTwotonePieChart className='progress-icon'/>
      <div>Your Progress</div>
    </div>
    <div className='text-center'>
      <FaEllipsisH className='more-icon'/>
      <div>More</div>
    </div>
  </div>
)

export default Nav;
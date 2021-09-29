import { FaEllipsisH, FaPlus } from "react-icons/fa";
import { BiTrendingUp } from "react-icons/bi";
import { AiTwotonePieChart } from "react-icons/ai";
// import { GrAdd } from "react-icons/gr";

const Nav = () => (
  <div className='nav-bar'>
    <div className='add'>
      <FaPlus className='add-icon'/>
      <div>Add Steps</div>
    </div>
    <div className='trend'>
      <BiTrendingUp className='trend-icon'/>
      <div>Stepsify</div>
    </div>
    <div className='progress'>
      <AiTwotonePieChart className='progress-icon'/>
      <div>Your Progress</div>
    </div>
    <div className='more'>
      <FaEllipsisH className='more-icon'/>
      <div>More</div>
    </div>
  </div>
)

export default Nav;
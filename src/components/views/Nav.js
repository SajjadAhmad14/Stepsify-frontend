import { FaEllipsisH } from "react-icons/fa";
import { BiTrendingUp } from "react-icons/bi";

const Nav = () => (
  <div className='nav-bar'>
    <div className='more'>
      <FaEllipsisH className='more-icon'/>
      <div>More</div>
    </div>
    <div className='trend'>
      <BiTrendingUp className='trend-icon'/>
      <div>Stepsify</div>
    </div>
  </div>
)

export default Nav;
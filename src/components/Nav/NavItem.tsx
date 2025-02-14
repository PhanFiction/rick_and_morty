import { useState } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function NavItem({ Icon, linkName }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const handleClick = () => setIsAnimating(!isAnimating);
  const navLinks = {
    'Planets': '/planets',
    'Home': '/',
    'Characters': '/characters?page=1',
  }

  return (
    <Link to={`${navLinks[linkName]}`} className="w-full font-Edu">
      <li className={`flex items-center gap-8`} onClick={handleClick}>
        <span>{ Icon }</span>
        {/*Mobile Navlink name*/}
        <span className={`md:hidden text-lg sm:text-2xl${ isAnimating ? 'animate-text-slide-out' : 'animate-text-slide-in'}`}>
          {linkName}
        </span>
        {/*Desktop Navlink name*/}
        <span className={`hidden md:block text-lg sm:text-2xl group-hover:sidebar-text-slide-in sidebar-text-slide-out`}>{linkName}</span>
      </li>
    </Link>
  )
}

NavItem.propTypes = {
  Icon: PropTypes.object,
  linkName: PropTypes.string,
}
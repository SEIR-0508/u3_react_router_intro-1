//need to import link:
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="nav-links">
            {/* standard syntax for link (can make anything a link) */}
            <Link to="/">Home</Link>
            <Link to="/componentA">ComponentA</Link>
            <Link to="/componentB">ComponentB</Link>
        </div>
    )
}
export default Nav
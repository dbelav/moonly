import Logo from '../../assets/logo/logo'
import Search from '../search/Search'
import { Link } from 'react-router-dom'

import './navigationBar.scss'


const NavigationBar = () => {

    return (
        <nav className="navigationContainer">
            <div className="navigationContainerInner">
                <div className="logo">
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>
                <div className="navBar">
                    <div className="navBarItem">
                        <Link to="/upcoming">Last NFT Drops</Link>
                    </div>
                    <div className="navBarItem">
                        <Link to="/nfts">Nfts</Link>
                    </div>
                </div>
                <Search />
            </div>
        </nav>
    )
}

export default NavigationBar

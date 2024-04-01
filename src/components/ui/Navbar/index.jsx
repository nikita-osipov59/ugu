import { Button } from '../Button';
import './index.scss';

export const NavBar = () => {
    return(
        <div>
            <ul className='navbar_cont'>
                <li><img className='logo_cont'/></li>
                <li><button>Username</button></li>
            </ul>
        </div>
    );
}

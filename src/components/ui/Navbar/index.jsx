import { Button } from '../Button';
import './index.scss';

export const NavBar = () => {
    return(
        <div>
            <ul className='navbar_cont'>
                <li>LOGO</li> {/*TODO добавить лого */}
                <li><Button text="UserName"/></li>
            </ul>
        </div>
    );
}

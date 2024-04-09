import { UserContext } from '../../UserProvider';
import { useContext } from 'react';
import './index.scss';

export const NavBar = () => {
    const { user } = useContext(UserContext);
    
    return(
        <div>
            <ul className='navbar_cont'>
                <li><img className='logo_cont'/></li>
                <li><button>{user.login}</button></li>
                <div>
                    <button>Главная</button>
                    <button>Профиль</button>
                    <button>Выход</button>
                </div>
            </ul>
        </div>
    );
}

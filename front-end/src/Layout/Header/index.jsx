import { Link } from "react-router-dom";
import styles from './index.module.scss'
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <div className= {styles.headercontaier}>
                    <div className={styles.nav}>
                        <div>
                            <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="" />
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <Link>Home</Link>
                                </li>
                                <li>
                                    <Link>Shop</Link>
                                </li>
                                <li>
                                    <Link>About</Link>
                                </li>

                                <li>
                                    <Link to={"wishlist"}>Wishlist</Link>
                                </li>
                                <li>
                                    <Link to={"basket"}>Basket</Link>
                                </li>
                                <li>
                                    <Link to={'add-page'}>Add</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <i><SearchIcon/></i>
                            <i><PermIdentityIcon/></i>
                            <i><AddShoppingCartIcon/></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;

import { Button } from '@mui/material';
import styles from './index.module.scss'
const WatchOfChoice = () => {
    return (
        <div className={`${styles.watch} container`}>
            <div>
                <div><h1>Watch of Choice</h1>
                    <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                    <Button>SHOW WATCHES</Button>
                </div>
                <div>
                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch1.png" alt="" />
                </div>
            </div>
            <div>
                <div>
                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch2.png" alt="" />
                </div>
                <div><h1>Watch of Choice</h1>
                    <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                    <Button>SHOW WATCHES</Button>

                </div>

            </div>
        </div>
    );
}

export default WatchOfChoice;

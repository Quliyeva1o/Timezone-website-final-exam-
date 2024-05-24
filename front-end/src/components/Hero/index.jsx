import { Button } from "@mui/material";
import styles from "./index.module.scss"
const Hero = () => {
    return (
        <>
            <div className={styles.hero}>
                <div className={`container gap-5 `}>
                    <div className={styles.text}>
                    <h1>Select Your New <br /> Perfect Style</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat iure sapiente eveniet maiores illum rerum exercitationem accusantium, labore perferendis officiis omnis magnam consequatur quam. Sit fuga perspiciatis voluptates quam ducimus</p>
                    <Button>SHOP NOW</Button>
                    </div>
                    <div><img src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png" alt="" /></div>
                    </div>
            </div>
        </>
    );
}

export default Hero;

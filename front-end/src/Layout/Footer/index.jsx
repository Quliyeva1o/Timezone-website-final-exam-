import styles from './index.module.scss'
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container  justify-content-between ">
        <div>
          <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="" />
          <p style={{width:"250px"}}>Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.</p>
        </div>
        <div><h4>Quick Links</h4>
          <ul>
            <li>About</li>
            <li>Offers & Discounts</li>
            <li>Get Coupon</li>
            <li>Contact Us</li>
          </ul></div>
        <div><h4>New Products</h4><ul>
          <li>About</li>
          <li>Offers & Discounts</li>
          <li>Get Coupon</li>
          <li>Contact Us</li>
        </ul></div>
        <div><h4>Support</h4>
          <ul>
            <li>About</li>
            <li>Offers & Discounts</li>
            <li>Get Coupon</li>
            <li>Contact Us</li>
          </ul></div>
      </div>
    </div>
  );
}

export default Footer;

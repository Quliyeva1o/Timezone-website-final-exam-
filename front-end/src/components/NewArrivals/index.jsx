import styles from './index.module.scss'
const NewArrivals = () => {
    return (
        <>
            <div className={styles.NewArrivals}>
                <div className="container">
                    <div ><h1>New Arrivals</h1></div>
<div className={styles.cards}>
  <div >
  <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png" alt="" />
  <h5>Thermo Ball Etip Gloves</h5>
  <span>$ 45,743</span>
  </div>
  <div >
  <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png" alt="" />
  <h5>Thermo Ball Etip Gloves</h5>
  <span>$ 45,743</span>
  </div>
  <div>
  <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png" alt="" />
  <h5>Thermo Ball Etip Gloves</h5>
  <span>$ 45,743</span>
  </div>
</div>

                </div>
            </div>
        </>
    );
}

export default NewArrivals;

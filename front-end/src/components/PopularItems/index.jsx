import { useContext, useEffect, useState } from "react";
import { MyBasketContext, MyContext, MyWishListContext } from "../../context/context";
import styles from "./index.module.scss"
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, FormControl, InputLabel, MenuItem, TextField } from "@mui/material";
import { delOne } from "../../API/requests";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Select } from "antd";
const PopularItems = () => {
    const { wishList, setWishList } = useContext(MyWishListContext)
    const { basket, setBasket } = useContext(MyBasketContext)
    const { items, setItems } = useContext(MyContext)
    const [filtered, setFiltered] = useState(items)
    const [sortValue, setSortValue] = useState(items)
    const handleDel = (id) => {
        console.log(id);
        delOne(id)
        const filtered = items.filter((x) => x._id != id)
        setItems(filtered)
    }

    const handleBasket = (item) => {
        const found = basket.find((x) => x._id == item._id);
        if (found) {
            found.count += 1;
            setBasket([...basket]);
            localStorage.setItem("basket", JSON.stringify([...basket]));
        } else {
            const newBasketItem = {
                count: 1,
                ...item,
            };
            setBasket([...basket, newBasketItem]);
            localStorage.setItem("basket", JSON.stringify([...basket, newBasketItem]));
        }
    };

    const handleWisthList = (item) => {
        console.log(item);
        const found = wishList.find((x) => x._id == item._id)
        if (found) {
            const filtered = wishList.filter((x) => x._id != item._id)
            setWishList(filtered)
            localStorage.setItem("wishList", JSON.stringify(filtered))

        }
        else {
            setWishList([...wishList, item])
            localStorage.setItem("wishList", JSON.stringify([...wishList, item]))
        }
    }


    const handleSearch = (n) => {
        console.log(n);
        setFiltered(items.filter((x) => x.title.includes(n)))
    }
    useEffect(() => {
        setFiltered(items)
    }, [items])


    const handleSort = (value) => {
        setSortValue(value);
        let sortedItems = [...filtered];
        if (value === 'a-z') {
            sortedItems.sort((a, b) => a.price - b.price);
        } else if (value === 'z-a') {
            sortedItems.sort((a, b) => b.price - a.price);
        }
        setFiltered(sortedItems);
    };

    return (
        <>
            <div className="container">


                <div className={styles.textContent}>
                    <h1>Popular Items</h1>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>  </div>
                <div style={{display:"flex",gap:"20px" , margin:"50px auto"}}>
                    <TextField id="outlined-basic" label="Search by name" variant="outlined" onChange={(e) => handleSearch(e.target.value)} />
                    <FormControl>
                        <Select style={{width:"200px", height:"100%"}}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sortValue}
                            label="Sort by Price"
                            onChange={handleSort}
                        >
                            <MenuItem value={"a-z"}>cheap-exp</MenuItem>
                            <MenuItem value={"z-a"}>exp-cheap</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className={`gap-3 container  ${styles.cards}`}>

                    {
                        filtered && filtered.map((item, idx) => {
                            return (
                                <div className="width-100 border-0" key={idx}>
                                    <Button onClick={() => { handleWisthList(item) }}>{wishList.find((x) => x._id == item._id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}</Button>
                                    <img src={item.img} alt="" />
                                    <h2>{item.title}</h2>
                                    <p>${item.price}</p>
                                    <div style={{display:"flex"}}>
                                        <Button onClick={() => { handleDel(item._id) }}><DeleteIcon /></Button>
                                        <Button onClick={() => { handleBasket(item) }}><ShoppingCartIcon /></Button>
                                        <Button> <Link to={`detail/${item._id}`}><InfoIcon /></Link></Button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </>
    );
}

export default PopularItems;




import { useContext } from "react";
import { MyWishListContext } from "../../context/context";
import { Table } from 'antd';
import { Button } from "@mui/material";

const WishList = () => {
    const columns = [
        {
            title: 'img',
            dataIndex: 'img',
            render: (img) => <img src={img} alt="" />
        },
        {
            title: 'title',
            dataIndex: 'title',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'price',
            className: 'price',
            dataIndex: 'price',
        },
        {
            title: 'delete',
            className: 'delete',
            dataIndex: '_id',
            render: (record) => <Button onClick={() => { handleDelete(record) }}>delete</Button>,
    
        },
    
    ];
    
    const handleDelete = (id) => {
        const filtered = wishList.filter((x) => x._id != id)
        setWishList(filtered)
        localStorage.setItem("wishList", JSON.stringify(filtered))
    }
    const { wishList, setWishList } = useContext(MyWishListContext)

    return (
        <>
            <Table
                columns={columns}
                dataSource={wishList}
                bordered


            />
        </>
    );
}
export default WishList;
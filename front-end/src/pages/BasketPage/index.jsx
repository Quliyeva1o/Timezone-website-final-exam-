import { useContext } from "react";
import { MyBasketContext } from "../../context/context";
import { Table } from "antd";
import { Button } from "@mui/material";

  const Basket = () => {
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
          title: 'count',
          className: 'count',
          dataIndex: 'count',
      },
      {
          title: 'delete',
          className: 'delete',
          dataIndex: '_id',
          render: (record) => <Button onClick={() => { handleDelete(record) }}>delete</Button>,
      
      },
      
      ];
  const { basket, setBasket } = useContext(MyBasketContext)
  const handleDelete = (id) => {
    const filtered = basket.filter((x) => x._id != id)
    setBasket(filtered)
    localStorage.setItem("basket", JSON.stringify(filtered))
}
    return (
       <>
        <Table
            columns={columns}
            dataSource={basket}
            bordered
        />
       </>
    );
}
export default Basket;

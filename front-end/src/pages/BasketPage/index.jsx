import { useContext } from "react";
import { MyBasketContext } from "../../context/context";
import { Table } from "antd";
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

];
  const Basket = () => {
  const { basket, setBasket } = useContext(MyBasketContext)

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

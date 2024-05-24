import { useParams } from 'react-router-dom'
import { getOne } from '../../API/requests';
import { useEffect, useState } from 'react';
const Detail = () => {
  const [ item, setItem ] = useState([])
  const { id } = useParams()
  useEffect(() => {
    getOne(id).then((res) => {
      setItem(res.data)
    })
  }, [])
  return (
    <div>
<img src={item.img} alt="" />
<h1>{item.title}</h1>
<span>{item.price}</span>
<p>{item.desc}</p>


    </div>
  );
}

export default Detail;

import { Button, TextField } from "@mui/material";
import { useFormik } from 'formik';
import { MyValidations } from "../../validations/Validations";
import { MyClass } from "../../claases/MyClass";
import { postOne } from "../../API/requests";
import { useContext } from "react";
import { MyContext } from "../../context/context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = () => {
  const notify = () => toast("added");

const {setItems} = useContext(MyContext)
  const formik = useFormik({
    initialValues: {
      title: '',
      img: '',
      price: '',
      desc: '',
    },
    onSubmit: values => {
      console.log(values);
       const newItem = new MyClass(values.title,values.img,values.price,values.desc)
       postOne(newItem)
       setItems((curr)=>[...curr,newItem])
       formik.resetForm()
       notify()
    },
    validationSchema:MyValidations
  })


  return (
    <div className="container mt-5 " style={{paddingTop:"200px"}} >
      <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-3">
        <TextField id="outlined-basic" label="title" variant="outlined" value={formik.values.title} onChange={formik.handleChange} name='title' />
        {formik.errors.title && <span style={{color:"red"}}>{formik.errors.title}</span>}
        <TextField id="outlined-basic" label="image" variant="outlined" value={formik.values.img} onChange={formik.handleChange} name='img' />
        {formik.errors.img && <span style={{color:"red"}}>{formik.errors.img}</span>}
        <TextField id="outlined-basic" label="price" variant="outlined" value={formik.values.price} onChange={formik.handleChange} name='price' />
        {formik.errors.price && <span style={{color:"red"}}>{formik.errors.price}</span>}
        <TextField id="outlined-basic" label="description" variant="outlined" value={formik.values.desc} onChange={formik.handleChange} name='desc' />
        {formik.errors.desc && <span style={{color:"red"}}>{formik.errors.desc}</span>}
        <Button type="submit">add</Button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Add;

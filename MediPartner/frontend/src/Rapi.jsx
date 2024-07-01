import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
const Rapi = () => {
  let[data,updatedata]=useState([]);
  let[pid,updatepid]=useState();
  let[product,updateproduct]=useState({id:'',name:'',price:0,cat:'',cmp:''});
  useEffect(()=>{
    async function show()
    {
      let res=await axios.get('https://mejevo.pythonanywhere.com/product/');
      //console.log(res.data);
      updatedata(res.data);
    }
    show();
  });
  let change=(e)=>{
    updateproduct({...product,[e.target.name]:e.target.value})
  }
  return (
    <>
    <h1>App Component is running</h1>
    <input type='number' name="pid" value={pid} onChange={(e)=>{
      updatepid(e.target.value);
      async function searchs()
      {
        try{
          let res=await axios.get(`https://mejevo.pythonanywhere.com/product/${e.target.value}/`);
          let t=res.data;
          console.log(t)
          //alert(t.id+" "+t.name+' '+t.price+' '+t[0].cat+' '+t[0].cmp)
        }catch(error)
        {
          alert('no records found');
        }
      }
      searchs();
    }} />
    <table className='table table-bordered table-center table-hover'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        {data.map((v,i)=>{
          return <tr key={i}>
            <td>{v.id}</td>
            <td>{v.name}</td>
            <td>{v.price}</td>
            <td>{v.cat}</td>
            <td>{v.cmp}</td>
            <td><button className='btn btn-danger' onClick={()=>{
              async function deletePro()
              {
                let res=await axios.delete(`https://mejevo.pythonanywhere.com/product/${v.id}/`);
                if(res.status===204)
                {
                  alert('product deleted sucessfully');
                }
              }
              deletePro();
            }}>Delete</button></td>
            <td><button className='btn btn-warning' onClick={()=>{
              updateproduct(v);
            }}>Update</button></td>
          </tr>
        })}
      </tbody>
    </table>
    <form onSubmit={(e)=>{
      e.preventDefault();
      if(product.id==='')
      {
        async function addPro()
      {
        let res=await axios.post('https://mejevo.pythonanywhere.com/product/',product);
        if(res.status===201)
        {
          updateproduct({id:'',name:'',price:0,cat:'',cmp:''});
          alert('product added sucessfully');
        }
      }
      addPro();
      }
      else
      {
        async function updatePro()
      {
        let res=await axios.put(`https://mejevo.pythonanywhere.com/product/${product.id}/`,product);
        if(res.status===200)
        {
          updateproduct({id:'',name:'',price:0,cat:'',cmp:''});
          alert('product updated sucessfully');
        }
      }
      updatePro();
      }
    }}>
      Name<input type="text" name="name" value={product.name} onChange={change} /><br/>
      Price<input type="number" name="price" value={product.price} onChange={change} /><br/>
      Category<input type="text" name="cat" value={product.cat} onChange={change} /><br/>
      Company<input type="text" name="cmp" value={product.cmp} onChange={change} /><br/>
      {product.id===''?<button className='btn btn-primary'>Add Product</button>:<button className='btn btn-primary'>Update Product</button>}
    </form>
    </>
  )
}
export default Rapi
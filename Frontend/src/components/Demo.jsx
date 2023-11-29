import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';

const Demo = () => {
    var[name,setName]=useState()

   var parms=useParams()

    useEffect(()=>{
       getData()
    },[])

    var getData=()=>{
        axios.get(`http://localhost:5000/ed/${parms.id}`).then((resp)=>{
            console.log(resp.data.name)
            setName(resp.data.name)
        })
    }

    var editData=()=>{
        var data={name}
        axios.put(`http://localhost:5000/edditing/${parms.id}`,data).then((resp)=>{
           console.log(resp.data)
           if(resp.data!="")
           {
              setName(" ")
              window.location.reload(false) 
           }
        })
    }
  return (
    <div id='ed'>
       <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Enter Your WishList" value={name} onChange={(e)=>{setName(e.target.value)}}/>
      </Form.Group>
      </Form>  
      <Button variant="danger"onClick={editData} id='da'>Update<BrowserUpdatedIcon/></Button>
    </div>
  )
}

export default Demo

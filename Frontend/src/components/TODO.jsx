import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useRoutes } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const TODO = () => {
    var[name,setName]=useState("") 
    var[take,setTake]=useState([])

     var navigator=useNavigate()

    useEffect(()=>{
       Seen()
    },[name])

    var Store=()=>{
       var data={name}
        axios.post("http://localhost:5000/posting").then((resp)=>{
            console.log(resp.data)
            if(resp.data!=" ")
            {
               setName(" ")
            }
        })
    }
    var Seen=()=>{
      axios.get("http://localhost:5000/getting").then((resp)=>{
         console.log(resp.data)
         setTake(resp.data)
      })
    }
    var disappear=(id)=>{
         axios.delete(`http://localhost:5000/deletting/${id}`)
         .then((resp)=>{
          
              console.log(resp.data)
         })
       window.location.reload(false)
    }
  return (
    <div>
      <div id='ad'>
       <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Enter Your WishList" value={name} onChange={(e)=>{setName(e.target.value)}}/>
      </Form.Group>
      </Form>  
       <Button variant="success" id='add'onClick={Store}>Add<PersonAddAlt1Icon/></Button>
       </div>
      {  
          take.map((a)=>{
                   return(
                  <ul key={a._id} id='u'>
                    <div id='box'>
                    <li id='C'>List : {a.name}</li>
                    </div>
                     <DeleteIcon id="V" onClick={()=>{disappear(a._id)}}/>
                    <BorderColorIcon  id="B" onClick={()=>{navigator(`demo/${a._id}`)
                        window.location.reload(false)
                       }}  />
                  </ul>
                )
          })
      }
    </div>
  )
}

export default TODO

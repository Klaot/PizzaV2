import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'

function PizzaInfo() {
    const [pizza, setPizza] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()

   useEffect(() => {
    async function fetchPizza() {
       try {
        axios.get('https://kind-blue-chick-garb.cyclic.app/pizzas/' + id).then(res => setPizza(res.data))
       } catch {
        alert('Error loading')
        navigate('/')
       }
    }
    fetchPizza()
   }, []) 

   if (!pizza) {
    alert('Error loading')
    navigate('/')
   }

  return (
    <div className='container pizza_info'>
        <img src={pizza.imageUrl}/> 
        <div className='pizza_info__text'>
            <h1>{pizza.title}</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus tempora iure dicta, itaque aliquid eligendi saepe voluptatum incidunt amet nam quas repudiandae sunt, sequi consectetur. Accusantium minus nam recusandae odit.</p>
            <h3>{pizza.price} руб.</h3>
        </div>
        
    </div>
  )
}

export default PizzaInfo
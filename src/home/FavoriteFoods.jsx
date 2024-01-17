import React, { useState, useEffect } from 'react'
import FoodCards from '../components/FoodCards'

const FavoriteFoods = () => {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
            fetch('http://localhost:5000/all-foods')
         .then(res => res.json())
         .then(data => setFoods(data))
        }, [])


  return (
    <div>
        <FoodCards foods={foods} headline='Best Seller'/>
    </div>
  )
}

export default FavoriteFoods
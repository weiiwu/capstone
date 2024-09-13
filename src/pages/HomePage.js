import React, { useState } from 'react';
import Hero from '../components/Hero'
import Orders from '../components/Orders'
import Dishes from '../components/Dishes'

const HomePage = () => {

    const [dishes, setDishes] = useState([
        { id: 1, name: "Greek Salad", desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.", price: "12.99", img: "Dish1.jpg" },
        { id: 2, name: "Brushetta", desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.", price: "7.99", img: "Dish2.jpg" },
        { id: 3, name: "Grilled Fish", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.", price: "12.34", img: "Dish3.jpg" }
    
      ]);
      
  return (
    <>
        <Hero />
        <Orders />
        <Dishes dishes={dishes} />
    </>
  )
}

export default HomePage
import React from 'react'
import "./FeaturedProducts.scss"
import Card from '../Card/Card';


const FeaturedProducts = ({type}) => {

    const data = [
       {
        id: 1,
        img: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Long Sleeve Graphic T-shirt",
        isNew: true,
        oldPrice: 19,
        price: 12
       },
       {
        id: 2,
        img: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Coat",
        isNew: true,
        oldPrice: 19,
        price: 12
       },
       {
        id: 3,
        img: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Skirt",
        isNew: true,
        oldPrice: 19,
        price: 12
       },
       {
        id: 4,
        img: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Hat",
        isNew: true,
        oldPrice: 19,
        price: 12
       },
       
      ];


  return (
    <div className="featuredProducts">
    <div className="top">
      <h1>{type} products</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas.
      </p>
    </div>
    <div className="bottom">
      {data.map(item=>(
        <Card item={item} key={item.id}/>
      ))}
    </div>
  </div>
  )
}

export default FeaturedProducts
import React from 'react'
import "./List.scss"
import Card from '../Card/Card';

const data = [
    {
     id: 1,
     img: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
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

const List = () => {
  return (
    <div className='list'>{data?.map(item=>(
      <Card item={item} key={item.id}/>
    ))}</div>
  )
}

export default List
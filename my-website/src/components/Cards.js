import React from 'react'
import bruchetta from "../assets/bruchetta.svg";
import gSalad from "../assets/greek salad.jpg"
import lemonD from "../assets/lemon dessert.jpg"

const cardData =  [{
    title: "Greek Salad",
    description: "Our famous Greek Salad will take you to European summers. Full of lettuce, olives, tahini and Feta",
    image: gSalad,
    price: 14,
},
{
    title: "Bruschetta",
    description: "Crispy bread topped with tomatoes, balsmaic glaze and fresh basil. An appetizer to leave you craving more",
    image: bruchetta,
    price: 12,
},
{
    title: "Lemon Cake",
    description: "Sweet, fresh, moist and citrucy lemon cake. Have this dessert option to finish of your meal with a bang!",
    image:lemonD ,
    price: 8,
}
]


function Card(props){
    const {title, description, image, price} = props;

    return (
        <div className='card'>
            <img src={image} alt={"Food item"}></img>
            <div className='card-header'>
            <h3><strong>{title}</strong></h3>
            <h3>${price}</h3>
            </div>
            <p style={{color:"#495E57"}}>{description}</p>
            <p>Order a delivery</p>
        </div>
  )
}

function Cards() {
    return(
    <div className='card-container'>
        {cardData.map((card, index) => (
               <Card key={index} {...card}/>
        ))}
    </div>
    )
}

export default Cards
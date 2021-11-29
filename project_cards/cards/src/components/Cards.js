import React from 'react'
import Card from './Card'

import image1 from '../assets/wolface.jpg'
import image2 from '../assets/wolface-logo.jpg'
import image3 from '../assets/members.jpg'



const cards = [
    {
        id: 1,
        title: 'Wolface Instagram',
        image: image1,
        url: 'https://www.instagram.com/wolface.official/?hl=es-la',
        text: "Wolface Official Instagram Account"
    },
    {
        id: 2,
        title: 'Wolface Youtube',
        image: image2,
        url: 'https://www.youtube.com/channel/UCXmtevwUpoZ8Og5BuQ5lVBw/videos',
        text: "Wolface Official Youtube Account"
    },
    {
        id: 3,
        title: 'Metal-Archives',
        image: image3,
        url: 'https://www.metal-archives.com/bands/Wolface/3540442830',
        text: "Wolface in Metal Archives"
    }
]

function Cards() {
    return (

        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-md-4" key={card.id}> 
                            <Card title={card.title} imageSource={card.image} url={card.url} text={card.text} />
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Cards

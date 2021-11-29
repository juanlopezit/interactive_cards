import React from 'react'
import PropTypes from 'prop-types'

import './Cards.css'

function Card({title, imageSource, text, url}) {
    return (
        <div className="card rounded-0 text-center animate__animated animate__zoomIn">
            <div className="overflow">
                <img src={imageSource} alt="" className="card-img-top" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="card-text">
                    {
                        text ? text: 'lorem ipsum dolor sit amet soluta'
                    }
                </p>
                <a href={url} className="btn btn-outline-success" target='_blank' rel="noreferrer">
                    Go to this website
                </a>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string,
    text: PropTypes.string
}

export default Card

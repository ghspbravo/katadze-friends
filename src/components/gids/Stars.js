import React from 'react'

export default (stars, clickHandler) => {
    return (
        <div className="stars" data-stars={stars}>
            <svg onClick={clickHandler} height="25" width="23" className="star rating" data-rating="1">
                <polygon data-rating="1" points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
            </svg>
            <svg onClick={clickHandler} height="25" width="23" className="star rating" data-rating="2">
                <polygon data-rating="2" points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
            </svg>
            <svg onClick={clickHandler} height="25" width="23" className="star rating" data-rating="3">
                <polygon data-rating="3" points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
            </svg>
            <svg onClick={clickHandler} height="25" width="23" className="star rating" data-rating="4">
                <polygon data-rating="4" points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
            </svg>
            <svg onClick={clickHandler} height="25" width="23" className="star rating" data-rating="5">
                <polygon data-rating="5" points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
            </svg>
        </div>
    )
}


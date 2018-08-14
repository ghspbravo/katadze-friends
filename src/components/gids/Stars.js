import React from 'react'

export default stars => {
    return (
        <div className="stars" data-stars={stars}>
            <svg height="25" width="23" className="star rating" data-rating="1">
                <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
            </svg>
            <svg height="25" width="23" className="star rating" data-rating="2">
                <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
            </svg>
            <svg height="25" width="23" className="star rating" data-rating="3">
                <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
            </svg>
            <svg height="25" width="23" className="star rating" data-rating="4">
                <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
            </svg>
            <svg height="25" width="23" className="star rating" data-rating="5">
                <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
            </svg>
        </div>
    )
}

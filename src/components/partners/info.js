import React from 'react'

export default partner => {
    return (
        <div className="container">
            <h2 className="text-center">{partner.title}</h2>
            <h1 className="text-center"><span>{partner.category.name}</span></h1>
            <img className="col-12" src={partner.img} alt="partnerImg" />
            <p className="v-offset-small">{partner.content}</p>
        </div>
    )
}

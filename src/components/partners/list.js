import React from 'react'
import becomePartner from './becomePartner'
import { Link } from 'react-router-dom'

import instructionImage from './howTo.png'

export default (partners, showPartnerForm, showPartnerFormHandler, handeInput, handleSubmit, errors, status, fields) => {
    return (
        <div>
            <section id="partners-header" className="vh-100 col-12 text-center">
                <h2>Друзья.Katadze</h2>
                <p>Дружба – это продуктивно.</p>
            </section>
            <section className="container justify-center">
                {showPartnerForm
                    ? becomePartner(handeInput, handleSubmit, errors, status, fields)
                    : <button onClick={() => showPartnerFormHandler()}><h1 className="upper underline"><span>Стать партнером KATADZE</span></h1></button>
                }
            </section>
            <section className="container justify-center">
                <div class="col-12">
                    <img style={{
                        height: 'auto',
                        width: '100%',
                        objectFit: 'contain',
                    }} src={instructionImage} alt="instructions"/>
                </div>
            </section>
            <section className="container">
                <p style={{
                    fontSize: '2rem',
                    color: '#fb0',
                    marginBottom: '50px'
                }}>Доступно членам клуба KATADZE</p>
                {
                    partners
                        ? partners.map(category =>
                            <div key={category.id} className="row">
                                <div className="category-name col-12">
                                    <p className="small">{category.name}</p>
                                </div>
                                {
                                    category.partners.map(partner =>
                                        <div key={partner.id} className="row list-card">
                                            <div style={{
                                                padding: '0 25px'
                                            }} className="col-lg-6 order-fix">
                                                <h1>{partner.title}</h1>
                                                <p className="secondary">{partner.description}</p>
                                                <p className="secondary small v-offset-small">{partner.tags}</p>
                                                <button className="more-button"><Link to={`/partners/id=${partner.id}`}>Подробнее</Link></button>
                                            </div>
                                            <div className="col-lg-6 justify-center align-center">
                                                <img className="list-card-pic" style={{ width: '100%' }} src={partner.img} alt="project-pic" />
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        )
                        : <h1>Loading, please wait...</h1>
                }
            </section>
        </div>
    )
}

import React, { Component } from 'react'
import partnersCategories from '../fakeServer/PartnersCategories'


export default class Partners extends Component {

    componentDidMount() {
        this.props.fetchPartnersCategories(partnersCategories)
    }

    render() {

        return (
            <div>
                <section id="partners-header" className="vh-50 col-12 text-center">
                    <h2>Партнеры</h2>
                </section>
                <section className="container row justify-center">
                    <button onClick={() => console.log(this.props.partners)}><h1 className="upper underline"><span>Стать партнером</span></h1></button>
                </section>
                {
                    this.props.partners && this.props.partners.results
                        ? this.props.partners.results.map(category =>
                            <section key={category.id} className="container">
                                <div className="row">
                                    <div className="category-name col-12">
                                        <p className="small">{category.name}</p>
                                    </div>
                                </div>
                                {
                                    category.partners.map(partner =>
                                        <div key={partner.id} className="row list-card">
                                            <div className="col-lg-6">
                                                <h1>{partner.title}</h1>
                                                <p className="secondary">{partner.description}</p>
                                                <p className="secondary small v-offset-small">{partner.tags}</p>
                                                <button className="more-button">Подробнее</button>
                                            </div>
                                            <div className="col-lg-6 justify-center align-center">
                                                <img className="list-card-pic" src={partner.img} alt="project-pic" />
                                            </div>
                                        </div>
                                    )
                                }
                            </section>
                        )
                        : <h1>Loading, please wait...</h1>
                }
            </div>
        )
    }
}

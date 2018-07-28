import React, { Component } from 'react'
import { connect } from "react-redux";
import fetchPartners from "../actions/PartnersAction";

export default class Partners extends Component {

    componentDidMount() {
        // this.props.dispatch(fetchPartners());
        console.log(this.props)
    }

    render() {

        return (
            <div>
                <section id="partners-header" className="vh-50 col-12 text-center">
                    <h2>Партнеры</h2>
                </section>
                <section className="container row justify-center">
                    <button><h1 className="upper underline"><span>Стать партнером</span></h1></button>
                </section>
                <section className="container">
                    <div className="row">
                        <div className="category-name col-lg-2">
                            <p className="small">{this.props.partners.count}</p>
                        </div>
                        <div className="col-lg-10 category-delimiter"><hr /></div>
                    </div>
                    <div className="row list-card">
                        <div className="col-lg-6">
                            <h1>Название проекта</h1>
                            <p className="secondary">Sed ut perspiciatis, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias.</p>
                            <p className="secondary small tags">тэги, тэги, тэги</p>
                            <button className="more-button">Подробнее</button>
                        </div>
                        <div className="col-lg-6 justify-center align-center">
                            <img className="project-pic" src="" alt="project-pic" />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
// const mapStateToProps = state => ({
//     partners: state.partners.items,
//     loading: state.partners.loading,
//     error: state.partners.error
// });

// export default connect(mapStateToProps)(Partners);

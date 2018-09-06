import React, { Component } from 'react'

export default class FAQ extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentQuestion: 0,
        }
    }

    render() {
        return (
            <section className="offset-1 offset-lg-2">
                <div className="row">
                    <div className="col-md-4">
                        {
                            this.props.questionList.map((question, i) => <div className="col-12">
                                <button style={{color: i === this.state.currentQuestion ? "#41bfef" : 'black'}} onClick={() => {this.setState({currentQuestion: i}); document.querySelector('#answer').scrollIntoView({behavior: 'smooth'})}} className="question"><p>{question.title}</p></button>
                            </div>)
                        }
                    </div>
                    <div className="col-lg-6 col-md-8">
                        <div id='answer' className="col-12">
                            <h1 className="bold no-margin">{this.props.questionList[this.state.currentQuestion].title}</h1>
                            <div className="v-offset-small">{this.props.questionList[this.state.currentQuestion].answer}</div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

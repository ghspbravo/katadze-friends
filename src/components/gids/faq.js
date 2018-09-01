import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <div>
            <section id="faq-main" className="row vh-50">
                <div className="offset-1 offset-lg-2 col-lg-4">
                    <h1 className="lead">Ответы на все твои вопросы</h1>
                    <h1><span>И не только</span></h1>
                </div>
            </section>
            <section className="light-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 question-wrapper">
                            <div className="question col-12"><h1>
                                Как стать гидом?
                                </h1></div>
                            <div className="answer col-12">
                                <p>Чтобы стать гидом, в первую очередь, необходимо зарегистрироваться на платформе Katadze.ru и <Link to='/profile' className='small bold'>создать профиль гида</Link>. Далее нужно заполнить всю необходимую информацию о себе и об активностях, которые ты готов предложить.
<br/><br/>
Чем креативнее ты заполнишь данные о себе – тем больше путешественников будут обращать внимание на твой профиль.
<br/><br/>
Также ты можешь установить стоимость (руб./час) своих услуг на своё усмотрение или поставить пометку БЕСПЛАТНО. Советуем тебе не завышать цену, так как это может негативно отразиться на твоей популярности.
<br/><br/>
Как только твой профиль полностью заполнен – ты сразу же появишься в общем списке гидов, где путешественники смогут найти тебя и связаться.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container">
                <Link to='contacts'>
                    <h1 className="secondary text-center">Не нашел <span className="lead">ответ</span></h1>
                </Link>
            </section>
        </div>
    )
}
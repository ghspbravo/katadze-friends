import React from 'react'
import { Link } from 'react-router-dom'
import FAQ from '../FAQ';

export default () => {
	const questions = [
		{
			title: 'Как стать участником события?',
			answer: <p>Для того, чтобы принять участие в любом из наших проектов достаточно <Link to='/profile' className="bold">зарегистрироваться</Link> на нашем портале, выбрать интересное событие и оплатить участие в нем, кликнув по соответствующей кнопке.</p>,
		},
		{
			title: 'Стать участником события может любой желающий?',
			answer: <p>Да, мы считаем, что привлекать к активному образу жизни можно и нужно людей всех возрастов, пола и убеждений. Никаких ограничений и фильтров. Только Вы и События Katadze.</p>
		},
		{
			title: 'Где узнать еще больше про отдельное мероприятие?',
			answer: <p>Специально для каждого проекта мы создаем отдельную группу в социальной сети в Вконтакте, где размещаем всю информацию: от расписания до фото-отчетов. Следите за нами на <a href="https://vk.com/katadzzze" target="_blank" className="bold">нашей официальной страничке</a></p>
		},
		{
			title: 'Можно ли самому стать организатором события?',
			answer: <p>Можно и нужно! Специально для этого мы создали сервис <Link to='/gids' className="bold">Katadze Guide</Link>, благодаря которому теперь у каждого есть возможность организовать с нашей помощью свой Event.</p>
		}
	]

	return (
		<div>
			<section id="faq-main" className="row vh-50">
				<div className="offset-1 offset-lg-2 col-lg-4">
					<h1 className="lead">Ответы на все твои вопросы</h1>
					<h1><span>И не только</span></h1>
				</div>
			</section>
			{/* <section className="light-bg">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 question-wrapper">
							<div className="question col-12"><h1>
								Как стать участником события?
                                </h1></div>
							<div className="answer col-12">
								<p>Для того, чтобы принять участие в любом из наших проектов достаточно <Link to='/profile' className="bold small">зарегистрироваться</Link> на нашем портале, выбрать интересное событие и оплатить участие в нем, кликнув по соответствующей кнопке.</p>
							</div>
						</div>
						<div className="col-lg-6 question-wrapper">
							<div className="question col-12"><h1>
								Стать участником события может любой желающий?
                                </h1></div>
							<div className="answer col-12">
								<p>Да, мы считаем, что привлекать к активному образу жизни можно и нужно людей всех возрастов, пола и убеждений. Никаких ограничений и фильтров. Только Вы и События Katadze.</p>
							</div>
						</div>
						<div className="col-lg-6 question-wrapper">
							<div className="question col-12"><h1>
								Где узнать еще больше про отдельное мероприятие?
                                </h1></div>
							<div className="answer col-12">
								<p>Специально для каждого проекта мы создаем отдельную группу в социальной сети в Вконтакте, где размещаем всю информацию: от расписания до фото-отчетов. Следите за нами на <a href="https://vk.com/katadzzze" target="_blank" className="bold small">нашей официальной страничке</a></p>
							</div>
						</div>
						<div className="col-lg-6 question-wrapper">
							<div className="question col-12"><h1>
								Можно ли самому стать организатором события?
                                </h1></div>
							<div className="answer col-12">
								<p>Можно и нужно! Специально для этого мы создали сервис <Link to='/gids' className="bold small">Katadze Guide</Link>, благодаря которому теперь у каждого есть возможность организовать с нашей помощью свой Event.</p>
							</div>
						</div>
					</div>
				</div>
			</section> */}
			<FAQ questionList={questions} />
			<section className="container">
				<Link to='contacts'>
					<h1 className="secondary text-center">Не нашел <span className="lead">ответ</span></h1>
				</Link>
			</section>
		</div>
	)
}

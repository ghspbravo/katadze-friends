import React from 'react'
import cityImage from '../../resourses/Contacts/city.png'
import contactForm from '../contactForm';

export default (handeInput, handleSubmit, errors, status, fields) => {
	return (
		<div>
			<section id="contacts-main" className="row vh-50">
				<div className="offset-1 offset-lg-2 col-lg-4 col-md-6">
					<h1 className="lead">У тебя остался вопрос?</h1>
					<h1><span>Свяжись с нами</span></h1>
					<div className="col-lg-12 contact-form">
						{contactForm(handeInput, handleSubmit, errors, status, fields)}
					</div>
				</div>
			</section>
			<section id="writeus" className="light-bg">
				<div className="row justify-center align-center vh-50">
					<p className="secondary lead col-12 text-center">Напишите нам</p>
					<h1 className="col-12 text-center">katadzzze@yandex.ru</h1>
				</div>
			</section>
			<section id="adress" className="container">
				<div className="justify-center">
					<div className="col-4"><img src={cityImage} alt="cityImage" /></div>
				</div>
				<div className="adress justify-center">
					<h1 className="col-12">Екатеринбург</h1>
					<p className="secondary">
						Мира 19, ГУК-309<br />
						<span className="tel-number">8 (966) 709-09-09</span>
					</p>
				</div>
			</section>
		</div>
	)
}

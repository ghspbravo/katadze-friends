import React from 'react'
import cityImage from '../../resourses/Contacts/city.png'

export default () => {
	return (
		<div>
			<section id="contacts-main" className="row vh-50">
				<div className="offset-1 offset-lg-2 col-lg-4 col-md-6">
					<h1 className="lead">У тебя остался вопрос?</h1>
					<h1><span>Свяжись с нами</span></h1>
					<div className="col-lg-12 contact-form">
						<form autoComplete="off" className="justify-space-between row" action="">
							<input autoComplete="theme" className="col-12" type="text" placeholder="Меня интересует" name="theme" id="theme" />
							<input autoComplete="name" className="col-12 col-xl-5" type="text" placeholder="Имя" name="name" id="name" />
							<input autoComplete="email" className="col-12 offset-xl-1 col-xl-6" type="email" placeholder="Электронная почта" name="email" id="email" />
							<input autoComplete="question" className="col-12" type="text" placeholder="Ваш вопрос (желательно)" name="question" id="question" />
							<button type="submit">Отправить</button>
						</form>
					</div>
				</div>
			</section>
			<section id="writeus" className="light-bg">
				<div className="row justify-center align-center vh-50">
					<p className="secondary lead col-12 text-center">Напишите нам</p>
					<h1 className="col-12 text-center">info@katadze.com</h1>
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
						<span className="tel-number">+7 (000) 000-00-00</span>
					</p>
				</div>
			</section>
		</div>
	)
}

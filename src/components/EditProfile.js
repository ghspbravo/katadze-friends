import React, { Component } from 'react'

export default class Profile extends Component {
	render() {
		return (
			<form>
				<section className="jumbotron">
					<div className="row">
						<p>Обязательная информация</p>
					</div>
					<div className="row align-center">
						<div className="col-3 text-right"><label htmlFor='name'><p className="small">Имя</p></label></div>
						<div className="offset-1 col-8"><input className='col-12' id='name' type="text" placeholder='Имя' /></div>

						<div className="col-3 text-right"><label htmlFor='surname'><p className="small">Фамилия</p></label></div>
						<div className="offset-1 col-8"><input className='col-12' id='surname' type="text" placeholder='Фамилия' /></div>

						<div className="offset-4 col-8"><p className='small secondary'>В вашем публичном профиле отображается только ваше имя. Когда вы запросите бронирование, гид увидит ваши имя и фамилию.</p></div>

						<div className="col-3 text-right"><label htmlFor="gender"><p className="small">Я</p></label></div>
						<div className="offset-1 col-8"><input className='col-4' id='gender' type="text" placeholder='Пол' /></div>
					</div>
				</section>
			</form>
		)
	}
}
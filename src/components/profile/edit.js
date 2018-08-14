import React from 'react'
import addIcon from '../../resourses/icons/add.svg'

export default () => {
	return (
		<form>
			<section className="jumbotron">
				<div className="row head">
					<p>Обязательная информация</p>
				</div>
				<div className="row content">
					<div className="col-3 text-right"><label htmlFor='name'><p className="small">Имя</p></label></div>
					<div className="offset-1 col-8"><input className='col-12' id='name' type="text" /></div>

					<div className="col-3 text-right"><label htmlFor='surname'><p className="small">Фамилия</p></label></div>
					<div className="offset-1 col-8"><input className='col-12' id='surname' type="text" /></div>

					<div className="offset-4 col-8"><p className='small secondary'>В вашем публичном профиле отображается только ваше имя. Когда вы запросите бронирование, гид увидит ваши имя и фамилию.</p></div>

					<div className="col-3 text-right"><label htmlFor="gender"><p className="small">Я</p></label></div>
					<div className="offset-1 col-8"><select className='col-5' id='gender'>
						<option value="" disabled selected hidden>Пол</option>
						<option value="male">Мужчина</option>
						<option value="female">Женщина</option>
					</select></div>

					<div className="col-3 text-right"><label htmlFor='burthdate'><p className="small">Дата рождения</p></label></div>
					<div className="offset-1 col-8"><input className='col-5' id='burthdate' type="date" /></div>

					<div className="col-3 text-right"><label htmlFor='email'><p className="small">Электронная почта</p></label></div>
					<div className="offset-1 col-8"><input className='col-12' id='email' type="email" placeholder='example@mail.ru' /></div>

					<div className="col-3 text-right"><label htmlFor='phoneNumber'><p className="small">Номер телефона</p></label></div>
					<div className="offset-1 col-8"><input className='col-12' id='phoneNumber' type="tel" /></div>

					<div className="col-3 text-right"><label><p className="small">Установление личности</p></label></div>
					<div className="offset-1 col-8">
						<section className="jumbotron">
							<div className="row head"><p className='small'>Удостоверение личности гос. образца</p></div>
							<label className="row align-center" htmlFor="passport">
								<object type="image/svg+xml" data={addIcon} width="25" height="25" />
								<p className="small">Отправить фото на модерацию</p></label>
							<input id="passport" type="file" accept=".jpg, .jpeg, .png" />
						</section>
					</div>

					<div className="col-3 text-right"><label htmlFor="language"><p className="small">Выбранный язык</p></label></div>
					<div className="offset-1 col-8"><select className='col-5' id='language'>
						<option value="ru">Русский</option>
						<option value="eng">Английский</option>
					</select></div>

					<div className="offset-4 col-8"><p className='small secondary'>Мы будем направлять вам сообщения на этом языке.</p></div>

					<div className="col-3 text-right"><label htmlFor="currency"><p className="small">Выбранный язык</p></label></div>
					<div className="offset-1 col-8"><select className='col-5' id='currency'>
						<option value="ru">российский рубль</option>
						<option value="eng">буржуйский доллар</option>
					</select></div>

					<div className="offset-4 col-8"><p className='small secondary'>Мы будем показывать вам цены в этой валюте.</p></div>

					<div className="col-3 text-right"><label htmlFor='city'><p className="small">Где Вы живете</p></label></div>
					<div className="offset-1 col-8"><input className='col-12' id='city' type="email" placeholder='Город' /></div>

				</div>
			</section>
			<section className="jumbotron">
				<div className="row head"><p>Фото в профиле</p></div>
				<div className="row content">
					<div className="col-4 avatar-container">
						<img src="http://via.placeholder.com/250x250/ffffff" alt="avatar-preview" />
					</div>
					<div className="col-8">
						<label htmlFor="avatar"><p className="small">Важно, чтобы ваше лицо было отчетливо видно на фото.</p></label>
						<input id="avatar" type="file" accept=".jpg, .jpeg, .png" />
					</div>
				</div>
			</section>

			<button className="col-md-4 lead" onClick={true} type="submit">Сохранить</button>
		</form>
	)
}

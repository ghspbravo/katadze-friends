import React from 'react'

export default (user) => {
	return (
		<form>
			<section className="jumbotron">
				<div className="row head">
					<p>Обязательная информация</p>
				</div>
				<div className="row content">
					<div className="col-3 text-right"><label htmlFor='name'><p className="small">Имя</p></label></div>
					<div className="offset-1 col-8"><input value={user.first_name ? user.first_name : ''} disabled className='col-12' id='name' type="text" /></div>

					<div className="col-3 text-right"><label htmlFor='surname'><p className="small">Фамилия</p></label></div>
					<div className="offset-1 col-8"><input value={user.last_name ? user.last_name : ''} disabled className='col-12' id='surname' type="text" /></div>

					<div className="offset-4 col-8"><p className='small secondary'>В вашем публичном профиле отображается только ваше имя. Когда вы запросите бронирование, гид увидит ваши имя и фамилию.</p></div>

					<div className="col-3 text-right"><label htmlFor="gender"><p className="small">Пол</p></label></div>
					<div className="offset-1 col-8"><select value={user.gender} disabled className='col-md-6 col-12' id='gender'>
						<option value="" disabled selected hidden></option>
						<option value="0">Мужчина</option>
						<option value="1">Женщина</option>
					</select></div>

					<div className="col-3 text-right"><label htmlFor='burthdate'><p className="small">Дата рождения</p></label></div>
					<div className="offset-1 col-8"><input value={user.date_birth ? user.date_birth : ''} disabled className='col-md-6 col-12' id='burthdate' type="date" /></div>

					<div className="col-3 text-right"><label htmlFor='email'><p className="small">Электронная почта</p></label></div>
					<div className="offset-1 col-8"><input value={user.email ? user.email : ''} disabled className='col-12' id='email' type="email" placeholder='example@mail.ru' /></div>

					<div className="col-3 text-right"><label htmlFor='phoneNumber'><p className="small">Номер телефона</p></label></div>
					<div className="offset-1 col-8"><input value={user.phones && user.phones[0] ? user.phones[0].number : ''} disabled className='col-12' id='phoneNumber' type="tel" /></div>

					<div className="col-3 text-right"><label htmlFor="language"><p className="small">Выбранный язык</p></label></div>
					<div className="offset-1 col-8"><select value={user.locale ? user.locale : 'ru_RU'} disabled className='col-md-6 col-12' id='language'>
						<option value="ru_RU">Русский</option>
						<option value="ENG">Английский</option>
					</select></div>

					<div className="offset-4 col-8"><p className='small secondary'>Мы будем направлять вам сообщения на этом языке.</p></div>

					<div className="col-3 text-right"><label htmlFor="currency"><p className="small">Выбранная валюта</p></label></div>
					<div className="offset-1 col-8"><select value={user.currency ? user.currency : 'RUR'} disabled className='col-md-6 col-12' id='currency'>
						<option value="RUR">российский рубль</option>
						<option value="eng">доллар</option>
					</select></div>

					<div className="offset-4 col-8"><p className='small secondary'>Мы будем показывать вам цены в этой валюте.</p></div>

					<div className="col-3 text-right"><label htmlFor='city'><p className="small">Где Вы живете</p></label></div>
					<div className="offset-1 col-8"><input value={user.residence ? user.residence : ''} disabled className='col-12' id='city' type="email" placeholder='Город' /></div>

				</div>
			</section>
			<section className="jumbotron">
				<div className="row head"><p>Фото в профиле</p></div>
				<div className="row content">
					<div className="col-md-4 col-12 avatar-container justify-center">
						<img src={user.img_photo ? user.img_photo : ''} alt="avatar-preview" />
					</div>
					<div className="col-md-8 col-12 align-center">
						<p className="small">Важно, чтобы ваше лицо было отчетливо видно на фото.</p>
						<label className="file v-offset-small" htmlFor="avatar"><p>Загрузить фото</p></label>
						<input disabled id="avatar" type="file" accept=".jpg, .jpeg, .png" />
					</div>
				</div>
			</section>

			<button disabled className="col-md-4 lead" onClick={() => true} type="submit">Сохранить</button>
		</form>
	)
}

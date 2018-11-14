import React, { Component } from 'react'

import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import { STATUS_SUCCESS, STATUS_PROCESSING } from '../../actions';
import errorMessage from '../errorMessage'


export default class Edit extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isCropVisible: false,

			isSubmit: false,

			isFirstNameError: undefined,
			isLastNameError: undefined,
			isGenderError: undefined,
			isDateBirthError: undefined,
			isPhoneError: undefined,
			isLocaleError: undefined,
			isCurrencyError: undefined,
			isResidenceError: undefined,
			isAvatarError: undefined,

			imgList: props.user.list,
			isImgListLoaded: props.user.list.length,

			avatarId: undefined,
			avatar: props.user.avatar,
			thumb: props.user.avatar
		}
	}

	componentDidUpdate() {
		if (this.state.isFirstNameError !== this.props.errors['first_name']) this.setState({ isSubmit: false, isFirstNameError: this.props.errors['first_name'] })
		if (this.state.isLastNameError !== this.props.errors['last_name']) this.setState({ isSubmit: false, isLastNameError: this.props.errors['last_name'] })
		if (this.state.isGenderError !== this.props.errors['gender']) this.setState({ isSubmit: false, isGenderError: this.props.errors['gender'] })
		if (this.state.isDateBirthError !== this.props.errors['date_birth']) this.setState({ isSubmit: false, isDateBirthError: this.props.errors['date_birth'] })
		if (this.state.isPhoneError !== this.props.errors['phone']) this.setState({ isSubmit: false, isPhoneError: this.props.errors['phone'] })
		if (this.state.isLocaleError !== this.props.errors['locale']) this.setState({ isSubmit: false, isLocaleError: this.props.errors['locale'] })
		if (this.state.isCurrencyError !== this.props.errors['currency']) this.setState({ isSubmit: false, isCurrencyError: this.props.errors['currency'] })
		if (this.state.isResidenceError !== this.props.errors['residence']) this.setState({ isSubmit: false, isResidenceError: this.props.errors['residence'] })
		if (this.state.isAvatarError !== this.props.errors['avatar']) this.setState({ isSubmit: false, isAvatarError: this.props.errors['avatar'] })

		if (this.state.imgList !== this.props.user.list
			&& !this.state.isImgListLoaded) {
			const mainImage = this.props.user.list
				.filter(item => item.is_avatar)[0]
			this.setState({
				imgList: this.props.user.list,
				isImgListLoaded: true,
				avatar: mainImage.img,
				thumb: mainImage.thumb,
				avatarId: mainImage.id,
			})
		}

		if (this.props.user.newPhoto)
			if (this.state.avatar !== this.props.user.newPhoto.img
				|| this.state.thumb !== this.props.user.newPhoto.thumb) {
				this.setState({
					imgList: [{
						id: this.state.avatarId,
						img: this.state.avatar
					}, ...this.state.imgList],
					avatar: this.props.user.newPhoto.img,
					avatarId: this.props.user.newPhoto.id,
					thumb: this.props.user.newPhoto.thumb,
				})
			}

	}

	render() {
		return (
			<div>
				<form id='userInfo' className="form" onSubmit={(e) => {
					this.setState(() => ({
						isSubmit: true,
						isCropVisible: false
					}), this.props.patchHandler(e))

				}}>
					<section className="jumbotron">
						<div className="row head">
							<p>Обязательная информация</p>
						</div>
						<div className="row content">
							<div className="col-3 text-right"><label htmlFor='first_name'><p className="small">Имя</p></label></div>
							<div className="offset-1 col-8">
								<input
									className={`col-12 ${this.state.isFirstNameError ? 'form-input-error' : null}`}
									id='first_name'
									type="text"
									defaultValue={this.props.user.first_name}
									onBlur={() => {
										if (this.state.isFirstNameError) this.setState({ isFirstNameError: false })
									}}
								/>
								{this.state.isFirstNameError
									? errorMessage(this.props.errors, 'first_name')
									: null}
							</div>

							<div className="col-3 text-right"><label htmlFor='last_name'><p className="small">Фамилия</p></label></div>
							<div className="offset-1 col-8">
								<input
									className={`col-12 ${this.state.isLastNameError ? 'form-input-error' : null}`}
									id='last_name'
									type="text"
									defaultValue={this.props.user.last_name}
									onBlur={() => {
										if (this.state.isLastNameError) this.setState({ isLastNameError: false })
									}}
								/>
								{this.state.isLastNameError
									? errorMessage(this.props.errors, 'last_name')
									: null}
							</div>

							<div className="offset-4 col-8"><p className='small secondary'>В вашем публичном профиле отображается только ваше имя. Когда вы запросите бронирование, гид увидит ваши имя и фамилию.</p></div>

							<div className="col-3 text-right"><label htmlFor="gender"><p className="small">Пол</p></label></div>
							<div className="offset-1 col-8">
								<select
									className={`col-md-6 col-12 ${this.state.isGenderError ? 'form-input-error' : null}`}
									id='gender'
									onChange={() => {
										if (this.state.isGenderError) this.setState({ isGenderError: false })
									}}
								>
									<option selected={this.props.user.gender} value="0">Мужчина</option>
									<option selected={this.props.user.gender} value="1">Женщина</option>
								</select>
								{this.state.isGenderError
									? errorMessage(this.props.errors, 'gender')
									: null}
							</div>

							<div className="col-3 text-right"><label htmlFor='date_birth'><p className="small">Дата рождения</p></label></div>
							<div className="offset-1 col-8">
								<input
									className={`col-md-6 col-12 ${this.state.isDateBirthError ? 'form-input-error' : null}`}
									id='date_birth'
									type="date"
									defaultValue={this.props.user.date_birth}
									onBlur={() => {
										if (this.state.isDateBirthError) this.setState({ isDateBirthError: undefined })
									}}
								/>
								{this.state.isDateBirthError
									? errorMessage(this.props.errors, 'date_birth')
									: null}
							</div>

							{/* <div className="col-3 text-right"><label htmlFor='email'><p className="small">Электронная почта</p></label></div>
							<div className="offset-1 col-8"><input
								className='col-12'
								id='email'
								type="email"
								placeholder='example@mail.ru'
								onChange={this.props.inputChangeHandler}
								value={this.props.editedFields.email || this.props.user.email}
							/></div> */}

							<div className="col-3 text-right"><label htmlFor='phone'><p className="small">Номер телефона</p></label></div>
							<div className="offset-1 col-8">
								<input
									className={`col-12 ${this.state.isPhoneError ? 'form-input-error' : null}`}
									id='phone'
									type="tel"
									defaultValue={this.props.user.phones && this.props.user.phones[0].number}
									onBlur={() => {
										if (this.state.isPhoneError) this.setState({ isPhoneError: false })
									}}
								/>
								{this.state.isPhoneError
									? errorMessage(this.props.errors, 'phone')
									: null}
							</div>

							<div className="col-3 text-right"><label htmlFor="locale"><p className="small">Выбранный язык</p></label></div>
							<div className="offset-1 col-8">
								<select
									className={`col-md-6 col-12 ${this.state.isLocaleError ? 'form-input-error' : null}`}
									id='locale'
								>
									<option selected={this.props.user.locale === 'ru_RU'} value="ru_RU">Русский</option>
									{/* <option selected={this.props.user.locale === 'ENG'} value="ENG">Английский</option> */}
								</select>
								{this.state.isLocaleError
									? errorMessage(this.props.errors, 'locale')
									: null}
							</div>

							<div className="offset-4 col-8"><p className='small secondary'>Мы будем направлять вам сообщения на этом языке.</p></div>

							<div className="col-3 text-right"><label htmlFor="currency"><p className="small">Выбранная валюта</p></label></div>
							<div className="offset-1 col-8">
								<select
									className={`col-md-6 col-12 ${this.state.isCurrencyError ? 'form-input-error' : null}`}
									id='currency'
									onChange={() => {
										if (this.state.isCurrencyError) this.setState({ isCurrencyError: false })
									}}
								>
									<option selected={this.props.user.currency === 'RUR'} value="RUR">российский рубль</option>
									{/* <option value="eng">доллар</option> */}
								</select>
								{this.state.isCurrencyError
									? errorMessage(this.props.errors, 'currency')
									: null}
							</div>

							<div className="offset-4 col-8"><p className='small secondary'>Мы будем показывать вам цены в этой валюте.</p></div>

							<div className="col-3 text-right"><label htmlFor='residence'><p className="small">Где Вы живете</p></label></div>
							<div className="offset-1 col-8">
								<input
									className={`col-12 ${this.state.isResidenceError ? 'form-input-error' : null}`}
									id='residence'
									type="text"
									placeholder='Город'
									defaultValue={this.props.user.residence}
									onBlur={() => {
										if (this.state.isResidenceError) this.setState({ isResidenceError: false })
									}}
								/>
								{this.state.isResidenceError
									? errorMessage(this.props.errors, 'residence')
									: null}
							</div>

						</div>
					</section>
					{this.props.status === STATUS_PROCESSING
						? <p className="small">Обработка</p>
						: <button style={{ marginTop: 0 }} className="col-md-4 lead" type="submit">Сохранить</button>
					}
					{this.props.status === STATUS_SUCCESS
						? <p className="small">Данные обновлены</p>
						: null
					}
				</form>
				<div className="form">
					<section className="jumbotron">
						<div className="row head"><p>Фото в профиле</p></div>
						{this.state.isCropVisible
							? <div className="row content">
								<div className="col-md-6 col-12 avatar-container justify-center">
									<Cropper src={this.state.avatar}
										viewMode={1}
										aspectRatio={1}
										guides={false}
										rotatable={false}
										scalable={false}
										zoomable={false}
										checkCrossOrigin={false}
										movable={false}
										preview='.avatar-preview'
										ref='cropper'
										crop={(event) => {
											this.props.cropHandler(event.detail.x,
												event.detail.y,
												event.detail.width,
												event.detail.height)
										}}
									/>
								</div>
								<div className="col-md-6">
									<p className="small">Проверьте как выглядит Ваше фото</p>
									<div className="row no-gutters align-items-end">
										<div className=" avatar-preview avatar-big-preview"></div>
										<div className=" avatar-preview avatar-small-preview" style={{ marginLeft: '15px' }}></div>
									</div>
									<button style={{ marginTop: '10px' }} className="lead" type="button"
										onClick={() => this.props.patchPhotoHandler(this.state.avatarId)}>
										Подтвердить изменения</button>
								</div>
							</div>
							: <div className="row content">
								<div className="col-md-6 col-12 avatar-container justify-center">
									<img src={this.state.thumb ? this.state.thumb : this.state.avatar} alt="avatar-preview" />
								</div>
								{this.state.isAvatarError
									? errorMessage(this.props.errors, 'avatar')
									: null}
								<div className="d-none d-md-block col-md-6">
									<p className="small">Не нравится как фото обрезается на аватарке?</p>
									<button style={{ marginTop: '15px' }} className="lead" type="button" onClick={() => this.setState({ isCropVisible: true })} >Изменить отображение</button>
								</div>
							</div>
						}
						<div className="col-12 align-center">
							<p className="small">Важно, чтобы ваше лицо было отчетливо видно на фото.</p>
							<label className="file v-offset-small" htmlFor="avatarInput"><p>Загрузить фото</p></label>
							<input style={{ display: 'none' }} onChange={(e) => {
								if (this.state.isAvatarError) this.setState({ isAvatarError: false })
								this.props.fileLoadHandler(e)
							}} id="avatarInput" type="file" accept=".jpg, .jpeg, .png" />
						</div>
					</section>
					<section className="jumbotron">
						<div className="row head"><p>Дополнительные фотографии</p></div>
						<div class="row profile-photos justify-content-between">
							{this.state.imgList
								? this.state.imgList
									.filter(img => !img.is_avatar)
									.sort((a, b) => b.id - a.id)
									.map((item, index) => <div key={index} class="profile-photos-item">
										<img src={item.img} />
										<div className="profile-photos-item-destroy">
											<button onClick={() => {
												this.setState({
													imgList: this.state.imgList
														.filter(image => image.id !== item.id)
												})
												this.props.deletePhotoHandler(item.id)
											}}
												type="button">X</button></div>
										{/* <div className="profile-photos-item-main">
											<button type="button">Сделать аватаркой</button>
										</div> */}
									</div>)
								: null
							}
						</div>
					</section>
				</div>
			</div>
		)
	}
}

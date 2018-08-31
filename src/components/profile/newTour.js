import React from 'react'
import errorMessage from '../errorMessage'

import { showSuccess, formatToDate, enforceFormat } from '../../functions'

export default (inputHandler, submitHandler, errors, success, handleValueChange, fields) => {
    return (
        success ? showSuccess('Ваш тур зарегистрирован.')
            : <form onSubmit={submitHandler}>
                <section className="jumbotron">
                    <div className="head"><p>Новый тур</p></div>
                    <div className="row content">
                        <div className="col-3 text-right"><label htmlFor='tourName'><p className="small">Название тура</p></label></div>
                        <div className="offset-1 col-8"><input onChange={inputHandler} name="name" required className='col-12' id='tourName' type="text" /></div>
                        {errorMessage(errors, 'name')}

                        <div className="col-3 text-right"><label htmlFor='tourLocation'><p className="small">Локация тура</p></label></div>
                        <div className="offset-1 col-8"><input onChange={inputHandler} name="location" required className='col-12' id='tourLocation' type="text" /></div>
                        {errorMessage(errors, 'location')}

                        <div className="col-3 text-right"><label htmlFor='tourSlogan'><p className="small">Слоган тура</p></label></div>
                        <div className="offset-1 col-8"><input onChange={inputHandler} name="slogan" className='col-12' id='tourSlogan' type="text" /></div>
                        {errorMessage(errors, 'slogan')}

                        <div className="col-3 text-right"><label htmlFor='tourDescription'><p className="small">Описание тура</p></label></div>
                        <div className="offset-1 col-8"><textarea onChange={inputHandler} name="description" required className='col-12' id='tourDescription' rows='4' /></div>
                        {errorMessage(errors, 'description')}

                        <div className="col-3 text-right"><label htmlFor='tourRoute'><p className="small">Маршрут, контрольные точки</p></label></div>
                        <div className="offset-1 col-8"><input onChange={inputHandler} name="route" required className='col-12' id='tourRoute' type="text" /></div>
                        {errorMessage(errors, 'route')}

                        <div className="offset-4 col-8"><p className='small secondary'>Перечислите все пункты, которые будете посещать.</p></div>

                        <div className="col-3 text-right"><label htmlFor='tourStartPlace'><p className="small">Место встречи</p></label></div>
                        <div className="offset-1 col-8"><input onChange={inputHandler} name="meeting_details" className='col-12' id='tourStartPlace' type="text" /></div>
                        {errorMessage(errors, 'meeting_details')}

                        <div className="col-3 text-right"><label htmlFor='tourSlogan'><p className="small">Способы передвижения</p></label></div>
                        <div className="offset-1 col-8"><input onChange={inputHandler} name="transport" required className='col-12' id='tourSlogan' type="text" /></div>
                        {errorMessage(errors, 'transport')}

                        <div className="offset-4 col-8"><p className='small secondary'>Пешком, машина, поезд, автобус, др.</p></div>

                        <div className="col-3 text-right"><label htmlFor='tourIncludes'><p className="small">Что включено в стоимость</p></label></div>
                        <div className="offset-1 col-8"><input onChange={inputHandler} name="inclusion" required className='col-12' id='tourIncludes' type="text" /></div>
                        {errorMessage(errors, 'inclusion')}

                        <div className="col-3 text-right"><label htmlFor='tourPersonalPrice'><p className="small">Сумма, которая потребуется на личные расходы</p></label></div>
                        <div className="offset-1 col-8"><input onChange={inputHandler} name="expenses" className='col-12' id='tourPersonalPrice' type="text" /></div>
                        {errorMessage(errors, 'expenses')}

                        <div className="col-3 text-right"><label htmlFor='tourAdditions'><p className="small">Дополнительные возможности</p></label></div>
                        <div className="offset-1 col-8"><input onChange={inputHandler} name="extra_options" className='col-12' id='tourAdditions' type="text" /></div>
                        {errorMessage(errors, 'extra_options')}

                        <div className="offset-4 col-8"><p className='small secondary'>Перечислите всё, что можно попробовать, увидеть, сделать во время тура.</p></div>

                        <div className="col-3 text-right"><label htmlFor='tourAdditionInfo'><p className="small">Дополнительная информация</p></label></div>
                        <div className="offset-1 col-8"><input onChange={inputHandler} name="extra_info" className='col-12' id='tourAdditionInfo' type="text" /></div>
                        {errorMessage(errors, 'extra_info')}

                        <div className="offset-4 col-8"><p className='small secondary'>Напишите всё, что считаете нужным.</p></div>

                        <div className="col-3 text-right"><label htmlFor='tourPrice'><p className="small">Укажите стоимость тура</p></label></div>
                        <div className="offset-1 col-8"><input onChange={inputHandler} name="price" required className='col-12' id='tourPrice' type="text" /></div>
                        {errorMessage(errors, 'price')}

                        <div className="col-3 text-right"><label htmlFor='tourCount'><p className="small">На какое кол-во человек рассчитан тур</p></label></div>
                        <div className="offset-1 col-8"><input onChange={inputHandler} name="max_tourists" className='col-12' id='tourCount' type="text" /></div>
                        {errorMessage(errors, 'max_tourists')}

                        <div className="col-3 text-right"><label htmlFor='tourDates'><p className="small">Возможные даты тура</p></label></div>
                        <div className="offset-1 col-8">
                            <div className="row">
                                <input className='col-md-5 col-12' value={fields.date_from} onKeyDown={enforceFormat} name="date_from" placeholder="С даты" id="tourDates" autoComplete="on" type='text' onChange={e => handleValueChange('date_from', formatToDate(e))} required />
                                <input className='offset-md-1 col-md-5 col-12' value={fields.date_to} onKeyDown={enforceFormat} name="date_to" placeholder="До даты" autoComplete="on" type='text' onChange={e => handleValueChange('date_to', formatToDate(e))} required />
                                {/* <input onChange={inputHandler} name="date_from" required className='col-md-5 col-12' id='tourDates' type="date" /> */}
                                {/* <input onChange={inputHandler} name="date_to" required className='offset-md-1 col-md-5 col-12' id='tourDates' type="date" /> */}
                            </div>
                        </div>
                        {errorMessage(errors, 'date_from')}
                        {errorMessage(errors, 'date_to')}

                    </div>
                </section>

                {/* <section className="jumbotron">
                <div className="head"><p>Фото тура</p></div>
                <div className="content">
                    <div className="row">
                        <div className="l-offset-mid col-2 v-offset-small"><img src="http://via.placeholder.com/130x130" alt="tour" /></div>
                        <div className="l-offset-mid col-2 v-offset-small"><img src="http://via.placeholder.com/130x130" alt="tour" /></div>
                        <div className="l-offset-mid col-2 v-offset-small"><img src="http://via.placeholder.com/130x130" alt="tour" /></div>
                        <div className="l-offset-mid col-2 v-offset-small"><img src="http://via.placeholder.com/130x130" alt="tour" /></div>
                        <div className="l-offset-mid col-2 v-offset-small"><img src="http://via.placeholder.com/130x130" alt="tour" /></div>
                        <div className="l-offset-mid col-2 v-offset-small"><img src="http://via.placeholder.com/130x130" alt="tour" /></div>
                        <div className="l-offset-mid col-2 v-offset-small"><img src="http://via.placeholder.com/130x130" alt="tour" /></div>
                        <div className="l-offset-mid col-2 v-offset-small"><img src="http://via.placeholder.com/130x130" alt="tour" /></div>
                    </div>
                    <label htmlFor="tourPhotos"><p className="small">Загрузить файл со своего компьютера</p></label>
                    <input id="tourPhotos" type="file" accept=".jpg, .jpeg, .png" multiple />
                </div>
            </section> */}

                <button className="lead col-md-4" type="submit">Создать тур</button>

            </form>
    )
}

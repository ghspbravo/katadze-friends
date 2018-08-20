import React from 'react'

export default () => {
    return (
        <form>
            <section className="jumbotron">
                <div className="head"><p>Новый тур</p></div>
                <div className="row content">
                    <div className="col-3 text-right"><label htmlFor='tourName'><p className="small">Название тура</p></label></div>
                    <div className="offset-1 col-8"><input className='col-12' id='tourName' type="text" /></div>

                    <div className="col-3 text-right"><label htmlFor='tourLocation'><p className="small">Локация тура</p></label></div>
                    <div className="offset-1 col-8"><input className='col-12' id='tourLocation' type="text" /></div>

                    <div className="col-3 text-right"><label htmlFor='tourSlogan'><p className="small">Слоган тура</p></label></div>
                    <div className="offset-1 col-8"><input className='col-12' id='tourSlogan' type="text" /></div>

                    <div className="col-3 text-right"><label htmlFor='tourDescription'><p className="small">Описание тура</p></label></div>
                    <div className="offset-1 col-8"><textarea className='col-12' id='tourDescription' rows='4' /></div>

                    <div className="col-3 text-right"><label htmlFor='tourRoute'><p className="small">Маршрут, контрольные точки</p></label></div>
                    <div className="offset-1 col-8"><input className='col-12' id='tourRoute' type="text" /></div>

                    <div className="offset-4 col-8"><p className='small secondary'>Перечислите все пункты, которые будете посещать.</p></div>

                    <div className="col-3 text-right"><label htmlFor='tourStartPlace'><p className="small">Место встречи</p></label></div>
                    <div className="offset-1 col-8"><input className='col-12' id='tourStartPlace' type="text" /></div>

                    <div className="col-3 text-right"><label htmlFor='tourSlogan'><p className="small">Способы передвижения</p></label></div>
                    <div className="offset-1 col-8"><input className='col-12' id='tourSlogan' type="text" /></div>

                    <div className="offset-4 col-8"><p className='small secondary'>Пешком, машина, поезд, автобус, др.</p></div>

                    <div className="col-3 text-right"><label htmlFor='tourIncludes'><p className="small">Что включено в стоимость</p></label></div>
                    <div className="offset-1 col-8"><input className='col-12' id='tourIncludes' type="text" /></div>

                    <div className="col-3 text-right"><label htmlFor='tourPersonalPrice'><p className="small">Сумма, которая потребуется на личные расходы</p></label></div>
                    <div className="offset-1 col-8"><input className='col-12' id='tourPersonalPrice' type="text" /></div>

                    <div className="col-3 text-right"><label htmlFor='tourAdditions'><p className="small">Дополнительные возможности</p></label></div>
                    <div className="offset-1 col-8"><input className='col-12' id='tourAdditions' type="text" /></div>

                    <div className="offset-4 col-8"><p className='small secondary'>Перечислите всё, что можно попробовать, увидеть, сделать во время тура.</p></div>

                    <div className="col-3 text-right"><label htmlFor='tourAdditionInfo'><p className="small">Дополнительная информация</p></label></div>
                    <div className="offset-1 col-8"><input className='col-12' id='tourAdditionInfo' type="text" /></div>

                    <div className="offset-4 col-8"><p className='small secondary'>Напишите всё, что считаете нужным.</p></div>

                    <div className="col-3 text-right"><label htmlFor='tourPrice'><p className="small">Укажите стоимость тура</p></label></div>
                    <div className="offset-1 col-8"><input className='col-12' id='tourPrice' type="text" /></div>

                    <div className="col-3 text-right"><label htmlFor='tourCount'><p className="small">На какое кол-во человек рассчитан тур</p></label></div>
                    <div className="offset-1 col-8"><input className='col-12' id='tourCount' type="text" /></div>

                    <div className="col-3 text-right"><label htmlFor='tourDates'><p className="small">Возможные даты тура</p></label></div>
                    <div className="offset-1 col-8">
                        <div className="row">
                            <input className='col-5' id='tourDates' type="date" />
                            <input className='offset-1 col-5' id='tourDates' type="date" />
                        </div>
                    </div>

                </div>
            </section>

            <section className="jumbotron">
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
            </section>

            <button className="lead col-md-4" type="submit">Создать тур</button>

        </form>
    )
}

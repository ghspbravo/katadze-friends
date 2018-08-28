import React from 'react'

export default index => {
    return (
        <div key={index} className="row">
            <div className="col-6 col-md-2">
                <div className="row justify-center">
                    <div className="col-6 col-md-12 no-padding profile-image-small justify-center">
                        <img src="http://via.placeholder.com/80x80" alt="userImage" />
                    </div>
                    <p className="secondary col-6 col-md-12 text-center small v-offset-small">Имя</p>
                </div>
            </div>
            <div className="col-12 col-md-10">
                <p className="small comment">Самые приятные впечатления остались от общения с Алексеем. Встретил нашу беспокойную команду (очень активные дети 3 и 6 лет) в аэропорту, по дороге на все вопросы ответил, рассказал, довез до отеля. Через пару дней провел экскурсию по городу на машине, мальчишки довольны, я - тем более.</p>
                <p className="secondary small v-offset-small">Из Екатеринбурга, Россия <br/>июнь 2018</p>
            </div>
        </div>
    )
}

import React from 'react'

export default index => {
    return (
        <div key={index} className="row">
            <div className="col-2">
                <div className="row justify-center">
                    <div className="profile-image-small">
                        <img src="http://via.placeholder.com/80x80" alt="userImage" />
                    </div>
                    <p className="secondary col-12 text-center small v-offset-small">Имя</p>
                </div>
            </div>
            <div className="col-10 comment">
                <p>Самые приятные впечатления остались от общения с Алексеем. Встретил нашу беспокойную команду (очень активные дети 3 и 6 лет) в аэропорту, по дороге на все вопросы ответил, рассказал, довез до отеля. Через пару дней провел экскурсию по городу на машине, мальчишки довольны, я - тем более.</p>
                <p className="secondary v-offset-small">Из Екатеринбурга, Россия * июнь 2018</p>
            </div>
        </div>
    )
}

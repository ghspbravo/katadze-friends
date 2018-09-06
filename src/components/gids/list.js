import React from 'react'
import { Link } from 'react-router-dom'

import gidCard from './gidCard';
import howToBecomeGid from '../../resourses/Gids/how_to_become_gid.jpg'

export default (gids, inputHandler, searchHandler, loadMore, nextPage) => {
    return (
        <div>
            <section id="gids-header" className="vh-100">
                <div className="row">
                    <form className="offset-1 offset-xl-3 offset-md-2 col-10 col-md-8 col-xl-4">
                        <h1 className="upper">Найти гида</h1>
                        <div className="row no-margin searchBox">
                            <div className="col-8"><input style={{borderRadius: '25px 0 0 25px'}} name="search" onChange={inputHandler} type="text" /></div>
                            <div className="col-4"><button style={{borderRadius: '0 25px 25px 0'}} onClick={searchHandler} ><p className="small">
                                Искать
                                </p></button></div>
                        </div>
                        <p className="small" >Например: Екатеринбург</p>
                        <p className="v-offset-mid" style={{ color: 'white' }}>СОЗДАЙ СВОЮ ИСТОРИЮ!</p>
                        <button type="button" onClick={() => document.querySelector('#become_gid').scrollIntoView({ behavior: "smooth" })} className="lead col-12 col-sm-5">СТАТЬ ГИДОМ</button>
                    </form>
                </div>
            </section>
            <section>
                <h1 className="text-center"><span>Ищи гида, связывайся с ним и открывай для себя города по всему миру!</span></h1>
                <div className="offset-md-1 col-md-10 justify-center">
                    {Array.isArray(gids)
                        ? gids.map((info, i) => gidCard(info, i))
                        : <p>Loading...</p>
                    }
                    <div className="col-12 v-offset-small justify-center"><button onClick={nextPage !== null ? () => loadMore(nextPage) : null} style={nextPage === null ? {backgroundColor: 'lightgray'}: null} className="col-lg-3 lead">{`${nextPage !== null ? 'Показать еще' : 'Все гиды загружены'}`}</button></div>
                    <div id="become_gid" className="col-12 gid-card">
                        <div className="row v-offset-small justify-center">
                            {/* <ul className="offset-sm-1 col-sm-10 col-12 todo-list">
                                <li className="col-12">Создай профиль гида</li>
                                <li className="col-12">Покажи места, которые знаешь</li>
                                <li className="col-12">Заработай денег</li>
                            </ul> */}
                            <img className="col-xl-10 col-12" src={howToBecomeGid} alt="instruction" style={{maxHeight: '50vw', objectFit: 'contain'}} />
                        </div>
                        <Link to='/profile/become-gid'><button className="offset-2 col-8 offset-lg-4 offset-xl-5 col-lg-4 col-xl-2 lead">Стать гидом</button></Link>
                    </div>

                    <div className="col-12 gid-card v-offset-mid">
                        <div className="offset-md-1 col-md-10">
                            <h1 style={{ textAlign: 'center' }}><span>Кatadze-guide</span> - покажи любимый город своими глазами.</h1>
                            <p className="v-offset-small" style={{maxHeight: '100vh', overflowY: 'auto'}}>
                                Надоели заезженные туры по любимым городам и странам? Множество людей и завышенные цены? А персональный гид от оператора водит теми же маршрутами и рассказывает то же самое, что и группам?
    <br /><br />
                                Тогда специально для Вас – Katadze Guide – удобный сервис, позволяющий отыскать поистине уникального и увлекательного местного гида, который покажет Вам свою страну и свой город, какими их видят все местные жители. Он отведет в такие места, где Вы проникнитесь местным духом, ведь туристы обычно там не появляются. Он познакомит с настоящей кухней, расскажет городские легенды, не описанные в туристических брошюрах и буклетах.
    <br /><br />
                                Katadze Guide до невозможного прост и удобен в использовании, ведь позволяет найти своего гида по ряду критериев, например, полу, возрасту, интересам, стоимости. Каждый гид имеет свой уникальный профиль, в котором указывает всю интересующую Вас информацию: от временных рамок и стоимости, установленных им по своемужеланию, до любимого блюда и жанра музыки. Так что отыскать «своего человека» не составит никакого труда.
    <br /><br />
                                Путешественник отправляет заявку понравившемуся гиду и вслед за подтверждением получает всю необходимую контактную информацию, после чего они уже в личной беседе договариваются о встречи и желаниях путешественника.
    <br /><br />
                                Стать гидом также очень просто – достаточно любить и знать свои город и страну, быть приятным собеседником и открытым к новым знакомствам человеком.
    <br /><br />
                                Система оценки гида открыта и публична. Оценки и комментарии формируют рейтинг гидов, который позволяет последнему находить новых путешественников.
    <br /><br />
                                Katadze Guide – для тех, кто любит путешествовать и узнавать новое!
    <br /><br />
                                Katadze Guide – для тех, кто любит свой город!
    <br /><br />
                                Когда хочется выжать из путешествия всё по максимуму – интересно и со вкусом. <Link className="bold" to="/profile">
                                    Регистрируйся
                                </Link> и наслаждайся!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

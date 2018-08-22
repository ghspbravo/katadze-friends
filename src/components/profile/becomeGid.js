import React from 'react'
import question from '../../resourses/icons/question.svg'


export default () => {
    return (
        <form>
            <section className="jumbotron">
                <div className="head"><p>Дополнительная информация</p></div>
                <div className="row content">
                    <div className="col-3 text-right"><label htmlFor='aboutMe'><p className="small">Информация о себе</p></label></div>
                    <div className="offset-1 col-8"><textarea className='col-12' id='aboutMe' rows='4' /></div>

                    <div className="offset-4 col-8"><p className="small secondary">Katadze основано на взаимоотношениях. <br /> Помогите другим лучше узнать вас.
<br /><br /> Расскажите о своих интересах: без каких 5 вещей вы не можете жить? Где вы больше всего любите путешествовать? Любимые виды спорта?
<br /><br /> Расскажите, какой вы гид: как вы любите путешествовать? Или как вам нравится открывать что-то новое людям?
<br /><br /> Расскажите им о себе: какие у вас жизненные принципы?</p></div>

                    <div className="col-3 row align-center justify-right">
                        <object aria-label="question" type="image/svg+xml" data={question} width="35" height="35" />
                        <label htmlFor='language'>
                            <p className="small">Языки</p></label></div>
                    <div className="offset-1 col-8">
                        <div className="row">
                            <select className="col-md-5 col-12" name="language" id="language">
                                <option value="russian">Русский</option>
                                <option value="russian">Русский</option>
                                <option value="russian">Русский</option>
                            </select>
                            <select className="offset-md-1 col-md-5 col-12" name="languageLevel" id="languageLevel">
                                <option value="Basic">Basic</option>
                                <option value="Conversational">Conversational</option>
                                <option value="Advanced">Advanced</option>
                                <option value="Fluent">Fluent</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-3 text-right"><label htmlFor='hobbies'><p className="small">Увлечения / хобби</p></label></div>
                    <div className="offset-1 col-8"><select name="hobbies" id="hobbies">
                        <option value="Искусство">Искусство</option>
                        <option value="Еда">Еда</option>
                        <option value="Экстрим">Экстрим</option>
                        <option value="Мода">Мода</option>
                        <option value="Путешествия">Путешествия</option>
                        <option value="Музыка">Музыка</option>
                        <option value="Фильмы">Фильмы</option>
                        <option value="Спорт">Спорт</option>
                        <option value="Литература">Литература</option>
                        <option value="Автомобили">Автомобили</option>
                        <option value="Фотография">Фотография</option>
                        <option value="Hand-made">Hand-made</option>
                        <option value="История">История</option>
                        <option value="Культура">Культура</option>
                        <option value="Шоппинг">Шоппинг</option>
                        <option value="Языки">Языки</option>
                    </select></div>

                    <div className="col-3 text-right"><label htmlFor='activities'><p className="small">Активности</p></label></div>
                    <div className="offset-1 col-8"><select name="activities" id="activities">
                        <option value="Встреча и сопровождение">Встреча и сопровождение</option>
                        <option value="Обзорная экскурсия">Обзорная экскурсия</option>
                        <option value="Знакомство с историей и культурой">Знакомство с историей и культурой</option>
                        <option value="Посещение музеев">Посещение музеев</option>
                        <option value="Посещение кафе и ресторанов">Посещение кафе и ресторанов</option>
                        <option value="Осмотр достопримечательностей">Осмотр достопримечательностей</option>
                        <option value="Шопинг">Шопинг</option>
                        <option value="Спорт и экстрим">Спорт и экстрим</option>
                    </select></div>

                    <div className="col-3 text-right"><label htmlFor='motto'><p className="small">Ключевая фраза обо мне и моей деятельности</p></label></div>
                    <div className="offset-1 col-8"><textarea className='col-12' id='motto' rows='4' /></div>
                </div>
            </section>

            <button className="col-md-4 lead" onClick={true} type="submit">Стать гидом</button>
        </form>
    )
}

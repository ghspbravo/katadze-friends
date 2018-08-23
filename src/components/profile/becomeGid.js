import React from 'react'
import question from '../../resourses/icons/question.svg'


export default (inputHandler, inputListHandler, submitHandler) => {
    return (
        <form action="POST" autoComplete="off" onSubmit={submitHandler}>
            <section className="jumbotron">
                <div className="head"><p>Дополнительная информация</p></div>
                <div className="row content">
                    <div className="col-3 text-right"><label htmlFor='aboutMe'><p className="small">Информация о себе</p></label></div>
                    <div className="offset-1 col-8"><textarea onChange={inputHandler} className='col-12' id='aboutMe' name="bio" rows='4' /></div>

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
                            <select onChange={inputListHandler} className="col-md-5 col-12" name="languages" id="language">
                                <option value="Русский">Русский</option>
                                <option value="Английский">Английский</option>
                            </select>
                            <select onChange={inputListHandler} className="offset-md-1 col-md-5 col-12" name="level" id="languageLevel">
                                <option value="0">Basic</option>
                                <option value="1">Conversational</option>
                                <option value="2">Advanced</option>
                                <option value="3">Fluent</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-3 text-right"><label htmlFor='hobbies'><p className="small">Увлечения / хобби</p></label></div>
                    <div className="offset-1 col-8"><select onChange={inputListHandler} name="hobbies" id="hobbies">
                        <option value="0">Искусство</option>
                        <option value="1">Еда</option>
                        <option value="2">Экстрим</option>
                        <option value="3">Мода</option>
                        <option value="4">Путешествия</option>
                        <option value="5">Музыка</option>
                        <option value="6">Фильмы</option>
                        <option value="7">Спорт</option>
                        <option value="8">Литература</option>
                        <option value="9">Автомобили</option>
                        <option value="10">Фотография</option>
                        <option value="11">Hand-made</option>
                        <option value="12">История</option>
                        <option value="13">Культура</option>
                        <option value="14">Шоппинг</option>
                        <option value="15">Языки</option>
                    </select></div>

                    <div className="col-3 text-right"><label htmlFor='activities'><p className="small">Активности</p></label></div>
                    <div className="offset-1 col-8"><select onChange={inputListHandler} name="activities" id="activities">
                        <option value="0">Встреча и сопровождение</option>
                        <option value="1">Обзорная экскурсия</option>
                        <option value="2">Знакомство с историей и культурой</option>
                        <option value="3">Посещение музеев</option>
                        <option value="4">Посещение кафе и ресторанов</option>
                        <option value="5">Осмотр достопримечательностей</option>
                        <option value="6">Шопинг</option>
                        <option value="7">Спорт и экстрим</option>
                    </select></div>

                    <div className="col-3 text-right"><label htmlFor='motto'><p className="small">Ключевая фраза обо мне и моей деятельности</p></label></div>
                    <div className="offset-1 col-8"><textarea onChange={inputHandler} name="keyphrase" className='col-12' id='motto' rows='4' /></div>
                </div>
            </section>

            <button className="col-md-4 lead" type="submit">Стать гидом</button>
        </form>
    )
}

import React from 'react'
import question from '../../resourses/icons/question.svg'


export default (inputHandler, inputListHandler, submitHandler, deleteHandle, fields, user) => {
    return (
        <form action="POST" autoComplete="off" onSubmit={submitHandler}>
            <section className="jumbotron">
                <div className="head"><p>Дополнительная информация</p></div>
                <div className="row content">
                    <div className="col-3 text-right"><label htmlFor='aboutMe'><p className="small">Информация о себе</p></label></div>
                    <div className="offset-1 col-8"><textarea disabled={user ? true : false} value={user ? user.bio : ''} onChange={inputHandler} className='col-12' id='aboutMe' name="bio" rows='4' /></div>

                    <div className="offset-4 col-8"><p className="small secondary">Katadze основано на взаимоотношениях. <br /> Помогите другим лучше узнать вас.
<br /><br /> Расскажите о своих интересах: без каких 5 вещей вы не можете жить? Где вы больше всего любите путешествовать? Любимые виды спорта?
<br /><br /> Расскажите, какой вы гид: как вы любите путешествовать? Или как вам нравится открывать что-то новое людям?
<br /><br /> Расскажите им о себе: какие у вас жизненные принципы?</p></div>

                    <div className="col-3 row align-center justify-right">
                        <object aria-label="question" type="image/svg+xml" data={question} width="35" height="35" />
                        <label htmlFor='language'>
                            <p className="small">Языки</p></label></div>
                    <div className="offset-1 col-8">
                        {user ? <div className="row">
                            {user.languages.map((language, i) =>
                                <div key={i} className="col-12 row">
                                    <p className="col-10">{language.name}</p>
                                    <button type="button" className="offset-1" data-for='languages' data-id={i}>X</button>
                                </div>
                            )}
                        </div>
                            : <div className="row">
                                {Object.keys(fields.languages).map(languagesId => <div key={languagesId} className="col-12 row">
                                    <p className="col-10">{fields.languages[languagesId]}</p>
                                    <button type="button" onClick={deleteHandle} className="offset-1" data-for='languages' data-id={languagesId}>X</button>
                                </div>)}
                            </div>
                        }
                        <select disabled={user ? true : false} onChange={inputListHandler} className="col-md-6 col-12" name="languages" id="languages">
                            <option key={Object.keys(fields.languages).length} value="" disabled selected hidden></option>
                            {fields.languagesList.map((language, i) => <option key={i} value={language}>{language}</option>)}
                        </select>
                        {/* <select onChange={inputListHandler} className="col-md-6 col-12" name="languages" id="language">
                                <option value="Русский">Русский</option>
                                <option value="Английский">Английский</option>
                            </select> */}
                        {/* <select onChange={inputListHandler} className="offset-md-1 col-md-5 col-12" name="level" id="languageLevel">
                                <option value="0">Basic</option>
                                <option value="1">Conversational</option>
                                <option value="2">Advanced</option>
                                <option value="3">Fluent</option>
                            </select> */}
                    </div>

                    <div className="col-3 text-right"><label htmlFor='hobbies'><p className="small">Увлечения / хобби</p></label></div>
                    <div className="offset-1 col-8">
                        {user ? <div>
                            {user.hobbies.map((hobbie, i) =>
                                <div key={i} className="col-12 row">
                                    <p className="col-10">{fields.hobbiesList[hobbie.code]}</p>
                                    <button type="button" className="offset-1" data-for='hobbies' data-id={i}>X</button>
                                </div>
                            )}
                        </div>
                            : <div>{Object.keys(fields.hobbies).map(hobbieId => <div key={hobbieId} className="col-12 row">
                                <p className="col-10">{fields.hobbies[hobbieId]}</p>
                                <button type="button" onClick={deleteHandle} className="offset-1" data-for='hobbies' data-id={hobbieId}>X</button>
                            </div>)}
                            </div>}
                        <select disabled={user ? true : false} onChange={inputListHandler} name="hobbies" id="hobbies">
                            <option key={Object.keys(fields.hobbies).length} value="" disabled selected hidden></option>
                            {fields.hobbiesList.map((hobbie, i) => <option key={i} value={hobbie}>{hobbie}</option>)}
                        </select>
                    </div>

                    <div className="col-3 text-right"><label htmlFor='activities'><p className="small">Активности</p></label></div>
                    <div className="offset-1 col-8">
                        {user ? <div>
                            {user.activities.map((activity, i) =>
                                <div key={i} className="col-12 row">
                                    <p className="col-10">{fields.activitiesList[activity.code]}</p>
                                    <button type="button" className="offset-1" data-for='activities' data-id={i}>X</button>
                                </div>
                            )}
                        </div>
                            : <div>{Object.keys(fields.activities).map(activityId => <div key={activityId} className="col-12 row">
                                <p className="col-10">{fields.activities[activityId]}</p>
                                <button type="button" onClick={deleteHandle} className="offset-1" data-for='activities' data-id={activityId}>X</button>
                            </div>)}
                            </div>}
                        <select disabled={user ? true : false} onChange={inputListHandler} name="activities" id="activities">
                            <option key={Object.keys(fields.activities).length} value="" disabled selected hidden></option>
                            {fields.activitiesList.map((activity, i) => <option key={i} value={activity}>{activity}</option>)}
                        </select>
                    </div>

                    <div className="col-3 text-right"><label htmlFor='motto'><p className="small">Ключевая фраза обо мне и моей деятельности</p></label></div>
                    <div className="offset-1 col-8"><textarea disabled={user ? true : false} value={user ? user.keyphrase : ''} onChange={inputHandler} name="keyphrase" className='col-12' id='motto' rows='4' /></div>
                </div>
            </section>

            <button disabled={user ? true : false} className="col-md-4 lead" type="submit">Стать гидом</button>
        </form>
    )
}

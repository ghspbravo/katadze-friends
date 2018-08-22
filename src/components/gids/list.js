import React from 'react'
import gidCard from './gidCard';

export default (inputHandler, searchHandler) => {
    return (
        <div>
            <section id="gids-header" className="vh-100">
                <div className="row justify-center">
                    <div className="col-10 col-md-8 col-xl-4">
                        <h1 className="upper">Найти гида</h1>
                        <div className="row searchBox">
                            <div className="col-8"><input name="search" onChange={inputHandler} type="text" /></div>
                            <div className="col-4"><button onClick={searchHandler} ><p className="small">
                                Искать
                                </p></button></div>
                        </div>
                        <p className="small" >Например: Екатеринбург</p>
                    </div>
                </div>
            </section>
            <section>
                <h1 className="text-center"><span>Поможем найти гида</span></h1>
                <div className="offset-md-1 col-md-10 justify-center">
                    {[...Array(10)].map((e, i) => gidCard(i))}
                    <div className="col-12 gid-card">
                        <div className="row v-offset-small">
                            <ul className="offset-1 col-10 todo-list">
                                <li className="col-12">Создай профиль гида</li>
                                <li className="col-12">Покажи места, которые знаешь</li>
                                <li className="col-12">Заработай денег</li>
                            </ul>
                        </div>
                        <button className="offset-2 col-8 offset-lg-4 offset-xl-5 col-lg-4 col-xl-2 lead">Стать гидом</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

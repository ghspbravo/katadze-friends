import React from 'react'
import gidCard from './gidCard';

export default (inputHandler, searchHandler) => {
    return (
        <div>
            <section id="gids-header" className="vh-100">
                <div className="row justify-center">
                    <div className="col-lg-4">
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
                <div className="offset-md-1 col-md-10 row justify-center">
                    {[...Array(10)].map((e, i) => gidCard(i))}
                    <div className="col-12 gid-card justify-center">
                        <ul className="row col-12 todo-list v-offset-small justify-space-around">
                            <li>Создай профиль гида</li>
                            <li>Покажи места, которые знаешь</li>
                            <li>Заработай денег</li>
                        </ul>
                        <button className="col-md-2 lead">Стать гидом</button>
                    </div>
                </div>
                <div className="row justify-center">
                    <button className="col-md-2 lead">Показать больше гидов</button>
                </div>
            </section>
        </div>
    )
}

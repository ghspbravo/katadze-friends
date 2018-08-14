import React from 'react'
import gidCard from './gidCard';

export default search => {
    return (
        <div>
            <section id="gids-header" className="vh-100">
                <div className="row justify-center">
                    <h1 className="upper">{search}</h1>
                </div>
            </section>
            <section>
                <h1 className="text-center"><span>Поможем найти гида</span></h1>
                <div className="offset-md-1 col-md-10 row justify-center">
                    {[...Array(10)].map((e, i) => gidCard(i))}
                </div>
                <div className="row justify-center">
                    <button className="col-md-2 lead">Показать больше гидов</button>
                </div>
            </section>
        </div>
    )
}
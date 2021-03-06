import React from 'react'
import gidCard from './gidCard';

export default (search, gids, city) => {
    return (
        <div>
            <section id="gids-header" className="vh-100" style={{backgroundImage: city && city.img ? `url(${city.img})` : ''}}>
                <div className="row justify-center">
                    <h1 className="upper">{search}</h1>
                </div>
            </section>
            <section>
                <h1 className="text-center"><span>Поможем найти гида</span></h1>
                <div className="offset-md-1 col-md-10 justify-center">
                    {gids && gids.length > 0
                        ? gids.map((info, i) => gidCard(info, i))
                        : <h1>Вы можете стать тут первым</h1>
                    }
                </div>
            </section>
        </div>
    )
}

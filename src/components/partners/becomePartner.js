import React from 'react'

export default () => {
    return (
        <form autoComplete="off" className="row">
            <div className="col-md-6 order-fix">
                <h1>Стать партнером</h1>
                <p className="secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas iure magni eaque, atque, corrupti accusantium fuga a ea voluptatem inventore repellendus? Laboriosam in commodi possimus ratione mollitia sint reiciendis consectetur.</p>
                <button type="submit">cтать партнером</button>
            </div>
            <div className="col-md-6">
                <input autoComplete="name" type="text" placeholder="Имя" className="col-12"/>
                <input autoComplete="organisation" type="text" placeholder="Организация" className="col-12"/>
                <input  autoComplete="email" type="email" placeholder="Почта" className="col-12"/>
                <textarea  placeholder="Комментарий" className="col-12"/>
            </div>
        </form>
    )
}

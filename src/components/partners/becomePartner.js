import React from 'react'

export default () => {
    return (
        <form autoComplete="off" className="row">
            <div className="col-md-6">
                <h1>Стать Другом Катадзе</h1>
                <p className="secondary">Друзья.Katadze – это объединение компаний самого разного уровня и характера в одну единую сеть нашей бонусной программы. Наша клиентская база: более ____ тысяч активных, молодых и целеустремленных людей. Возможно, ваша компания нуждается в таких клиентах. Возможно, мы нуждаемся в Вас. Заполните заявку и давайте дружить продуктивно.</p>
                <button className="d-none d-md-block" type="submit">Cтать партнером</button>
            </div>
            <div className="col-md-6">
                <input autoComplete="name" type="text" placeholder="Имя" className="col-12"/>
                <input autoComplete="organisation" type="text" placeholder="Организация" className="col-12"/>
                <input  autoComplete="email" type="email" placeholder="Почта" className="col-12"/>
                <textarea  placeholder="Комментарий" className="col-12"/>
                <button className="d-md-none" type="submit">Cтать партнером</button>
            </div>
        </form>
    )
}

import React from 'react'
import { showSuccess, showLoading } from '../../functions';
import errorMessage from '../errorMessage';
import { STATUS_SUCCESS, STATUS_PROCESSING } from '../../actions';

export default (handeInput, handleSubmit, errors, status, fields) => {
    switch (status) {
        case STATUS_SUCCESS: return showSuccess('Ваша заявка отправлена. Мы рады новым друзьям!')
        case STATUS_PROCESSING: return showLoading()

        default:
    return (
        <form autoComplete="off" className="row" onSubmit={handleSubmit}>
            <div className="col-md-6">
                <h1>Стать партнером Катадзе</h1>
                <p className="secondary">Друзья.Katadze – это объединение компаний самого разного уровня и характера в одну единую сеть нашей бонусной программы. Наша клиентская база: более ____ тысяч активных, молодых и целеустремленных людей. Возможно, ваша компания нуждается в таких клиентах. Возможно, мы нуждаемся в Вас. Заполните заявку и давайте дружить продуктивно.</p>
                <button className="d-none d-md-block" type="submit">Cтать партнером</button>
            </div>
            <div className="col-md-6">
                <input onChange={handeInput} value={fields.name} name="name" autoComplete="on" type="text" placeholder="Имя" className="col-12" />
                {errorMessage(errors, 'name')}
                <input onChange={handeInput} value={fields.organization} name="organization" autoComplete="on" type="text" placeholder="Организация" className="col-12" />
                {errorMessage(errors, 'organization')}
                <input onChange={handeInput} value={fields.email} name="email" autoComplete="on" type="email" placeholder="Почта" className="col-12" />
                {errorMessage(errors, 'email')}
                <textarea onChange={handeInput} value={fields.comment} name="comment" placeholder="Комментарий" className="col-12" />
                {errorMessage(errors, 'comment')}
                <button className="d-md-none" type="submit">Cтать партнером</button>
            </div>
        </form>
    )
}
}
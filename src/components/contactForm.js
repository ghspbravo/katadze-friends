import React from 'react'
import { showLoading, showSuccess } from '../functions';
import errorMessage from './errorMessage';
import { STATUS_SUCCESS, STATUS_PROCESSING } from '../actions';

export default (handeInput, handleSubmit, errors, status, fields) => {
    switch (status) {
        case STATUS_SUCCESS: return showSuccess('Ответ на Ваш вопрос не заставит себя ждать.')
        case STATUS_PROCESSING: return showLoading()

        default:
            return (
                <form autoComplete="off" className="justify-space-between row" onSubmit={handleSubmit}>
                    <input onChange={handeInput} value={fields.title} autoComplete="theme" className="col-12" type="text" placeholder="Меня интересует" name="title" id="theme" required />
                    {errorMessage(errors, 'title')}
                    <input onChange={handeInput} value={fields.name} autoComplete="name" className="col-12 col-xl-5" type="text" placeholder="Имя" name="name" id="name" required />
                    {errorMessage(errors, 'name')}
                    <input onChange={handeInput} value={fields.email} autoComplete="email" className="col-12 offset-xl-1 col-xl-6" type="email" placeholder="Электронная почта" name="email" id="email" required />
                    {errorMessage(errors, 'email')}
                    <input onChange={handeInput} value={fields.question} autoComplete="question" className="col-12" type="text" placeholder="Ваш вопрос (желательно)" name="question" id="question" />
                    {errorMessage(errors, 'question')}
                    <button>Отправить</button>
                </form>
            )
    }
}

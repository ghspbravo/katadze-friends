import React from 'react'
import errorMessage from '../errorMessage'
import { showSuccess, showLoading } from '../../functions';
import { STATUS_SUCCESS, STATUS_PROCESSING } from '../../actions';

export default (submitHandler, inputHandler, errors, status) => {
    switch (status) {
        case STATUS_SUCCESS: return showSuccess('Проверьте Вашу почту.')
        case STATUS_PROCESSING: return showLoading()

        default: return (
            <div className="auth-container">
                <form className='auth-container-form form' action="POST" autoComplete="off" onSubmit={submitHandler}>
                    <input name="email" autoComplete="email" type="email" placeholder='Email' onChange={inputHandler} required />
                    {errorMessage(errors, 'email')}
                    <div class="row no-gutters">
                        <button className="auth-container-form-submit" type="submit">Сбросить пароль</button>
                    </div>
                </form>
        </div>
        )
    }
}
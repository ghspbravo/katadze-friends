import React from 'react'
import errorMessage from '../errorMessage'

import { showSuccess, showLoading } from '../../functions'
import { STATUS_SUCCESS, STATUS_PROCESSING } from '../../actions';

export default (submitHandler, inputHandler, errors, status) => {
    switch (status) {
        case STATUS_SUCCESS: return showSuccess('Пароль успешно обновлен')
        case STATUS_PROCESSING: return showLoading()

        default:
            return (
                <div className="auth-container">
                    <form className='auth-container-form form' action="POST" autoComplete="off" onSubmit={submitHandler}>
                        <input name="password" autoComplete="password" type="password" placeholder='password' onChange={inputHandler} required />
                        {errorMessage(errors, 'password')}
                        <div class="row no-gutters">
                            <button className="auth-container-form-submit" type="submit">Обновить пароль</button>
                        </div>
                    </form>}
        </div>
            )
    }
}
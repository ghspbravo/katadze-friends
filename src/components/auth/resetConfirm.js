import React from 'react'
import errorMessage from '../errorMessage'

import {showSuccess} from '../../functions'

export default (submitHandler, inputHandler, errors, success) => {
    return (
        <div className="container">
            {success
                ? showSuccess('Пароль успешно обновлен')
                : <form className='offset-xl-2 col-xl-8 col-12' action="POST" autoComplete="off" onSubmit={submitHandler}>
                    <input name="password" autoComplete="password" type="password" placeholder='password' onChange={inputHandler} required />
                    {errorMessage(errors, 'password')}
                    <button type="submit">Обновить пароль</button>
                </form>}
        </div>
    )
}

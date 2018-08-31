import React from 'react'
import errorMessage from '../errorMessage'

import { showSuccess } from '../../functions'

export default (submitHandler, inputHandler, errors, success) => {
    return (
        <div className="container">
            {success
                ? showSuccess('Проверьте свою почту')
                : <form className='offset-xl-2 col-xl-8 col-12' action="POST" autoComplete="off" onSubmit={submitHandler}>
                    <input name="email" autoComplete="email" type="email" placeholder='email' onChange={inputHandler} required />
                    {errorMessage(errors, 'email')}
                    <button type="submit">Сбросить пароль</button>
                </form>
            }
        </div>
    )
}

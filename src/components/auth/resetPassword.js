import React from 'react'
import errorMessage from '../errorMessage'

export default (submitHandler, inputHandler, resetMessage, errors) => {
    return (
        <div className="container">
            {typeof resetMessage === 'undefined'
                ? <form className='offset-xl-2 col-xl-8 col-12' action="POST" autoComplete="off" onSubmit={submitHandler}>
                    <input name="email" autoComplete="email" type="email" placeholder='email' onChange={inputHandler} required/>
                    {errorMessage(errors, 'email')}
                    {errorMessage(errors)}
                    <button type="submit">Сбросить пароль</button>
                </form>
                : <p>{resetMessage}</p>
            }
        </div>
    )
}

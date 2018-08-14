import React from 'react'

export default (submitHandler, inputHandler, resetMessage, errors) => {
    return (
        <div className="container">
            {typeof resetMessage === 'undefined'
                ? <form className='offset-2 col-8' action="POST" autoComplete="off" onSubmit={submitHandler}>
                    <input name="email" autoComplete="email" type="email" placeholder='email' onChange={inputHandler} />
                    <button type="submit">Сбросить пароль</button>
                </form>
                : <p>{resetMessage}</p>
            }
            {typeof errors === 'undefined'
                ? true
                : Object.keys(errors).map((type, i) => <p key={i} >{errors[type][0]}</p>)
            }
        </div>
    )
}

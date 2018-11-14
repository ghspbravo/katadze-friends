import React from 'react'

export default (errors, field = 'non_field_errors') => {
    return (
        errors && field in errors
            ? <div className="row no-gutters">
                {errors[field].map((error, index) => <div key={index} className="col-12 form-input-error-message">
                    <p className="small"><span className="error">{typeof error === 'object' ? JSON.stringify(error) : error}</span></p>
                </div>)}
            </div>
            : null
    )
}
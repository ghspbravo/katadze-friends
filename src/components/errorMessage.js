import React from 'react'

export default (errors, field = 'non_field_errors') => {
    return (
        typeof errors !== 'undefined' && field in errors
        ? <div>
            <div className="col-12">
                <p className="small"><span className="error">{errors[field][0]}</span></p>
            </div>
        </div>
        : null
    )
}
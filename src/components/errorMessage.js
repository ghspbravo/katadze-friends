import React from 'react'

export default (errors, field = 'non_field_errors') => {
    return (
        typeof errors !== 'undefined' && field in errors
            ? <div>
                {errors[field].map(error => <div className="col-12">
                    <p className="small"><span className="error">{typeof error === 'object' ? JSON.stringify(error) : error}</span></p>
                </div>)}
            </div>
            : null
    )
}
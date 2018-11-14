import React from 'react'
import Stars from './Stars';

export default (comment, index) => {
    const commentDateParts = comment.created_at
        .split('T')[0]
        .split('-')
    return (
        <div key={index} className="row">
            <div className="col-6 col-md-2">
                <div className="row justify-center">
                    <div className="col-6 col-md-12 no-padding profile-image-small justify-center">
                        <img
                            src={comment.author.thumb || comment.author.avatar}
                            alt="userImage" />
                    </div>
                    <p className="secondary col-6 col-md-12 text-center small v-offset-small">
                        {comment.author.first_name}
                    </p>
                </div>
            </div>
            <div className="col-12 col-md-10">
                <p className="small comment">
                    {comment.content}
                </p>
                {/* <p className="secondary small v-offset-small">Из Екатеринбурга, Россия <br />июнь 2018</p> */}
                <div className="row" style={{ marginTop: '15px' }}>
                    {Stars(comment.rate)}
                    <p className="col comment-date secondary small">
                        {
                            `${commentDateParts[2]}.${commentDateParts[1]}.${commentDateParts[0]}`
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

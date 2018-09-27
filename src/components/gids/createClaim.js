import React from 'react'
import { showLoading, showSuccess } from '../../functions';
import { STATUS_SUCCESS, STATUS_PROCESSING } from '../../actions';

export default (handleInput, handleSubmit, messageToGid, status) => {
    switch (status) {
        case STATUS_SUCCESS: return showSuccess('Гид получит твою заявку в ближайшее время.')
        case STATUS_PROCESSING: return showLoading()

        default:
            return (
                <div>
                    <p>Заполни форму для связи с гидом</p>
                    <form onSubmit={handleSubmit}>
                        <textarea onChange={handleInput} value={messageToGid} style={{ resize: 'none' }} name="message_to_gid" rows="3" className="col-12" placeholder='Твое сообщение гиду'></textarea>
                        <button>Отправить</button>
                    </form>
                    <p className="small v-offset-small">После рассмотрения заявки, в личном кабинете будет доступен диалог с выбранным гидом</p>
                </div>
            )
    }
}

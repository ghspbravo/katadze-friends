import React from 'react'
import Parser from 'html-react-parser'

export default partner => {
    return (
        partner && partner.title
            ? <div className="container">
                <h2 className="text-center">{partner.title}</h2>
                <h1 className="text-center"><span>{partner.category.name}</span></h1>
                <img className="col-12" src={partner.img} alt="partnerImg" />
                <section>
                    <h1 className="bold">Описание</h1>
                    <p className="v-offset-small justify-text">{Parser(partner.content)}</p>
                </section>
                {partner.services.length > 0
                ? <section>
                    <h1 className="bold">Услуги</h1>
                    <ol className="col-12" type="1">
                        {
                            partner.services.forEach(service => <li className="v-offset-small">{service}</li>)
                        }
                    </ol>
                </section>
                :null}
                {partner.conditions
                ? <section>
                    <h1 className="bold">Условия</h1>
                    <p className="justify-text v-offset-small">{Parser(partner.conditions)}</p>
                </section>
                :null}
                {partner.schedule
                ? <section>
                    <h1 className="bold">Расписание</h1>
                    <p className="v-offset-small">{Parser(partner.schedule)}</p>
                    <ul className="row week v-offset-mid col-12 justify-center">
                        <li style={{backgroundColor: partner.schedule_weekdays.split(',').includes('1') ? 'lightgreen' : 'lightcoral'}}>ПН</li>
                        <li style={{backgroundColor: partner.schedule_weekdays.split(',').includes('2') ? 'lightgreen' : 'lightcoral'}}>ВТ</li>
                        <li style={{backgroundColor: partner.schedule_weekdays.split(',').includes('3') ? 'lightgreen' : 'lightcoral'}}>СР</li>
                        <li style={{backgroundColor: partner.schedule_weekdays.split(',').includes('4') ? 'lightgreen' : 'lightcoral'}}>ЧТ</li>
                        <li style={{backgroundColor: partner.schedule_weekdays.split(',').includes('5') ? 'lightgreen' : 'lightcoral'}}>ПТ</li>
                        <li style={{backgroundColor: partner.schedule_weekdays.split(',').includes('6') ? 'lightgreen' : 'lightcoral'}}>СБ</li>
                        <li style={{backgroundColor: partner.schedule_weekdays.split(',').includes('7') ? 'lightgreen' : 'lightcoral'}}>ВС</li>
                    </ul>
                </section>
                :null}
            </div>
            : <h1>Error in partner</h1>
    )
}

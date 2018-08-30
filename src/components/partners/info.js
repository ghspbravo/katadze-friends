import React from 'react'

export default partner => {
    return (
        partner && partner.title
            ? <div className="container">
                <h2 className="text-center">{partner.title}</h2>
                <h1 className="text-center"><span>{partner.category.name}</span></h1>
                <img className="col-12" src={partner.img} alt="partnerImg" />
                <section>
                    <h1 className="bold">Описание</h1>
                    <p className="v-offset-small justify-text">{partner.content}</p>
                </section>
                <section>
                    <h1 className="bold">Услуги</h1>
                    <ol className="col-12" type="1">
                        <li className="v-offset-small">Lorem ipsum dolor sit amet.</li>
                        <li className="v-offset-small">Lorem ipsum dolor sit amet.</li>
                        <li className="v-offset-small">Lorem ipsum dolor sit amet.</li>
                        <li className="v-offset-small">Lorem ipsum dolor sit amet.</li>
                        <li className="v-offset-small">Lorem ipsum dolor sit amet.</li>
                    </ol>
                </section>
                <section>
                    <h1 className="bold">Условия</h1>
                    <p className="justify-text v-offset-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos delectus corrupti autem magni dicta, saepe neque error dolor odio doloremque eos, esse praesentium distinctio? Ad ratione consequuntur sapiente. Consectetur, voluptas, rerum enim at quo dicta itaque amet iure explicabo molestias aliquam, quasi doloribus asperiores quos et inventore iste obcaecati eius.</p>
                </section>
                <section>
                    <h1 className="bold">Расписание</h1>
                    <p className="v-offset-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nisi totam architecto temporibus minima eum reprehenderit possimus ipsum aperiam deleniti?</p>
                    <ul className="row week v-offset-mid col-12 justify-center">
                        <li>ПН</li>
                        <li>ВТ</li>
                        <li>СР</li>
                        <li>ЧТ</li>
                        <li>ПТ</li>
                        <li>СБ</li>
                        <li>ВС</li>
                    </ul>
                </section>
            </div>
            : <h1>Error in partner</h1>
    )
}

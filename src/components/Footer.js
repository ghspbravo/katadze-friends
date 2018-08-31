import React from 'react'

import instagram from '../resourses/icons/instagram.svg'
import vk from '../resourses/icons/vk.svg'
import youtube from '../resourses/icons/youtube.svg'

export default () => {
    return (
        <div className="justify-center footer no-select">
            <div className="col-12 justify-center">
                <ul className="row col-11 justify-center info">
                    <li><a className="secondary small" href="">Политика</a></li>
                    <li><a className="secondary small" href="">Конфиденциальность</a></li>
                    <li><a className="secondary small" href="">Советы и помощь</a></li>
                </ul>
            </div>
            <div className="col-lg-6 v-offset-small">
                <ul className="row justify-center">
                    <li>
                        <a href="https://vk.com/katadzzze" target="blank"><img src={vk} width="45" height="45" /></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/katadzzze/" target="blank"><img src={instagram} width="45" height="45" /></a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCNboNWbUzYA-Rkc9O9KbKfg" target="blank"><img src={youtube} width="45" height="45" /></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

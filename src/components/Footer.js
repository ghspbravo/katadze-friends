import React from 'react'

import instagram from '../resourses/icons/instagram.svg'
import vk from '../resourses/icons/vk.svg'
import youtube from '../resourses/icons/youtube.svg'

import rools from "../resourses/Uslovia_polzoania_servisom.pdf";
import confidence from "../resourses/Politika_konfidentsialnosti.pdf";

export default () => {
    return (
        <div className="justify-center footer no-select">
            <div className="col-12 justify-center">
                <ul className="row col-11 justify-center info">
                    <li className={`col-12 col-sm-3 ${window.innerWidth < 576 ? 'text-center' : 'text-right'}`}><a target="blank" className="secondary small" href={rools}>Политика</a></li>
                    <li className="d-none d-sm-flex col-sm-1 justify-center secondary">•</li>
                    <li className={`col-12 col-sm-3 ${window.innerWidth < 576 ? 'text-center' : ''}`}><a target="blank" className="secondary small" href={confidence}>Конфиденциальность</a></li>
                    {/* <li className="col-12 text-center"><a href="" className="secondary small">Политика и конфиденциальность</a></li> */}
                </ul>
            </div>
            <div className="col-12 justify-center v-offset-small">
                <ul className="row col-11 justify-center">
                    <li className="col-3 col-md-2 col-lg-1 justify-center">
                        <a href="https://vk.com/katadzzze" target="blank"><img src={vk} width="45" height="45" /></a>
                    </li>
                    <li className="col-3 col-md-2 col-lg-1 justify-center">
                        <a href="https://www.instagram.com/katadzzze/" target="blank"><img src={instagram} width="45" height="45" /></a>
                    </li>
                    <li className="col-3 col-md-2 col-lg-1 justify-center">
                        <a href="https://www.youtube.com/channel/UCNboNWbUzYA-Rkc9O9KbKfg" target="blank"><img src={youtube} width="45" height="45" /></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

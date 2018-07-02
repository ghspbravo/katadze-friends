import React, { Component } from 'react';
import { Router } from 'react-router'
import logo from '../logo.png';
import '../App.css';
import '../bootstrap-grid.min.css';
import '../reset.css';

export default class Layout extends Component {
    render() {
        return (
            <div className="content">
                <div class="navbar">
                    <div class="row">
                        <div class="col-lg-3 justify-center logo">
                            <a href="#">
                                <img src={logo} alt="logo"></img>
                            </a>
                        </div>
                        <div class="col-lg-6">
                            <ul class="row justify-space-around">
                                <li>
                                    <a href="#">Гиды</a>
                                </li>
                                <li>
                                    <a href="#">О нас</a>
                                </li>
                                <li>
                                    <a href="#">Вопросы</a>
                                </li>
                                <li>
                                    <a href="#">Контакты</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-3 row justify-space-around">
                            <a href="#">Личный кабинет</a>
                        </div>
                    </div>
                </div>

                <div class="row justify-center footer">
                    <div class="col-lg-6">
                        <ul class="row justify-space-around">
                            <li>
                                <a href="#">Facebook</a>
                            </li>
                            <li>
                                <a href="#">Vkontakte</a>
                            </li>
                            <li>
                                <a href="#">Youtube</a>
                            </li>
                            <li>
                                <a href="#">Telegram</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
import './main.less';

import Xhr from '../utils/xhr';
import mainHtml from './main.tpl.html';
import newsHtml from './news.tpl.html';
import pachongHtml from './pachong.tpl.html';

import Tool from '../utils/tool';
import {domainName} from '../constantConfig.js'
import Modal from '../components/modal';
import { showActionSheet } from '../components/action-sheet';

export default {
    init() {
            this.render();
            this.bindEvent();
            
            /* slide */
            myApp.swiper('.swiper-container', {
                speed: 400,
                spaceBetween: 1,
                autoplay: 2000,
                pagination: '.swiper-pagination'
            });

            fetch(domainName + '/webbase5/api/company/administrationPunish/allList')
                .then(response => response.json())
                .then(json => {
                    let tpl3 = Tool.renderTpl(pachongHtml, {json});
                    $('#pachong').html(tpl3);
                })

        },
        render() {
            var tpl = Tool.renderTpl(mainHtml, {});
            $('.swiper-container').html(tpl);
            
            var tpl2 = Tool.renderTpl(newsHtml, {});
            $('.the-news-list').html(tpl2);            

        },

        // bind events
        bindEvent() {
            var events = [{
                target: '.andiqu',
                event: 'click',
                handler: this.andiqu
            }];
            Tool.bindEvents(events);
        }
};

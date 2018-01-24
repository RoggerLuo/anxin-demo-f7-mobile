'use strict';

import './jingyingyichangdetail.less';
import dongjiangaoTpl from './jingyingyichangdetail.tpl.html';

import Tool from '../utils/tool';
import fetch from 'isomorphic-fetch'
import { domainName } from '../constantConfig.js'

export default {
    init(page) {
        fetch(domainName + '/webbase5/api/company/manageAbnormal/list?userId=1&companyId=7eca0591-a7da-11e6-bd97-00163e004d3e')// + page.query.id)
            .then(response => response.json())
            .then(json => {
                json = json.map( (el) =>{
                    el.corpname = page.query.corpname
                    el.orginid = '1&companyId=7eca0591-a7da-11e6-bd97-00163e004d3e'//page.query.id
                    return el
                })
                window.corpName = '经营异常:' + json[0].content
                window.corpUrl = window.location.href

                var tpl = Tool.renderTpl(dongjiangaoTpl, json[0]);
                $('.jingyingyichangdetail-page').html(tpl);
            })
    }
};

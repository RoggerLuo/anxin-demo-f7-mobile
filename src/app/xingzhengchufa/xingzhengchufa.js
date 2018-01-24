'use strict';

import './xingzhengchufa.less';
import dongjiangaoTpl from './xingzhengchufa.tpl.html';

import Tool from '../utils/tool';
import fetch from 'isomorphic-fetch'
import { domainName } from '../constantConfig.js'

export default {
    init(page) {
        fetch(domainName + '/webbase5/api/company/administrationPunish/list?userId=1&companyId=' + page.query.id)
            .then(response => response.json())
            .then(json => {

                json = json.map( (el) =>{
                    el.corpname = page.query.corpname
                    el.originid =  page.query.id
                    return el
                })
                
                var tpl = Tool.renderTpl(dongjiangaoTpl, {json:json});
                $('.xingzhengchufa-page').html(tpl);
            })
    }
};

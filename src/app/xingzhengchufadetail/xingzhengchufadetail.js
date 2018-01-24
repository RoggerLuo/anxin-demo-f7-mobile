'use strict';

import './xingzhengchufadetail.less';
import dongjiangaoTpl from './xingzhengchufadetail.tpl.html';

import Tool from '../utils/tool';
import fetch from 'isomorphic-fetch'
import { domainName } from '../constantConfig.js'

export default {
    init(page) {
        fetch(domainName + '/webbase5/api/company/administrationPunish/list?userId=1&companyId=' + page.query.originid)
            .then(response => response.json())
            .then(json => {
                
                json.filter((el)=>el.announceId ==page.query.gonggaoid)
                var tpl = Tool.renderTpl(dongjiangaoTpl, json[0]);
                $('.xingzhengchufadetail-page').html(tpl);
            })
    }
};

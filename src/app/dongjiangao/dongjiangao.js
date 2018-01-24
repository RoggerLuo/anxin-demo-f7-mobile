'use strict';

import './dongjiangao.less';
import dongjiangaoTpl from './dongjiangao.tpl.html';

import Tool from '../utils/tool';
import fetch from 'isomorphic-fetch'
import { domainName } from '../constantConfig.js'

export default {
    init(page) {
        fetch(domainName + '/webbase5/api/company/manager/list?userId=1&companyId=' + page.query.id)
            .then(response => response.json())
            .then(json => {
                var tpl = Tool.renderTpl(dongjiangaoTpl, {json:json});
                $('.dongjiangao-page').html(tpl);
            })
    }
};

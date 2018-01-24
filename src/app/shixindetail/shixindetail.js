'use strict';

import './shixindetail.less';
import dongjiangaoTpl from './shixindetail.tpl.html';

import Tool from '../utils/tool';
import fetch from 'isomorphic-fetch'
import { domainName } from '../constantConfig.js'

export default {
    init(page) {
        fetch(domainName + '/webbase5/api/company/dishonestAnnounce/list?userId=1&companyId=7eca0591-a7da-11e6-bd97-00163e004d3e')// + page.query.originid)
            .then(response => response.json())
            .then(json => {
                json.filter((el)=>el.dishonestId ==page.query.gonggaoid)
                var tpl = Tool.renderTpl(dongjiangaoTpl, json[0]);
                $('.shixindetail-page').html(tpl);
            })
    }
};

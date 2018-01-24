'use strict';

import './zhixingdetail.less';
import dongjiangaoTpl from './zhixingdetail.tpl.html';

import Tool from '../utils/tool';
import fetch from 'isomorphic-fetch'
import { domainName } from '../constantConfig.js'

export default {
    init(page) {
        fetch(domainName + '/webbase5/api/company/execAnnounce/list?userId=1&companyId=7eca0591-a7da-11e6-bd97-00163e004d3e')// + page.query.originid)
            .then(response => response.json())
            .then(json => {
                json.filter((el)=>el.announceId ==page.query.gonggaoid)
                var tpl = Tool.renderTpl(dongjiangaoTpl, json[0]);
                $('.zhixingdetail-page').html(tpl);
            })
    }
};

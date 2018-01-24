'use strict';

import './fayuandetail.less';
import dongjiangaoTpl from './fayuandetail.tpl.html';

import Tool from '../utils/tool';
import fetch from 'isomorphic-fetch'
import { domainName } from '../constantConfig.js'

export default {
    init(page) {
        fetch(domainName + '/webbase5/api/court/courtAnnounce?companyId='+ page.query.originid)
            .then(response => response.json())
            .then(json => {

                json = json.filter((el)=>el.announceId ==page.query.gonggaoid)

                var tpl = Tool.renderTpl(dongjiangaoTpl, json[0]);
                $('.fayuandetail-page').html(tpl);
            })
    }
};

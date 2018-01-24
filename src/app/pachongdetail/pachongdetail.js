'use strict';

import './pachongdetail.less';
import dongjiangaoTpl from './pachongdetail.tpl.html';

import Tool from '../utils/tool';
import fetch from 'isomorphic-fetch'
import { domainName } from '../constantConfig.js'

export default {
    init(page) {
        fetch(domainName + '/webbase5/api/company/administrationPunish/allList')
            .then(response => response.json())
            .then(json => {
                json.filter((el)=>el.id ==page.query.itemid)
                var tpl = Tool.renderTpl(dongjiangaoTpl, json[0]);
                $('.pachongdetail-page').html(tpl);
            })
    }
};

'use strict';

import './gudong.less';
import gudongTpl from './gudong.tpl.html';

import Tool from '../utils/tool';
import fetch from 'isomorphic-fetch'
import { domainName } from '../constantConfig.js'

export default {
    init(page) {
        fetch(domainName + '/webbase5/api/partner/partner?companyId=' + page.query.id)
            .then(response => response.json())
            .then(json => {
                var obj = {json:json}
                obj.partnerNum = json[0].partnerNum
                obj.fundProportionTotal = json[0].fundProportionTotal
                var tpl = Tool.renderTpl(gudongTpl, obj);
                $('.gudong-page').html(tpl);
            })
    }
};

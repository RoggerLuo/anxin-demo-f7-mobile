'use strict';

import './qinshutouzi.less';
import qinshutouziTpl from './qinshutouzi.tpl.html';

import Tool from '../utils/tool';
import fetch from 'isomorphic-fetch'
import { domainName } from '../constantConfig.js'

export default {
    init(page) {
        fetch(domainName + '/webbase5/api/company/relativeOuterInvestment?companyId=' + page.query.id)
            .then(response => response.json())
            .then(json => {
                
                var tpl = Tool.renderTpl(qinshutouziTpl, {json:json});
                $('.qinshutouzi-page').html(tpl);
            })
    }
};

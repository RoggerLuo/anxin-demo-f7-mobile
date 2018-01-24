'use strict';

import './dongjiangaotouzi.less';
import dongjiangaoTpl from './dongjiangaotouzi.tpl.html';

import Tool from '../utils/tool';
import fetch from 'isomorphic-fetch'
import { domainName } from '../constantConfig.js'

export default {
    init(page) {
        
        fetch(domainName + '/webbase5/api/company/seniorOuterInvestment?companyId='+ page.query.id)
            .then(response => response.json())
            .then(json => {
                
                var tpl = Tool.renderTpl(dongjiangaoTpl, {json:json});
                $('.dongjiangaotouzi-page').html(tpl);
            })
    }
};

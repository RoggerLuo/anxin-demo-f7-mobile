'use strict';

import './qinshu.less';
import dongjiangaoTpl from './qinshu.tpl.html';
import listTpl from './list.html';

import Tool from '../utils/tool';
import fetch from 'isomorphic-fetch'
import { domainName } from '../constantConfig.js'

export default {
    init(page) {
        fetch(domainName + '/webbase5/api/company/seniorRelativesInvestment?companyId=' + page.query.id)
            .then(response => response.json())
            .then(json => {
                if(page.query.qinshuid){
                    json.filter((el)=>{
                        return el.relativesId == page.query.qinshuid
                    })
                    var tpl = Tool.renderTpl(dongjiangaoTpl, json[0]);
                    $('.qinshu-page').html(tpl);                    
                }else{
                    json.map((el)=>{el.corpid=page.query.id})
                    var tpl = Tool.renderTpl(listTpl, {json:json});
                    $('.qinshu-page').html(tpl);                    
                }
            })
    }
};

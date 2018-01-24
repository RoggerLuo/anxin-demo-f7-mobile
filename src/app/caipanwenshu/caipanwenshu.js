'use strict';

import './caipanwenshu.less';
import dongjiangaoTpl from './caipanwenshu.tpl.html';

import Tool from '../utils/tool';
import fetch from 'isomorphic-fetch'
import { domainName } from '../constantConfig.js'

export default {
    init(page) {
        fetch(domainName + '/webbase5/api/company/adjudgeDoc/list?userId=1&companyId=7eca0591-a7da-11e6-bd97-00163e004d3e')// + page.query.id)
            .then(response => response.json())
            .then(json => {
                json = json.map( (el) =>{
                    el.corpname = page.query.corpname
                    el.orginid =  '1&companyId=7eca0591-a7da-11e6-bd97-00163e004d3e'//page.query.id                    
                    return el
                })
                var a = json.filter((el)=>el.docType == '民事判决书').length
                var b = json.filter((el)=>el.docType == '执行裁定书').length
                var c = json.filter((el)=>el.docType == '民事裁定书').length

                var tpl = Tool.renderTpl(dongjiangaoTpl, {a,b,c,corpname:page.query.corpname});
                $('.caipanwenshu-page').html(tpl);
            })
    }
};

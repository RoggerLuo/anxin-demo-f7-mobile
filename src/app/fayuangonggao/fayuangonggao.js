'use strict';

import './fayuangonggao.less';
import dongjiangaoTpl from './fayuangonggao.tpl.html';

import Tool from '../utils/tool';
import fetch from 'isomorphic-fetch'
import { domainName } from '../constantConfig.js'

export default {
    init(page) {
        fetch(domainName + '/webbase5/api/court/courtAnnounce?companyId='+ page.query.id)
            .then(response => response.json())
            .then(json => {
                
                json = json.map( (el) =>{
                    el.corpname = page.query.corpname
                    el.orginid = page.query.id
                    return el
                })
                
                var tpl = Tool.renderTpl(dongjiangaoTpl, {json:json});
                $('.fayuangonggao-page').html(tpl);
            })
    }
};

'use strict';

import './gongshang.less';
import gongshangTpl from './gongshang.tpl.html';
import detailTpl from './detail.html';
import specialPageTpl from './specialPage.html';
import listTpl from './list.html';

import Tool from '../utils/tool';
import fetch from 'isomorphic-fetch'
import { domainName } from '../constantConfig.js'

export default {
    init(page) {
        fetch(domainName + '/webbase5/api/company/outerInvested/list?userId=1&companyId=' + page.query.id)
            .then(response => response.json())
            .then(json => {
                if (page.query.id == "17b5f11d-a7dd-11e6-bd97-00163e004d3e"||
                    page.query.id == "1360f82e-a7dd-11e6-bd97-00163e004d3e"||
                    page.query.id == "15bf59fc-a7dd-11e6-bd97-00163e004d3e"||
                    page.query.id == "f3b6d540-a7db-11e6-bd97-00163e004d3e"||
                    page.query.id == "111199af-a7dd-11e6-bd97-00163e004d3e"

                    ){

                    if(page.query.specialPage =='list'){
                        var tpl = Tool.renderTpl(listTpl, {json:json});
                        $('.duiwaitouzi-page').html(tpl);                    
                        return 
                    }
                    if(page.query.specialPage =='detail'){
                        var data = json.filter((el)=>el.id==page.query.detailId)
                        
                        var tpl = Tool.renderTpl(detailTpl, data[0]);//这里还有问题
                        $('.duiwaitouzi-page').html(tpl);                    
                        return 
                    }

                    var tpl = Tool.renderTpl(specialPageTpl, {picName:page.query.id,picAddr:require('../../assets/images/'+ page.query.id +'.jpg')});
                    $('.duiwaitouzi-page').html(tpl);                    

                }else{
                    var tpl = Tool.renderTpl(gongshangTpl, {json:json});
                    $('.duiwaitouzi-page').html(tpl);                    
                }
            })
    }
};

'use strict';

import './gongshang.less';
import gongshangTpl from './gongshang.tpl.html';
// import execute from '../../testComp.jsx';

import Tool from '../utils/tool';
import fetch from 'isomorphic-fetch'
import { domainName } from '../constantConfig.js'

export default {
    init(page) {
        fetch(domainName + '/webbase5/api/company/businessInfo?companyId=' + page.query.id)
            .then(response => response.json())
            .then(json => {
                console.log(json[0])
                var tpl = Tool.renderTpl(gongshangTpl, json[0]);
                $('.gongshang-page').html(tpl);

                fetch(domainName + '/webbase5/api/user/changeStatus/detailList?userId=1&dictId=35f429eb5ad84df88e1f292e52320c0f&companyId=' + page.query.id)
                    .then(response2 => response2.json())
                    .then(json2 => {
                        
                        json2.forEach((el=>{
                            
                            if(el.changePro == '一般经营项目变更'){
                                $('.yibanjingyingxiangmu').addClass('icon-newsvg')
                                $('.yibanjingyingxiangmu').parent().parent().append('变更前：<div style="color:grey;font-size:14px;">技术咨询、服务、开发、转让；企业管理咨询；会议服务；市场调查；'+ el.beforeCont +'</div>')
                            }
                            if(el.changePro == '企业类型变更'){
                                $('.qiyeleixing').addClass('icon-newsvg')
                                $('.qiyeleixing').parent().parent().append('变更前：<div style="color:grey;font-size:14px;">股份有限公司'+ el.beforeCont +'</div>')

                            }
                            if(el.changePro == '名称变更'){
                                $('.qiyeleixing').addClass('icon-newsvg')
                            }

                            if(el.changePro == '注册资本(金)变更'){
                                
                                $('.zhuceziben').addClass('icon-newsvg')
                                $('.zhuceziben').parent().parent().append('变更前：<div style="color:grey;font-size:14px;">'+ el.beforeCont +'元人民币</div>')

                            }
                            if(el.changePro == '经营范围变更'){
                                $('.jingyingfanwei').addClass('icon-newsvg')
                                $('.jingyingfanwei').parent().parent().append('变更前：<div style="color:grey;font-size:14px;">'+ el.beforeCont +'</div>')

                            }
                        }))
                            
                    })
            })


    }
};

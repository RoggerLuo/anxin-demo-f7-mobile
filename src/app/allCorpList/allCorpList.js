'use strict';

import './allCorpList.less';
import detailTpl from './allCorpList.tpl.html';

import Tool from '../utils/tool';

import fetch from 'isomorphic-fetch'
import { domainName } from '../constantConfig.js'
import allCorpList from './allCorpList.jsx'

export default {
    init(page) {
        if(!page.query.label){
            window.allCorpListLabel = false
        }else{
            window.allCorpListLabel = page.query.label
        }
        //reload customer and allList

        var tpl = Tool.renderTpl(detailTpl, {});
        $('.allCorpList-page').html(tpl);
        allCorpList()
    }
};

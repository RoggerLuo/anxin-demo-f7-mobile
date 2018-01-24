'use strict';

import './detail.less';
import detailTpl from './detail.tpl.html';
// import execute from '../../testComp.jsx';

import Tool from '../utils/tool';


export default {
    init(page){
        console.log('id: ' + page.query.id);
        var tpl = Tool.renderTpl(detailTpl, { text: 'Hello Framework7' });
        $('.detail-page').html(tpl);
    }
};


'use strict';

import './detail.less';
import detailTpl from './detail.tpl.html';
// import execute from '../../testComp.jsx';


export default {
    init(page){
        console.log('id: ' + page.query.id);
        require.ensure(["../../testComp.jsx"], (require) => {
              let execute = require("../../testComp.jsx")
              execute()
        })
    }
};


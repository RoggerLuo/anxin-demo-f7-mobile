'use strict';

import checkModule from './check/check.js';

export default {
    init(){
        var that = this;
        $(document).on('pageBeforeInit', (e) => {
            myApp.closeModal('.popover-links'); //关闭popover
            that.pageBeforeInit(e.detail.page);
        });
    },
    pageBeforeInit(page){
        switch (page.name) {
            case 'check':
                checkModule.init(page);
                break;

            default:
                break;
        }
    }
};

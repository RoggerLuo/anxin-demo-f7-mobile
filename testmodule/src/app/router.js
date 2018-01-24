'use strict';

import handleModule from './handle/handle';
import dealModule from './deal/deal';
import seeModule from './see/see';

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
            case 'handle':
                handleModule.init(page);
                break;
            case 'deal':
                dealModule.init(page);
                break;
            case 'see':
                seeModule.init(page);
                break;
        
            default:
                break;
        }
    }
};
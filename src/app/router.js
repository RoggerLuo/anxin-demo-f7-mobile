'use strict';

import newsDetailModule from './newsDetail/newsDetail';
import testModule from './test/test';
import corpDetailModule from './corpDetail/corpDetail';
import searchModule from './search/search';
import gongshangModule from './gongshang/gongshang';
import setCommonInfoModule from './setCommonInfo/setCommonInfo';
import duiwaitouziModule from './duiwaitouzi/duiwaitouzi';
import dongjiangaoModule from './dongjiangao/dongjiangao';
import gudongModule from './gudong/gudong';

import qinshuModule from './qinshu/qinshu';

import dongjiangaotouziModule from './dongjiangaotouzi/dongjiangaotouzi';
import qinshutouziModule from './qinshutouzi/qinshutouzi';
import shixingonggaoModule from './shixingonggao/shixingonggao';
import shixindetailModule from './shixindetail/shixindetail';
import fayuangonggaoModule from './fayuangonggao/fayuangonggao';
import fayuandetailModule from './fayuandetail/fayuandetail';
import zhixinggonggaoModule from './zhixinggonggao/zhixinggonggao';
import zhixingdetailModule from './zhixingdetail/zhixingdetail';
import caipanwenshuModule from './caipanwenshu/caipanwenshu';
import minshipanjueModule from './minshipanjue/minshipanjue';
import jingyingyichangModule from './jingyingyichang/jingyingyichang';
import jingyingyichangdetailModule from './jingyingyichangdetail/jingyingyichangdetail';
import xingzhengchufaModule from './xingzhengchufa/xingzhengchufa';
import xingzhengchufadetailModule from './xingzhengchufadetail/xingzhengchufadetail';
import allCorpListModule from './allCorpList/allCorpList';
import pachongdetailModule from './pachongdetail/pachongdetail';

import refreshAfterChange from './actions/refreshAfterChange.js';


export default {

    init() {
            var that = this;
            $(document).on('pageBeforeInit', (e) => {
                that.pageBeforeInit(e.detail.page);
            });
            $(document).on('pageReinit', (e) => {
                that.pageReinit(e.detail.page);
            });

        },
        pageReinit(page) {
            switch (page.name) {
                case 'allCorpList':
                    // allCorpListModule.init(page);
                    //刷新数据
                    refreshAfterChange()
                    break;
                case 'duiwaitouzi':
                    duiwaitouziModule.init(page);
                    break;
                case 'qinshu':
                    qinshuModule.init(page);
                    break;


                default:
                    break;
            }
        },
        pageBeforeInit(page) {
            switch (page.name) {
                case 'corpDetail':
                    corpDetailModule.init(page);
                    break;
                case 'newsDetail':
                    newsDetailModule.init(page);
                    break;
                case 'search-result':
                    searchModule.init(page);
                    break;
                case 'gongshang':
                    gongshangModule.init(page);
                    break;
                case 'duiwaitouzi':
                    duiwaitouziModule.init(page);
                    break;
                case 'dongjiangao':
                    dongjiangaoModule.init(page);
                    break;
                case 'dongjiangaotouzi':
                    
                    dongjiangaotouziModule.init(page);
                    break;

                case 'qinshutouzi':
                    qinshutouziModule.init(page);
                    break;
                case 'qinshu':
                    qinshuModule.init(page);
                    break;


                case 'gudong':
                    gudongModule.init(page);
                    break;

                case 'shixingonggao':
                    shixingonggaoModule.init(page);
                    break;
                case 'shixindetail':
                    shixindetailModule.init(page);
                    break;
                case 'fayuangonggao':
                    fayuangonggaoModule.init(page);
                    break;
                case 'fayuandetail':
                    fayuandetailModule.init(page);
                    break;
                case 'zhixinggonggao':
                    zhixinggonggaoModule.init(page);
                    break;
                case 'zhixingdetail':
                    zhixingdetailModule.init(page);
                    break;
                case 'caipanwenshu':
                    caipanwenshuModule.init(page);
                    break;

                case 'minshipanjue':
                    minshipanjueModule.init(page);
                    break;
                case 'jingyingyichang':
                    jingyingyichangModule.init(page);
                    break;

                case 'xingzhengchufa':
                    xingzhengchufaModule.init(page);
                    break;
                case 'xingzhengchufadetail':
                    xingzhengchufadetailModule.init(page);
                    break;

                case 'allCorpList':
                    allCorpListModule.init(page);
                    break;
                case 'pachongdetail':
                    pachongdetailModule.init(page);
                    break;


                case 'jingyingyichangdetail':
                    jingyingyichangdetailModule.init(page);
                    break;
                case 'setCommonInfo':
                    setCommonInfoModule.init(page);
                    break;

                case 'test':
                    testModule.init(page);
                default:
                    break;
            }
        }
};

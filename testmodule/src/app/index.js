'use strict';

//第一个测试，在两个嵌套的ensure里，模块是否可以重用
require.ensure(['./qiantao.js'], function(require) {

    require('./qiantao.js');

    //嵌套
    //在另一个文件中引用的问题是，如果没有加载好的话，那不是得重新加载，而且一开始，都没有加载好，所以肯定不能
});

require.ensure(['./qiantao.js','./donothing.js','./test/anotherDir.js'], function(require) {
    require('./donothing.js');
    require('./qiantao.js');
    var fuc = require('./test/anotherDir.js').default
    fuc()
});

const MVC = require("FWS_MVC");
var myView;
myView = cc.Class({
    extends: MVC.FMessageConnection,

    properties: {

    },

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function() {
        //加载结算场景
        // cc.director.loadScene("myScene");
            


        //loadscene。。。
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function() {

    }
        // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
module.exports = myView;

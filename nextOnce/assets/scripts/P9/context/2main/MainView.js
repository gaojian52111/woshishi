const MVC = require("FWS_MVC");
var MainView;
var playerHeadLayer;
MainView = cc.Class({
    extends: MVC.FMessageConnection,

    properties: {

    },

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function() {
        //加载结算场景
        cc.director.loadScene("MainScene");
        //loadscene。。。

                //loadscene。。。
        // cc.loader.loadRes("TestProfab/main", function (err, prefab) {
        //     cc.log(err);
        //     playerHeadLayer = cc.instantiate(prefab);
        //     cc.director.getScene().addChild(playerHeadLayer);
        // });
        // cc.director.loadScene("roomScene");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function() {

    }
        // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
module.exports = MainView;

const MVC = require("FWS_MVC");
var roomHandSignView;
var FaShouPaiTestLayer;
roomHandSignView = cc.Class({
    extends: MVC.FMessageConnection,

    properties: {

    },

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function() {
        //加载定庄动画
        cc.loader.loadRes("TestProfab/FaShouPaiTestLayer", function (err, prefab) {
            cc.log(err);
            FaShouPaiTestLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(FaShouPaiTestLayer);
        });

    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function() {
        FaShouPaiTestLayer.removeFromParent(true);
    }

});
module.exports = roomHandSignView;
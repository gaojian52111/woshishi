const MVC = require("FWS_MVC");
var Room_roomWaitingView;
var roomRoomWaitingViewLayer;
Room_roomWaitingView = cc.Class({
    extends: MVC.FMessageConnection,

    properties: {

    },

    //TODO:当切换到此节点的时候会运行这个方法
    /*
     *
     * */
    onEnterNode: function() {
        //加载定庄动画
        cc.log("myTurnLayer");
        cc.loader.loadRes("TestProfab/roomRoomWaitingViewLayer", function (err, prefab) {
            cc.log(err);
            roomRoomWaitingViewLayer = cc.instantiate(prefab);
            cc.director.getScene().addChild(roomRoomWaitingViewLayer);
        });

    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function() {
        roomRoomWaitingViewLayer.removeFromParent(true);
    }

});
module.exports = Room_roomWaitingView;
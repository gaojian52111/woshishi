const MVC = require("FWS_MVC");
var party_CreatePartyLoadingController;
party_CreatePartyLoadingController = cc.Class({
    extends: MVC.FMessageConnection,

    properties: {

    },

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function() {

    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function() {

    },
    //TODO：等待服务器回复party创建成功 然后再选择 进入标准局的等待 还是进入比赛详情页


    onFMessage_showPartyTypeReq:function (msg) {
        //判断消息结果

        if(msg.args.type == "STD"){
            cc.log("onFMessage_showPartyTypeReq = STD");
            MVC.FContextManager.gotoID("roomWaiting");
        }
        else if(msg.args.type == "MTT"){
            MVC.FContextManager.gotoID("chackSportsPartyinfo");
        }
        msg.complete();
    }
});
module.exports = party_CreatePartyLoadingController;

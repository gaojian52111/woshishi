//钱包
const MVC = require("FWS_MVC");
const Project = require("Project");
var walletController;
walletController = cc.Class({
    extends: MVC.FMessageConnection,

    properties: {

    },

    //TODO:当切换到此节点的时候会运行这个方法
    onEnterNode: function() {
        //loadscene。。。

        cc.log("loginController onEnterNode");
    },
    //TODO:当离开此节点的时候会运行这个方法
    onLeaveNode: function() {
        cc.log("loginController onLeaveNode");
    },
    // //切换钱包界面
    // onFMessage_walletBtnclick: function(msg) {
    //     MVC.FLog.data("钱包跳转", "接收消息 {0}", msg);
    //     MVC.FContextManager.gotoID("wallet");

    //     if(msg){
    //         if(msg.args.name = "前往钱包页面"){
    //             MVC.FContextManager.gotoID("wallet");
    //             msg.complete();
    //         }
    //     }
    // }
    // onFMessage_clickLoginButton: function(msg) {
    //     if( msg.args.name == "登录"){
    //         //进入分享节点
    //         cc.log("goto main 前");
    //         MVC.FContextManager.gotoID("main");
    //         cc.log("goto main 后");
    //         //发送消息给网络模块
    //     }else if(msg.args.name == "注册"){
    //         //进入分享节点
    //         // MVC.FContextManager.gotoID("Share");
    //         //发送消息给网络模块
    //     }

    // }

});
module.exports = walletController;
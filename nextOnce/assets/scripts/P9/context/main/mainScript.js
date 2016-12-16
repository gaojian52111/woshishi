const MVC = require("FWS_MVC");

cc.Class({
    extends: MVC.FMessageConnection,
    properties: {
        addPartyButton:{
            default:null,
            type:cc.Button
        },
        setPartyButton:{
            default:null,
            type:cc.Button
        },
        My:{
            default:null,
            type:cc.Button
        },

    },

    // use this for initialization
    onLoad: function () {
        this.connect();
        
    },
    onDestory:function () {
        this.disconnect();
    },
    clickaddPartyButton:function(){
        var msg = new MVC.FMessage("clickaddPartyButton","main");
        msg.args.name = "进入牌桌";
        msg.send(); 
        cc.log("clickaddPartyButton");
    },
    clicksetPartyButton:function(){
        var msg = new MVC.FMessage("clicksetPartyButton","main");
        msg.args.name = "进入牌局设置";
        msg.send(); 
        cc.log("clicksetPartyButton");
    },
    clickMy:function(){
        var msg = new MVC.FMessage("clickMy","main");
        msg.args.name = "我的";
        msg.send(); 
        cc.log("clickMy");
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

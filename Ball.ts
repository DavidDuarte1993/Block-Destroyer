const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
@property(cc.Label)
myScore:cc.Label = null;


 score = 0;
 myUser = {
     name:"Lwiimbo",
     UserScore:this.score,
     level:100
 };
    onBeginContact(contact,selfCollider,otherCollider)
    {
        if(otherCollider.name == "03-Breakout-Tiles<PhysicsBoxCollider>" )
        { 
            this.score += 1;
            this.myScore.string = "score :"+this.score;

            cc.sys.localStorage.setItem("myScore",this.score);
             console.log(cc.sys.localStorage.getItem("myScore"));
           cc.sys.localStorage.setItem("myUser",JSON.stringify(this.myUser));
            var yourData = JSON.parse((cc.sys.localStorage.getItem("myUser")));
            
            
            otherCollider.getComponent(cc.Sprite).destroy();
            otherCollider.destroy();
        }
    }
    onEndContact(contact,selfCollider,otherCollider)
    {
    }
    onPresolve(contact,selfCollider,otherCollider)
    {
    }
    onPostSolve(contact,selfCollider,otherCollider)
    {  
    }

    addForce(event)
    {
        switch(event.keyCode){
            case cc.macro.KEY.space:
                this.node.getComponent(cc.RigidBody).applyForceToCenter(new cc.Vec2(0,25000),true);
                break;
        }
    }
    onLoad () 
    {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.addForce,this);
        this.score = 0;
    }

    start () 
    {
    }
}


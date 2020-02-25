var left = 0;
var right = 0;
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    onBeginContact(contact,selfCollider,otherCollider)
    {
        if(otherCollider.name == "03-Breakout-Tiles" )
        {
            otherCollider.getComponent(cc.Sprite).destroy();
            otherCollider.destroy();
        }
    }
    
    movePlank(event)
    {
        switch(event.keyCode){
            case cc.macro.KEY.left:
                    left = 1;
                    break;
            case cc.macro.KEY.right:
                    right  = 1;
                    break;
        }
    }

    stopMovingPlank(event)
    {
        switch(event.keyCode){
            case cc.macro.KEY.left:
                    left = 0;
                    break;
            case cc.macro.KEY.right:
                    right  = 0;
                    break;
        }
    }

    onLoad () 
    {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.movePlank,this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.stopMovingPlank,this);
    }

    start () 
    {
    }

    update (dt) 
    {
        if(left == 1 ){
            this.node.setPosition(this.node.position.x-=450*dt,this.node.position.y);
        }
        if(right == 1 ){
            this.node.setPosition(this.node.position.x+=450*dt,this.node.position.y);
        }
    }
}

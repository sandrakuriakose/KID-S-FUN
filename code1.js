gdjs.game_321Code = {};
gdjs.game_321Code.GDplayerObjects1= [];
gdjs.game_321Code.GDplayerObjects2= [];
gdjs.game_321Code.GDplayerObjects3= [];
gdjs.game_321Code.GDfloor2Objects1= [];
gdjs.game_321Code.GDfloor2Objects2= [];
gdjs.game_321Code.GDfloor2Objects3= [];
gdjs.game_321Code.GDfloorObjects1= [];
gdjs.game_321Code.GDfloorObjects2= [];
gdjs.game_321Code.GDfloorObjects3= [];
gdjs.game_321Code.GDpillar1Objects1= [];
gdjs.game_321Code.GDpillar1Objects2= [];
gdjs.game_321Code.GDpillar1Objects3= [];
gdjs.game_321Code.GDpillar2Objects1= [];
gdjs.game_321Code.GDpillar2Objects2= [];
gdjs.game_321Code.GDpillar2Objects3= [];
gdjs.game_321Code.GDgateObjects1= [];
gdjs.game_321Code.GDgateObjects2= [];
gdjs.game_321Code.GDgateObjects3= [];
gdjs.game_321Code.GDfloor3dObjects1= [];
gdjs.game_321Code.GDfloor3dObjects2= [];
gdjs.game_321Code.GDfloor3dObjects3= [];
gdjs.game_321Code.GDcloudObjects1= [];
gdjs.game_321Code.GDcloudObjects2= [];
gdjs.game_321Code.GDcloudObjects3= [];
gdjs.game_321Code.GDrockObjects1= [];
gdjs.game_321Code.GDrockObjects2= [];
gdjs.game_321Code.GDrockObjects3= [];
gdjs.game_321Code.GDbridgeObjects1= [];
gdjs.game_321Code.GDbridgeObjects2= [];
gdjs.game_321Code.GDbridgeObjects3= [];
gdjs.game_321Code.GDcoinObjects1= [];
gdjs.game_321Code.GDcoinObjects2= [];
gdjs.game_321Code.GDcoinObjects3= [];
gdjs.game_321Code.GDscoreObjects1= [];
gdjs.game_321Code.GDscoreObjects2= [];
gdjs.game_321Code.GDscoreObjects3= [];
gdjs.game_321Code.GDEnemyObjects1= [];
gdjs.game_321Code.GDEnemyObjects2= [];
gdjs.game_321Code.GDEnemyObjects3= [];
gdjs.game_321Code.GDEnemyRightObjects1= [];
gdjs.game_321Code.GDEnemyRightObjects2= [];
gdjs.game_321Code.GDEnemyRightObjects3= [];
gdjs.game_321Code.GDEnemyLeftObjects1= [];
gdjs.game_321Code.GDEnemyLeftObjects2= [];
gdjs.game_321Code.GDEnemyLeftObjects3= [];
gdjs.game_321Code.GDskyObjects1= [];
gdjs.game_321Code.GDskyObjects2= [];
gdjs.game_321Code.GDskyObjects3= [];
gdjs.game_321Code.GDDoorObjects1= [];
gdjs.game_321Code.GDDoorObjects2= [];
gdjs.game_321Code.GDDoorObjects3= [];
gdjs.game_321Code.GDbridge2Objects1= [];
gdjs.game_321Code.GDbridge2Objects2= [];
gdjs.game_321Code.GDbridge2Objects3= [];
gdjs.game_321Code.GDplantObjects1= [];
gdjs.game_321Code.GDplantObjects2= [];
gdjs.game_321Code.GDplantObjects3= [];
gdjs.game_321Code.GDCheckpointObjects1= [];
gdjs.game_321Code.GDCheckpointObjects2= [];
gdjs.game_321Code.GDCheckpointObjects3= [];
gdjs.game_321Code.GDfallObjects1= [];
gdjs.game_321Code.GDfallObjects2= [];
gdjs.game_321Code.GDfallObjects3= [];
gdjs.game_321Code.GDland1Objects1= [];
gdjs.game_321Code.GDland1Objects2= [];
gdjs.game_321Code.GDland1Objects3= [];
gdjs.game_321Code.GDsettingObjects1= [];
gdjs.game_321Code.GDsettingObjects2= [];
gdjs.game_321Code.GDsettingObjects3= [];

gdjs.game_321Code.conditionTrue_0 = {val:false};
gdjs.game_321Code.condition0IsTrue_0 = {val:false};
gdjs.game_321Code.condition1IsTrue_0 = {val:false};
gdjs.game_321Code.condition2IsTrue_0 = {val:false};
gdjs.game_321Code.condition3IsTrue_0 = {val:false};


gdjs.game_321Code.eventsList0x6b7118 = function(runtimeScene) {

{


gdjs.game_321Code.condition0IsTrue_0.val = false;
gdjs.game_321Code.condition1IsTrue_0.val = false;
gdjs.game_321Code.condition2IsTrue_0.val = false;
{
gdjs.game_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.game_321Code.condition0IsTrue_0.val ) {
{
gdjs.game_321Code.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up"));
}if ( gdjs.game_321Code.condition1IsTrue_0.val ) {
{
gdjs.game_321Code.condition2IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}}
}
if (gdjs.game_321Code.condition2IsTrue_0.val) {
gdjs.game_321Code.GDplayerObjects2.createFrom(gdjs.game_321Code.GDplayerObjects1);

{for(var i = 0, len = gdjs.game_321Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.game_321Code.GDplayerObjects2[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.game_321Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.game_321Code.GDplayerObjects2[i].addForce(30, 0, 0);
}
}}

}


{


gdjs.game_321Code.condition0IsTrue_0.val = false;
gdjs.game_321Code.condition1IsTrue_0.val = false;
gdjs.game_321Code.condition2IsTrue_0.val = false;
{
gdjs.game_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.game_321Code.condition0IsTrue_0.val ) {
{
gdjs.game_321Code.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}if ( gdjs.game_321Code.condition1IsTrue_0.val ) {
{
gdjs.game_321Code.condition2IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up"));
}}
}
if (gdjs.game_321Code.condition2IsTrue_0.val) {
gdjs.game_321Code.GDplayerObjects2.createFrom(gdjs.game_321Code.GDplayerObjects1);

{for(var i = 0, len = gdjs.game_321Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.game_321Code.GDplayerObjects2[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.game_321Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.game_321Code.GDplayerObjects2[i].addForce(30, 0, 0);
}
}}

}


{


gdjs.game_321Code.condition0IsTrue_0.val = false;
gdjs.game_321Code.condition1IsTrue_0.val = false;
gdjs.game_321Code.condition2IsTrue_0.val = false;
{
gdjs.game_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.game_321Code.condition0IsTrue_0.val ) {
{
gdjs.game_321Code.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left"));
}if ( gdjs.game_321Code.condition1IsTrue_0.val ) {
{
gdjs.game_321Code.condition2IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right"));
}}
}
if (gdjs.game_321Code.condition2IsTrue_0.val) {
gdjs.game_321Code.GDplayerObjects2.createFrom(gdjs.game_321Code.GDplayerObjects1);

{for(var i = 0, len = gdjs.game_321Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.game_321Code.GDplayerObjects2[i].setAnimation(4);
}
}{for(var i = 0, len = gdjs.game_321Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.game_321Code.GDplayerObjects2[i].addForce(20, 90, 0);
}
}}

}


{


{
}

}


{


{
}

}


{


{
}

}


}; //End of gdjs.game_321Code.eventsList0x6b7118
gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.game_321Code.GDplayerObjects1});gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDcoinObjects1Objects = Hashtable.newFrom({"coin": gdjs.game_321Code.GDcoinObjects1});gdjs.game_321Code.eventsList0x6b65b8 = function(runtimeScene) {

{

gdjs.game_321Code.GDcoinObjects1.createFrom(runtimeScene.getObjects("coin"));
gdjs.game_321Code.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.game_321Code.condition0IsTrue_0.val = false;
{
gdjs.game_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDplayerObjects1Objects, gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDcoinObjects1Objects, false, runtimeScene);
}if (gdjs.game_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.game_321Code.GDcoinObjects1 */
{for(var i = 0, len = gdjs.game_321Code.GDcoinObjects1.length ;i < len;++i) {
    gdjs.game_321Code.GDcoinObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "C:\\Users\\User\\Downloads\\SHAREit\\Redmi 5\\file\\Silent Shadow - coin2.mp3", false, 100, 1);
}}

}


}; //End of gdjs.game_321Code.eventsList0x6b65b8
gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.game_321Code.GDEnemyObjects2});gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDEnemyLeftObjects2Objects = Hashtable.newFrom({"EnemyLeft": gdjs.game_321Code.GDEnemyLeftObjects2});gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.game_321Code.GDEnemyObjects2});gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDEnemyRightObjects2Objects = Hashtable.newFrom({"EnemyRight": gdjs.game_321Code.GDEnemyRightObjects2});gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.game_321Code.GDplayerObjects2});gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.game_321Code.GDEnemyObjects2});gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.game_321Code.GDplayerObjects1});gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.game_321Code.GDEnemyObjects1});gdjs.game_321Code.eventsList0x6be5e0 = function(runtimeScene) {

{

gdjs.game_321Code.GDEnemyObjects2.createFrom(runtimeScene.getObjects("Enemy"));

gdjs.game_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.game_321Code.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.game_321Code.GDEnemyObjects2[i].getVariableString(gdjs.game_321Code.GDEnemyObjects2[i].getVariables().getFromIndex(0)) == "Right" ) {
        gdjs.game_321Code.condition0IsTrue_0.val = true;
        gdjs.game_321Code.GDEnemyObjects2[k] = gdjs.game_321Code.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.game_321Code.GDEnemyObjects2.length = k;}if (gdjs.game_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.game_321Code.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.game_321Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.game_321Code.GDEnemyObjects2[i].addForce(60, 0, 0);
}
}}

}


{

gdjs.game_321Code.GDEnemyObjects2.createFrom(runtimeScene.getObjects("Enemy"));

gdjs.game_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.game_321Code.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.game_321Code.GDEnemyObjects2[i].getVariableString(gdjs.game_321Code.GDEnemyObjects2[i].getVariables().getFromIndex(0)) == "Left" ) {
        gdjs.game_321Code.condition0IsTrue_0.val = true;
        gdjs.game_321Code.GDEnemyObjects2[k] = gdjs.game_321Code.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.game_321Code.GDEnemyObjects2.length = k;}if (gdjs.game_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.game_321Code.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.game_321Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.game_321Code.GDEnemyObjects2[i].addForce(-60, 0, 0);
}
}}

}


{

gdjs.game_321Code.GDEnemyObjects2.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.game_321Code.GDEnemyLeftObjects2.createFrom(runtimeScene.getObjects("EnemyLeft"));

gdjs.game_321Code.condition0IsTrue_0.val = false;
{
gdjs.game_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDEnemyObjects2Objects, gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDEnemyLeftObjects2Objects, false, runtimeScene);
}if (gdjs.game_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.game_321Code.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.game_321Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.game_321Code.GDEnemyObjects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs.game_321Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.game_321Code.GDEnemyObjects2[i].returnVariable(gdjs.game_321Code.GDEnemyObjects2[i].getVariables().getFromIndex(0)).setString("Left");
}
}}

}


{

gdjs.game_321Code.GDEnemyObjects2.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.game_321Code.GDEnemyRightObjects2.createFrom(runtimeScene.getObjects("EnemyRight"));

gdjs.game_321Code.condition0IsTrue_0.val = false;
{
gdjs.game_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDEnemyObjects2Objects, gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDEnemyRightObjects2Objects, false, runtimeScene);
}if (gdjs.game_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.game_321Code.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.game_321Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.game_321Code.GDEnemyObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.game_321Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.game_321Code.GDEnemyObjects2[i].returnVariable(gdjs.game_321Code.GDEnemyObjects2[i].getVariables().getFromIndex(0)).setString("Right");
}
}}

}


{

gdjs.game_321Code.GDEnemyObjects2.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.game_321Code.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));

gdjs.game_321Code.condition0IsTrue_0.val = false;
gdjs.game_321Code.condition1IsTrue_0.val = false;
{
gdjs.game_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDplayerObjects2Objects, gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDEnemyObjects2Objects, false, runtimeScene);
}if ( gdjs.game_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.game_321Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.game_321Code.GDplayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.game_321Code.condition1IsTrue_0.val = true;
        gdjs.game_321Code.GDplayerObjects2[k] = gdjs.game_321Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.game_321Code.GDplayerObjects2.length = k;}}
if (gdjs.game_321Code.condition1IsTrue_0.val) {
gdjs.game_321Code.GDCheckpointObjects2.createFrom(runtimeScene.getObjects("Checkpoint"));
/* Reuse gdjs.game_321Code.GDplayerObjects2 */
{for(var i = 0, len = gdjs.game_321Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.game_321Code.GDplayerObjects2[i].setPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("checkpointX")),gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("checkpointY"))-(0-(( gdjs.game_321Code.GDCheckpointObjects2.length === 0 ) ? 0 :gdjs.game_321Code.GDCheckpointObjects2[0].getHeight())));
}
}}

}


{

gdjs.game_321Code.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.game_321Code.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.game_321Code.condition0IsTrue_0.val = false;
gdjs.game_321Code.condition1IsTrue_0.val = false;
{
gdjs.game_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDplayerObjects1Objects, gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDEnemyObjects1Objects, false, runtimeScene);
}if ( gdjs.game_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.game_321Code.GDplayerObjects1.length;i<l;++i) {
    if ( !(gdjs.game_321Code.GDplayerObjects1[i].getBehavior("PlatformerObject").isOnFloor()) ) {
        gdjs.game_321Code.condition1IsTrue_0.val = true;
        gdjs.game_321Code.GDplayerObjects1[k] = gdjs.game_321Code.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.game_321Code.GDplayerObjects1.length = k;}}
if (gdjs.game_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.game_321Code.GDEnemyObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Silent Shadow - button.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.game_321Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.game_321Code.GDEnemyObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.game_321Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.game_321Code.GDEnemyObjects1[i].setBlendMode(2);
}
}{for(var i = 0, len = gdjs.game_321Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.game_321Code.GDEnemyObjects1[i].addForce(0, 1000, 1);
}
}}

}


}; //End of gdjs.game_321Code.eventsList0x6be5e0
gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.game_321Code.GDplayerObjects2});gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDDoorObjects2Objects = Hashtable.newFrom({"Door": gdjs.game_321Code.GDDoorObjects2});gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.game_321Code.GDplayerObjects1});gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.game_321Code.GDDoorObjects1});gdjs.game_321Code.eventsList0x6bf608 = function(runtimeScene) {

{

gdjs.game_321Code.GDDoorObjects2.createFrom(runtimeScene.getObjects("Door"));
gdjs.game_321Code.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));

gdjs.game_321Code.condition0IsTrue_0.val = false;
gdjs.game_321Code.condition1IsTrue_0.val = false;
{
gdjs.game_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDplayerObjects2Objects, gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDDoorObjects2Objects, false, runtimeScene);
}if ( gdjs.game_321Code.condition0IsTrue_0.val ) {
{
gdjs.game_321Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 7;
}}
if (gdjs.game_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.game_321Code.GDDoorObjects2 */
gdjs.game_321Code.GDscoreObjects2.createFrom(runtimeScene.getObjects("score"));
{for(var i = 0, len = gdjs.game_321Code.GDscoreObjects2.length ;i < len;++i) {
    gdjs.game_321Code.GDscoreObjects2[i].setString("SCORE:WON ");
}
}{for(var i = 0, len = gdjs.game_321Code.GDDoorObjects2.length ;i < len;++i) {
    gdjs.game_321Code.GDDoorObjects2[i].setAnimation(1);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "won", false);
}}

}


{

gdjs.game_321Code.GDDoorObjects1.createFrom(runtimeScene.getObjects("Door"));
gdjs.game_321Code.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.game_321Code.condition0IsTrue_0.val = false;
gdjs.game_321Code.condition1IsTrue_0.val = false;
{
gdjs.game_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDplayerObjects1Objects, gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDDoorObjects1Objects, false, runtimeScene);
}if ( gdjs.game_321Code.condition0IsTrue_0.val ) {
{
gdjs.game_321Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 7;
}}
if (gdjs.game_321Code.condition1IsTrue_0.val) {
gdjs.game_321Code.GDscoreObjects1.createFrom(runtimeScene.getObjects("score"));
{for(var i = 0, len = gdjs.game_321Code.GDscoreObjects1.length ;i < len;++i) {
    gdjs.game_321Code.GDscoreObjects1[i].setString("Need 7 coins " +gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


}; //End of gdjs.game_321Code.eventsList0x6bf608
gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.game_321Code.GDplayerObjects1});gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDCheckpointObjects1Objects = Hashtable.newFrom({"Checkpoint": gdjs.game_321Code.GDCheckpointObjects1});gdjs.game_321Code.eventsList0x6bfdb8 = function(runtimeScene) {

{


gdjs.game_321Code.condition0IsTrue_0.val = false;
{
gdjs.game_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.game_321Code.condition0IsTrue_0.val) {
gdjs.game_321Code.GDCheckpointObjects2.createFrom(runtimeScene.getObjects("Checkpoint"));
{runtimeScene.getVariables().get("checkpointX").setNumber((( gdjs.game_321Code.GDCheckpointObjects2.length === 0 ) ? 0 :gdjs.game_321Code.GDCheckpointObjects2[0].getPointX("")));
}{runtimeScene.getVariables().get("checkpointY").setNumber((( gdjs.game_321Code.GDCheckpointObjects2.length === 0 ) ? 0 :gdjs.game_321Code.GDCheckpointObjects2[0].getPointY("")));
}}

}


{

gdjs.game_321Code.GDCheckpointObjects1.createFrom(runtimeScene.getObjects("Checkpoint"));
gdjs.game_321Code.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.game_321Code.condition0IsTrue_0.val = false;
{
gdjs.game_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDplayerObjects1Objects, gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDCheckpointObjects1Objects, false, runtimeScene);
}if (gdjs.game_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.game_321Code.GDCheckpointObjects1 */
{runtimeScene.getVariables().get("checkpointX").setNumber((( gdjs.game_321Code.GDCheckpointObjects1.length === 0 ) ? 0 :gdjs.game_321Code.GDCheckpointObjects1[0].getPointX("")));
}{runtimeScene.getVariables().get("checkpointY").setNumber((( gdjs.game_321Code.GDCheckpointObjects1.length === 0 ) ? 0 :gdjs.game_321Code.GDCheckpointObjects1[0].getPointY("")));
}{for(var i = 0, len = gdjs.game_321Code.GDCheckpointObjects1.length ;i < len;++i) {
    gdjs.game_321Code.GDCheckpointObjects1[i].setAnimation(1);
}
}}

}


}; //End of gdjs.game_321Code.eventsList0x6bfdb8
gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.game_321Code.GDplayerObjects1});gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDfloorObjects1Objects = Hashtable.newFrom({"floor": gdjs.game_321Code.GDfloorObjects1});gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.game_321Code.GDplayerObjects1});gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDfloor2Objects1Objects = Hashtable.newFrom({"floor2": gdjs.game_321Code.GDfloor2Objects1});gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDsettingObjects1Objects = Hashtable.newFrom({"setting": gdjs.game_321Code.GDsettingObjects1});gdjs.game_321Code.eventsList0x6b06d0 = function(runtimeScene) {

{


gdjs.game_321Code.condition0IsTrue_0.val = false;
{
gdjs.game_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.game_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SETTINGS", false);
}}

}


}; //End of gdjs.game_321Code.eventsList0x6b06d0
gdjs.game_321Code.eventsList0xb0fb8 = function(runtimeScene) {

{


gdjs.game_321Code.condition0IsTrue_0.val = false;
{
gdjs.game_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.game_321Code.condition0IsTrue_0.val) {
gdjs.game_321Code.GDEnemyLeftObjects1.createFrom(runtimeScene.getObjects("EnemyLeft"));
gdjs.game_321Code.GDEnemyRightObjects1.createFrom(runtimeScene.getObjects("EnemyRight"));
{for(var i = 0, len = gdjs.game_321Code.GDEnemyRightObjects1.length ;i < len;++i) {
    gdjs.game_321Code.GDEnemyRightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.game_321Code.GDEnemyLeftObjects1.length ;i < len;++i) {
    gdjs.game_321Code.GDEnemyLeftObjects1[i].hide();
}
}}

}


{

gdjs.game_321Code.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.game_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.game_321Code.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.game_321Code.GDplayerObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        gdjs.game_321Code.condition0IsTrue_0.val = true;
        gdjs.game_321Code.GDplayerObjects1[k] = gdjs.game_321Code.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.game_321Code.GDplayerObjects1.length = k;}if (gdjs.game_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.game_321Code.eventsList0x6b7118(runtimeScene);} //End of subevents
}

}


{

gdjs.game_321Code.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.game_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.game_321Code.GDplayerObjects1.length;i<l;++i) {
    if ( !(gdjs.game_321Code.GDplayerObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        gdjs.game_321Code.condition0IsTrue_0.val = true;
        gdjs.game_321Code.GDplayerObjects1[k] = gdjs.game_321Code.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.game_321Code.GDplayerObjects1.length = k;}if (gdjs.game_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.game_321Code.GDplayerObjects1 */
{for(var i = 0, len = gdjs.game_321Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.game_321Code.GDplayerObjects1[i].setAnimation(0);
}
}}

}


{


{
gdjs.game_321Code.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.game_321Code.GDplayerObjects1.length !== 0 ? gdjs.game_321Code.GDplayerObjects1[0] : null), true, "", 0);
}}

}


{


gdjs.game_321Code.eventsList0x6b65b8(runtimeScene);
}


{


{
gdjs.game_321Code.GDscoreObjects1.createFrom(runtimeScene.getObjects("score"));
{for(var i = 0, len = gdjs.game_321Code.GDscoreObjects1.length ;i < len;++i) {
    gdjs.game_321Code.GDscoreObjects1[i].setString("SCORE: " +gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


{
}

}


{


gdjs.game_321Code.eventsList0x6be5e0(runtimeScene);
}


{


gdjs.game_321Code.eventsList0x6bf608(runtimeScene);
}


{


gdjs.game_321Code.eventsList0x6bfdb8(runtimeScene);
}


{

gdjs.game_321Code.GDfloorObjects1.createFrom(runtimeScene.getObjects("floor"));
gdjs.game_321Code.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.game_321Code.condition0IsTrue_0.val = false;
{
gdjs.game_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDplayerObjects1Objects, gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDfloorObjects1Objects, false, runtimeScene);
}if (gdjs.game_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.game_321Code.GDfloor2Objects1.createFrom(runtimeScene.getObjects("floor2"));
gdjs.game_321Code.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.game_321Code.condition0IsTrue_0.val = false;
{
gdjs.game_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDplayerObjects1Objects, gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDfloor2Objects1Objects, false, runtimeScene);
}if (gdjs.game_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "C:\\Users\\User\\Downloads\\SHAREit\\Redmi 5\\file\\Silent Shadow - fall.mp3", false, 100, 1);
}}

}


{

gdjs.game_321Code.GDsettingObjects1.createFrom(runtimeScene.getObjects("setting"));

gdjs.game_321Code.condition0IsTrue_0.val = false;
{
gdjs.game_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_321Code.mapOfGDgdjs_46game_95321Code_46GDsettingObjects1Objects, runtimeScene, true, false);
}if (gdjs.game_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.game_321Code.eventsList0x6b06d0(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.game_321Code.eventsList0xb0fb8


gdjs.game_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.game_321Code.GDplayerObjects1.length = 0;
gdjs.game_321Code.GDplayerObjects2.length = 0;
gdjs.game_321Code.GDplayerObjects3.length = 0;
gdjs.game_321Code.GDfloor2Objects1.length = 0;
gdjs.game_321Code.GDfloor2Objects2.length = 0;
gdjs.game_321Code.GDfloor2Objects3.length = 0;
gdjs.game_321Code.GDfloorObjects1.length = 0;
gdjs.game_321Code.GDfloorObjects2.length = 0;
gdjs.game_321Code.GDfloorObjects3.length = 0;
gdjs.game_321Code.GDpillar1Objects1.length = 0;
gdjs.game_321Code.GDpillar1Objects2.length = 0;
gdjs.game_321Code.GDpillar1Objects3.length = 0;
gdjs.game_321Code.GDpillar2Objects1.length = 0;
gdjs.game_321Code.GDpillar2Objects2.length = 0;
gdjs.game_321Code.GDpillar2Objects3.length = 0;
gdjs.game_321Code.GDgateObjects1.length = 0;
gdjs.game_321Code.GDgateObjects2.length = 0;
gdjs.game_321Code.GDgateObjects3.length = 0;
gdjs.game_321Code.GDfloor3dObjects1.length = 0;
gdjs.game_321Code.GDfloor3dObjects2.length = 0;
gdjs.game_321Code.GDfloor3dObjects3.length = 0;
gdjs.game_321Code.GDcloudObjects1.length = 0;
gdjs.game_321Code.GDcloudObjects2.length = 0;
gdjs.game_321Code.GDcloudObjects3.length = 0;
gdjs.game_321Code.GDrockObjects1.length = 0;
gdjs.game_321Code.GDrockObjects2.length = 0;
gdjs.game_321Code.GDrockObjects3.length = 0;
gdjs.game_321Code.GDbridgeObjects1.length = 0;
gdjs.game_321Code.GDbridgeObjects2.length = 0;
gdjs.game_321Code.GDbridgeObjects3.length = 0;
gdjs.game_321Code.GDcoinObjects1.length = 0;
gdjs.game_321Code.GDcoinObjects2.length = 0;
gdjs.game_321Code.GDcoinObjects3.length = 0;
gdjs.game_321Code.GDscoreObjects1.length = 0;
gdjs.game_321Code.GDscoreObjects2.length = 0;
gdjs.game_321Code.GDscoreObjects3.length = 0;
gdjs.game_321Code.GDEnemyObjects1.length = 0;
gdjs.game_321Code.GDEnemyObjects2.length = 0;
gdjs.game_321Code.GDEnemyObjects3.length = 0;
gdjs.game_321Code.GDEnemyRightObjects1.length = 0;
gdjs.game_321Code.GDEnemyRightObjects2.length = 0;
gdjs.game_321Code.GDEnemyRightObjects3.length = 0;
gdjs.game_321Code.GDEnemyLeftObjects1.length = 0;
gdjs.game_321Code.GDEnemyLeftObjects2.length = 0;
gdjs.game_321Code.GDEnemyLeftObjects3.length = 0;
gdjs.game_321Code.GDskyObjects1.length = 0;
gdjs.game_321Code.GDskyObjects2.length = 0;
gdjs.game_321Code.GDskyObjects3.length = 0;
gdjs.game_321Code.GDDoorObjects1.length = 0;
gdjs.game_321Code.GDDoorObjects2.length = 0;
gdjs.game_321Code.GDDoorObjects3.length = 0;
gdjs.game_321Code.GDbridge2Objects1.length = 0;
gdjs.game_321Code.GDbridge2Objects2.length = 0;
gdjs.game_321Code.GDbridge2Objects3.length = 0;
gdjs.game_321Code.GDplantObjects1.length = 0;
gdjs.game_321Code.GDplantObjects2.length = 0;
gdjs.game_321Code.GDplantObjects3.length = 0;
gdjs.game_321Code.GDCheckpointObjects1.length = 0;
gdjs.game_321Code.GDCheckpointObjects2.length = 0;
gdjs.game_321Code.GDCheckpointObjects3.length = 0;
gdjs.game_321Code.GDfallObjects1.length = 0;
gdjs.game_321Code.GDfallObjects2.length = 0;
gdjs.game_321Code.GDfallObjects3.length = 0;
gdjs.game_321Code.GDland1Objects1.length = 0;
gdjs.game_321Code.GDland1Objects2.length = 0;
gdjs.game_321Code.GDland1Objects3.length = 0;
gdjs.game_321Code.GDsettingObjects1.length = 0;
gdjs.game_321Code.GDsettingObjects2.length = 0;
gdjs.game_321Code.GDsettingObjects3.length = 0;

gdjs.game_321Code.eventsList0xb0fb8(runtimeScene);
return;
}
gdjs['game_321Code'] = gdjs.game_321Code;

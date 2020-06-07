gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDPAPERObjects1= [];
gdjs.MainMenuCode.GDPAPERObjects2= [];
gdjs.MainMenuCode.GDMIRRORObjects1= [];
gdjs.MainMenuCode.GDMIRRORObjects2= [];
gdjs.MainMenuCode.GDquitObjects1= [];
gdjs.MainMenuCode.GDquitObjects2= [];
gdjs.MainMenuCode.GDSETTINGObjects1= [];
gdjs.MainMenuCode.GDSETTINGObjects2= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition2IsTrue_0 = {val:false};
gdjs.MainMenuCode.conditionTrue_1 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_1 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_1 = {val:false};
gdjs.MainMenuCode.condition2IsTrue_1 = {val:false};


gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDMIRRORObjects1Objects = Hashtable.newFrom({"MIRROR": gdjs.MainMenuCode.GDMIRRORObjects1});gdjs.MainMenuCode.eventsList0x6b72a0 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game 1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


}; //End of gdjs.MainMenuCode.eventsList0x6b72a0
gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDMIRRORObjects1Objects = Hashtable.newFrom({"MIRROR": gdjs.MainMenuCode.GDMIRRORObjects1});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDquitObjects1Objects = Hashtable.newFrom({"quit": gdjs.MainMenuCode.GDquitObjects1});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDMIRRORObjects1Objects = Hashtable.newFrom({"MIRROR": gdjs.MainMenuCode.GDMIRRORObjects1});gdjs.MainMenuCode.eventsList0x6b6690 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
gdjs.MainMenuCode.condition1IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MainMenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition1IsTrue_0;
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7061756);
}
}}
if (gdjs.MainMenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "C:\\Users\\User\\Downloads\\SHAREit\\Redmi 5\\file\\Silent Shadow - button.mp3", false, 200, 1);
}}

}


}; //End of gdjs.MainMenuCode.eventsList0x6b6690
gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDSETTINGObjects1Objects = Hashtable.newFrom({"SETTING": gdjs.MainMenuCode.GDSETTINGObjects1});gdjs.MainMenuCode.eventsList0x6b4610 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SETTINGS", false);
}}

}


}; //End of gdjs.MainMenuCode.eventsList0x6b4610
gdjs.MainMenuCode.eventsList0xb0fb8 = function(runtimeScene) {

{

gdjs.MainMenuCode.GDMIRRORObjects1.createFrom(runtimeScene.getObjects("MIRROR"));

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDMIRRORObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDMIRRORObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDMIRRORObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDMIRRORObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList0x6b72a0(runtimeScene);} //End of subevents
}

}


{

gdjs.MainMenuCode.GDMIRRORObjects1.createFrom(runtimeScene.getObjects("MIRROR"));

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDMIRRORObjects1Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDMIRRORObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDMIRRORObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDMIRRORObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.MainMenuCode.GDquitObjects1.createFrom(runtimeScene.getObjects("quit"));

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
gdjs.MainMenuCode.condition1IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDquitObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MainMenuCode.condition0IsTrue_0.val ) {
{
gdjs.MainMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.MainMenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.MainMenuCode.GDMIRRORObjects1.createFrom(runtimeScene.getObjects("MIRROR"));

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
gdjs.MainMenuCode.condition1IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDMIRRORObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MainMenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition1IsTrue_0;
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7061156);
}
}}
if (gdjs.MainMenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "C:\\Users\\User\\Downloads\\SHAREit\\Redmi 5\\file\\Silent Shadow - intro 2.mp3", false, 100, 1);
}
{ //Subevents
gdjs.MainMenuCode.eventsList0x6b6690(runtimeScene);} //End of subevents
}

}


{

gdjs.MainMenuCode.GDSETTINGObjects1.createFrom(runtimeScene.getObjects("SETTING"));

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDSETTINGObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList0x6b4610(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MainMenuCode.eventsList0xb0fb8


gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.MainMenuCode.GDPAPERObjects1.length = 0;
gdjs.MainMenuCode.GDPAPERObjects2.length = 0;
gdjs.MainMenuCode.GDMIRRORObjects1.length = 0;
gdjs.MainMenuCode.GDMIRRORObjects2.length = 0;
gdjs.MainMenuCode.GDquitObjects1.length = 0;
gdjs.MainMenuCode.GDquitObjects2.length = 0;
gdjs.MainMenuCode.GDSETTINGObjects1.length = 0;
gdjs.MainMenuCode.GDSETTINGObjects2.length = 0;

gdjs.MainMenuCode.eventsList0xb0fb8(runtimeScene);
return;
}
gdjs['MainMenuCode'] = gdjs.MainMenuCode;

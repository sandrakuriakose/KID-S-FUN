gdjs.SETTINGSCode = {};
gdjs.SETTINGSCode.GDPLAYObjects1= [];
gdjs.SETTINGSCode.GDPLAYObjects2= [];
gdjs.SETTINGSCode.GDBACKObjects1= [];
gdjs.SETTINGSCode.GDBACKObjects2= [];
gdjs.SETTINGSCode.GDNewObjectObjects1= [];
gdjs.SETTINGSCode.GDNewObjectObjects2= [];
gdjs.SETTINGSCode.GDDIRECTObjects1= [];
gdjs.SETTINGSCode.GDDIRECTObjects2= [];

gdjs.SETTINGSCode.conditionTrue_0 = {val:false};
gdjs.SETTINGSCode.condition0IsTrue_0 = {val:false};
gdjs.SETTINGSCode.condition1IsTrue_0 = {val:false};


gdjs.SETTINGSCode.mapOfGDgdjs_46SETTINGSCode_46GDPLAYObjects1Objects = Hashtable.newFrom({"PLAY": gdjs.SETTINGSCode.GDPLAYObjects1});gdjs.SETTINGSCode.eventsList0x6b72a0 = function(runtimeScene) {

{


gdjs.SETTINGSCode.condition0IsTrue_0.val = false;
{
gdjs.SETTINGSCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.SETTINGSCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game 1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


}; //End of gdjs.SETTINGSCode.eventsList0x6b72a0
gdjs.SETTINGSCode.mapOfGDgdjs_46SETTINGSCode_46GDPLAYObjects1Objects = Hashtable.newFrom({"PLAY": gdjs.SETTINGSCode.GDPLAYObjects1});gdjs.SETTINGSCode.mapOfGDgdjs_46SETTINGSCode_46GDBACKObjects1Objects = Hashtable.newFrom({"BACK": gdjs.SETTINGSCode.GDBACKObjects1});gdjs.SETTINGSCode.eventsList0x6b6830 = function(runtimeScene) {

{


gdjs.SETTINGSCode.condition0IsTrue_0.val = false;
{
gdjs.SETTINGSCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.SETTINGSCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


}; //End of gdjs.SETTINGSCode.eventsList0x6b6830
gdjs.SETTINGSCode.mapOfGDgdjs_46SETTINGSCode_46GDBACKObjects1Objects = Hashtable.newFrom({"BACK": gdjs.SETTINGSCode.GDBACKObjects1});gdjs.SETTINGSCode.eventsList0xb0fb8 = function(runtimeScene) {

{

gdjs.SETTINGSCode.GDPLAYObjects1.createFrom(runtimeScene.getObjects("PLAY"));

gdjs.SETTINGSCode.condition0IsTrue_0.val = false;
{
gdjs.SETTINGSCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SETTINGSCode.mapOfGDgdjs_46SETTINGSCode_46GDPLAYObjects1Objects, runtimeScene, true, false);
}if (gdjs.SETTINGSCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SETTINGSCode.GDPLAYObjects1 */
{for(var i = 0, len = gdjs.SETTINGSCode.GDPLAYObjects1.length ;i < len;++i) {
    gdjs.SETTINGSCode.GDPLAYObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.SETTINGSCode.eventsList0x6b72a0(runtimeScene);} //End of subevents
}

}


{

gdjs.SETTINGSCode.GDPLAYObjects1.createFrom(runtimeScene.getObjects("PLAY"));

gdjs.SETTINGSCode.condition0IsTrue_0.val = false;
{
gdjs.SETTINGSCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SETTINGSCode.mapOfGDgdjs_46SETTINGSCode_46GDPLAYObjects1Objects, runtimeScene, true, true);
}if (gdjs.SETTINGSCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SETTINGSCode.GDPLAYObjects1 */
{for(var i = 0, len = gdjs.SETTINGSCode.GDPLAYObjects1.length ;i < len;++i) {
    gdjs.SETTINGSCode.GDPLAYObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.SETTINGSCode.GDBACKObjects1.createFrom(runtimeScene.getObjects("BACK"));

gdjs.SETTINGSCode.condition0IsTrue_0.val = false;
{
gdjs.SETTINGSCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SETTINGSCode.mapOfGDgdjs_46SETTINGSCode_46GDBACKObjects1Objects, runtimeScene, true, false);
}if (gdjs.SETTINGSCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SETTINGSCode.GDBACKObjects1 */
{for(var i = 0, len = gdjs.SETTINGSCode.GDBACKObjects1.length ;i < len;++i) {
    gdjs.SETTINGSCode.GDBACKObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.SETTINGSCode.eventsList0x6b6830(runtimeScene);} //End of subevents
}

}


{

gdjs.SETTINGSCode.GDBACKObjects1.createFrom(runtimeScene.getObjects("BACK"));

gdjs.SETTINGSCode.condition0IsTrue_0.val = false;
{
gdjs.SETTINGSCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SETTINGSCode.mapOfGDgdjs_46SETTINGSCode_46GDBACKObjects1Objects, runtimeScene, true, true);
}if (gdjs.SETTINGSCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SETTINGSCode.GDBACKObjects1 */
{for(var i = 0, len = gdjs.SETTINGSCode.GDBACKObjects1.length ;i < len;++i) {
    gdjs.SETTINGSCode.GDBACKObjects1[i].setAnimation(0);
}
}}

}


}; //End of gdjs.SETTINGSCode.eventsList0xb0fb8


gdjs.SETTINGSCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.SETTINGSCode.GDPLAYObjects1.length = 0;
gdjs.SETTINGSCode.GDPLAYObjects2.length = 0;
gdjs.SETTINGSCode.GDBACKObjects1.length = 0;
gdjs.SETTINGSCode.GDBACKObjects2.length = 0;
gdjs.SETTINGSCode.GDNewObjectObjects1.length = 0;
gdjs.SETTINGSCode.GDNewObjectObjects2.length = 0;
gdjs.SETTINGSCode.GDDIRECTObjects1.length = 0;
gdjs.SETTINGSCode.GDDIRECTObjects2.length = 0;

gdjs.SETTINGSCode.eventsList0xb0fb8(runtimeScene);
return;
}
gdjs['SETTINGSCode'] = gdjs.SETTINGSCode;

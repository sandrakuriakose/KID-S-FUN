gdjs.wonCode = {};
gdjs.wonCode.GDhomeObjects1= [];
gdjs.wonCode.GDhomeObjects2= [];
gdjs.wonCode.GDhomeObjects3= [];
gdjs.wonCode.GDWONObjects1= [];
gdjs.wonCode.GDWONObjects2= [];
gdjs.wonCode.GDWONObjects3= [];
gdjs.wonCode.GDBACKObjects1= [];
gdjs.wonCode.GDBACKObjects2= [];
gdjs.wonCode.GDBACKObjects3= [];
gdjs.wonCode.GDNewObjectObjects1= [];
gdjs.wonCode.GDNewObjectObjects2= [];
gdjs.wonCode.GDNewObjectObjects3= [];

gdjs.wonCode.conditionTrue_0 = {val:false};
gdjs.wonCode.condition0IsTrue_0 = {val:false};
gdjs.wonCode.condition1IsTrue_0 = {val:false};


gdjs.wonCode.mapOfGDgdjs_46wonCode_46GDBACKObjects1Objects = Hashtable.newFrom({"BACK": gdjs.wonCode.GDBACKObjects1});gdjs.wonCode.eventsList0x6b72a0 = function(runtimeScene) {

{


gdjs.wonCode.condition0IsTrue_0.val = false;
{
gdjs.wonCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.wonCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


{



}


}; //End of gdjs.wonCode.eventsList0x6b72a0
gdjs.wonCode.mapOfGDgdjs_46wonCode_46GDBACKObjects1Objects = Hashtable.newFrom({"BACK": gdjs.wonCode.GDBACKObjects1});gdjs.wonCode.eventsList0xb0fb8 = function(runtimeScene) {

{

gdjs.wonCode.GDBACKObjects1.createFrom(runtimeScene.getObjects("BACK"));

gdjs.wonCode.condition0IsTrue_0.val = false;
{
gdjs.wonCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.wonCode.mapOfGDgdjs_46wonCode_46GDBACKObjects1Objects, runtimeScene, true, false);
}if (gdjs.wonCode.condition0IsTrue_0.val) {
/* Reuse gdjs.wonCode.GDBACKObjects1 */
{for(var i = 0, len = gdjs.wonCode.GDBACKObjects1.length ;i < len;++i) {
    gdjs.wonCode.GDBACKObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.wonCode.eventsList0x6b72a0(runtimeScene);} //End of subevents
}

}


{

gdjs.wonCode.GDBACKObjects1.createFrom(runtimeScene.getObjects("BACK"));

gdjs.wonCode.condition0IsTrue_0.val = false;
{
gdjs.wonCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.wonCode.mapOfGDgdjs_46wonCode_46GDBACKObjects1Objects, runtimeScene, true, true);
}if (gdjs.wonCode.condition0IsTrue_0.val) {
/* Reuse gdjs.wonCode.GDBACKObjects1 */
{for(var i = 0, len = gdjs.wonCode.GDBACKObjects1.length ;i < len;++i) {
    gdjs.wonCode.GDBACKObjects1[i].setAnimation(0);
}
}}

}


}; //End of gdjs.wonCode.eventsList0xb0fb8


gdjs.wonCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.wonCode.GDhomeObjects1.length = 0;
gdjs.wonCode.GDhomeObjects2.length = 0;
gdjs.wonCode.GDhomeObjects3.length = 0;
gdjs.wonCode.GDWONObjects1.length = 0;
gdjs.wonCode.GDWONObjects2.length = 0;
gdjs.wonCode.GDWONObjects3.length = 0;
gdjs.wonCode.GDBACKObjects1.length = 0;
gdjs.wonCode.GDBACKObjects2.length = 0;
gdjs.wonCode.GDBACKObjects3.length = 0;
gdjs.wonCode.GDNewObjectObjects1.length = 0;
gdjs.wonCode.GDNewObjectObjects2.length = 0;
gdjs.wonCode.GDNewObjectObjects3.length = 0;

gdjs.wonCode.eventsList0xb0fb8(runtimeScene);
return;
}
gdjs['wonCode'] = gdjs.wonCode;

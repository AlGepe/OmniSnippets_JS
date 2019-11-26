/*
  * Returns the name of a an item in a value setter give its UID
  * works for Value Selects with value instead of uid
  *
  * INPUT: - uid (vSetter) or value (vSelect) as a number
  *        - variable storing the value setter (array of dictionaries)
  * OUTPUT: Displayed name of the option (string) or error message
  */
function getNameFromVSetter(thisUid, vSetter){
  var outPut;
  if(!vSetter[0]){ //it's a Value Select
    outPut = "There is no element with VALUE: "+thisUid+" in your Value Select";
    for(var i = 0; i < vSetter.items.length; i++){
      if(vSetter.items[i].value == thisUid){
        return vSetter.items[i].name;
      }
    }
  }else{
    outPut = "There is no element with UID: "+thisUid+" in your Value Setter";
    for(var i = 0; i < vSetter.length;i++){
      if(vSetter[i].uid == thisUid){
        return vSetter[i].name;
      }
    }
  }
  return outPut;
}

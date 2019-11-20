/*
    * Returns the name of a an item in a value setter give its UID
    * workd for Value Selects with value instead of uid
    *
    * INPUT: - uid as a number
    *        - variable storing the value setter (array of dictionaries)
    * OUTPUT: Displayed name of the option (string) or error message
*/
function getNameFromVSetter(thisUid, vSetter){
    var name;
    if(vSetter.uid === undefined){ //it's a Value Select
        name = "There is no element with VALUE: "+thisUid+" in your Value Select";
        for(var i = 0; i < vSetter.length;i++){
            if(vSetter[i].value == thisUid){
                return vSetter[i].name;
            }
        }
        name = "There is no element with UID: "+thisUid+" in your Value Setter";
        for(var i = 0; i < vSetter.length;i++){
            if(vSetter[i].uid == thisUid){
                return vSetter[i].name;
            }
        }
    }
    return name;
}

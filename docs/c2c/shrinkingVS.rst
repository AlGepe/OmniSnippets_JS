.. _shrinkingVS:

Dynamically changing  VSetters
------------------------------

In the rare occasion that you might wanted to have a value setter with options dynamically changing, this is your section. This was created in collaboration with Jack [#f1]_ as a proof of concept, but it's not something you will probably want to do everyday.

In the example, we have a value setter that only lists those options that have not been selected previously. In this way, when you select an option from the list, the previous one disappears. It could be a way to force the user to not repeat a selection and explore all possible options.

Here is the ``onResult`` code:

.. code-block:: javascript

  omni.onResult(['relevantVar'], function (ctx, relevantVar) {
    relevantVar = relevantVar.toNumber();
    ctx.hideVariables('m_planet'); 
    if (relevantVar == 199) {
      omni.createValueSetter('relevantVar', vSetter_OG);
      vSetter2Trimm = vSetter_OG;
      idx2rm = 's';
    } else {
      if (typeof(idx2rm) === typeof(2)) {
        vSetter2Trimm = deleteIndexVSetter(vSetter2Trimm, idx2rm);
      } else {} 
      omni.createValueSetter('relevantVar', vSetter2Trimm);
      idx2rm = getIndexFromVSetter(relevantVar, vSetter2Trimm);
    }
  });

And here we can see the two relevant functions for the trick to work (``deleteIndexVSetter`` and ``getIndexFromVSetter``):

.. code-block:: javascript

  function getIndexFromVSetter(thisUid, vSetter){
    var outPut;
    if(!vSetter[0]){ //it's a Value Select
      outPut = "There is no element with VALUE: "+thisUid+" in your Value Select";
      for(var i = 0; i < vSetter.items.length; i++){
        if(vSetter.items[i].value == thisUid){
          return i;
        }
      }
    }else{
      outPut = "There is no element with UID: "+thisUid+" in your Value Setter";
      for(var i = 0; i < vSetter.length;i++){
        if(vSetter[i].uid == thisUid){
          return i;
        }
      }
    }
    return outPut;
  }

  function deleteIndexVSetter(vSetter, idx){
    var begin = vSetter.slice(0, idx);
    var end = vSetter.slice(idx+1, vSetter.length);
    var wholeNew = begin.concat(end);
    return wholeNew;
  }

These two functions can also be handy for other applications, which is why they have been added to the repository. In particular ``getIndexFromVSetter`` is a great way to add the user selection into an HTML output.

.. seealso::
  We have created a calculator using this code so that you can see the results for yourself. Check it out at `Dynamically shrinking VSetter <https://bb.omnicalculator.com/#/calculators/2296>`__ on BB.
  


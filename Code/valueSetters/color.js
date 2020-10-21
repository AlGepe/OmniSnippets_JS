/*
 * Value select to allow user selected color in charts
 * Only a few colors have been select
 * All numbers in [1-11] correspond to a unique color
 */
var color_VS = omni.createValueSelect ( {
  db : {name : "Dark Blue", value : 1},
  lb : {name : "Light Blue", value : 3},
  y  : {name : "Yellow", value : 7},
  o  : {name : "Orange", value : 9},
  r  : {name : "Red", value : 10},
  dr : {name : "Dark Red", value : 11},
});

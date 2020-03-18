omni.onResult(['compare'], function(ctx, compare, CPM_1, CPM_2){  
  
  
 	compare = compare.toNumber();
  	if (compare === 0) {
  		ctx.hideVariables('cost_2','impressions_2','CPM_2');
    }
  	if (compare === 1) {
      	ctx.showVariables('cost_2','impressions_2','CPM_2');
    	
      if (CPM_1 > CPM_2) {
        ctx.addHtml("Campaign 2 is less expensive.", {afterVariable: 'CPM_2'});
      }
       if (CPM_1 < CPM_2) {
        ctx.addHtml("Campaign 1 is less expensive.", {afterVariable: 'CPM_2'});
      }
         if (CPM_1 == CPM_2) {
      ctx.addHtml("Campaigns have equal cost.", {afterVariable: 'CPM_2'});
      }
    }
});

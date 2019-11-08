e strict";

var DATA = [{"name":"Stoker-King model","uid":"687977402","values":{"scenario":1,"initial_human":1650000000,"b_scale":100,"k_scale":"0.996","human_special":0,"human_special_number":1,"initial_vampire":1,"a_scale":"0.000001","e_scale":0,"vampire_special":0,"vampire_special_number":0,"initial_slayer":0,"d_scale":0,"c_scale":0,"b2_scale":0,"slayer_special":0,"slayer_special_number":0,"time_scale":"30.44","chart_scale":0}},{"name":"Rice model","uid":"2591588994","values":{"scenario":2,"initial_human":982000000,"b_scale":10,"k_scale":"0.996","human_special":0,"human_special_number":1,"initial_vampire":2,"a_scale":"0.000001","e_scale":0,"vampire_special":0,"vampire_special_number":0,"initial_slayer":0,"d_scale":0,"c_scale":0,"b2_scale":0,"slayer_special":0,"slayer_special_number":0,"time_scale":"365.2425","chart_scale":0}},{"name":"Harris-Meyer-Kostova model","uid":"458872222","values":{"scenario":3,"initial_human":6159000000,"b_scale":10,"k_scale":"0.996","human_special":0,"human_special_number":1,"initial_vampire":5000000,"a_scale":"0.00000002","e_scale":0,"vampire_special":0,"vampire_special_number":0,"initial_slayer":2000,"d_scale":0,"c_scale":"0.005","b2_scale":0,"slayer_special":0,"slayer_special_number":2000,"time_scale":"3652.425","chart_scale":1}},{"name":"Damped oscillation","uid":"1603472152","values":{"scenario":4,"initial_human":7700000000,"b_scale":10,"k_scale":"0.996","human_special":0,"human_special_number":1,"initial_vampire":1000000,"a_scale":"0.00000002","e_scale":"0.000000002","vampire_special":1,"vampire_special_number":3850000000,"initial_slayer":2000,"d_scale":"0.996","c_scale":"0.005","b2_scale":10,"slayer_special":1,"slayer_special_number":3200,"time_scale":"3652.425","chart_scale":0}},{"name":"Dusk of humanity","uid":"74223629","values":{"scenario":5,"initial_human":780000,"b_scale":50,"k_scale":"9.54","human_special":1,"human_special_number":5,"initial_vampire":500,"a_scale":"0.0001","e_scale":"0.0000001","vampire_special":0,"vampire_special_number":0,"initial_slayer":101,"d_scale":"9.54","c_scale":"0.005","b2_scale":25,"slayer_special":0,"slayer_special_number":0,"time_scale":"365.2425","chart_scale":0}},{"name":"Custom","uid":"2105759114","values":{"scenario":0,"initial_human":0,"b_scale":0,"k_scale":0,"human_special":0,"human_special_number":1,"initial_vampire":0,"a_scale":0,"e_scale":0,"vampire_special":0,"vampire_special_number":0,"initial_slayer":0,"d_scale":0,"c_scale":0,"b2_scale":0,"slayer_special":0,"slayer_special_number":0,"time_scale":"365.2425","chart_scale":0}}];
var $defaultValueSetterUid = "687977402";
//omni.createValueSetter('preset', DATA, {defaultUid: $defaultValueSetterUid});

omni.onResult([], function(ctx){
  
  omni.createValueSetter('preset', DATA, {defaultUid: $defaultValueSetterUid});
  var scenario = ctx.getNumberValue('scenario');
  
  var a = ctx.getNumberValue('a');
  var b = ctx.getNumberValue('b');
  var b2 = ctx.getNumberValue('b2');
  var c = ctx.getNumberValue('c');
  var d = ctx.getNumberValue('d');
  var e = ctx.getNumberValue('e');
  var k = ctx.getNumberValue('k');
  var xi = ctx.getNumberValue('initial_human');
  var yi = ctx.getNumberValue('initial_vampire');
  var zi = ctx.getNumberValue('initial_slayer');
  
  var human_special = ctx.getNumberValue('human_special');
  var human_special_number = ctx.getNumberValue('human_special_number');
  var vampire_special = ctx.getNumberValue('vampire_special');
  var vampire_special_number = ctx.getNumberValue('vampire_special_number');
  var slayer_special = ctx.getNumberValue('slayer_special');
  var slayer_special_number = ctx.getNumberValue('slayer_special_number') + 1;
  var k_special;
  var a_special;
  var a_special_smooth = 2; //additional parameter for smoothness
  var d_special;
  var d_special_smooth = 2; //additional parameter for smoothness
  
  var time_scale = ctx.getNumberValue('time_scale');
  var chart_scale = ctx.getNumberValue('chart_scale');
  var xlog, ylog, zlog;
  var show_graph = true;
  
  var x_previous, y_previous, z_previous, no_changes, no_repeat;
  
  var i, one_iteration, max_iter, dt, x, y, z, chart = [];  
  var human_extinction = false;
  var vampire_extinction = false;
  var scaling_factor = 1; //if there is too few points
  var without_humans = false;
  var without_vampires = false;
  var scale_type = {1: 'days',
                    7: 'weeks',
                    30.44: 'months',
                    365.2425: 'years',
                    3652.425: 'decades',
                    36524.25: 'centuries'};
  
  var human_text = '';
  var vampire_text = '';
  
  a = a/100/365.2425;
  c = c/100/365.2425;
  d = d/100;
  e = e/100/365.2425;
  k = k/100;
  
  k_special = k; //to keep original value
  a_special = a; //to keep original value
  d_special = d; //to keep original value
  
  
  if(scenario == 1) //Stoker-King
  {
    ctx.addHtml('Inspired by Bram Stoker\'s <u>Dracula</u> and Stephen King\'s <u>Salem\'s Lot</u>.', {afterVariable: 'preset'});
    ctx.addHtml('In 1897 (the year Stoker\'s novel was first published) the world population was about 1,650 million people. In this scenario we assume only one vampire at the beginning. The vampire attacks a victim that eventually becomes another vampire.', {afterVariable: 'preset'});
    if(xi == 1650000000 && yi == 1 && zi === 0 && a == 2.7379070069885077e-11 && b == 1 && k == 0.000027269553789605535 && human_special === 0 && vampire_special === 0)
    {
      ctx.addHtml('The selected scenario is an example of an <b>epidemic outbreak</b> that might be caused by a deadly virus 😷. The increase in vampire population inevitably leads to the demise of mankind. The 13th month is the crucial point, where the explosive growth of vampires wipes out mankind in about half a year.', {afterVariable: 'chart_scale'});
    }
  } else if(scenario == 2) //Rice
  {
    ctx.addHtml('Inspired by Anne Rice\'s <u>Vampire Chronicles</u>.', {afterVariable: 'preset'});
    ctx.addHtml('The author takes us to the year 1791 where the world\'s population was about 982 million people. Then two vampires appeared. Vampires discretely attack a human being and need victims\' permission before turning them into a vampire, so it happens rarely.', {afterVariable: 'preset'});
    if(xi == 982000000 && yi == 2 && zi === 0 && a == 2.7379070069885077e-11 && b == 0.1 && c === 0 && k == 0.000027269553789605535 && human_special === 0 && vampire_special === 0)
    {
      ctx.addHtml('In this scenario, after the peaceful growth of human population at the beginning, vampires eventually <b>take control</b> of the world. Since the transformation from human into vampire only occurs 10% of the time, human extinction takes some time, and the final number of vampires is about one tenth of the initial human population.', {afterVariable: 'chart_scale'});
    }
  } else if(scenario == 3) //Harris-Meyer-Kostova
  {
    ctx.addHtml('Inspired by Stephenie Meyer\'s <u>Twilight</u>, Charlaine Harris\'s <u>Southern Vampire</u> or the <u>True Blood</u> TV series.', {afterVariable: 'preset'});
    ctx.addHtml('This time, vampires can <b>coexist with humans</b>. Vampires occasionally attack humans but turning a human into a vampire requires so much effort it rarely happens. On the other hand, vampire slayers hunt vampires for their precious blood.', {afterVariable: 'preset'});
    if(xi == 6159000000 && yi == 5000000 && zi === 2000 && a == 5.475814013977016e-13 && b == 0.1 && b2 === 0 && c == 1.368953503494254e-7 && d === 0 && e === 0 && k == 0.000027269553789605535 && human_special === 0 && vampire_special === 0 && slayer_special === 0)
    {
      ctx.addHtml('In this scenario, a group of 2,000 vampire slayers stands up againts the vampires. When the number of people increases, it\'s easier for vampires to hunt people, and vampire population increases. On the other hand, if too many people are killed, the vampires can\'t reproduce effectively anymore, so their population is thinned out by vampire slayers. Then the whole cycle is repeated over and over again 🔁. It\'s a typical <b>predator - prey</b> model.', {afterVariable: 'chart_scale'});
    }
  } else if(scenario == 4) //Damped oscillator
  {
    ctx.addHtml('<u>Damped oscillation</u> - the custom scenario.', {afterVariable: 'preset'});
    ctx.addHtml('The current human population is about 7.7 billion, and it\'s growing by 1% per year. Let\'s say that vampires are smart and will refrain from killing too many people, because they need a constant source of food. On the other hand, vampire slayers constantly recruit new members. Who will win this war?', {afterVariable: 'preset'});
    if(xi == 7700000000 && yi == 1000000 && zi === 2000 && a == 5.475814013977016e-13 && c == 1.368953503494254e-7 && d == 0.000027269553789605535 && e == 5.475814013977016e-14 && k == 0.000027269553789605535 && human_special === 0 && vampire_special == 1 && vampire_special_number == 3850000000 && slayer_special == 1 && slayer_special_number == 3201)
    {
      ctx.addHtml('In this scenario, the human and vampire populations are initially oscillating with time, but it eventually finds an <b>equilibrium point</b> after about a centrury. Although humans, vampires, and vampire slayers will keep on fighting with each other, they will <b>coexist together</b> without any more dramatic changes in populations sizes ☯️.', {afterVariable: 'chart_scale'});
    }
  } else if(scenario == 5) //Raising slayers
  {
    ctx.addHtml('<u>Dusk of humanity</u> - the custom scenario.', {afterVariable: 'preset'});
    ctx.addHtml('500 ruthless vampires decided to attack a small, developing city. People realise the incoming danger and create a group of 101 brave vampires slayers to save the city. Vampire slayers certainly need to train new members as the vampire population grows quickly. Is it too late, though?', {afterVariable: 'preset'});
    if(xi == 780000 && yi == 500 && zi === 101 && a == 2.7379070069885074e-9 && b == 0.5 && b2 == 0.25 && c == 1.368953503494254e-7 && d == 0.00026119632846670365 && e == 2.737907006988507e-12 && k == 0.00026119632846670365 && human_special == 1 && human_special_number == 5 && vampire_special === 0 && slayer_special === 0)
    {
      ctx.addHtml('In this scenario, vampires control most of the city after 10 years. The situation was critical, but the slayers kept training new members with hope. Mankind fought on, and, after 40 years, people won the war and started to exterminate the remaining bloodsuckers. The last vampire died <b>66.6 years</b> after the invasion 🌇.', {afterVariable: 'chart_scale'});
    }
  } else
  {
    ctx.addHtml('You\'re creating your own story! Set the parameters for the three species:', {afterVariable: 'preset'});
    ctx.addHtml('• <b>humans</b> naturally reproduce and are the primary prey for vampires,', {afterVariable: 'preset'});
    ctx.addHtml('• <b>vampires</b> can\'t reproduce like human\'s, but can turn humans into new vampires,', {afterVariable: 'preset'});
    ctx.addHtml('• <b>vampire slayers</b> professionally slay vampires and can recruit new members.', {afterVariable: 'preset'});
    ctx.addHtml('Try playing with different sets of parameters and see on the chart how the populations changes with time.', {afterVariable: 'preset'});

  }
  
  ctx.hideVariables('b', 'b2', 'scenario');
  ctx.hideVariables('human_special_number', 'vampire_special_number', 'slayer_special_number');
  if(human_special == 1)
  {
    ctx.showVariables('human_special_number');
  }
  if(vampire_special == 1)
  {
    ctx.showVariables('vampire_special_number');
  }
  if(slayer_special == 1)
  {
    ctx.showVariables('slayer_special_number');
  }
  
  if(isNaN(a)){a = 0;}
  if(isNaN(b)){b = 0;}
  if(isNaN(b2)){b2 = 0;}
  if(isNaN(human_special_number)){human_special_number = 0;}
  if(isNaN(vampire_special_number)){vampire_special_number = 0;}
  if(isNaN(slayer_special_number)){slayer_special_number = 0;}
  if(isNaN(c)){c = 0;}
  if(isNaN(d)){d = 0;}
  if(isNaN(e)){e = 0;}
  if(isNaN(k)){k = 0;}
  if(isNaN(xi)){xi = 0;}
  if(isNaN(yi)){yi = 0;}
  if(isNaN(zi)){zi = 0;}
  
  max_iter = 7000;
  dt = 0.01*time_scale;
  
  if(xi === 0 && yi === 0)
  {
    without_humans = true;
    a = 0;
    without_vampires = true;
    c = 0;
    if(zi === 0)
    {
      ctx.addHtml('Oops, it looks like there is <b>nobody</b> in your story. Fill your world with people!');
    } else
    {
      
    }
  } else if(xi === 0)
  {
    without_humans = true;
    a = 0;
  }else if(yi === 0)
  {
    without_vampires = true;
    c = 0;
  }
  
  /*
  var log = [];
  log.push(['scenario', scenario]);
  log.push(['xi', xi]);
  log.push(['yi', yi]);
  log.push(['zi', zi]);
  log.push(['a', a]);
  log.push(['b', b]);
  log.push(['b2', b2]);
  log.push(['c', c]);
  log.push(['d', d]);
  log.push(['e', e]);
  log.push(['k', k]);
  log.push(['human_special', human_special]);
  log.push(['human_special_number', human_special_number]);
  log.push(['vampire_special', vampire_special]);
  log.push(['vampire_special_number', vampire_special_number]);
  log.push(['slayer_special', slayer_special]);
  log.push(['slayer_special_number', slayer_special_number]);
  log.push(['time_scale', time_scale]);
  log.push(['chart_scale', chart_scale]);
  console.log(log);
  */
  //console.log('here');
  
  x = xi; y = yi; z = zi;
  x_previous = xi; y_previous = yi; z_previous = zi;
  no_changes = false;
  no_repeat = 0;

  for(i = 1; i <= max_iter; i++)
  {
    if(human_special == 1 && !isNaN(human_special_number))
    {
      if(x < xi)
      {
        k = 2*k_special * (human_special_number - 0.5 - x/xi*(human_special_number - 1));
      } else
      {
        k = k_special;
      }
    }
    if(vampire_special == 1 && !isNaN(vampire_special_number))
    {
      if(x <= vampire_special_number)
      {
        a = 0;
      } else if(x <= a_special_smooth*vampire_special_number)
      {
        a = a_special/(a_special_smooth - 1) * (x/vampire_special_number - 1);
      } else
      {
        a = a_special;
      }
    }
    if(slayer_special == 1 && !isNaN(slayer_special_number))
    {
      if(z >= slayer_special_number)
      {
        d = 0;
      } else if (z >= slayer_special_number/d_special_smooth)
      {
        d = d_special_smooth * d_special / (d_special_smooth - 1) * (1 - z/slayer_special_number);
      } else
      {
        d = d_special;
      } 
    }
    one_iteration = new Runge_Kutta_one_iteration(x, y, z, k, a, b, b2, c, d, e, dt);
    x = one_iteration[0];
    y = one_iteration[1];
    z = one_iteration[2];
    
    if(!no_changes)
    {

      if(Math.round(Math.log10(x+1) - Math.log10(x_previous+1)) === 0 && Math.round(Math.log10(y+1) - Math.log10(y_previous+1)) === 0 && Math.round(Math.log10(z+1) - Math.log10(z_previous+1)) === 0)
      {
        no_repeat++;
      } else
      {
        no_repeat = 0;
      }
    }
    
    x_previous = x;
    y_previous = y;
    z_previous = z;
    
    if(!without_humans && Math.floor(x) === 0) //human extinction
    {
      break;
    }
    if(!without_vampires && Math.floor(y) === 0) //vampire extinction
    {
      break;
    }
    if(!no_changes && no_repeat > 500)
    {
      no_changes = true;
    }
  }
  
  if(i < 100)
  {
    scaling_factor = 100;
  } else if(i < 200)
  {
    scaling_factor = 50;
  } else if(i < max_iter)
  {
    scaling_factor = 5;
  } else if(no_changes)
  {
    scaling_factor = 2;
  }
  dt /= scaling_factor;
  
  //proper calculations
  k = k_special;
  a = a_special;
  d = d_special;
  x = xi; y = yi; z = zi;
  
  if(chart_scale == 1)
  {
    if(x <= 1){xlog = 0;} else {xlog = Math.log10(x);}
    if(y <= 1){ylog = 0;} else {ylog = Math.log10(y);}
    if(z <= 1){zlog = 0;} else {zlog = Math.log10(z);}
    chart.push([0, Math.round(xlog*100)/100,,,,,,,Math.round(zlog*100)/100,, Math.round(ylog*100)/100]);
  } else
  {
    chart.push([0, Math.floor(x),,,,,,,Math.floor(z),, Math.floor(y)]);
  }
  
  for(i = 1; i <= max_iter*scaling_factor; i++)
  {
    if(human_special == 1 && !isNaN(human_special_number))
    {
      if(x < xi)
      {
        k = 2*k_special * (human_special_number - 0.5 - x/xi*(human_special_number - 1));
      } else
      {
        k = k_special;
      }
    }
    if(vampire_special == 1 && !isNaN(vampire_special_number))
    {
      if(x <= vampire_special_number)
      {
        a = 0;
      } else if(x <= a_special_smooth*vampire_special_number)
      {
        a = a_special/(a_special_smooth - 1) * (x/vampire_special_number - 1);
      } else
      {
        a = a_special;
      }
    }
    if(slayer_special == 1 && !isNaN(slayer_special_number))
    {
      if(z >= slayer_special_number)
      {
        d = 0;
      } else if (z >= slayer_special_number/d_special_smooth)
      {
        d = d_special_smooth * d_special / (d_special_smooth - 1) * (1 - z/slayer_special_number);
      } else
      {
        d = d_special;
      } 
    }
    
    one_iteration = new Runge_Kutta_one_iteration(x, y, z, k, a, b, b2, c, d, e, dt);
    x = one_iteration[0];
    y = one_iteration[1];
    z = one_iteration[2];
    
    if(isNaN(x) || isNaN(y) || isNaN(z))
    {
      show_graph = false;
      break;
    }
    if(i % 100 === 0)
    {
      //chart.push([Math.round(i*dt/time_scale*10)/10, Math.round(x),,,,,,,Math.round(z),, Math.round(y)]);
      if(chart_scale == 1)
      {
        if(x <= 1){xlog = 0;} else {xlog = Math.log10(x);}
        if(y <= 1){ylog = 0;} else {ylog = Math.log10(y);}
        if(z <= 1){zlog = 0;} else {zlog = Math.log10(z);}
        chart.push([roundTime(i*dt/time_scale, scaling_factor), Math.round(xlog*100)/100,,,,,,,Math.round(zlog*100)/100,, Math.round(ylog*100)/100]);
      } else
      {
        chart.push([roundTime(i*dt/time_scale, scaling_factor), Math.floor(x),,,,,,,Math.floor(z),, Math.floor(y)]);
      }
      if(human_extinction)
      {
        human_text = 'It\'s all over. The expansion of vampires is unstoppable 🧛. Bloodsuckers have control of the world, killing the last human after <b>' + roundTime(i*dt/time_scale, scaling_factor) + ' ' + scale_type[time_scale] + '</b> ⚰️.';
        human_text += ' But don\'t lose hope! Try to recruit some vampire slayers and save mankind 💪.';
        break;
      }
      if(vampire_extinction)
      {
        vampire_text = 'Long live humanity 🎖️! The bloodsucking beasts have been defeated and will never come back again. The last vampire was wiped out after <b>' + roundTime(i*dt/time_scale, scaling_factor) + ' ' + scale_type[time_scale] + '</b> 💪.';
        break;
      }
    }
    if((!without_humans && Math.floor(x) === 0) || (without_humans && zi !==0 && Math.floor(z) === 0)) //human extinction
    {
      human_extinction = true;
    }
    if(!without_vampires && Math.floor(y) === 0) //vampire extinction
    {
      vampire_extinction = true;
    }
  }
  //console.log('iterations at the end:',i);
  
  if(show_graph && chart.length >= 10)
  {
    
    if(chart.length > 2000)
    {
      chart = chart.filter(function(_, i) {return i % 20 === 0;})
    } else if(chart.length > 1500)
    {
      chart = chart.filter(function(_, i) {return i % 15 === 0;})
    } else if(chart.length > 1000)
    {
      chart = chart.filter(function(_, i) {return i % 10 === 0;})
    } else if(chart.length > 500)
    {
      chart = chart.filter(function(_, i) {return i % 5 === 0;})
    } else if(chart.length > 300)
    {
      chart = chart.filter(function(_, i) {return i % 4 === 0;})
    }
    
    if(chart_scale === 0)
    {
      ctx.addHtml('The below graph shows the exact sizes of each population.');
    } else
    {
      ctx.addHtml('The below graph shows the sizes of each population as a logarithm with a base 10 scale. For example, if a value on the vertical axis equals 3, then the population size is 10³ = 1000.');
    }
    
    ctx.addChart({
      type: 'line',
      data: chart,
      labels: ['Title', 'people',,,,,,,'slayers',, 'vampires']
    });
    if(human_text !== '')
    {
      ctx.addHtml(human_text, {afterVariable: 'chart_scale'});
    }
    if(vampire_text !== '')
    {
      ctx.addHtml(vampire_text, {afterVariable: 'chart_scale'});
    }
    ctx.addHtml('Did you find a set of parameters that creates an incredible story? Share it with us and your friends using the <i>Send this result</i> button below!');
  } else
  {
    if(time_scale == 1)
    {
      ctx.addHtml('Humans or vampires probably went extinct <b>too quickly</b>! Try reducing the values of some parameters.', {afterVariable: 'chart_scale'});
    } else
    {
      ctx.addHtml('The selected <b>time scale</b> is probably too big! Try with a lower time scale.');
    }
  }
  
});

//for better data presentation on chart
function roundTime(number, decimalPlaces)
{
  return Math.round(number*decimalPlaces)/decimalPlaces;
}

function Runge_Kutta_one_iteration(xi, yi, zi, k, a, b, b2, c, d, e, dt)
{
  var xf, yf, zf, k1, k2, k3, k4, m1, m2, m3, m4, n1, n2, n3, n4, n5;
  
  var max_kills_per_day = 100;
  
  k1 = f(xi, yi, k, a)*dt;
  m1 = g(xi, yi, zi, a, b, b2, c, e)*dt;
  n1 = h(xi, yi, zi, d, e)*dt;
  
  k2 = f(xi + k1/2, yi + m1/2, k, a)*dt;
  m2 = g(xi + k1/2, yi + m1/2, zi + n1/2, a, b, b2, c, e)*dt;
  n2 = h(xi + k1/2,yi + m1/2, zi + n1/2, d, e)*dt;
  
  k3 = f(xi + k2/2, yi + m2/2, k, a)*dt;
  m3 = g(xi + k2/2, yi + m2/2, zi + n2/2, a, b, b2, c, e)*dt;
  n3 = h(xi + k2/2,yi + m2/2, zi + n2/2, d, e)*dt;
  
  k4 = f(xi + k3/2, yi + m3/2, k, a)*dt;
  m4 = g(xi + k3/2, yi + m3/2, zi + n3/2, a, b, b2, c, e)*dt;
  n4 = h(xi + k3/2,yi + m3/2, zi + n3/2, d, e)*dt;
  
  xf = xi + (k1 + 2*k2 + 2*k3 + k4)/6;
  yf = yi + (m1 + 2*m2 + 2*m3 + m4)/6;
  zf = zi + (n1 + 2*n2 + 2*n3 + n4)/6;
  
  return [xf, yf, zf];
}

function f(x, y, k, a)
{
  return x*(k - a*y);
}

function g(x, y, z, a, b, b2, c, e)
{
  return y*(b*a*x + b2*e*z- c*z);
}

function h(x, y, z, d, e)
{
  return z*(d - e*y);
}

function menu_toggle() {
  var status = document.getElementById('menu-dropdown').getAttribute('status');
  if (status == 'open') {
    document.getElementById('menu-dropdown').setAttribute('status', 'close');
    document.getElementById('menu-toggle').classList.remove('active');
    document.getElementById('mp-header').classList.remove('active');
    
  } else {
    document.getElementById('menu-dropdown').setAttribute("status", "open");
    document.getElementById('menu-toggle').classList.add("active");
    document.getElementById('mp-header').classList.add('active');
  }   
}

function potions() {
  var strdata = JSON.stringify(data);
  var jdata = JSON.parse(strdata);
  var numpotions = Object.keys(jdata["potions"]).length;
  var c = document.getElementById('potions')
  var output = ""
  for(i = 1; i <= numpotions; i++)
  {
    output += '<div class="um2-box col-sm-4 col-xs-6">';
    output += '<img src="img/products/' + jdata["potions"][i].image + '" alt="' + jdata["potions"][i].name + '" title="'+ jdata["potions"][i].name + '">';
    output += '<h3>' + jdata["potions"][i].name + ' - <span class="value"> $' + jdata["potions"][i].price +'</span></h3>';
    output += '</div>';
    c.innerHTML = output;
  }
}

/*
** Função para abrir e fechar menu.
*/
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

/*
** Função que lista todas as poções presentes no arquivo 'potions.json' dinamicamente. 
*/
function potions() {
  var strdata = JSON.stringify(data);
  var jdata = JSON.parse(strdata);
  var numpotions = Object.keys(jdata["potions"]).length;
  var c = document.getElementById('potions')
  var output = ""
  for(i = 1; i <= numpotions; i++)
  {
    output += '<div class="mp-box col-sm-4 col-xs-6">';
    output += '<img src="img/products/' + jdata["potions"][i].image + '" alt="' + jdata["potions"][i].name + '" title="'+ jdata["potions"][i].name + '" onclick="infos(this);" data-layer="'+ i +'">';
    output += '<h3 onclick="infos(this);" data-layer="'+ i +'">' + jdata["potions"][i].name + ' - <span class="value"> $' + jdata["potions"][i].price +'</span></h3>';
    output += '</div>';
    c.innerHTML = output;
  }
}

/*
** Função que exibe todos as informações disponíves no 'potions.json' e as coloca em um alerta.
*/
function infos(e) {
  var id = e.getAttribute('data-layer');
  var strdata = JSON.stringify(data);
  var jdata = JSON.parse(strdata);
  var numpotions = Object.keys(jdata["potions"]).length;
  var infos = 'Name: ' + jdata["potions"][id].name + '\nImage: ' + jdata["potions"][id].image + '\nPrice: ' + jdata["potions"][id].price + '\nEffect: ' + jdata["potions"][id].effect + "\nIngredients: " + jdata["potions"][id].ingredients;
  switch (id) {
    case '1':
      alert(infos);
      break;
    case '2':
      alert(infos);
      break;
    case '3':
      alert(infos);
      break;
    case '4':
      alert(infos);
      break;
    case '5':
      alert(infos);
      break;
    case '6':
      alert(infos);
      break;
    default:
      alert('Nenhum produto encontrado.');
  }
}



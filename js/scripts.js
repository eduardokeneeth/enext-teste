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
** Função que exibe todos as informações disponíves no 'potions.json' e as coloca em uma lightbox.
*/
function infos(e) {
  var id = e.getAttribute('data-layer');
  var strdata = JSON.stringify(data);
  var jdata = JSON.parse(strdata);

  var modal = document.getElementById('potion-modal');
  modal.style.display = "block";
  var btnClose = document.getElementsByClassName("close")[0];
  btnClose.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }
  var info_potion = document.getElementById('info-potion');
  var content = "";

  content += '<div class="col-md-6"><img src="img/products/' + jdata["potions"][id].image + '"></div><div class="col-md-6"><h2>' + jdata["potions"][id].name + '</h2><h2>Use/Effect</h2><p>' + jdata["potions"][id].effect + '</p><h2>Ingredients</h2><p>' + jdata["potions"][id].ingredients + '</p><h2 style="margin-bottom: 0;">Price</h2><span class="value">$' + jdata["potions"][id].price + '</span><button>Add to cart</button></div>';
  info_potion.innerHTML = content;
}



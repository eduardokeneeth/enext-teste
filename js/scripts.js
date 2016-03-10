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
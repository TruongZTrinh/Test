var nav_rps = document.querySelector('.nav-menu--responsive');
if(nav_rps){
    var icons = nav_rps.querySelectorAll('.nav_icon--responsive');
    var menu__items = nav_rps.querySelectorAll('.nav-menu__item.hidden');
    icons.forEach(function(icon,index){
        icon.onclick = function(){
            if(menu__items[index]){
                menu__items[index].classList.toggle('hidden');
            }
        }
    });
}

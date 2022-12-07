/* manual next slides > < */ 
var left = document.getElementById('left');
var right = document.getElementById('right');
var kichthuocanh = document.querySelector('.topSale__slide').clientWidth;
var topSale__slides = document.querySelector('.topSale__slides');
// so luong anh hien thi tren man hinh la 5 anh = 1250px; tức là ta sẽ lấy width của .topSale__slider
var width_topSale__slider = document.querySelector('.topSale__slider').clientWidth;
// tong so anh la 8 = 2000px ; tức là lấy width tất cả ảnh
var width_all_img = topSale__slides.getElementsByTagName('img').length * kichthuocanh;
// nếu ng dùng clink thêm 3 cái tức là hết ảnh, vậy nếu màn hình thêm 750px thì ta sẽ cho trở lại từ đầu
var Max = width_all_img - width_topSale__slider ; // max = 750;
var chuyen =0;

right.onclick = function (){
    if(chuyen < Max){
    chuyen +=  kichthuocanh ;
    }else chuyen=0;

    topSale__slides.style.marginLeft = '-' + chuyen + 'px';
}

left.onclick = function (){
    if(chuyen===0){
        chuyen=Max;
    }else chuyen -= kichthuocanh;
    
    topSale__slides.style.marginLeft = '-' + chuyen + 'px';
}

/* auto next slide  = radio */
var count = 1;

var btn1 = document.querySelector('.btn1')
if(btn1){
btn1.classList.add('set_background--color');
}

var manualBtn = document.querySelectorAll('.manual-checked__btn');
    manualBtn.forEach(function (item, index){
        item.onclick = function (){
            document.querySelector('.manual-checked__btn.set_background--color').classList.remove('set_background--color');
            this.checked = true; 
            this.classList.add('set_background--color');
            count = (index+1); // nếu gán count bằng index thì nó sẽ lặp lại trang hiện tại 1 lần nữa
        }
    });

setInterval( function (){
    document.getElementById('radio' + count).checked = true;
    if(count === 1) {
        document.querySelector('.btn' + count).classList.add('set_background--color');
        if( document.querySelector('.btn' + 4).classList.contains('set_background--color')===true)
        document.querySelector('.btn' + 4).classList.remove('set_background--color');
    }else{
        document.querySelector('.btn' + count).classList.add('set_background--color');
        document.querySelector('.btn' + (count-1)).classList.remove('set_background--color');
    }
       count++;
        if(count > 4){
            count = 1;
        }
},4000)



var htmlWidth = document.querySelector('html').clientWidth;

    var list = document.querySelectorAll('.slide img');
    setInterval(function(){
       
        var manual_checked = document.querySelector('.manual-checked');
        var headerSliderWidth = document.querySelector('.slider').clientWidth;
         if(manual_checked)
             manual_checked.style.width = headerSliderWidth + "px";
 
         list.forEach(function (img){
             img.style.width = headerSliderWidth + "px";
         });
    },100);











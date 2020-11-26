const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

const ctxs = document.querySelectorAll('.ani');
observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
    if(entry.intersectionRatio > 0){
        entry.target.style.animation = 'ani1 2s forwards ease-out';
    }else{
        entry.target.style.animation = 'none'
    }
})
})
ctxs.forEach(ctx =>{
    observer.observe(ctx)
})
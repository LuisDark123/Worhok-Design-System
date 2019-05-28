// Sidebar Off-Canvas
var $navbar_btn_open = document.getElementById('navbar-btn-open');
var $navbar_btn_close = document.getElementById('navbar-btn-close');
var $sidebar = document.getElementById('sidebar');

$navbar_btn_open.addEventListener('click', function() {
	if ($sidebar.classList.contains == 'sidebar-active') {
		$sidebar.classList.remove('sidebar-active')
	} else{
		$sidebar.classList.add('sidebar-active')
	}

	if ($navbar_btn_close.classList.contains == 'navbar-btn-active') {
		$navbar_btn_close.classList.remove('navbar-btn-active')
	} else{
		$navbar_btn_close.classList.add('navbar-btn-active')
	}
});


$navbar_btn_close.addEventListener('click', function() {
    $navbar_btn_close.classList.remove('navbar-btn-active');
    $sidebar.classList.remove('sidebar-active');
});

function navbar_btn_light(){
	if ($navbar_btn_close.classList.contains == 'navbar-btn-light') {
		$navbar_btn_close.classList.remove('navbar-btn-light')
	} else{
		$navbar_btn_close.classList.add('navbar-btn-light')
	}
}

function navbar_btn_dark(){
	if ($navbar_btn_close.classList.contains == 'navbar-btn-dark') {
		$navbar_btn_close.classList.remove('navbar-btn-dark')
	} else{
		$navbar_btn_close.classList.add('navbar-btn-dark')
	}
}



// Scroll Reveal JS ------------------------------------------------------------

ScrollReveal().reveal('.scroll-reveal', { easing: 'ease-in' });
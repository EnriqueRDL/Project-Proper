const pageFormatter = '<section class="page-formatter"><h2>Format Page</h2><div class="pf-display"><h3>Display Mode</h3><button title="Enable light mode" class="pf-light">Light</button><button title="Enable dark mode" class="pf-dark">Dark</button></div><div class="pf-fonts"><h3>Font Options</h3><button title="Use system sans-serif" class="pf-sans">Sans-Serif</button><button title="Use system serif" class="pf-serif">Serif</button><button title="Use system monospace" class="pf-mono">Monospace</button></div><div class="pf-widths"><h3>Content Width</h3><button title="Content width: small (400px)" class="pf-small">Small</button><button title="Content width: medium (650px)" class="pf-medium">Medium</button><button title="Content width: large (960px)" class="pf-large">Large</button><button title="Content width: largest (100%)" class="pf-largest">Largest</button></div></section>';

const pfToggler = '<button title="Toggle Page Formatter" class="pf-toggler"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 13.616v-3.232c-1.651-.587-2.693-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.749-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.743-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 3.384c-2.762 0-5-2.239-5-5s2.238-5 5-5 5 2.239 5 5-2.238 5-5 5zm3-5c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3z"/></svg></button>'

document.querySelector('#nav').insertAdjacentHTML('afterend', pageFormatter);
document.querySelector('#nav').insertAdjacentHTML('afterend', pfToggler);

document.querySelector('.pf-toggler').addEventListener('click', function() {
	document.querySelector('.page-formatter').classList.toggle('show');		
});

const pfDisplayBtns = document.querySelectorAll('.pf-display button');
const pfLight = document.querySelector('.pf-light');
const pfDark = document.querySelector('.pf-dark');

const pfFontsBtns = document.querySelectorAll('.pf-fonts button');
const pfSans = document.querySelector('.pf-sans');
const pfSerif = document.querySelector('.pf-serif');
const pfMono = document.querySelector('.pf-mono');

const pfWidthBtns = document.querySelectorAll('.pf-widths button');
const pfSmall = document.querySelector('.pf-small');
const pfMedium = document.querySelector('.pf-medium');
const pfLarge = document.querySelector('.pf-large');
const pfLargest = document.querySelector('.pf-largest');

const bod = document.body;

const clearDisplay = () => {
	bod.classList.remove('dark');
	bod.classList.remove('light');
};
const clearFont = () => {
	bod.classList.remove('sans');
	bod.classList.remove('serif');
	bod.classList.remove('mono');
};
const clearWidth = () => {
	bod.classList.remove('small');
	bod.classList.remove('medium');
	bod.classList.remove('large');
	bod.classList.remove('largest');
};

if (!localStorage.getItem('display')) {
	localStorage.setItem('display', 'light');
	localStorage.setItem('font', 'sans');
	localStorage.setItem('width', 'medium');
}
bod.classList.add(localStorage.getItem('display'));
bod.classList.add(localStorage.getItem('font'));
bod.classList.add(localStorage.getItem('width'));

pfDisplayBtns.forEach(function(btn) {
	btn.addEventListener('click', function() {
		clearDisplay();
		value = btn.getAttribute('class').replace('pf-', '');
		bod.classList.add(value);
		localStorage.setItem('display', value);
	});
});

pfFontsBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
                clearFont();
		value = btn.getAttribute('class').replace('pf-', '');
                bod.classList.add(value);
                localStorage.setItem('font', value);
        }); 
});

pfWidthBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
                clearWidth();
		value = btn.getAttribute('class').replace('pf-', '');
                bod.classList.add(value);
                localStorage.setItem('width', value);
        }); 
});

function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

const shopNowBtn = document.getElementById('shop-now-btn');
const productsSection = document.getElementById('products-section');

shopNowBtn.addEventListener('click', () => {
    productsSection.classList.toggle('show');
});
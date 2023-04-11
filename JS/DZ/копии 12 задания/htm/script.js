const burger = document.querySelector('.burger');
const menu = document.querySelector('.navigation');
const changeList = document.querySelector('.change-list');
const counter = document.querySelector('.counter');

burger.addEventListener('click', () => menu.classList.toggle('hide'));

const data = JSON.parse(cardList);
const cardsWrapper = document.querySelector('.cards__wrapper');

data.forEach((card) => {
	cardsWrapper.insertAdjacentHTML(
		'afterbegin',
		`
		<div class="cards__wrapper__item">
							<div class="item-img" style="background-image: url(${card.img})">
								<div class="item-img__hover">
									<button id="${card.id}" class="addToCart">Add to Cart</button>
								</div>
							</div>
							<div class="item__description">
								<h3>${card.title}</h3>
								<p>
									${card.text}
								</p>
								<p class="item__description__price">${card.price}</p>
							</div>
						</div>
    `
	);
});

const addToCart = document.querySelectorAll('.addToCart');

// addToCart.forEach((btn) => {
// 	btn.addEventListener('click', (e) => {
// 		changeList.insertAdjacentHTML(
// 			'afterbegin',
// 			`
// 							<div class="change-list__item">
// 								<img src="${data[e.target.id - 1].img}" alt="${data[e.target.id - 1].title}" />
// 								<div class="change-list__item__content">
// 									<button class="delete-item">
// 										<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
// 											<path
// 												d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
// 												fill="#575757"
// 											/>
// 										</svg>
// 									</button>
// 									<h2 class="change-list__item__content__title">${data[e.target.id - 1].title}</h2>
// 									<p class="change-list__item__content__price">Price: <span>${data[e.target.id - 1].price}</span></p>
// 									<p class="change-list__item__content__color">Color: <span>${data[e.target.id - 1].color}</span></p>
// 									<p class="change-list__item__content__size">Size: <span>${data[e.target.id - 1].size}</span></p>
// 									<p class="change-list__item__content__quntity">Quantity: <input type="number" value="${
// 										data[e.target.id - 1].quantity
// 									}" /></p>
// 								</div>
// 							</div>
// 						`
// 		);
// 		const del = document.querySelector('.delete-item');
// 		const el = document.querySelector('.change-list__item');
// 		del.addEventListener('click', () => {
// 			el.remove();
// 		});
// 	});
// });

// Вариант №2

addToCart.forEach((btn, index) => {
	btn.addEventListener('click', (e) => {
		changeList.insertAdjacentHTML(
			'afterbegin',
			`
							<div class="change-list__item">
								<img src="${data[index].img}" alt="${data[index].title}" />
								<div class="change-list__item__content">
									<button class="delete-item">
										<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
												fill="#575757"
											/>
										</svg>
									</button>
									<h2 class="change-list__item__content__title">${data[index].title}</h2>
									<p class="change-list__item__content__price">Price: <span>${data[index].price}</span></p>
									<p class="change-list__item__content__color">Color: <span>${data[index].color}</span></p>
									<p class="change-list__item__content__size">Size: <span>${data[index].size}</span></p>
									<p class="change-list__item__content__quntity">Quantity: <input type="number" value="${data[index].quantity}" /></p>
								</div>
							</div>
						`
		);
		const del = document.querySelector('.delete-item');
		const el = document.querySelector('.change-list__item');
		del.addEventListener('click', () => {
			el.remove();
		});
	});
});

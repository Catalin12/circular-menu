const items = document.querySelectorAll("#menu-circle img");
const numItems = items.length;
const radius = (numItems * 100) / (2 * Math.PI);; // radius of the circle, in pixels

items.forEach((item, index) => {
	console.log(`Test ${index}`);
	const angle = (index / numItems) * 2 * Math.PI;
	const x = radius * Math.cos(angle);
	const y = radius * Math.sin(angle);

	item.style.top = `calc(50% - ${y}px)`;
	item.style.left = `calc(50% - ${x}px)`;
	item.dataset.index = index; // add a custom "data-index" attribute for each item
	item.addEventListener("click", event => logItemClick(event.target));
});

function logItemClick(item) {
	console.log(`You clicked on the item with the index ${item.dataset.index}`);
}

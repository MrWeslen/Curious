alert ('Você pode escolher a opção que quiser')

document.querySelector("#cancel").addEventListener("mouseover", (e) => {
	const modal = document.querySelector("#screen > .winmodal");
	console.dir(modal);
	modal.style.position = "absolute";
	modal.style.top = `${getRandomPos("v", modal)}px`;
	modal.style.left = `${getRandomPos("h", modal)}px`;

	function getRandomPos(orientation, modal) {
		let max = 0;
		if (orientation == "v") {
			max = 480 - modal.clientHeight;
		} else {
			max = 640 - modal.clientWidth;
		}
		return Math.floor(Math.random() * max);
	}
});

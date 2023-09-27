let carousel = document.querySelector(".carousel");
let images = Array.from(document.querySelectorAll(".carousel img"));
let next = document.querySelector("#next");
let pre = document.querySelector("#pre");
let len = 0;

next.addEventListener("click", (e)=>{ 
	++len;
	if (len == images.length) {
		len = images.length -1;
	}
	carousel.style.transform = `translateX(-${len * (images[0].offsetWidth + 14)}px)`;
})


pre.addEventListener("click", ()=>{ 
	--len;

	if (len == -1) {
		len = 0;
	}
	carousel.style.transform = `translateX(-${len * (images[0].offsetWidth + 14)}px)`;

})
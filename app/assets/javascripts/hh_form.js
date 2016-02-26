window.onload = init;
function init(){
	var isNewPage = document.getElementById("contact");
	if (isNewPage) {
		hhForm();
	};
};

function hhForm(){
	document.getElementById("contact").remove();
};
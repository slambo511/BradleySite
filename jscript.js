function testFunction() {
	var x = document.getElementsByClassName("one");
	var i;
	for (i = 0; i < x.length; i++) {
	x[i].innerHTML = "number " + i;
	}
}
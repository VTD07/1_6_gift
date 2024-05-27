function getInputValue() {
    var inputElement = document.getElementById("input");
    var inputValue = inputElement.value;
    if(inputValue=="19/11" || inputValue=="19-11") window.location.href="nextpage.html"
    else alert("Không nhớ là không được đâu nha");
}
var inputElement = document.getElementById("input");
inputElement.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        getInputValue();
    }
});

function handleClick() {
    alert("you clicked in a thing")
}


$(document).ready(function() {
    $(".panel").click(handleClick)
})
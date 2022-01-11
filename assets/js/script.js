// Fonction commencer la partie
function startGame(max) {
    $(".game").addClass("d-none");
    $('select').on('change', function() {
        max = $("select").val();
        $("select").removeClass("is-invalid")
    });
    $("#btn-start").click(function () {
        if ($("select").val() == "Sélectionnez une difficulté" ) {
                $("select").addClass("is-invalid")
        }
        else {
            $(".selectLevel").addClass("d-none");
            $(".game").removeClass("d-none");
            $(".replay").addClass("d-none")
            let number = Math.floor(Math.random() * max);
            console.log(number)
            return number
        }
    })
};

function game() {
    let playerNumber = $("")
}
// Fonction ready
$(function () {
    startGame();
});

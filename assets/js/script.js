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
            $(".game input").attr("placeholder" , "Entre 0 et "+max)
            game(number)
        }
    })
    function game(number) {
        let count = 0

        $(".guess").on("click", function () {
            let playerNumber = parseInt($(".game input").val());
            
            if (playerNumber > max , playerNumber == "" , playerNumber < 0) {
                $(".game input").attr("placeholder" , "saisie non valide").val("");
                $(".game input").click( function () {
                    $(".game input").attr("placeholder" , "Entre 0 et "+max);
                })
            }
            else {
                
                if (playerNumber > number ) {
                  $(".form-label").text("Plus Bas");
                  $(".game input").attr("placeholder" , "Entre 0 et "+max).val("");
                  count += 1
                }
                else if (playerNumber < number) {
                    $(".form-label").text("Plus Haut");
                    $(".game input").attr("placeholder" , "Entre 0 et "+max).val("");
                    count += 1
                }
                else if (playerNumber == number){
                    count += 1
                    $(".form-label").text("Tu as gagné avec "+count+" coup");
                    $(".game input").attr("placeholder" , "Le chiffre c'était "+ number).val("")
                    $(".replay").removeClass("d-none");
                    $(".guess").addClass("d-none");
                }
            }
        })
        $(".replay").click( function () {
            location.reload()
        })
    }
};


// Fonction ready
$(function () {
    startGame();
    
});

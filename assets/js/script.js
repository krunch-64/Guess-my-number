// Fonction commencer la partie
function startGame(max) {
    $(".game").addClass("d-none");
    $('select').on('change', function() {
        max = $("select").val();
        $("select").removeClass("is-invalid");
    });
    // Sur le click du bouton "commencer", on vérifie la validité de l'input puis on génère un nombre random
    $("#btn-start").click(function () {
        if ($("select").val() == "Sélectionnez une difficulté" ) {
                $("select").addClass("is-invalid");
        }
        else {
            // Cache .selectLevel et .replay et affiche .game
            $(".selectLevel").addClass("d-none");
            $(".game").removeClass("d-none");
            $(".replay").addClass("d-none");
            // On génère un nombre random puis on change le placeholder pour afficher l'intervalle du nombre
            let number = Math.floor(Math.random() * max);
            $(".game input").attr("placeholder" , "Entre 0 et "+max);
            // On execute la fonction game() avec comme paramètre : le nombre random
            game(number);
        }
    })
    function game(number) {
        // On initialise le décompte des essais
        let count = 0

        // Execute la fonction sur le click du bouton "Deviner"
        $(".guess").on("click", function () {
            // On récupère le nombre que l'utilisateur a entrée
            let playerNumber = parseInt($(".game input").val());
            
            // On test la validité du nombre 
            if (playerNumber > max , playerNumber == "" , playerNumber < 0) {
                $(".game input").attr("placeholder" , "saisie non valide").val("");
                $(".game input").click( function () {
                    $(".game input").attr("placeholder" , "Entre 0 et "+max);
                });
            }
            else {
                // Si le nombre est plus grand que la réponse on affiche "Plus Bas"
                if (playerNumber > number ) {
                  $(".form-label").text("Plus Bas");
                  $(".game input").attr("placeholder" , "Entre 0 et "+max).val("");
                  count += 1;
                }
                // Si le nombre est plus petit que la réponse on affiche "Plus Haut"
                else if (playerNumber < number) {
                    $(".form-label").text("Plus Haut");
                    $(".game input").attr("placeholder" , "Entre 0 et "+max).val("");
                    count += 1;
                }
                // Si le nombre est égale à la réponse on affiche "Le chiffre c'était number"
                else if (playerNumber == number){
                    count += 1;
                    $(".form-label").text("Tu as gagné avec "+count+" coup");
                    $(".game input").attr("placeholder" , "Le chiffre c'était "+ number).val("");
                    $(".replay").removeClass("d-none");
                    $(".guess").addClass("d-none");
                }
            }
        });
        // Recharge la page pour rejouer
        $(".replay").click( function () {
            location.reload();
        });
    }
};


// Fonction ready
$(function () {
    startGame();
    
});

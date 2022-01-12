// Fonction commencer la partie
function startGame(max) {
    // on cache la partie jeux pour laisser le choix du niveaux
    $(".game").addClass("d-none");
    $('select').on('change', function() {
        max = $("select").val();
        $("select").removeClass("is-invalid");
    });
    // Sur le click du bouton "commencer", on vérifie si le joueur a selectionné un niveaux 
    $("#btn-start").click(function () {
        if ($("select").val() == "Sélectionnez une difficulté" ) {
                $("select").addClass("is-invalid");
        }
        // quand le joueur a sélection un niveau est cliquer sur le bouton commencé 
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
            // console.log(number);
        }
    })
    function game(number) {
        // On initialise le décompte des essais
        let count = 0;
        let guessLeft = 0;

        // Execute la fonction sur le click du bouton "Deviner"
        $(".guess").on("click", function () {
            // On récupère le nombre que l'utilisateur a entrée
            let playerNumber = parseInt($(".game input").val());
            
            // On test la validité du nombre 
            if (playerNumber > max || playerNumber == "" || playerNumber < 0) {
                $(".game input").attr("placeholder" , "saisie non valide").val("").addClass("is-invalid");
                $(".game input").click( function () {
                    $(".game input").attr("placeholder" , "Entre 0 et "+max).removeClass("is-invalid");
                });
            }
            else {
                // Si le nombre est plus grand que la réponse on affiche "Plus Bas"
                if (playerNumber > number ) {
                    count += 1;
                    guessLeft = 10 - count;
                    $(".form-label").text("Plus Bas, il vous reste "+guessLeft+" essais !");
                    $(".game input").attr("placeholder" , "Entre 0 et "+max).val("");
                  
                }
                // Si le nombre est plus petit que la réponse on affiche "Plus Haut"
                else if (playerNumber < number) {
                    count += 1;
                    guessLeft = 10 - count;
                    $(".form-label").text("Plus Haut, il vous reste "+guessLeft+" essais !");
                    $(".game input").attr("placeholder" , "Entre 0 et "+max).val("");
                    
                }
                // Si le nombre est égale à la réponse on affiche "Le chiffre c'était number" avec le nombre de coup jouer
                else if (playerNumber == number){
                    count += 1;
                    $(".form-label").text("Tu as gagné avec "+count+" coup(s)");
                    $(".game input").attr("placeholder" , "Le chiffre était "+ number).val("");
                    $(".replay").removeClass("d-none");
                    $(".guess").addClass("d-none");
                    $(".shrek img").attr("src","./assets/img/shrek 2.png")
                }
                else if(count == 10){
                    $(".form-label").text("Tu as perdu avec "+count+" coups");
                    $(".game input").attr("placeholder" , "Le chiffre était "+ number).val("");
                    $(".replay").removeClass("d-none");
                    $(".guess").addClass("d-none");
                }
            }
        });
        // Recharge la page pour rejouer
        $(".replay").click( function () {
            location.reload();
        });
    };
};


// Fonction ready
$(function () {
    startGame();
    
});

// Fonction commencer la partie
function startGame() {
    $("btn-primmary").click(function () {
        console.log("test bouton")
    })
};
// Fonction random
function getRandomNumber() {
    let max = 0;

    $('select').on('change', function() {
        if($('select').val() == 1){
            max = 50;
            // console.log('0 - 50');
        }
        else if($('select').val() == 2){
            max = 100;
            // console.log('0 - 100');
        }
        else if($('select').val() == 3){
            max = 250;
            // console.log('0 - 250');
        };
    });
    $("#btn-start").click(function () {
        return Math.floor(Math.random() * max);
        
        // console.log(max);
    })
    


};

// Fonction ready
$(function () {

    startGame();
    getRandomNumber();

});

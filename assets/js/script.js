$(document).ready(function () {

    //On appelle la fonstion de chargement des données
    allDatas();

    //On desactive l'event par defaut du formulaire
    $("#mon_form").on('submit', function (event) {
        event.preventDefault();
    });

    //Insertion en BDD
    $("#submit_ajouter").on('click', function () {
        insert();
        allDatas();
    });
});

/**
 * Permet de recuperer tous les stagiaires de la BDD
 */
function allDatas() {
    $.ajax({
        method: "GET",
        url: "server.php",
        data: {all: 1},
        dataType: 'json'
    }).done(function (response) {
        //On vide le contenu du tableau
        $("#stagiaires-body").empty();
        response.forEach(ligne => {
                $("#stagiaires-body").append(
                    `<tr>`
                    + `<td>${ligne.id}</td>`
                    + `<td>${ligne.prenom}</td>`
                    + `<td>${ligne.email}</td>`
                    + `<td>${ligne.ville}</td>`
                    + `<td class="text-center text-info"><span><i class="fas fa-pen-fancy"></i></span></td>`
                    + `<td class="text-center text-danger"><span><i class="fas fa-trash-alt"></i></span></td>`
                    + `</tr>`
                );
            }
        );
    });
}

/**
 * Permet de faire une insertion en BDD
 */
function insert() {
    let prenom = $("#prenom").val();
    let email = $("#email").val();
    let ville = $("#ville").val();

    $.ajax({
        method: "POST",
        url: "server.php",
        data: {insert: 1, prenom: prenom, email: email, ville: ville}
    }).then(function () {
        //En cas de succes, on vide les champs
        $("#prenom").val('');
        $("#email").val('');
        $("#ville").val('');
    })
}
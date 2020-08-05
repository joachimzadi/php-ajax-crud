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

    //Mise à jour des datas
    $("#submit_modifier").on('click', function () {
        update();
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
                + `<td class="prenom">${ligne.prenom}</td>`
                + `<td class="email">${ligne.email}</td>`
                + `<td class="ville">${ligne.ville}</td>`
                + `<td class="text-center text-info"><span id="${ligne.id}" data-id="${ligne.id}" onclick="edit(${ligne.id})"><i class="fas fa-pen-fancy"></i></span></td>`
                + `<td class="text-center text-danger"><span><i class="fas fa-trash-alt"></i></span></td>`
                + `</tr>`
            );
        });
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

/**
 * Permet l'edition d'un stagiaire
 * @param id
 */
function edit(id) {
    //A but pédagogique
    //let edit_id = $(`#${id}`).data('id');
    let prenom = $(`#${id}`).parent().siblings('.prenom').text();
    let email = $(`#${id}`).parent().siblings('.email').text();
    let ville = $(`#${id}`).parent().siblings('.ville').text();

    $("#id").val(id);
    $("#prenom").val(prenom);
    $("#email").val(email);
    $("#ville").val(ville);

    $("#submit_ajouter").hide();
    $("#submit_modifier").show();
}

/**
 * Permet de faire la maj d'un stagiaire
 */
function update() {
    let prenom = $("#prenom").val();
    let email = $("#email").val();
    let ville = $("#ville").val();
    let id = $("#id").val();

    $.ajax({
        method: "POST",
        url: "server.php",
        data: {update: 1, id: id, prenom: prenom, email: email, ville: ville}
    }).then(function () {
        //En cas de succes, on vide les champs
        $("#prenom").val('');
        $("#email").val('');
        $("#ville").val('');
        $("#id").val('');

        $("#submit_ajouter").show();
        $("#submit_modifier").hide();
    })
}
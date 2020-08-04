$(document).ready(function () {

    allDatas();

    $("#mon_form").on('submit', function (e) {
        e.preventDefault();
    });

    //Insertion dans la BDD
    $("#submit_ajouter").on('click', function () {
        ajouter();
        allDatas();
    });

    $("#submit_modifier").on('click', function () {
        update();
        allDatas();
    });
});

function allDatas() {
    $.ajax({
        type: "GET",
        url: "server.php",
        data: {'all': 1},
        dataType: 'json'
    }).then(function (response) {
        $("#stagiaires-body").empty();
        response.forEach(ligne => {
                $("#stagiaires-body").append(
                    `<tr>`
                    + `<td class="id">${ligne.id}</td>`
                    + `<td class="prenom">${ligne.prenom}</td>`
                    + `<td class="email">${ligne.email}</td>`
                    + `<td class="ville">${ligne.ville}</td>`
                    + `<td class="text-center"><span id="${ligne.id}" data-id="${ligne.id}" onclick="edit(${ligne.id})" class="text-info update"><i class="fas fa-user-edit"></i></span></td>`
                    + `<td class="text-center"><span data-id="${ligne.id}" class="text-danger delete"><i class="fas fa-trash-alt"></i></span></td>`
                    + `</tr>`
                );
            }
        );
    });
}

function ajouter() {
    let prenom = $("#prenom").val();
    let email = $("#email").val();
    let ville = $("#ville").val();

    $.ajax({
        type: "POST",
        url: "server.php",
        data: {'save': 1, 'prenom': prenom, 'email': email, 'ville': ville}
    }).then(function () {
        $("#prenom").val("");
        $("#email").val("");
        $("#ville").val("");
    });
}

function update() {
    let id = $("#id").val();
    let prenom = $("#prenom").val();
    let email = $("#email").val();
    let ville = $("#ville").val();

    let donnee = {'update': 1, 'id': id, 'prenom': prenom, 'email': email, 'ville': ville};

    $.ajax({
        type: "POST",
        url: "server.php",
        data: donnee,
        cache: false
    }).then(function (response) {
        $("#prenom").val("");
        $("#email").val("");
        $("#ville").val("");
        $("#submit_ajouter").show();
        $("#submit_modifier").hide();
    });
}

function edit(id) {
    let edit_id = $(`#${id}`).data('id');
    let prenom = $(`#${id}`).parent().siblings('.prenom').text();
    let email = $(`#${id}`).parent().siblings('.email').text();
    let ville = $(`#${id}`).parent().siblings('.ville').text();

    $("#id").val(edit_id);
    $("#prenom").val(prenom);
    $("#email").val(email);
    $("#ville").val(ville);

    $("#submit_ajouter").hide();
    $("#submit_modifier").show();
}



$(document).ready(function () {
    affichage();

    $('#submit_ajouter').on('click', function () {
        save();
    })
});

function affichage() {
    $.ajax({
        url: "stagiaires.php"
    }).done(function (stagiaires) {
        if (!stagiaires) {
            $('#stagiaires-body').empty().append(
                "<tr><td colspan='4' class='text-center text-info'>Aucun stagiaire en DBB</td></tr>"
            );
        } else {
            $('#stagiaires-body').empty();
            stagiaires.forEach(function (stagiaire) {
                $(this).append(
                    "<tr>" +
                    "<td class='text-center'>stagiaire.id</td>" +
                    "<td class='text-center'>stagiaire.prenom</td>" +
                    "<td>stagiaire.email</td>" +
                    "<td>stagiaire.ville</td>" +
                    "</tr>"
                );
            });
        }
    });
}

function save() {
    let prenom = $('#prenom').val();
    let email = $('#email').val();
    let ville = $('#ville').val();

    $.post("ajouter.php", {'save': 1, 'prenom': prenom, 'email': email, 'ville': ville})
        .done(function (data) {
            $('#prenom').val('');
            $('#email').val('');
            $('#ville').val('');
        });
}


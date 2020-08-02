$(document).ready(function () {
    // enregistrer le commentaire dans la base de données
    $('#submit_btn').on('click', function () {
        let nom = $('#nom').val();
        let contenu = $('#contenu').val();

        $.ajax({
            type: "POST",
            url: 'server.php',
            data: {
                'save': 1,
                'nom': nom,
                'contenu': contenu
            },
            success: function (response) {
                $('#nom').val('');
                $('#contenu').val('');
                $('#display_area').append(response);
            }
        });
    });
});
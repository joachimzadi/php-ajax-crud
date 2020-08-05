<!doctype html>
<html lang="fr">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>CRUD-AJAX-PHP</title>

    <!-- FONT AWESOME KIT -->
    <script src="https://kit.fontawesome.com/ec63adeb54.js" defer crossorigin="anonymous"></script>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="assets/css/bootstrap.css"/>
    <link rel="stylesheet" href="assets/css/style.css"/>
</head>
<body>

<div class="container">
    <div class="monForm">
        <div class="titreForm">Ajouter un stagiaire</div>
        <form id="mon_form">
            <input id="id" type="hidden" name="id">
            <div class="form-group">
                <label for="prenom">Prénom</label>
                <input type="text" class="form-control" id="prenom" required
                       placeholder="Entrez votre prénom" name="prenom"/>
            </div>
            <div class="form-group">
                <label for="email">Contact</label>
                <input type="email" class="form-control" id="email" required
                       placeholder="Entrez votre @email de contact" name="email">
            </div>
            <div class="form-group">
                <label for="ville">Ville</label>
                <input type="text" class="form-control" id="ville" required value="Paris"
                       placeholder="Entrez votre ville de résidence" name="ville">
            </div>
            <button id="submit_ajouter" type="submit" class="btn btn-primary">Ajouter</button>
            <button id="submit_modifier" type="submit" class="btn btn-primary" style="display: none">Modifier</button>
        </form>
    </div>
    <p>
        <button id="btn_ajouter" class="btn btn-primary">Ajouter</button>
    </p>
    <div class="stagiaires">
        <table class="table table-hover">
            <thead class="thead-dark text-center">
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Prénom</th>
                <th scope="col">Contact</th>
                <th scope="col">Ville</th>
                <th scope="col" colspan="2">Actions</th>
            </tr>
            </thead>
            <tbody id="stagiaires-body"></tbody>
        </table>
    </div>
</div>


<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="assets/js/jquery.js"></script>
<script src="assets/js/bootstrap.bundle.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/script.js" defer></script>
</body>
</html>
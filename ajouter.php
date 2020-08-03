<?php

require_once 'functions/helper.php';

if (!empty($_POST['save'])) {
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $ville = $_POST['ville'];

    $connexion = db_connexion();
    $sql = "insert into stagiaires(prenom, email, ville) values (?, ?, ?)";
    $reqPreparee = $connexion->prepare($sql);
    $stagiaire = $reqPreparee->execute([$prenom, $email, $ville]);
}

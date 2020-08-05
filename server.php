<?php

require_once "functions/helper.php";

$connexion = db_connexion();

//Affichage
if (!empty($_GET['all'])) {
    $sql = "select * from stagiaires";
    try {
        $stagiaires = $connexion->query($sql)->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($stagiaires, JSON_THROW_ON_ERROR);
    } catch (PDOException | JsonException $e) {
        $e->getMessage();
    }
}

//Insertion
if (!empty($_POST['insert'])) {
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $ville = $_POST['ville'];

    $sql = "insert into stagiaires(prenom, email, ville) values (?, ?, ?)";

    try {
        $req_preparee = $connexion->prepare($sql);
        $req_preparee->execute([$prenom, $email, $ville]);
    } catch (Exception $e) {
        $e->getMessage();
    }
}

if (!empty($_POST['update'])){
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $ville = $_POST['ville'];
    $id = $_POST['id'];

    $sql = "update stagiaires set prenom = ?, email = ?, ville = ? where id = ?";

    try {
        $req_preparee = $connexion->prepare($sql);
        $req_preparee->execute([$prenom, $email, $ville, $id]);
    } catch (Exception $e) {
        $e->getMessage();
    }
}

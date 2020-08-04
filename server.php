<?php
require_once 'functions/helper.php';

$connexion = db_connexion();

//Chargement des données en BDD
if (!empty($_GET['all'])) {
    $sql = "select * from stagiaires";
    try {
        $stagiaires = $connexion->query($sql)->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($stagiaires, JSON_THROW_ON_ERROR | true, 512);
    } catch (PDOException|JsonException $e) {
        exit($e->getMessage());
    }
}

//En cas d'insertion
if (!empty($_POST['save'])) {
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $ville = $_POST['ville'];
    $sql = "insert into stagiaires(prenom, email,ville) values (?, ?, ?)";
    try {
        $req_preparee = $connexion->prepare($sql);
        $req_preparee->execute([$prenom, $email, $ville]);
        exit();
    } catch (PDOException $e) {
        exit($e->getMessage());
    }
}

//En cas de mis à jour
if (!empty($_POST['update'])) {
    $id = $_POST['id'];
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $ville = $_POST['ville'];
    $sql = "update stagiaires set prenom = ?, email = ?, ville = ? where id = ?";

    try {
        $req_preparee = $connexion->prepare($sql);
        $req_preparee->execute([$prenom, $email, $ville, $id]);
        exit();
    } catch (PDOException $e) {
        exit($e->getMessage());
    }
}

<?php
require_once 'functions/helper.php';

$connexion = db_connexion();

$sql_select_all = "select * from messages";
$result_select_all = $connexion->query($sql_select_all);
$messages = $result_select_all->fetchAll(PDO::FETCH_ASSOC);

if (!empty($_POST['save'])) {
    $titre = $_POST['titre'];
    $description = $_POST['description'];
    $sql_insert = "insert into messages(titre, description) values (?, ?)";

    $req_preparee = $connexion->prepare($sql_insert);
    try {
        $result_insert = $req_preparee->execute([$titre, $description]);
    } catch (PDOException $e) {
        exit($e->getMessage());
    }
}

//if (isset($_POST['save'])) {
//    $nom = $_POST['nom'];
//    $contenu = $_POST['contenu'];
//    $sql = "INSERT INTO commentaires (nom, contenu) VALUES ('{$nom}', '{$contenu}')";
//    if (mysqli_query($conn, $sql)) {
//        $id = mysqli_insert_id($conn);
//        $saved_comment = '<div class="comment_box">
//      		<span class="delete" data-id="' . $id . '" >delete</span>
//      		<span class="edit" data-id="' . $id . '">edit</span>
//      		<div class="display_name">' . $nom . '</div>
//      		<div class="comment_text">' . $contenu . '</div>
//      	</div>';
//        echo $saved_comment;
//    }
//}
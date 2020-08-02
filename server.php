<?php
$conn = mysqli_connect('localhost', 'root', '', 'ajax_php_db');
if (!$conn) {
    die('Connection failed ' . mysqli_error($conn));
}

if (isset($_POST['save'])) {
    $nom = $_POST['nom'];
    $contenu = $_POST['contenu'];
    $sql = "INSERT INTO commentaires (nom, contenu) VALUES ('{$nom}', '{$contenu}')";
    if (mysqli_query($conn, $sql)) {
        $id = mysqli_insert_id($conn);
        $saved_comment = '<div class="comment_box">
      		<span class="delete" data-id="' . $id . '" >delete</span>
      		<span class="edit" data-id="' . $id . '">edit</span>
      		<div class="display_name">' . $nom . '</div>
      		<div class="comment_text">' . $contenu . '</div>
      	</div>';
        echo $saved_comment;
    }
}
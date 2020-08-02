<?php
require_once "server.php";
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Ajax Jquery</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
<div class="wrapper">
    <?php /*echo $comments; */?>
    <form class="comment_form">
        <div>
            <label for="nom">Name:</label>
            <input type="text" name="nom" id="nom">
        </div>
        <div>
            <label for="contenu">Comment:</label>
            <textarea name="contenu" id="contenu" cols="30" rows="5"></textarea>
        </div>
        <button type="button" id="submit_btn">POST</button>
        <button type="button" id="update_btn" style="display: none;">UPDATE</button>
    </form>
</div>
</body>
</html>
<!-- Add JQuery -->
<script src="assets/js/jquery.js"></script>
<script src="assets/js/script.js"></script>
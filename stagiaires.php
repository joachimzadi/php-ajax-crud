<?php

require_once 'functions/helper.php';

$connexion = db_connexion();
$sql = "select * from stagiaires";
$employes = $connexion->query($sql)->fetchAll(PDO::FETCH_ASSOC);

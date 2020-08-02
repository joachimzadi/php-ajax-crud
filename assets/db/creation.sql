create database if not exists ajax_php_db;

use ajax_php_db;

create table if not exists commentaires
(
    id      int unsigned auto_increment not null,
    nom     nvarchar(255) unique        not null,
    contenu text,
    constraint pk_commentaires primary key (id)
);

drop table if exists commentaires;
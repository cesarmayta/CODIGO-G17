CREATE DATABASE db_auth;

use db_auth;

CREATE table tbl_user (  
    user_id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

insert into tbl_user(user_name,user_password)
values ('admin',md5('admin')),('guest',md5('guest'));

select * from tbl_user;
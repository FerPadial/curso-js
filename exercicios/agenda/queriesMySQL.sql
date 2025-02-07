use agenda1_js;
insert contato (s_nome_contato, s_celular_contato, s_email_contato, dt_dtnasc_contato) values ('Batman','3199999-9999','batman@batman.com.br','2013-03-01');
insert contato (s_nome_contato, s_celular_contato, s_email_contato, dt_dtnasc_contato) values ('Sonic','3197777-7777','sonic@sonic.com.br','2018-08-26');

select * from contato;

SELECT *,date_format(dt_dtnasc_contato,'%d/%m/%Y') nasc FROM contato;
/*WHERE dt_dtnasc_contato="1991-03-17";*/

select date_format('19910317','%d/%m/%Y') from dual;

SELECT *,date_format(dt_dtnasc_contato,'%d/%m/%Y') Dt_Nasc FROM contato WHERE dt_dtnasc_contato=str_to_date("1989/05/17","%Y/%m/%d");
SELECT *,date_format(dt_dtnasc_contato,'%d/%m/%Y') Dt_Nasc FROM contato WHERE dt_dtnasc_contato=str_to_date('17051989','%d/%m/%Y');
SELECT *,date_format(dt_dtnasc_contato,'%d/%m/%Y') Dt_Nasc FROM contato WHERE dt_dtnasc_contato=str_to_date("17/05/1989","%d/%m/%Y");

SELECT *,date_format(dt_dtnasc_contato,'%d/%m/%Y') Dt_Nasc FROM contato;
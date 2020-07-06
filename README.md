# desafio-imc-vincer
Desafio para desenvolvedor Fullstack

**Backend NodeJS**
 
GitHub = https://github.com/oavandre/backend-imc-nodejs-mongodb-api

Heroku = https://backend-imc-nodejs-mongodb-api.herokuapp.com/imc/

**FrontEnd ReactJS**

GitHub = https://github.com/oavandre/frontend-imc-ReactJS

Heroku = https://frontend-imc-reactjs.herokuapp.com/

AWS = http://52.2.85.86:3000/



http://desafioimc.oav.company/

![Screenshot](IMC_1.png)
![Screenshot](IMC_2.png)

**Visao Geral**
- [Backend RoR] (Não concluído)
    - [Ruby](# v2.5.1p57 )
    - [Rails](# v4.2.10 )
 - [Backend NodeJS] 
    - [NodeJS](# v8.17.0 )
- [FrontEnd]
    - [ReactJS](# v )
- [DB]
    - [MongoDB](# v4.0.0 )



# MongoDB

Resolvir mudar para banco de dados local para Online pra ser usado no BI
mongodb+srv://oav:<pa7663GE>@cluster0.wg0hr.mongodb.net/<dbname>?retryWrites=true&w=majority

mongodb://localhost:27017/imc

bind_ip = 127.0.0.1
port = 27017

dbpath=/var/lib/mongodb

![Screenshot](IMC_MongoDB.png)

**verificar se o mongoDB esta ativo**
$ sudo systemctl status mongodb


**deixar ativo quando reiniciar**
$ systemctl enable mongodb
$ vim /etc/mongodb.conf


# Ruby on Rails

rails s -b 127.0.0.1

**testes API**
POST 192.168.196.134:5000/genero/add/
genero:Homem

GET 192.168.196.134:3003/genero/


# PowerBI
https://app.powerbi.com/view?r=eyJrIjoiMDI0MmNlMDAtNDMwYy00ZmZiLWJlMmItNGUwNDAzNjE2NTQ4IiwidCI6IjIzMjBhYjlhLTBkNjEtNGE1ZS04YzIyLWNhYTE5M2MyNmE0MSJ9



![Screenshot](IMC_BI.png)


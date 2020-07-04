# desafio-imc-vincer
Desafio para desenvolvedor Fullstack

http://desafioimc.oav.company/

![Screenshot](Screenshot_1.png)
![Screenshot](Screenshot_2.png)

**Visao Geral**
- [Backend]
    - [Ruby](# v )
    - [Rails](# v )
- [FrontEnd]
    - [ReactJS](# v )
- [DB]
    - [MongoDB](# v )



# MongoDB

Resolvir mudar para banco de dados local para Online pra ser usado no BI
mongodb+srv://oav:<pa7663GE>@cluster0.wg0hr.mongodb.net/<dbname>?retryWrites=true&w=majority

mongodb://localhost:27017/imc

bind_ip = 127.0.0.1
port = 27017

dbpath=/var/lib/mongodb

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
https://app.powerbi.com/reportEmbed?reportId=802e454c-edb4-4d72-9296-fe4be3f3f154&autoAuth=true&ctid=2320ab9a-0d61-4a5e-8c22-caa193c26a41&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1iLXByaW1hcnktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D


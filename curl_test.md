# Testes de CURL

## Lista todos os Controlos de Carga

```powershell
curl -i -X GET "http://localhost:3000/cargas/" -H  "accept: application/json"
```

Resulado:

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true
Content-Type: application/json
Date: Mon, 15 Mar 2021 18:02:40 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 853
```

```JSON
//body
[
    {
        "Stamp": "ADM202103151232,0000001",
        "matricula": "AA-00-00",
        "produto": "Brita 1",
        "ref": "170102001",
        "unidade": "ton",
        "cliente": "Construções Pragosa S.A.",
        "clienteNo": 27009,
        "qtt": 22,
        "qttDisponivel": 100,
        "icon": "Brita1",
        "carregado": false,
        "recusado": false,
        "motivoRecusa": ""
    },
    {
        "Stamp": "ADM202103151232,0000002",
        "matricula": "AA-00-01",
        "produto": "Brita 2",
        "ref": "170102002",
        "unidade": "ton",
        "cliente": "Construções Pragosa S.A.",
        "clienteNo": 27009,
        "qtt": 0,
        "qttDisponivel": 100,
        "icon": "none",
        "carregado": false,
        "recusado": false,
        "motivoRecusa": ""
    },
    {
        "Stamp": "ADM202103151232,0000003",
        "matricula": "AA-00-03",
        "produto": "Tout-Venant 1º",
        "ref": "170101001",
        "unidade": "ton",
        "cliente": "Construções Pragosa S.A.",
        "clienteNo": 27009,
        "qtt": 0,
        "qttDisponivel": 100,
        "icon": "ToutVenant1",
        "carregado": false,
        "recusado": false,
        "motivoRecusa": ""
    }
]
```

## Obter um Controlo de Carga

```powershell
curl -i -X GET "http://localhost:3000/cargas/ADM202103151232,0000001" -H  "accept: application/json"
```

Resultado:

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true
Content-Type: application/json
Date: Mon, 15 Mar 2021 18:01:43 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 306
```

```JSON
//body
{
    "Stamp": "ADM202103151232,0000001",
    "matricula": "AA-00-00",
    "produto": "Brita 1",
    "ref": "170102001",
    "unidade": "ton",
    "cliente": "Construções Pragosa S.A.",
    "clienteNo": 27009,
    "qtt": 22,
    "qttDisponivel": 100,
    "icon": "Brita1",
    "carregado": false,
    "recusado": false,
    "motivoRecusa": ""
}
```

# Marcar Controlo de Carga como Carregado

```powershell
curl -i -X PUT "http://localhost:3000/cargas/ADM202103151232,0000001/carregar" -H  "accept: application/json"
```

Resultado:

```http
HTTP/1.1 204 No Content
X-Powered-By: Express
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true
Date: Mon, 15 Mar 2021 17:59:55 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

## Marcar Controlo de Carga como Recusado sem dar Motivo da Recusa

```powershell
curl -i -X PUT "http://localhost:3000/cargas/ADM202103151232,0000001/recusar" -H  "accept: application/json"
```

```http
HTTP/1.1 204 No Content
X-Powered-By: Express
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true
Date: Mon, 15 Mar 2021 18:13:42 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

## Marcar Controlo de Carga como Recusado com motivo da Recusa

```powershell
curl -i -X PUT "http://localhost:3000/cargas/ADM202103151232,0000001/recusar?reason=Produto%20Sem%Stock" -H  "accept: application/json"
```

Resultado:

```http
HTTP/1.1 204 No Content
X-Powered-By: Express
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true
Date: Mon, 15 Mar 2021 18:19:16 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```
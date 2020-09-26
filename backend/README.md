# signup
```
curl -X POST -H "Content-Type: application/json" -d '{"name":"obata","password":"nori"}' http://localhost:8000/signup
```

# login
```
curl -X POST -H "Content-Type: application/json" -d '{"name":"obata","password":"nori"}' http://localhost:8000/login
```

# auth.JwtMiddleware.Handler(...)のとき，
```
curl http://localhost:8000/protected -H "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJBcHBsaWNhdGlvbiBuYW1lIG9yIFVSSSAoc29tZXRoaW5nIHRoYXQgaW5kaWNhdGUgdGhlIElzc3VlcikiLCJuYW1lIjoib2JhdGEifQ.n6D4eWR7QOhdm7UJFgeuOKln3NQxLOExEcG2EhHMtlg"
```

( https://qiita.com/po3rin/items/740445d21487dfcb5d9f 参照)

# upload
```
curl -F 'image=@mov_hts-samp001.mp4' http://localhost:8000/upload
```

https://qiita.com/yayoshM/items/c55254788b87541cad3b
https://blog.kyanny.me/entry/20110427/1303838381



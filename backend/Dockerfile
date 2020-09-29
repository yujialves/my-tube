# ベースとなるDockerイメージ指定
FROM golang:latest

COPY ./ ./

RUN go get github.com/auth0/go-jwt-middleware && \
    go get github.com/dgrijalva/jwt-go && \
    go get github.com/gorilla/mux && \
    go get github.com/jinzhu/gorm && \
    go get github.com/mattn/go-sqlite3 && \
    go get golang.org/x/crypto/bcrypt && \
    go build main.go
CMD ["./main"]


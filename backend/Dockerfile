# ベースとなるDockerイメージ指定
FROM golang:latest

COPY ./ ./

RUN go build main.go
CMD ["./main"]


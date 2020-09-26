package handler

import (
 "fmt"
 "net/http"
)

func (h Handler) ProtectedEndPoint() http.HandlerFunc {
 return func(w http.ResponseWriter, r *http.Request ) {
  fmt.Println("protectedEndPoint invoked.")
 }
}


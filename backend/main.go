package main

import (
 "fmt"
 "log"
 //"encoding/json"
 "github.com/jinzhu/gorm"
 _ "github.com/mattn/go-sqlite3"

 "./auth"
 "./models"
 "./handler"

 "net/http"
 "github.com/gorilla/mux"
)

func main() {
 db, err := initDB()
 if err != nil {
  fmt.Println("Err")
 }

 defer db.Close()
 Migrate(db)


 h := handler.Handler{}

 r := mux.NewRouter()

 r.HandleFunc("/signup", h.Signup(db) ).Methods("POST")
 r.HandleFunc("/signup" , h.Login(db) ).Methods("POST")
 r.HandleFunc("/login" , h.Login(db) ).Methods("POST")
 r.Handle("/protected", auth.JwtMiddleware.Handler(h.ProtectedEndPoint() ) ).Methods("GET")
 r.HandleFunc("/upload", h.FileUpload() ).Methods("POST")

 staticDir := "/static/"
 r.PathPrefix(staticDir).Handler(http.StripPrefix(staticDir, http.FileServer(http.Dir("."+staticDir) ) ) )


 log.Println("Listen on port 8000...")
 log.Fatal( http.ListenAndServe(":8000",r) )



}

func initDB() ( *gorm.DB , error){
 return gorm.Open("sqlite3", "sql.db")
}

func Migrate(db *gorm.DB){
 db.AutoMigrate(&models.User{})
}


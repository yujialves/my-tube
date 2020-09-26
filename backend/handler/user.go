package handler

import (
 "encoding/json"
 "log"
 "net/http"

 "../models"
 "../utils"

 "golang.org/x/crypto/bcrypt"

 "github.com/jinzhu/gorm"
 _ "github.com/mattn/go-sqlite3"
)

type Handler struct{}

func (h Handler) Signup(db *gorm.DB) http.HandlerFunc {
 return func(w http.ResponseWriter, r *http.Request){
  var user models.User
  var error models.Error

  json.NewDecoder(r.Body).Decode(&user)
  if user.Name == "" {
   error.Message = "Name is missing."
   utils.ResponseWithError(w, http.StatusBadRequest,  error)
   return
  }
  if user.Password == "" {
   error.Message = "Password is missing."
   utils.ResponseWithError(w, http.StatusBadRequest,  error)
   return
  }

  hash, err := bcrypt.GenerateFromPassword([]byte(user.Password), 10)
  if err != nil {
   log.Fatal(err)
  }
  user.Password = string(hash)

  result := db.Create(&user)
  if result.Error != nil {
   error.Message = "Can't add data."
   utils.ResponseWithError(w, http.StatusInternalServerError, error)
   return
  }

  user.Password = ""

  w.Header().Set("Content-Type", "application/json")
  utils.ResponseJSON(w,user)
 }
}

func (h Handler) Login(db *gorm.DB) http.HandlerFunc {
 return func(w http.ResponseWriter, r *http.Request) {
  var user models.User
  var jwt models.JWT
  var error models.Error

  json.NewDecoder(r.Body).Decode(&user)

  if user.Name == "" {
   error.Message = "Name is missing."
   utils.ResponseWithError(w, http.StatusBadRequest,  error)
   return
  }
  if user.Password == "" {
   error.Message = "Password is missing."
   utils.ResponseWithError(w, http.StatusBadRequest,  error)
   return
  }

  password := user.Password

  result := db.Where("name = ?",  user.Name ).First(&user)
  if result.Error != nil {
   error.Message = "Can't find this username."
   utils.ResponseWithError(w, http.StatusInternalServerError, error)
   return
  }

 hashedPassword := user.Password
 isValidPassword := utils.ComparePasswords(hashedPassword, []byte(password) )
 if isValidPassword {
  token, err := utils.GenerateToken(user)
  if err != nil {
   log.Fatal(err)
  }
  w.WriteHeader(http.StatusOK)
  w.Header().Set("Content-Type", "application/json")
  w.Header().Set("Authorization", token)

  jwt.Token = token
  utils.ResponseJSON(w,jwt)
 }else {
  error.Message = "Invalid Password."
  utils.ResponseWithError(w,http.StatusUnauthorized, error)
 }

 }
}



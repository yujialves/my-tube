package models


type User struct {
 Id int `json:"id"  gorm:"type:int AUTO_INCREMENT"`
 Name string `json:"name"  gorm:"unique;not null"`
 Password string `json:"password"  gorm:"not null"`
}



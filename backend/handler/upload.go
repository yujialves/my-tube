package handler

import (
 "fmt"
 "net/http"
 "mime/multipart"
 "os"
 "time"
)

func (h Handler) FileUpload() http.HandlerFunc {
 return func(w http.ResponseWriter, r *http.Request ){
  var file multipart.File
  var fileHeader *multipart.FileHeader
  var e error
  var uploadedFileName string
  var img []byte = make([]byte, 1024)
  // POSTされたファイルデータを取得する 
  file , fileHeader , e = r.FormFile ("image")
  if (e != nil) {
   fmt.Fprintln(w, "ファイルアップロードを確認できませんでした。")
   return
  }
  uploadedFileName = fileHeader.Filename
  // サーバー側に保存するために空ファイルを作成
  var saveImage *os.File
  var layout = "2006-01-02_15:04:05_"
  t := time.Now()
  saveImage, e = os.Create("./static/" + t.Format( layout )+ uploadedFileName)
  fmt.Println(t.Format(layout)+uploadedFileName)
  if (e != nil) {
   fmt.Fprintln(w, "サーバ側でファイル確保できませんでした。")
   return
  }
  defer saveImage.Close()
  defer file.Close()
  var tempLength int64 =0;
  for {
   // 何byte読み込んだかを取得
   n , e := file.Read(img)
   // 読み混んだバイト数が0を返したらループを抜ける
   if (n == 0) {
    fmt.Println(e)
    break
   }

   if (e != nil) {
    fmt.Println(e)
    fmt.Fprintln(w, "アップロードされたファイルデータのコピーに失敗。")
    return;
   }
   saveImage.WriteAt(img, tempLength)
   tempLength = int64(n) + tempLength
  }

  fmt.Fprintf(w, "文字列HTTPとして出力させる")

 }
}


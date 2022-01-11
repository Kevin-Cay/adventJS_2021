 function fixFiles(files) {
     // ¡No olvides compartir tu solución en redes!
     let contador = {}
     for (let i = 0; i < files.length; i++) {
         if (contador.hasOwnProperty(files[i])) {
             contador[files[i]] += 1
             files[i] = `${files[i]}(${contador[files[i]]})`
         } else {
             contador[files[i]] = 0
         }
     }
     //return contador 
     console.log(contador)
     console.log(files)
 }

 const files = ['photo', 'postcard', 'photo', 'photo', 'video']
 fixFiles(files) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

 const files2 = ['file', 'file', 'file', 'game', 'game']
 fixFiles(files2) //= ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

 // ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
 const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
 fixFiles(files3)
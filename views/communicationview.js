module.exports.communicationview = function () {
    return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Bilgisayar Programcılığı</title>
      <link rel="stylesheet" type="text/css" href="./assets/style.css"/>
  </head>
  <body>
      <header class="hd1">
          <nav>
            <div >
            <a href="indexview.js"><img src="../image/logo_.png" class="Logoimg"></img>   </a>
        </img> 
                 
            </div>
            <div class="menu"> 
              <ul>
                  <li><a href="hhbview.js">Bölüm Başkanı</a></li>
                  <li><a href="Academicview.js">Akademik Kadro</a></li>
                  <li><a href="communicationview.js">İletişim</a></li>
                  <li><a href="linkview.js">Bölüm Sayfaları</a></li>
              </ul>
          </div>
          </nav>
      </header>
     
      <section class="container content">
          <h1>İletişim</h1>
          <div class="ornek card-block">
            <p><b>Adres:</b>       Sivas Cumhuriyet Üniversitesi Sivas Teknik Bilimler Meslek Yüksekokulu 58140</p> 
            <p><b>Tel:</b>          0.346.2191010-1484 -1507</p>
            <p><b>Fax:</b>          0.346.2191110  </p>
            <p><b>Web:  </b>        <a href="http://193.140.145.101">http://smyo.cumhuriyet.edu.tr</a></p>
            <p><b>E-Posta: </b>     smyo@cumhuriyet.edu.tr</p>
        </div>
      </section>
  </div>
  </body>
  </html>`;
};
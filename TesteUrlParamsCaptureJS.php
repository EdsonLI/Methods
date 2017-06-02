<!DOCTYPE html>
<html>
  <body>
    <script>
      /* Supondo que a url seja: http://localhost/teste/testeUrlParamsCaptureJS.php?situacao=dashboard&acao=qualquer */
      let urlParams = new URLSearchParams(window.location.search);

          console.info(urlParams.get('situacao')); // dashboard
          console.info(urlParams.getAll('situacao')); // ["dashboard"]
          console.info(urlParams.toString()); // ?situacao=dashboard&acao=qualquer

      /* Add a parameter */
      urlParams.append('adicionado', 'testeTi');

      let $parametro = urlParams.get('situacao');
          console.info($parametro);

      console.info('=========================================================');
      /* Display the key/value pairs */
      for(let param of urlParams.entries()) {
         console.info(param[0]+'='+param[1]);
         console.info(urlParams.get(param[0]));
         //console.info(urlParams.getAll(param[0]));
      }
      console.info(urlParams.toString());

      console.info('=========================================================');
      urlParams.delete('situacao');

      for(let param of urlParams.entries()) {
         console.info(param[0]+'='+param[1]);
         console.info(urlParams.get(param[0]));
         //console.info(urlParams.getAll(param[0]));
      }
      console.info(urlParams.toString());
    </script>
  </body>
</html>

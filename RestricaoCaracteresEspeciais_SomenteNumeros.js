<script>
    /* *
     * Metodo para prevenir/suprimir a entrada de caracteres especificos atraves do teclado 
     * @author Edson Luis Isele
     * @since 30/03/2016
     * Obs.: metodo concebido originalmente com a utilizacao de JQuery e Javascript
     */

    /* define a acao iniciada pelo evento keydown relacionado ao seletor, nesse caso o input com a propriedade name igual a cbxTempoPadrao */
    $('input[name=cbxTempoPadrao]').keydown(function(e) {
        //console.info('chamou keydown'+e.which);
        var $this = $(this), /* armazena o ponteiro em uma variavel e mantem uma copia original */
            teclas = [188, 110, 190, 194, 107, 109, 187, 189, 69]; /* define as teclas que serao bloqueadas para esse input */
        
        prevntNumeric(e, $this, teclas); /* faz a chamada do metodo */
    });

    /* define a acao iniciada pelo evento keydown relacionado ao seletor, nesse caso o input com a propriedade name igual a cbxEntradaInstalacao */
    $('input[name=cbxEntradaInstalacao]').keydown(function(e) {
        //console.info('chamou keydown'+e.which);
        var $this = $(this), /* armazena o ponteiro em uma variavel e mantem uma copia original */
            teclas = [188, 110, 190, 194, 107, 109, 187, 189, 69]; /* define as teclas que serao bloqueadas para esse input */
        
        prevntNumeric(e, $this, teclas); /* faz a chamada do metodo */
    });
    
    /* metodo para previnir/suprimir a entrada de caracteres especificos atraves do teclado */
    function prevntNumeric(event, seletor, teclas) {
        var val = seletor.val();
        if(val.length > 1) {
            event.preventDefault();
            val.substring(0,(val.length - 1));
        }
        for(var i = 0, len = teclas.length; i < len; i++) {
            if(event.which === teclas[i]) { /* compara se ha caracteres nao permitidos */
                event.preventDefault();
                val.substring(0,(val.length - 1));
            }
            //console.info(teclas[i]);
        }
    }
</script>
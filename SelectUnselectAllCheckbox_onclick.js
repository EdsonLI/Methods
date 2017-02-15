<script>
    /* *
     * Metodo para selecionar ou retirar a selecao de todos os checkbox de uma coluna 
     * @author Edson Luis Isele
     * @version 1.01
     * @since 15/02/2017
     * Obs.: metodo concebido originalmente com a utilizacao de JQuery e Javascript
     */

    /* elemento que vai compor o header de uma tabela */
    "<div><input type='checkbox' name='headerHabilitaCheck' style='margin-left:-4px;' onclick='habilitaTodos(this)'></div>"
    
    /* construcao dos elementos checkbox */
    "<div><input type='checkbox' class='habilElemento' name='habilitaElemento' style='margin-left:-4px;'></div>"

    function habilitaTodos(me) {
        $(".habilElemento").each(function() {
            $(this).prop('checked', $(me).prop("checked"));
        });
    }
</script>
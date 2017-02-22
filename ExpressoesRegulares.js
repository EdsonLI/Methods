<!DOCTYPE html>
	<body>
		<p>The test() method returns true if it finds a match, otherwise it returns false.</p>

		<button onclick="timeTest('23:59')">Validar Horário</button>

		<p id="demo"></p>
	</body>
</html>
<script>
	function timeTest($hr) {
    	//var timeTest = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
		//var timeTest = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5]?[0-9]$/;
        var timeTest = /^(?:\d|[01]\d|2[0-3]):[0-5]\d$/;
		var res = timeTest.test($hr);
		
		document.getElementById("demo").innerHTML = res;
	}
</script>

/* Logic:
	?:\d|[01]\d --> se o primeiro dígito for igual a 1 o seguinte pode ser de 0 a 9 (para 19:00 por exemplo)
	|2[0-3]) --> senão somente dois dígitos compreendidos entre 20 e 23
	[0-5]\d --> por fim os minutos que podem estar entre 00 e 59 somente
	The first number (hours) is either: a number between 0 and 19 --> [0-1]?[0-9] (allowing single digit number) or a number between 20 - 23 --> 2[0-3]
	The second number (minutes) is always a number between 00 and 59 --> [0-5][0-9] (not allowing a single digit)
*/
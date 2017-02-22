<!DOCTYPE html>
	<body>
		<p>The test() method returns true if it finds a match, otherwise it returns false.</p>
		<p>Click the button to search a string for the character "e".</p>

		<button onclick="timeTest('23:60')">Validar Horário</button>

		<p id="demo"></p>
	</body>
</html>
<script>
	function timeTest($hr) {
		var timeTest = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
		var res = timeTest.test($hr);
		
		document.getElementById("demo").innerHTML = res;
	}
</script>

/* Logic:
	The first number (hours) is either: a number between 0 and 19 --> [0-1]?[0-9] (allowing single digit number) or a number between 20 - 23 --> 2[0-3]
	The second number (minutes) is always a number between 00 and 59 --> [0-5][0-9] (not allowing a single digit)
*/
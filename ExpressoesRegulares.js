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
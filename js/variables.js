//Her står variablerne i en lang køre :)
var c = document.getElementById('mycanvas').getContext('2d'), canvas = document.getElementById("mycanvas"), // canvas
mx=400,my= 300,
instanceArray = new Array,
mig, tileSize = 16,
target = [30,30],
fps = 1000/60,
playing = true,
difficulty = 600,
spawnReduction = 100,
credits = 1000,
id = -1,
time = new Date();
function difference (a, b) { return Math.abs(a - b) }
setInterval(
function()
{
	if(playing)
	{
		credits++;
		credits+=Math.floor((new Date()-time)/2000);
		document.getElementById("Credits").innerHTML = "Credits: "+credits;
		document.getElementById("time").innerHTML = "Survived for: "+Math.floor((new Date()-time)/1000)+" seconds";
	}
},1000/10);

var class_controllable = function()
{
	var content = class_selectable();															//Henter data fra parent class
	content.type = "controllable";																//Ny type beskrivelse
	content.kills = 0;																			//Ny type beskrivelse
	content.target = [x = Math.random()*100+50,y = Math.random()*60+300],																//Ny type beskrivelse
	content.startupfunc();
	return (content);																		//Resultat returneres så det kan instantieres eller videredefineres
}

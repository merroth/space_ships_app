var class_meteor = function()
{
	var content = class_instance();															//Henter data fra parent class
	content.type = "meteor";																//Ny type beskrivelse
	content.maxSpeed = Math.random()*4+8;																//Ny type beskrivelse
	content.tile = [x = Math.random()*800,y = 0-content.size],																//Ny type beskrivelse
	//content.tile = [x = Math.random(),y = Math.random()],																//Ny type beskrivelse
	content.shapes.push(["circle",
						0,
						0,
						1,
						"rgba(55, 38, 00,0.8"]);
	content.startupfunc();
	return (content);																		//Resultat returneres så det kan instantieres eller videredefineres
}

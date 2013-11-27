var class_trail = function(tile)
{
	var content = class_instance();															//Henter data fra parent class
	content.type = "trail";																//Ny type beskrivelse
	content.maxSpeed = 0;																//Ny type beskrivelse
	content.life = 3,
	content.tile = tile,																//Ny type beskrivelse
	content.shapes.push([
						"circle",
						0,
						0,
						.5,
						"rgba(58, 58, 58,0.25)"
						]);
	content.startupfunc();
	return (content);																		//Resultat returneres så det kan instantieres eller videredefineres
}

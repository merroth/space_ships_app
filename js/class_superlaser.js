var class_superlaserblast = function(parent,target)
{
	var content = class_laserblast(parent,target);															//Henter data fra parent class
	content.type = "superlaserblast";		
	content.maxSpeed = 12;																	//Ny type beskrivelse
	content.shapes.unshift(["rect",
						-0.5,
						-0.5,
						2,
						2,
						"rgba(107, 123, 246,0.25)"]);
	content.shapes.unshift(["rect",
						-0.25,
						-0.25,
						1.5,
						1.5,
						"rgba(107, 123, 246,0.25)"]);
						
	content.remove = function (key,p)
	{
		key.projectiles.splice(p, 1);
	},		
	content.startupfunc();
	return (content);																		//Resultat returneres så det kan instantieres eller videredefineres
}

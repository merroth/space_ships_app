var class_laserblast = function(parent,target)
{
	var content = class_instance();															//Henter data fra parent class
	content.type = "laserblast";															//Ny type beskrivelse
	content.maxSpeed = 8;																	//Ny type beskrivelse
	content.ally = parent.ally;
	content.life = parent.range/6;
	content.acceleration = 2;																//Ny type beskrivelse
	content.damage = parent.damage;
	content.intendedTarget = target;
	content.target = [target.tile[0]+2,target.tile[1]+2];
	content.size = 4;
	content.tile = [parent.tile[0],parent.tile[1]];														//Ny type beskrivelse
	if(parent.type == "Cruiser" || parent.type == "Destroyer")
	{
		content.tile = [parent.tile[0]+Math.random()*parent.size-32,parent.tile[1]+Math.random()*parent.size-32];
	}//Ny type beskrivelse
	content.shapes.push(["rect",
						0,
						0,
						1,
						1,
						"yellow"]);
	content.shapes.push(["rect",
						0.25,
						0.25,
						0.5,
						0.5,
						"red"]);
						
	content.remove = function (key,p)
	{
		key.projectiles.splice(p, 1);
	},		
	content.startupfunc();
	return (content);																		//Resultat returneres så det kan instantieres eller videredefineres
}

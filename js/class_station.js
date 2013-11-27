var class_station = function(ally)
{
	var content = class_controllable();															//Henter data fra parent class
	content.type = "Station";																	//Ny type beskrivelse
	content.tile = [x = 60,y = 340],															//Spawn Point
	content.maxSpeed = 0,
	content.life = 800,
	content.canAttack = false;
	content.maxProjectiles = 0;
	content.projectiles = new Array;
	content.damage = 0;
	content.size = content.size;
	content.range = content.size*4;
	content.acceleration = 0,
	content.image = new Image();
	content.image.src = "img/space-station1.png";
	content.ally = ally;
	content.draw = function ()
	{
		c.save();
		c.translate(this.tile[0], this.tile[1]);
		c.rotate((this.angle * Math.PI / 180));
		c.drawImage(content.image, -60, -60);
		c.restore();
	};
	content.startupfunctions.push(function()
	{
			var names = ["Raven Star", "Warforge", "Sanctuary"];
			this.name = names[Math.round(Math.random() * (names.length - 1))];
			content.name = this.name;
	});
	content.remove = function (i)
	{
		var pod = content.tile;
		instanceArray.push(new class_boom_200(pod));
		instanceArray.splice(i, 1);
	},		
	content.trail = function ()
	{
		//content.tile;
		//instanceArray.push(new class_trail([content.tile[0],content.tile[1]]));
	},		
	content.startupfunc();
	return (content);																		//Resultat returneres så det kan instantieres eller videredefineres
}

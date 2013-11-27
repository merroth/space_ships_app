var class_boom_32 = function(tile)
{
	var content = class_instance();															//Henter data fra parent class
	content.type = "explosion";																//Ny type beskrivelse
	content.tile = tile,
	content.maxSpeed = 0,
	content.life = 15,
	content.angle = Math.random()*360;
	content.image = new Image();
	content.image.src = "img/boom-32.png";
	content.draw = function ()
	{
		c.save();
		c.translate(this.tile[0], this.tile[1]);
		c.rotate((this.angle * Math.PI / 180));
		c.drawImage(content.image, -16, -16);
		c.restore();
	};
	content.startupfunc();
	return (content);																		//Resultat returneres så det kan instantieres eller videredefineres
}

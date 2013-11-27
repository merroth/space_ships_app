var class_destroyer = function(ally)
{
	var content = class_cruiser(ally);															//Henter data fra parent class
	content.type = "Destroyer";																	//Ny type beskrivelse
	content.maxSpeed = 1,
	content.maxProjectiles = 4;
	content.damage = 120;
	content.acceleration = 0.01,
	content.image = new Image();
	content.image.src = "img/destroyer.png";
	content.startupfunctions.push(function()
	{
			var names = ["Grand Admiral Pitoz","\"The Executioner\"","Great General Carzoni", "Emil the Unstoppable"];
			this.name = names[Math.round(Math.random() * (names.length - 1))];
			content.name = this.name;
	});
	content.startupfunc();
	return (content);																		//Resultat returneres så det kan instantieres eller videredefineres
}

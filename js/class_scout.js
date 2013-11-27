var class_scout = function(ally)
{
	var content = class_controllable();															//Henter data fra parent class
	content.type = "Scout";	
	if(ally)
	{
		content.tile = [x =-100,y = Math.random()*200+200];
		content.target[0]+=100;
	}else
	{															//Ny type beskrivelse
		content.tile = [x =810+100*Math.random(),y = Math.random()*200+200];
	}
	content.maxSpeed = 8,
	content.life = 40,
	content.canAttack = true;
	content.maxProjectiles = 1;
	content.projectiles = new Array;
	content.damage = 5;
	content.size = 12;
	content.range = content.size*4;
	content.acceleration = 1,
	content.image = new Image();
	content.image.src = "img/scout.png";
	content.ally = ally;
	content.draw = function ()
	{
		c.save();
		c.translate(this.tile[0], this.tile[1]);
		c.rotate((this.angle * Math.PI / 180));
		c.drawImage(content.image, -8, -8);
		c.restore();
	};
	content.startupfunctions.push(function()
	{
			var names = ["Ryate Danigo","Jacen Cornag","Sia Wren","Valentin Ukarme","Arili Cynthisa","Milka Keler","Rundo Dymos","Bane McGhee","Cric Ijaaz","Deke Botos","Vyrr Mastruk","Gaff Kain","Sumi Bathens","Ubinaarisan Kaal","Jet Mindar","Sorvae Bane","Innoruuk Sarn","Shin-Wan Clash","Mieu Vendar","Loriss Morningstar","Sena Feskin","Voba Remex","Mordo Nyine","Shinnan Long","Xiarr Oorhies","Cassus Moorheart","Vilha Starfall","Moradin  Orden","Fable Dabrini","Nicole Gatheri","Calaveylon  Kynnovan","Lea Racto","Arnis Wran","Bennar Bionte","Plionij Faroamer","Eocto Bokiana","Aleha Rakshesh","Ketha Odan","Veega Dahn","Ganymede Braitano","Stanza Kepporra","Ysanne Lanith","Chalbran Drexel","Qurzit Morker","Latia Sacul","Mena Jorel","Auspa Keikodi","Stefan Vermetter","Seger Aruru","Aderes Athan","Lirik Lo","Ryate Swift","Larek Krin","Alon Edo","Solstice Klivian","Galak Zih","Natalya Adoug","Rek Jetberg","Evana Dreytila","Zan Diniz","Otzz Aadedai","Daran Cenvax","Odala Blith","Estefan  Corra","Mohandai Mao","Hala DeMarakesh","Leran Darsten","Titus Tade","Dralin Alavai","Plaba Selzen","Naren Strax","Neiki Armande","Ishale Stark","Mabila Spiuar","Lel Zendu","Pirias Ebonvar","Trohn Werjua","Zon Saduse","Johnny  Maximus","Ariel Pareja","Raile Starkos","Jonathan Zess","Aralus Fabiszak","Rane Greyhelm","Shula Tarven","Sal Seumic","Ousan Starfall","Movan Xemo","Io Sal","Skobra Writte","Habria Golladio","Tarth Siln","Tott Riburn","Silas  Bona","Osto Doofu","Hari Endel","Eduardo Goodner","Jomasom Myec","Zdenka Zorabos","Charratha Horizonis"];
			this.name = names[Math.round(Math.random() * (names.length - 1))];
			content.name = this.name;
	});
	content.remove = function (i)
	{
		var pod = content.tile;
		instanceArray.push(new class_boom_32(pod));
		instanceArray.splice(i, 1);
	},		
	content.trail = function ()
	{
		content.tile;
		//instanceArray.push(new class_trail([content.tile[0],content.tile[1]]));
	},		
	content.startupfunc();
	return (content);																		//Resultat returneres så det kan instantieres eller videredefineres
}

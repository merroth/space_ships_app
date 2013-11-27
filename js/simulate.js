setInterval(simulate, 1000/30);
var func = false;
function simulate()
{
	for(var instans in instanceArray)
	{
		var key = instanceArray[instans];
		if(key.type.lastIndexOf("trail")!=-1)
		{
			key.life--;
			if(key.life < 1)
			{
				key.remove(instans);
			}
		}
	}
	for(var instans in instanceArray)
	{
		var key = instanceArray[instans];
		if(key.canAttack && key.projectiles.length < key.maxProjectiles)
		{
			for(var instans2 in instanceArray)
			{
				var key2 = instanceArray[instans2];
				if(key.ally != key2.ally)
				{
					if(lineDistance( key.tile, key2.tile ) != 0 && lineDistance( key.tile, key2.tile ) <= key.range && key2.type !="trail")
					{
						if(key.type == "Destroyer")
						{
							key.projectiles.push(new class_superlaserblast(key,key2));
						}else
						{
							key.projectiles.push(new class_laserblast(key,key2));
						}
					}
				}
			}
		}
	}
	for(var instans in instanceArray)
	{
		var key = instanceArray[instans];
		if(key.type.lastIndexOf("Fighter") != -1 || key.type.lastIndexOf("Scout") != -1 || key.type.lastIndexOf("Cruiser") != -1 || key.type.lastIndexOf("Destroyer") != -1)
		{
			key.trail();
			if(key.life < 1)
			{
				key.remove(instans);
			}
			shipController(key);
		}
		if(key.type.lastIndexOf("explosion") != -1)
		{
			key.tile[0] += Math.random()*4-2;
			key.tile[1] += Math.random()*4-2;
			
			key.life--;
			if(key.life < 1)
			{
				key.remove(instans);
			}
		}
		if(key.type.lastIndexOf("Station") != -1)
		{
			key.angle+=0.1;
			if(key.life < 1)
			{
				key.remove(instans);
				setTimeout(
				function()
				{
					playing = false;
					
					alert("Din station er knust!\n\nDu stod fast overfor fjenden i "+Math.round((new Date()-time)/1000)+" sekunder, hvilket gav dit folk rigeligt med tid til at evakuere.\n\n(Yay! ^^ Happy Ending!)");
				},40);
			}
		}
		if(key.type.lastIndexOf("meteor")!=-1)
		{
			key.speed[0] += Math.random()*4-2;
			
			if(key.speed[0] > key.maxSpeed)
			{
				key.speed[0] = key.maxSpeed
			}
			key.tile[1] += key.speed[1];
			key.speed[1] += Math.random()*3;
			if(key.speed[1] > key.maxSpeed)
			{
				key.speed[1] = key.maxSpeed
			}
			key.tile[1] += key.speed[1];
			key.angle+=48;
		}
		if(key.selected == true)
		{
			//console.log(key.type+key.id);
		}
	}
}
function shipController(key)
{
	var dy = key.target[1] - key.tile[1], dx = key.target[0] - key.tile[0]
	var degrees = (Math.atan2(dy,dx)*180 / Math.PI);
	
	key.angle = degrees+90;
	
	if(degrees < 0)
	{//over
		var idegrees = ((0-1)*degrees /90)-1;
		key.speed[0]-=idegrees*key.acceleration;
	}else
	{//under
		var idegrees = (degrees /90)-1;
		key.speed[0]-=idegrees*key.acceleration;
	}
	if(degrees < 0)
	{//over
		var idegrees = ((((0-1)*degrees) -90)+90 % 90);
		if(idegrees < 0){idegrees= (0-1)*idegrees;}
		idegrees = (90 - idegrees)/90;
		key.speed[1]-=idegrees*key.acceleration;
	}else
	{
		var idegrees = (degrees - 90);
		if(idegrees < 0){idegrees= (0-1)*idegrees;}
		idegrees = (90 - idegrees)/90;
		key.speed[1]+=idegrees*key.acceleration;
	}
	if(key.speed[0] > key.maxSpeed){key.speed[0] = key.maxSpeed;}
	if(key.speed[0] < key.maxSpeed*-1){key.speed[0] = key.maxSpeed*-1;}
	if(key.speed[1] > key.maxSpeed){key.speed[1] = key.maxSpeed;}
	if(key.speed[1] < key.maxSpeed*-1){key.speed[1] = key.maxSpeed*-1;}
	if(lineDistance(key.target, key.tile) < 100)
	{
		key.speed[0]*=0.95;
		key.speed[1]*=0.95;
		if(lineDistance(key.target, key.tile) < 50)
		{
			key.speed[0]*=0.8;
			key.speed[1]*=0.8;
			if(lineDistance(key.target, key.tile) < 20)
			{
				key.speed[0]*=0.7;
				key.speed[1]*=0.7;
				if(lineDistance(key.target, key.tile) < 5)
				{
					key.speed[0]*=0.0;
					key.speed[1]*=0.0;
				}
			}
		}
	}
	
	key.tile[0] += key.speed[0];
	key.tile[1] += key.speed[1];

	
}
function lineDistance( target, tile )
{
	var xs = 0;
	var ys = 0;
	 
	xs = tile[0] - target[0];
	xs = xs * xs;

	ys = tile[1] - target[1];
	ys = ys * ys;
	 
	return Math.sqrt( xs + ys );
}
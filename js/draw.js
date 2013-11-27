setInterval(draw, fps);

function draw()
{
	c.fillStyle = "#EAE5E5";
	c.fillRect(0, 0, document.getElementById('mycanvas').width, document.getElementById('mycanvas').height);
	for(var instans in instanceArray)
	{
		if(instanceArray[instans].type.lastIndexOf("trail") != -1)
		{
			instanceArray[instans].draw();
		}
		if(instanceArray[instans].selected)
		{
			instanceArray[instans].drawSelected();
		}
	}
	for(var instans in instanceArray)
	{
		if(instanceArray[instans].type.lastIndexOf("Cruiser") != -1 || instanceArray[instans].type.lastIndexOf("Destroyer") != -1)
		{
			instanceArray[instans].draw();
			if(instanceArray[instans].canAttack && instanceArray[instans].projectiles.length > 0)
			{
				for(var proj in instanceArray[instans].projectiles)
				{
					instanceArray[instans].projectiles[proj].draw();
				}
			}
		}
	}
	for(var instans in instanceArray)
	{
		if(instanceArray[instans].type.lastIndexOf("trail") == -1 && instanceArray[instans].type.lastIndexOf("Cruiser") == -1  && instanceArray[instans].type.lastIndexOf("Destroyer") == -1)
		{
			instanceArray[instans].draw();
			if(instanceArray[instans].canAttack && instanceArray[instans].projectiles.length > 0)
			{
				for(var proj in instanceArray[instans].projectiles)
				{
					instanceArray[instans].projectiles[proj].draw();
				}
			}
		}
	}
}
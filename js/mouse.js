
//mouse coordinates
window.addEventListener("click", mouseclick, true);
function mouseclick(event)
{
	mx = (event.clientX) - (document.getElementById("mycanvas").offsetLeft) + pageXOffset,
	my = (event.clientY) - (document.getElementById("mycanvas").offsetTop) + pageYOffset;
}

//rightclick
document.getElementById("mycanvas").oncontextmenu = function(){return false;}

document.getElementById("mycanvas").addEventListener("mousedown", function(event)
{
	mx = (event.clientX) - (document.getElementById("mycanvas").offsetLeft) + pageXOffset,
	my = (event.clientY) - (document.getElementById("mycanvas").offsetTop) + pageYOffset;

	if(event.which == 3)
	{
		for(var instans in instanceArray)
		{
			if(instanceArray[instans].selected == true)
			{
				instanceArray[instans].target = [mx,my];
			}
		}
	}
	if(event.which == 1)
	{
		infoBox("reset");
		for(var i in instanceArray)
		{
			instanceArray[i].selected = false;
		}
		for(var i in instanceArray)
		{
			if(instanceArray[i].selectable == true && instanceArray[i].ally == true)
			{
				var a = instanceArray[i];
				if(mx < (a.tile[0]+a.size) && mx > (a.tile[0]-a.size))//if within x
				{
					if(my < (a.tile[1]+a.size) && my > (a.tile[1]-a.size))//if within y
					{
						instanceArray[i].onSelect();
						infoBox(instanceArray[i]);
						break;
					}
				}
			}
		}
	}
}, true);//Event listener end
function infoBox(key)
{
	if(typeof(key) === 'object')
	{
		document.getElementById("InfoType").innerHTML = "Class: "+key.type;
		document.getElementById("InfoName").innerHTML = "Captain: "+key.name;
		document.getElementById("InfoVelocity").innerHTML = "Max Speed: "+key.maxSpeed;
		document.getElementById("Damage").innerHTML = "Damage: "+key.damage;
		document.getElementById("Hp").innerHTML = "Health: "+key.life;
		document.getElementById("Acceleration").innerHTML = "Acceleration: "+key.acceleration;
		if(key.type == "Station")
		{
			for(var i in instanceArray)
			{
				if(instanceArray[i].ally)
				{
					instanceArray[i].selected = true;
				}
			}
		}
	}else
	{
		document.getElementById("InfoType").innerHTML = "Class: ";
		document.getElementById("InfoName").innerHTML = "Captain: ";
		document.getElementById("InfoVelocity").innerHTML = "Max Speed: ";
		document.getElementById("Damage").innerHTML = "Damage: ";
		document.getElementById("Hp").innerHTML = "Health: ";
		document.getElementById("Acceleration").innerHTML = "Acceleration: ";
	}
}

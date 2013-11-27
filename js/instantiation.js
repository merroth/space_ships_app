function instantiate()
{
	if(playing)
	{
		var switchstatement = difficulty + Math.round(Math.random() * 1000)
		spawnReduction--;
		if(spawnReduction<1)
		{
			if(difficulty >11)
			{
				difficulty-=10;
			}
			spawnReduction = Math.floor(difficulty*0.1);
				switch(true)
				{
				case(switchstatement < 20):
					instanceArray.push(new class_destroyer(false));
					difficulty+=100;
				break;
				case(switchstatement < 50):
					instanceArray.push(new class_cruiser(false));
					difficulty+=30;
				break;
					
				case(switchstatement < 150):
					instanceArray.push(new class_fighter(false));
				break;
					
				default:
					instanceArray.push(new class_scout(false));
				break;
			
			}
			if(spawnReduction<16)
			{
				spawnReduction=16;
			}
		}
	}
}
function spawn(event)
{
	event.value=event.value.toLowerCase();
	switch(true)
	{
		case(event.value.lastIndexOf("scout")!=-1):
		if(credits>=100)
		{
			instanceArray.push(new class_scout(true));
			credits-=100;
		}
		break;
		case(event.value.lastIndexOf("fighter")!=-1):
		if(credits>=750)
		{
			instanceArray.push(new class_fighter(true));
			credits-=750;
		}
		break;
		case(event.value.lastIndexOf("cruiser")!=-1):
		if(credits>=5000)
		{
			instanceArray.push(new class_cruiser(true));
			credits-=5000;
		}
		break;
		case(event.value.lastIndexOf("destroyer")!=-1):
		if(credits>=10000)
		{
			instanceArray.push(new class_destroyer(true));
			credits-=10000;
		}
		break;
	}
	event.value=capitaliseFirstLetter(event.value);
}
	instanceArray.push(new class_station(true));

	instanceArray.push(new class_fighter(true));
	for(var zx=0;zx<4;zx++)
	{
		instanceArray.push(new class_scout(true));
	}
	
var instantiateInterval = setInterval(instantiate, 1000/30);
function capitaliseFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
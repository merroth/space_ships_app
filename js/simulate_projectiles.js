setInterval(simulate_projectiles, 1000/30);
var func = false;
function simulate_projectiles()
{
	for(var instans in instanceArray)
	{
		var key = instanceArray[instans];
		if(key.canAttack)
		{
			for(var p in key.projectiles)
			{
				key2 = key.projectiles[p];
				key2.life--;

				if(key2.life < 1)
				{
					key2.remove(key,p);
				}
				if(key2.target[0]<key2.tile[0])
				{key2.speed[0]-=key2.acceleration;
				}else
				{key2.speed[0]+=key2.acceleration;}
				
				if(key2.target[1]<key2.tile[1])
				{key2.speed[1]-=key2.acceleration;
				}else
				{key2.speed[1]+=key2.acceleration;}
				if(lineDistance( key2.tile, key2.target ) < key2.maxSpeed*2)
				{
					key2.speed[1]*=0.7;key2.speed[0]*=0.7;
					if(lineDistance( key2.tile, key2.target ) < key2.maxSpeed)
					{
						key2.speed[1]*=0.7;key2.speed[0]*=0.7;
						if(lineDistance( key2.tile, key2.target ) < key2.maxSpeed*0.5)
						{
							key2.speed[1]*=0.7;key2.speed[0]*=0.7;
							if(key2.target[0]-key2.tile[0] < 20 && key2.target[0]-key2.tile[0] > -20 && key2.target[1]-key2.tile[1] < 20 && key2.target[1]-key2.tile[1] > -20)
							{
								key2.intendedTarget.life-=key2.damage;
								key2.life-=500;
							}
						}
					}
				}
				key2.tile[0]+=key2.speed[0];
				key2.tile[1]+=key2.speed[1];
			}
		}
	}
}
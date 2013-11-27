var class_instance = function ()
{
	id++;
	var content = 
	{
		id : id,
		ally : false,
		canAttack : false,
		life : 1,
		angle : angle = (90 % 360),
		type : "basic instance",
		name : "",
		tile : [x = 8,y = 8],
		speed : [x = 0,y = 0],
		acceleration : 1,
		maxSpeed : 8,
		size : tileSize*1,
		range : tileSize*1,
		color : "black",
		startupfunctions : [function(){}],
		startupfunc : function ()
		{
			for(var iy = 0; iy < this.startupfunctions.length;iy++)
			{
				this.startupfunctions[iy]();
			}
		},
		shapes : [],
		draw : function ()
		{
			c.save();
			c.translate(this.tile[0], this.tile[1]);
			c.rotate((this.angle * Math.PI / 180));
			c.translate(0 - (this.tile[0]), 0 - (this.tile[1]));
			for(var ix = 0; ix < this.shapes.length;ix++)
			{
				switch(true)
				{
					case (this.shapes[ix][0] == "rect"):
					c.fillStyle = this.shapes[ix][5];
					c.fillRect(
						this.tile[0]+(this.shapes[ix][1] * this.size),
						this.tile[1]+(this.shapes[ix][2] * this.size),
						this.shapes[ix][3]*this.size,
						this.shapes[ix][4]*this.size
					);
					break;
					case (this.shapes[ix][0] == "circle"):
					c.fillStyle = this.shapes[ix][4];
					c.beginPath();
					c.arc(
						this.tile[0]+(this.shapes[ix][1] * this.size),
						this.tile[1]+(this.shapes[ix][2] * this.size),
						this.shapes[ix][3]*this.size,
						0,
						Math.PI*2,
						true
					);
					c.fill();
					c.closePath();					
					break;
				}
			}
			c.restore();
			c.fillStyle = this.color;
		},
		drawSelected : function ()
		{
			c.save();
				c.fillStyle = "rgba(0, 255, 0,0.2)";
				c.beginPath();
				c.arc(this.tile[0], this.tile[1], this.size, 0, Math.PI*2, true);
				c.fill();
				c.closePath();
			c.restore();
			c.fillStyle = this.color;
		},
		remove : function (i)
		{
			instanceArray.splice(i, 1);
		},		
	}
	content.startupfunc();
	return content;
};

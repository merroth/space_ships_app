var class_selectable = function()
{
	var content = class_instance();															//Henter data fra parent class
	content.selected = false;
	content.selectable = true;
	content.type = "selectable";															//Ny type beskrivelse
	content.onSelect = function ()
	{
		this.selected = true;
	};
	content.startupfunc();
	return (content);																		//Resultat returneres så det kan instantieres eller videredefineres
}

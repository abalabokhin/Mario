M.Helper.ns("M.Display");

M.Display.Object = new Class({
	x: 0,
	y: 0,

	initialize: function()
	{
		var context;
		var parent;

		/**
		 * @param value M.Display.Canvas
		 */
		this.setParent = function(value)//Механизм addChild/removeChild первичен по сравнению с setParent, поэтому setParent строго следит за тем, чтобы его случайно не назначили неправильно.
		{
			if(parent && !parent.containsChild(this))//Если случайно оказалось, что мы где-то забыли обнулить парента, то делаем это сейчас.
			{
				parent = null;
				context = null;
			}

			if(value == null)//Если парента действительно нужно было обнулять, то мы это уже сделали и выходим, иначе, тем более ничего не нужно делать и тоже просто выходим.
			{
				return;
			}

			if(!value.containsChild(this))//Если пытаются присвоить ложного парента.
			{
				return;
			}

			parent = value;
			context = parent.getContext();
		}

		this.getContext = function()
		{
			return context;
		}
	},

	draw: function()
	{
		if(!this.getContext())
			return;

		var context = this.getContext();
		context.beginPath();
		context.moveTo(0,0);
		context.lineTo(10, 6);
		context.lineTo(10, -6);
		context.lineTo(0, 0);
		context.stroke();
		context.closePath();
	}
});

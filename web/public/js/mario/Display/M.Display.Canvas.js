M.Helper.ns("M.Display");

M.Display.Canvas = new Class({
	initialize: function(id, width, height, frameRate)
	{
		var el = new Element('canvas',  {
			id: id,
			width: width,
			height: height,
			styles: {
				position: 'absolute'
			}
		});
		var children = Array();
		var interval;

		var draw = function()
		{
			for(var i = 0; i < children.length; i++)
			{
				children[i].draw();
			}
		}

		this.getElement = function()
		{
			return el;
		}

		/**
		 * @param child M.Display.Object
		 */
		this.addChild = function(child)
		{
			children.push(child);
			child.setParent(this);//сначала добавили к детям, чтобы containsChild выдавал true, а затем устанавливаем парента ребёнку.
		}

		this.containsChild = function(child)
		{
			return children.indexOf(child) != -1;
		}

		this.removeChild = function(child)
		{
			var index = children.indexOf(child);

			if(index == -1)
				return;

			children = children.slice(index, index+1);

			child.setParent(null);// сначала удалили из детей, чтобы containsChild выдавал false, а затем сбрасываем парента у ребёнка.
		}

		this.stopAnimation = function()
		{
			clearInterval(interval);
		}

		interval = setInterval(draw, frameRate);
	},

	inject : function(value)
	{
		this.getElement().inject(value);
	},

	getContext : function()
	{
		return this.getElement().getContext('2d');
	},

	getX : function()
	{
		return this.getElement().getStyle('left').toInt();
	},

	getY : function()
	{
		return this.getElement().getStyle('top').toInt();
	},

	setX : function(value)
	{
		this.getElement().setStyle('left', value);
	},

	setY : function(value)
	{
		this.getElement().setStyle('top', value);
	}
});
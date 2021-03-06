M.Helper.ns("M.Display");

M.Display.Canvas = new Class({
        width : 0,
        height : 0,

	initialize: function(id, width, height, frameRate)
                {
                this.width = width;
                this.height = height;
		var scope = this;
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

		this.draw = function()
		{
			scope.getContext().clearRect(0, 0, width, height);
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

		if(frameRate)
			interval = setInterval(this.draw, frameRate);
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
	},

        getWidth : function()
        {
		return this.width;
        },

        getHeight : function()
        {
		return this.height;
        },

	clear : function()
	{
		this.getContext().clearRect(0, 0, getWidth(), getHeight());
	}
});
M.Helper.ns("M.Display");

M.Display.Mario = new Class({
    Implements : [M.Display.Object],

    draw: function()
	{
		if(!this.getContext())
			return;

		var context = this.getContext();
		context.beginPath();
		this.moveTo(0,0);
		this.lineTo(10, 0);
		this.lineTo(10, 10);
		this.lineTo(0, 10);
                this.lineTo(0, 0);
		context.stroke();
		context.closePath();
	}
});

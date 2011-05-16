M.Helper.ns("M.Display");

M.Display.Brick = new Class({
	Implements : [M.Display.Object],

	draw: function() {
		if(!this.getContext())
			return;

		this.rectIn(0,0,40,20);
	}
});

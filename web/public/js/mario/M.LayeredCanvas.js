M = window.M || {};
M.LayeredCanvas = new Class({

    options : {},
    layers : {},
    appDiv : {},

    initialize : function (options) {
        this.options = options;
        this.appDiv = new Element('div', {
            styles: {
                position: 'relative',
                width: this.options.width,
                height: this.options.height,
                overflow: 'hidden'
            }
        });
        this.appDiv.inject(this.options.parent);
        return this;
    },

    addLayer : function (id, width, height, frameRate) {
        if (!width)
            width = this.options.width;
        if (!height)
            height = this.options.height;

		var layer = new M.Display.Canvas(id, width, height, frameRate);
        layer.inject(this.appDiv);
        this.layers[id] = layer;
        return layer;
    },

    move : function (id, deltaX, deltaY) {
		this.layers[id].setX(this.layers[id].getX() - deltaX);
		this.layers[id].setY(this.layers[id].getY() - deltaY);
    }

});

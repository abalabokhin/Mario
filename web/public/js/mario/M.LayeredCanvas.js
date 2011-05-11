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

    addLayer : function (id, width, height) {
        if (!width)
            width = this.options.width;
        if (!height)
            height = this.options.height;

        layer = new Element('canvas', {
            id: id,
            width: width,
            height: height,
            styles: {
                position: 'absolute'
            }
        });
        layer.inject(this.appDiv);
        this.layers[id] = layer;
        return layer;
    },

    move : function (id, deltaX, deltaY) {
        this.layers[id].setStyle('left', this.layers[id].getStyle('left').toInt() - deltaX);
        this.layers[id].setStyle('top', this.layers[id].getStyle('top').toInt() - deltaY);
    }

});

var SEESAW = {};
SEESAW.CONTAINER = {};

SEESAW.init = function() {
    var body = $('body');
    var bootstrapContainer = '<div id="seesaw-container" class="container"></div>';
    body.html(bootstrapContainer);
    SEESAW.CONTAINER = $('#seesaw-container');    
};


SEESAW.add = function(component) {
    component.create();
    SEESAW.CONTAINER.append(component.getHTML());
};

SEESAW.prepend = function(component) {
    component.create();
    SEESAW.CONTAINER.prepend(component.getHTML());
};
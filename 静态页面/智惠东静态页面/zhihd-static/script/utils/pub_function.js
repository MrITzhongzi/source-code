var utils = {}

utils.setCss = function (element,styleObj) {
    for(var key in styleObj){
        element.style[key] = styleObj[key]
    }
}
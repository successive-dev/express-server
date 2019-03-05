"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validationHandler(config) {
    return function (req, res, next) {
        // console.log(req.query.skip);
        // console.log(typeof(req.query.skip));
        for (let prop in config) {
            let source = config[prop]['in'];
            //DEBUG
            // console.log(config);
            // console.log(source);
            // console.log(req.body);
            // console.log(typeof(req.query.skip));
            let input = req[source][prop];
            if (source == 'query' && /^\d+$/.test(input)) {
                input = parseInt(input, 10);
            }
            console.log(input);
            if (config[prop]['required']) {
                if (typeof (input) == 'undefined')
                    return res.send(config[prop]['errorMessage']);
                if (typeof (input) == 'string' && input.length == 0)
                    return res.send(config[prop]['errorMessage']);
            }
            if (config[prop]['required'] && config[prop]['string'] && typeof (input) != 'string')
                return res.send(prop + ': Type mismatch');
            if (config[prop]['required'] && config[prop]['number'] && typeof (input) != 'number')
                return res.send(prop + ': Type mismatch');
            if (!(typeof (config[prop]['default']) == 'undefined')) {
                req[source][prop] = config[prop]['default'];
            }
            // if(typeof(config[prop]['regex']!='undefined') && config[prop]['regex'].length!=0){
            //     req[source]['regex'] = config[prop]['regex'].test(input);
            // }
        }
        next();
    };
}
exports.default = validationHandler;
//# sourceMappingURL=validationHandler.js.map
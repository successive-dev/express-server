function validationHandler(config) {
    return function (req, res, next) {
        // console.log(req.query.skip);
        // console.log(typeof(req.query.skip));

        for (let prop in config) {
            let source = config[prop]['in'];
            let input = req[source][prop];
            if (source == 'query' && /^\d+$/.test(input)) {
                input = parseInt(input, 10);
            }
            
            if (config[prop]['required']) {
                if (typeof (input) == 'undefined') return res.send(config[prop]['errorMessage']);
                if (typeof (input) == 'string' && input.length == 0) return res.send(config[prop]['errorMessage']);
            }

            if (config[prop]['required'] && config[prop]['string'] && typeof (input) != 'string') return res.send(prop + ': Type mismatch');


            if (config[prop]['required'] && config[prop]['number'] && typeof (input) != 'number') return res.send(prop + ': Type mismatch');

            if(!(typeof(config[prop]['default'])=='undefined') && typeof(req[source][prop])=='undefined'){
                req[source][prop] = config[prop]['default'];
            }  
        }

        next();
    }
}
export default validationHandler;

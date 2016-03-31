var merge = require('merge');

module.exports = function () {

    var options = {
        debug: true,
        contentFolder: './Content',
        bowerFolder: './Content/bower_components',
        bowerJson: './Content/bower.json',
        jsFolder: './Content/js/app/'
    };
    
    var wiredep = require('wiredep')({ directory: options.bowerFolder, bowerJson: require(options.bowerJson) });
    
    var config = {      
        js: [
            options.jsFolder + '**/*.module.js',
            options.jsFolder + 'templates.js',
            options.jsFolder + '**/*.config.js',
            options.jsFolder + '**/*.service.js',
            options.jsFolder + '**/*.factory.js',
            options.jsFolder + '**/*.controller.js',
            options.jsFolder + '**/*.directive.js',
            options.jsFolder + '**/*.js',
            '!' + options.jsFolder + '**/*.spec.js'
        ],

        bowerCss: function () {
            if (!wiredep.css) {
                wiredep.css = [];
            }
            return wiredep.css.concat([
                options.bowerFolder + '/bootstrap/dist/css/bootstrap.css'
            ]);
        },

        bowerJs: function () {
            if (!wiredep.js) {
                wiredep.js = [];
            }
            return wiredep.js.concat([
                /*bowerFolder + '/angular/angular.js',
                bowerFolder + '/angular-route/angular-route.js',
                bowerFolder + '/bootstrap/dist/js/bootstrap.js'*/
            ]);
        }
    }

    return merge(config, options);
}

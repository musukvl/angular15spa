var wiredep = require('wiredep')({ directory: './Content/bower_components', bowerJson: require('./Content/bower.json') });

module.exports = function () {
    var clientApp = './Content/js/app/';
    var bowerFolder = "./Content/bower_components";
    var config = {
        debug: true,
        js: [
            clientApp + 'app.module.js',
            clientApp + 'app.config.js',
            clientApp + '**/*.module.js',
            clientApp + 'templates.js',
            clientApp + '**/*.config.js',
            clientApp + '**/*.service.js',
            clientApp + '**/*.factory.js',
            clientApp + '**/*.controller.js',
            clientApp + '**/*.directive.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.spec.js'
        ],

        bowerCss: function () {
            if (!wiredep.css) {
                wiredep.css = [];
            }
            return wiredep.css.concat([
                bowerFolder + '/bootstrap/dist/css/bootstrap.css'
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

    return config;
}

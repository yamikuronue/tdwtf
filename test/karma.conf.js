module.exports = function( config ) {
	config.set( {
		basePath: '../',
		frameworks: [ 'jasmine-jquery', 'jasmine' ],
		files: [
			'test/**/*.spec.js',
			'custom.less',
			'header.html',
			'test/fixtures/**/*'
		],
		exclude: [],
		preprocessors: {
			'**/*.scss': [ 'scss' ],
			'**/*.less': [ 'less' ]
		},
		proxies: {
			'/wtdwtf/': 'https://what.thedailywtf.com/'
		},
		reporters: [ 'spec' ],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: false,
		browsers: [ 'PhantomJS', 'Firefox' ],
		singleRun: true,
		concurrency: 1,
		plugins: [ 'karma-*' ],
		specReporter: {
			maxLogLines: 20,
			suppressErrorSummary: false,
			suppressFailed: false,
			suppressPassed: false,
			suppressSkipped: false,
			showSpecTiming: true
		},
		lessPreprocessor: {
			options: {
				paths: [ '.', 'test/fixtures' ]
			}
		}
	} );
};

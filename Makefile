test-cov:
	./node_modules/istanbul/lib/cli.js cover -- ./node_modules/mocha/bin/_mocha -R spec
	./node_modules/istanbul/lib/cli.js check-coverage --functions=100 --statements=100 --branches=100 --lines=100 

test:
	npm test

ci:
	./node_modules/browserify/bin/cmd.js test/test.js -o browser.js
	./node_modules/karma/bin/karma start karma.conf.js 
	make test-cov
	./node_modules/jshint/bin/jshint index.js 

.PHONY: test test-cov

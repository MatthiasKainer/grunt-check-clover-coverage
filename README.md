# grunt-check-clover-coverage

> Loads a generated clover coverage xml file and enforces code coverage on the file

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-check-clover-coverage --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-check-clover-coverage');
```

## The "check_clover_coverage" task

### Overview
In your project's Gruntfile, add a section named `check_clover_coverage` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  check_clover_coverage: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.tresholds
Type: `object`
Default value: ` {
			"elements": 100,
			"statements": 100,
			"conditionals": 100,
			"methods": 100
		}`
		
### Usage Examples

#### Default Options
In this example, the default options are used to run default tresholds (80) on a file.

```js
grunt.initConfig({
  check_clover_coverage: {
    options: {},
    files: {
      src: ["test/fixtures/report.xml"]
    },
  },
});
```

#### Custom Options
In this example, custom options are used to enforce a 100% coverage.

```js
grunt.initConfig({
  check_clover_coverage: {
    options: {
      "tresholds": {
			"elements": 100,
			"statements": 100,
			"conditionals": 100,
			"methods": 100
		}
    },
    success : {
        src: ["test/fixtures/success.xml"]
    },
    fail : {
        src: ["test/fixtures/failure.xml"]
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var PythonScaffoldGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the super-duper PythonScaffold generator!'
    ));

    var prompts = [
    {
      name:'moduleName',
      message: 'What is the name of your module?'
    },
    {
      name:'moduleVersion',
      message: 'What is the initial version of the module?',
      default: '0.0.1'
    },
    {
      name:'moduleAuthor',
      message: 'What is the name of the module\'s author?',
    },
    {
      name:'moduleAuthorEmail',
      message: 'What is the author\'s email?',
    },
    {
      name:'moduleURL',
      message: 'What is the module URL?',
    },
    {
      name:'moduleDescription',
      message: 'Please provide a brief module description',
    },
    {
      type: 'checkbox',
      name:'moduleLicense',
      message: 'What type of license should the module support?',
      choices: [{
        name: 'FreeBSD',
        value: 'FreeBSD',
        checked: true
      },
      {
        name: 'MIT',
        value: 'MIT',
        checked: false
      },
      {
        name: 'Apache',
        value: 'Apache',
        checked: false
      }]
    },
    {
      type: 'confirm',
      name: 'addModuleTests',
      message: 'Would you like to enable unit testing?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.moduleName = props.moduleName;
      this.moduleVersion = props.moduleVersion;
      this.moduleAuthor = props.moduleAuthor;
      this.moduleAuthorEmail = props.moduleAuthorEmail;
      this.moduleLicense = props.moduleLicense;
      this.moduleURL = props.moduleURL;
      this.moduleDescription = props.moduleDescription;
      this.addModuleTests = props.addModuleTests;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.dest.mkdir(this.moduleName);
      
      if(this.testOption){
        this.dest.mkdir( this.moduleName + '/tests');
      }
      
      this.template('_setup.py', 'setup.py');
      this.template('_README.rst', 'README.rst');
      this.template('_MANIFEST.in', 'MANIFEST.in');
    },

    projectfiles: function () {
    }
  },

  end: function () {
    //this.installDependencies();
  }
});

module.exports = PythonScaffoldGenerator;

'use strict';

var _ = require('lodash'),
	requireNew = require('require-new'),
	dataHelper = requireNew('../../../helpers/data.js'),
	handlebarsHelper = requireNew('../../../helpers/handlebars.js'),
	defaultData = requireNew('../../data/default.data.js');

var moduleData = {}, // Add data to be passed to the module template
	template = dataHelper.getFileContent('{{name}}.hbs'),
	compiledTemplate = handlebarsHelper.compile(template)(moduleData),
	data = _.merge(defaultData, moduleData, {
		meta: {
			title: '{{className}}',
			className: '{{className}}',
			jira: 'ESTATICO-*',
			demo: compiledTemplate,
			code: {
				handlebars: dataHelper.getFormattedHandlebars(template),
				html: dataHelper.getFormattedHtml(compiledTemplate),
				data: dataHelper.getFormattedJson(moduleData)
			},
			documentation: dataHelper.getDocumentation('{{name}}.md')
		}
	});

module.exports = data;

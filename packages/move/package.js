Package.describe({
	summary: "a way to manipulate things with css",
	environments: ['client']
});

Package.on_use(function(api) {
	api.add_files('move.js', 'client');
	
	if (api.export) {
		api.export('move');
	}
});

// priority: 0

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

onEvent('block.registry', event => {
	event
		.create('fabio:mystical_bush')
		.type('basic')
		.material('berry_bush')
		.hardness(0.1)
		.displayName('Mystical Bush')
		.notSolid()
		.renderType('cutout')
		.noItem();
})
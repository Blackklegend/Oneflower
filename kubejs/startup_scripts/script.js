// priority: 0

onEvent('item.registry', event => {
	//Generic item add
	let itemI = ['oneflower:adobe_blend', 'oneflower:adobe_brick']
	let itemN = ['Adobe Blend', 'Adobe Brick']
	for (let i = 0; i < itemI.length; i++) {
		event.create(itemI[i]).displayName(itemN[i])
	}

	//Wooden shears
	event
		.create('oneflower:wooden_shears')
		.displayName('Wooden Shears')
		.unstackable()
		.burnTime(500)
		.tool('shears', 1)
		.maxDamage(188);
})

onEvent('block.registry', event => {
	//Mystical bush
	event
		.create('fabio:mystical_bush')
		.type('basic')
		.material('berry_bush')
		.hardness(0.1)
		.displayName('Mystical Bush')
		.notSolid()
		.renderType('cutout')
		.defaultCutout()
		.noItem();

	//Adobe bricks
	event
		.create('oneflower:adobe_bricks')
		.displayName('Adobe Bricks')
		.hardness(1)
		.harvestTool('pickaxe', 0)
		.requiresTool(true)
		.resistance(6);
})
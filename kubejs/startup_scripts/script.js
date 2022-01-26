// priority: 0

onEvent('item.registry', event => {
	//Generic add function

	function convertToId(name) {
		return 'oneflower:' + name.replace(/ /, '_').toLowerCase()
	}

	//Generic item add
	let itemN = ['Adobe Blend', 'Adobe Brick']
	for (let i = 0; i < itemN.length; i++) {
		event.create(convertToId(itemN[i])).displayName(itemN[i])
	}

	//Generic unstackable item add
	let itemU = ['Creativity Bag', 'Void Pearl']
	for (let i = 0; i < itemU.length; i++) {
		event.create(convertToId(itemU[i])).displayName(itemU[i]).unstackable()
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

	//Abstract plataform
	event
		.create('oneflower:abstract_block')
		.displayName('Abstract Block')
		.hardness(0)
		.noItem()
		.lightLevel(1)
		.renderType('type')
		.suffocating(false)
		.waterlogged()
		.defaultTranslucent();
})
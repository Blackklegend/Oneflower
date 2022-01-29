// priority: 0

	//Shortcuts
	function onef(id) {
		return 'oneflower:' + id
	}
	
	function convertToId(name) {
		return 'oneflower:' + name.replace(/ /, '_').toLowerCase()
	}

onEvent('item.registry', event => {

	//Generic stackable item add
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
		.create(onef('wooden_shears'))
		.displayName('Wooden Shears')
		.unstackable()
		.burnTime(500)
		.tool('shears', 1)
		.maxDamage(188);

	//Hammer
	for (let type of ['Stone', 'Iron', 'Golden', 'Diamond', 'Netherite']) {
		event
			.create(convertToId(type + ' Hammer'))
			.displayName(type + ' Hammer')
			.unstackable()
	}
})

onEvent('block.registry', event => {
	
	//Adobe bricks
	event
		.create(onef('adobe_bricks'))
		.displayName('Adobe Bricks')
		.hardness(1)
		.harvestTool('pickaxe', 0)
		.requiresTool(true)
		.resistance(6);
	
	//Abstract plataform
	event
		.create(onef('abstract_block'))
		.displayName('Abstract Block')
		.hardness(0)
		.noItem()
		.lightLevel(1)
		.renderType('type')
		.suffocating(false)
		.waterlogged()
		.defaultTranslucent();
	
	//Dust
	event
		.create(onef('dust'))
		.displayName('Dust')
		.hardness(0.5)
		.resistance(1)
		.material('sand')
		.harvestTool('shovel', 0)
		.requiresTool(false)


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
		.setLootTableJson({
			"type": "minecraft:block",
			"pools": [
				{
					"rolls": 1.0,
					"bonus_rolls": 0.0,
					"entries": [
						{
						"type": "minecraft:item",
						"name": "minecraft:oak_log"
						}
					],
					"conditions": [
						{
						"condition": "minecraft:survives_explosion"
						}
					]
				}
			]
		})
		.noItem();
})
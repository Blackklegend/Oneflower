// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

onEvent('recipes', event => {

	//Generic recipe remove
	for (let remove of ['minecraft:blast_furnace', 'minecraft:shears']) {
		event.remove({output: remove})
	}

	//Shortcuts
	let blockCraft4 = (output, input) => {
		event.shaped(output, [
			'II',
			'II'
		], {
			I: input
		})
	}
	let unblockCraft4 = (output, input) => {
		event.shapeless('4x ' + output, input)
	}

	let pureDaisy = (output, input) => {
		event.custom({
			"type": "botania:pure_daisy",
			"input": {
				"type": "block",
				"block": input
			},
			"output": {
				"name": output
			}
			})
	}

	//?Botania petal blocks
	for (let colors of ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'red', 'black', 'blue', 'purple', 'brown', 'green' ]) {
		event.remove({output: 'botania:' + colors + '_petal_block'})
		blockCraft4('botania:' + colors + '_petal_block', 'botania:' + colors + '_petal')
		event.remove({output: 'botania:' + colors + '_petal', input: /petal_block/})
		unblockCraft4('botania:' + colors + '_petal', 'botania:' + colors + '_petal_block')
	}

	//Generic recipe add

	//Copper blast furnace
	event.shaped('minecraft:blast_furnace', [
		'SSS',
		'CFC',
		'BBB'
	], {
		S: 'minecraft:stone',
		C: '#forge:ingots/copper',
		F: 'minecraft:furnace',
		B: 'minecraft:smooth_stone'
	})

	//Adobe
	event.custom({"type": "interactio:item_fluid_transform",
		"inputs": [
			{
				"item":  "minecraft:dirt",
				"count": 1
			},
			{
				"item": "minecraft:grass",
				"count": 1
			}
		],
		"fluid": {"fluid": "water"},
		"output": {
			"item": "oneflower:adobe_blend",
			"count": 4
		},
		"consume_fluid": 0.3333
	})

	event.campfireCooking('minecraft:brick', 'minecraft:clay_ball').cookingTime(400)
	event.campfireCooking('oneflower:adobe_brick', 'oneflower:adobe_blend').cookingTime(400)
	blockCraft4('oneflower:adobe_bricks', 'oneflower:adobe_brick')
	unblockCraft4('oneflower:adobe_brick', 'oneflower:adobe_bricks')

	//Shears
	event.shaped('minecraft:shears', [
		'SI',
		'NS'
	], {
		S: 'minecraft:stick',
		I: 'minecraft:iron_ingot',
		N: 'minecraft:iron_nugget'
	})
	event.shaped('oneflower:wooden_shears', [
		'SP',
		'BS'
	], {
		S: '#forge:rods/wooden',
		P: '#minecraft:planks',
		B: '#minecraft:wooden_buttons'
	})

	//Pure daisy lava-ice
	pureDaisy('minecraft:lava', 'botania:red_petal_block')
	pureDaisy('minecraft:ice', 'botania:light_blue_petal_block')
})
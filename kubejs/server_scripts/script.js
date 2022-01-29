// priority: 0
//Server scripts

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

	//~ Shortcuts
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

	//~ Generic recipe remove
		for (let remove of ['minecraft:blast_furnace', 'minecraft:shears']) {
			event.remove({output: remove})
		}

	//~ Remove wooden tools
		for (let tools of ['sword', 'shovel', 'pickaxe', 'axe', 'hoe']) {
			event.remove({output: 'minecraft:wooden_' + tools})
		}

	//~ Shaped recipes
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
		//Shears
			//* Minecraft shears
				event.shaped('minecraft:shears', [
					'SI',
					'NS'
				], {
					S: 'minecraft:stick',
					I: 'minecraft:iron_ingot',
					N: 'minecraft:iron_nugget'
				})
			//* Wooden shears
				event.shaped('oneflower:wooden_shears', [
					'SP',
					'BS'
				], {
					S: '#forge:rods/wooden',
					P: '#minecraft:planks',
					B: '#minecraft:wooden_buttons'
				})

		//Creativity Bag
			event.shaped('oneflower:creativity_bag', [
				'PMP',
				'GBG',
				'PMP'
			], {
				P: '#botania:petals',
				M: 'botania:manasteel_ingot',
				G: 'botania:mana_glass',
				B: 'effortlessbuilding:randomizer_bag'
			})
	
		//Void pearl
			event.shaped('oneflower:void_pearl', [
				' N ',
				'NVN',
				' N '
			], {
				N: 'eidolon:arcane_gold_nugget',
				V: 'bloodmagic:reagentvoid'
			})
		
	//~ Custom recipes
		//Adobe
			blockCraft4('oneflower:adobe_bricks', 'oneflower:adobe_brick')
			unblockCraft4('oneflower:adobe_brick', 'oneflower:adobe_bricks')

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
	
	//~ Campfire Recipes
		event.campfireCooking('minecraft:brick', 'minecraft:clay_ball').cookingTime(400)
		event.campfireCooking('oneflower:adobe_brick', 'oneflower:adobe_blend').cookingTime(400)

	//~ Pure daisy
		//* Lava to red_petal_block
			pureDaisy('minecraft:lava', 'botania:red_petal_block')
		//* Ice to light_blue_petal_block
			pureDaisy('minecraft:ice', 'botania:light_blue_petal_block')
})
//End of file
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
	//?Botania petal blocks
	for (let colors of ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'red', 'black', 'blue', 'purple', 'brown', 'green' ]) {
		event.remove({output: 'botania:' + colors + '_petal_block'})
		event.shaped('botania:' + colors + '_petal_block', [
			'PP',
			'PP'
		], {
			P: 'botania:' + colors + '_petal'
		})
	}
})
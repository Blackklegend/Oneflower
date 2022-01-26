let colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'red', 'black', 'blue', 'purple', 'brown', 'green']

onEvent('recipes', event => {
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

	//?Botania petal blocks
	for (let color of colors) {
		event.remove({output: 'botania:' + color + '_petal_block'})
		blockCraft4('botania:' + color + '_petal_block', 'botania:' + color + '_petal')
		event.remove({output: 'botania:' + color + '_petal', input: /petal_block/})
		unblockCraft4('botania:' + color + '_petal', 'botania:' + color + '_petal_block')
	}
})

onEvent('recipes.compostables', event => {
    for (let color of colors) {
        event.add('botania:' + color + '_petal', 0.5) 
    }
})
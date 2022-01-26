// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

//Applied facades
onEvent('jei.hide.items', event => {
	event.hide(/appliedenergistics2:facade/)
})
onEvent('jei.add.items', event => {
	event.add(Item.of('appliedenergistics2:facade', '{item:"minecraft:stone"}'))
})
onEvent('jei.information', event => {
	event.add(Item.of('appliedenergistics2:facade', '{item:"minecraft:stone"}'), ['You can use this same recipe for all blocks.'])
})


onEvent('jei.hide.items', event => {
	//Remove wooden and stone tools
	for (let tools of ['sword', 'shovel', 'pickaxe', 'axe', 'hoe']) {
		event.hide('minecraft:wooden_' + tools)
		event.hide('minecraft:stone_' + tools)
	}

	//Fluid container
	event.hide(/ftblibrary:fluid_container/)
})
onEvent('item.right_click', event => {
    let world = event.getWorld();
    let player = event.getPlayer();

    let x = player.x
    let y = player.y
    let z = player.z

    if (!event.getItem().getId().equals("oneflower:creativity_bag"))
    return
    event.player.addItemCooldown('oneflower:creativity_bag', 30)
    world.server.runCommandSilent(`/fill ${parseInt(x - 3)} ${parseInt(y - 1)} ${parseInt(z + 3)} ${parseInt(x + 3)} ${parseInt(y - 1)} ${parseInt(z - 3)} oneflower:abstract_block replace minecraft:air`)
    event.server.scheduleInTicks(600, event => {
        world.server.runCommandSilent(`/fill ${parseInt(x - 3)} ${parseInt(y - 1)} ${parseInt(z + 3)} ${parseInt(x + 3)} ${parseInt(y - 1)} ${parseInt(z - 3)} minecraft:air replace oneflower:abstract_block`)
    })
})
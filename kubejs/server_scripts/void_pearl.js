onEvent("item.right_click", event => {
    let world = event.getWorld();
    let player = event.getPlayer();

    let x = player.x
    let y = player.y
    let z = player.z

    if (event.getItem().getId().equals("oneflower:void_pearl") && y < 10) {

        event.player.addItemCooldown('oneflower:void_pearl', 2400)

        event.player.potionEffects.add('minecraft:slow_falling', 40, 0)
        event.player.potionEffects.add('ars_nouveau:flight', 400, 0)

        world.server.runCommandSilent(`/fill ${parseInt(x - 4)} ${parseInt(0)} ${parseInt(z + 4)} ${parseInt(x + 4)} ${parseInt(0)} ${parseInt(z - 4)} oneflower:abstract_block replace minecraft:air`)
        event.server.scheduleInTicks(1200, event => {
            world.server.runCommandSilent(`/fill ${parseInt(x - 4)} ${parseInt(0)} ${parseInt(z + 4)} ${parseInt(x + 4)} ${parseInt(0)} ${parseInt(z - 4)} minecraft:air replace oneflower:abstract_block`)
        })
    } else return
})
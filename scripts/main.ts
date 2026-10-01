import { world, system, ItemComponentConsumeEvent } from "@minecraft/server";

function checkForMatch(block:any, items:any){
    world.sendMessage("function running")
    let rightBlock = false;
    let rightItems = false;
   
    if (block.typeId == "minecraft:enchanting_table"){
        rightBlock = true;
    }
    if (items.typeId === "teches:bio_fuel"){
        rightItems = true;
    }
    if (rightBlock === true && rightItems === true){
        return true;
    }
    return false;
}

system.beforeEvents.startup.subscribe((initEvent) => {
    initEvent.itemComponentRegistry.registerCustomComponent(
        "teches:nausea_on_consume",
        {
            onConsume(event: ItemComponentConsumeEvent) {
                event.source.addEffect(
                    "minecraft:nausea",
                    500,
                    {
                        amplifier: 0
                    }
                );
            }
        }
    );
});

world.afterEvents.playerInteractWithBlock.subscribe((event) => {
    let match = checkForMatch(event.block, event.itemStack);
    if (match === true){
        world.sendMessage("Clicked on enchanting table with bio-fuel!!!")
    }
});



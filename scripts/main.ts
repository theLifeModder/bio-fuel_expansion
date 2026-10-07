import { system, ItemComponentConsumeEvent } from "@minecraft/server";

system.beforeEvents.startup.subscribe((initEvent) => {
  initEvent.itemComponentRegistry.registerCustomComponent("teches:nausea_on_consume", {
    onConsume(event: ItemComponentConsumeEvent) {
      event.source.addEffect("minecraft:nausea", 500, {
        amplifier: 0,
      });
    },
  });
});

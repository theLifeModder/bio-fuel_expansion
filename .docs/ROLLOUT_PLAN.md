## ITEM TESTS (FOR STEP 2 OF 1ST CHECKLISTS)

###   BIO_FUEL:

        Items 1-3 are for initial version forward. 4-12 are for 1st version to release before _Technical Enchantment_ rolls out.

###   Animal Lard
        Animal Lard exists with identifier teches:animal_lard
        Animal Lard appears correctly in Creative inventory, if intended
        Animal Lard texture displays correctly in inventory
        Animal Lard texture displays correctly when held
        Animal Lard stacks to 64
        Animal Lard can be picked up, dropped, and collected normally
        Animal Lard can be used as food, if intended
        Eating Animal Lard gives the intended nutrition/saturation
        Animal Lard functions as fuel, if intended
        Animal Lard is obtained from the intended animal loot
        Cows can drop Animal Lard correctly
        Pigs can drop Animal Lard correctly
        Sheep can drop Animal Lard correctly
        Striders can drop Animal Lard correctly
        Looting affects Animal Lard drops correctly
        Vanilla animal drops remain intact
        Animal Lard does not produce unintended drops
        Animal Lard works correctly alongside vanilla loot behavior

####    1. Bio-Fuel Item

        Bio-Fuel exists with the correct teches: identifier
        Correct display name: Bio-Fuel
        Correct item texture
        Item can be obtained normally
        Item can be picked up/dropped
        Item stacks correctly
        Item survives relogging/world reload
        Item works correctly in creative inventory
        Item works correctly in survival inventory

####    2. Bio-Fuel Recipe
 
        Recipe exists
        Correct ingredients
        Correct output
        Correct output quantity
        Recipe works in the intended crafting interface
        Recipe does not accidentally conflict with another recipe

####    3. Furnace Fuel
 
        Bio-Fuel can be inserted into a furnace
        Bio-Fuel actually burns
        Correct number of items can be smelted per Bio-Fuel
        Partial stacks work correctly
        Multiple stacks work correctly
        Furnace stops correctly when Bio-Fuel runs out
        Furnace behavior is correct when the output slot becomes full
        Bio-Fuel works in other furnace-type blocks, if intended
        Furnace
        Blast Furnace
        Smoker

####    4. Bio-Fuel Enchanting
 
        Bio-Fuel can be placed into the enchanting system
        Only valid Bio-Fuel items are accepted
        Invalid items are rejected
        Enchanting consumes the correct amount of Bio-Fuel
        Enchanting consumes the correct XP
        Correct enchantments are offered
        Enchantment levels work correctly
        Enchanted Bio-Fuel retains its item properties
        Enchanted Bio-Fuel can still be used as fuel
        Enchanted Bio-Fuel can still be used as food, if applicable
        Enchantments survive dropping/picking up
        Enchantments survive world reload

####    5. Smeltmore
 
        Smeltmore can be applied
        Smeltmore level is displayed correctly
        Unenchanted Bio-Fuel has the normal burn duration
        Smeltmore increases burn duration as intended
        Higher Smeltmore levels increase duration correctly
        Actual furnace behavior matches the intended duration
        No duplication or loss of fuel occurs

####    6. Feedmore
 
        Feedmore can be applied
        Feedmore level is displayed correctly
        Bio-Fuel has the intended hunger value
        Bio-Fuel has the intended saturation
        Feedmore increases nutrition correctly
        Feedmore increases saturation correctly
        Higher Feedmore levels behave correctly
        Eating enchanted Bio-Fuel does not cause unexpected behavior

####    7. Custom Enchanting Interface

        If this is still part of the implementation:

            Using Bio-Fuel on an enchanting table opens the intended interface
            Normal enchanting-table interaction still works when appropriate
            Interface opens reliably
            Interface closes correctly
            Player can return to the vanilla enchanting-table UI
            Bio-Fuel can be selected
            Enchantment options display correctly
            XP requirements display correctly
            Multiple stacks can be enchanted
            1–10 stacks work correctly
            More than 10 stacks are rejected/handled correctly
            XP cost scales correctly with the number of stacks
            No items disappear when closing the interface
            No XP is lost incorrectly when closing the interface

####    8. Hopper / Redstone Automation

        This is especially important because it is intended to become part of Technical Enchantment later.

        Hopper can insert Bio-Fuel into the enchanting table
        Hopper insertion occurs at normal hopper speed
        Hopper cannot insert from the bottom
        Hopper can insert from intended sides
        Invalid items are rejected
        Hopper underneath can extract enchanted Bio-Fuel
        Hopper underneath cannot extract unenchanted Bio-Fuel, if that is the intended rule
        Hopper does not extract unrelated items
        Redstone behavior works correctly
        Multiple hoppers work together
        Automation does not duplicate items
        Automation does not delete items

####    9. Item Data / Persistence

        Test all of these with both normal and enchanted Bio-Fuel:

        Drop/pickup
        Chest storage
        Shulker box storage
        Hopper transportation
        Dispenser
        Dropper
        Inventory movement
        Death and item recovery
        World save/reload
        Server/client reload, if applicable

####    10. Multiplayer

        Player A can use Bio-Fuel correctly
        Player B can use Bio-Fuel correctly
        Enchanting works for multiple players
        One player's enchanting doesn't affect another player's items/XP
        Item synchronization is correct
        No client/server desync
        Automated enchanting behaves correctly with multiple players

####    11. Compatibility / TechES Standalone Test

        Because Bio-Fuel Expansion is supposed to be a standalone TechES add-on:

        Works with vanilla Minecraft without other TechES add-ons
        Does not require Guardian Nip
        Does not require Technical Enchantment
        Does not require Technical Convenience
        Namespace is correctly isolated under teches:
        No accidental dependencies on unrelated TechES features
        Can be installed alongside other TechES add-ons
        Combining TechES add-ons doesn't cause identifier conflicts

####    12. Regression / Abuse Testing

        These are the tests I'd consider particularly important before calling it release-ready:

        Shift-click every relevant item
        Rapidly click/use Bio-Fuel
        Try to enchant with insufficient XP
        Try to enchant with insufficient Bio-Fuel
        Close interfaces at every possible stage
        Break containers while they contain Bio-Fuel
        Save/reload during an operation
        Kill the player during an operation
        Test full inventories
        Test full enchanting-table input/output situations
        Test hoppers when containers are full
        Test very large quantities of Bio-Fuel
        Test maximum enchantment levels
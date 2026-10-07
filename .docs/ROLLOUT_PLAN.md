# CHECKLISTS

## 🔥 Bio-Fuel Release Checklist — 1.0.0

####     1. Freeze the Feature Set

        Description: Establish exactly what is included in the 1.0.0 release. No new features should be added after this point unless they are required to fix a release-blocking problem.

        Confirm the final Bio-Fuel feature list
        Confirm the final Animal Lard feature list
        Confirm all recipes that are part of 1.0.0
        Confirm all loot-table changes
        Confirm all scripting functionality
        Confirm all intended item behavior
        Remove/defer unfinished features
        Confirm Technical Enchantment is not part of this release

 ####    2. Audit Every Feature

        Description: Go feature-by-feature and verify that everything intended for 1.0.0 actually exists and works.

        Bio-Fuel item
        Animal Lard item
        Animal Lard acquisition
        Bio-Fuel recipe
        Fuel functionality
        Food functionality
        Nausea behavior
        Any completed enchantment-related functionality that is actually part of Bio-Fuel 1.0.0
        Verify identifiers use the intended teches: namespace
        Verify no unfinished feature is accidentally included

 ####    3. Test the Recipe

        Recipe exists
        Correct ingredients
        Correct ingredient quantities
        Correct output quantity
        Correct output item
        Recipe accepts valid ingredients
        Recipe rejects invalid ingredients
        Recipe works in Survival
        Recipe works repeatedly
        Recipe does not duplicate ingredients or outputs
        Recipe behaves correctly when inventory is full

 ####   4. Test Mob Loot Tables

        Description: Verify that Animal Lard is generated correctly through the intended animal loot behavior without breaking vanilla drops.

        Verify each intended animal can produce Animal Lard
        Verify Animal Lard drop quantity
        Verify normal animal drops remain intact
        Verify Looting behavior
        Verify drop behavior at different difficulty/settings where relevant
        Verify unintended mobs do not drop Animal Lard
        Verify drops do not duplicate
        Verify Animal Lard has the correct identifier

 ####    5. Clean-World Test

        Description: Test the add-on in a fresh world rather than relying on the development world.

        Create a completely new world
        Enable the required packs
        Verify the pack loads without errors
        Test Bio-Fuel
        Test Animal Lard
        Test recipes
        Test loot
        Test fuel
        Test food
        Test all completed scripting
        Check for unexpected errors

 ####    6. Uninstall/Reinstall Test

        Description: Verify that the released add-on can be removed and installed again without producing unexpected behavior.

        Remove the add-on from the test environment
        Verify the world behaves normally afterward
        Reinstall the add-on
        Create/load a test world
        Verify all features still work
        Verify no stale development files are required
        Verify the add-on does not depend on an old installation

 ####    7. Production Build

        Run the production build
        Run the production .mcaddon build
        Confirm build completes without errors
        Confirm no unexpected warnings
        Confirm generated files are current
        Confirm compiled JavaScript is present
        Confirm required resource-pack files are present
        Confirm required behavior-pack files are present

        Commands:

        npm run build:production
        npm run mcaddon:production

 ####    8. Inspect the .mcaddon

        Description: Don't assume the build system packaged everything correctly. Open the actual release artifact and inspect it.

        Open the generated .mcaddon
        Verify Behavior Pack is included
        Verify Resource Pack is included
        Verify manifests
        Verify scripts
        Verify item definitions
        Verify textures
        Verify recipes
        Verify loot tables
        Verify all required files are present
        Verify development-only files are absent

 ####    9. Clean the Project

        Description: Remove generated/development artifacts that should not be part of the source repository or release package.

        Remove obsolete generated files
        Remove obsolete test files
        Remove temporary assets
        Remove unused scripts
        Remove unused textures
        Remove unused JSON files
        Verify .gitignore
        Verify lib/ handling
        Verify dist/ handling
        Verify source maps are handled appropriately
        Confirm no secrets or personal files are included

####     10. Audit Manifests
        Behavior Pack manifest has correct name
        Resource Pack manifest has correct name
        Correct UUIDs
        Correct module types
        Correct dependencies
        Correct min_engine_version
        Correct script entry point
        Correct version
        No stale development references
        Behavior Pack correctly references Resource Pack
        Required dependencies are present

 ####    11. Version 1.0.0

        Description: Establish the official first stable release version.

        Set project version to 1.0.0
        Update manifest versions
        Update package/version information where applicable
        Verify version numbers are consistent
        Confirm no 0.0.x/Alpha references remain where they shouldn't
        Create a Git tag for 1.0.0
        12. Documentation
        Explain what Bio-Fuel Expansion does
        Explain Bio-Fuel
        Explain Animal Lard
        Explain how Bio-Fuel is obtained
        Explain how Animal Lard is obtained
        Explain crafting recipes
        Explain fuel behavior
        Explain food behavior
        Explain any other released mechanics
        List supported Minecraft version
        List installation requirements
        Explain that Bio-Fuel Expansion is standalone

 ####    13. Changelog

        Description: Record what changed during development so users and future-you can understand the release.

        Record major features
        Record fixes
        Record important behavior changes
        Record version number
        Record release date
        Identify this as the 1.0.0 release

 ####    14. Screenshots
        Bio-Fuel inventory screenshot
        Bio-Fuel held-item screenshot
        Animal Lard screenshot
        Crafting/recipe screenshot
        Gameplay screenshot
        Any important feature screenshots
        Verify screenshots represent the actual release build

 ####    15. Release Package

        Description: Assemble the actual files that will be distributed to users.

        Final .mcaddon
        Documentation
        Changelog
        Screenshots
        Installation instructions
        Verify filename/version
        Verify package opens correctly
        Verify package is the production build
        Verify no development-only files are included

 ####    16. Stranger Test

        Description: Have someone who did not build the add-on install and use it without your assistance. This is the final usability test.

        Give them only the release package
        Give them the normal installation instructions
        Do not explain how the add-on works beyond the documentation
        Have them install it
        Have them create/use a world
        Have them obtain Animal Lard
        Have them obtain Bio-Fuel
        Have them use the recipes
        Have them test the major features
        Record anything confusing
        Fix genuine release problems
        Repeat the test if significant changes are made

todo FORMAT 2ND CHECKLIST!!!!

Bio-Fuel Release Checklist — 0.0.1 — Alpha 1

This is the more focused first public Alpha checklist.

1. Freeze Feature Set

Description: Decide what Alpha 1 actually promises.

 Identify completed features
 Identify intentionally incomplete features
 Remove unfinished features from the Alpha
 Confirm Bio-Fuel is the focus
 Confirm Animal Lard is included
 Confirm Technical Enchantment is excluded
 Establish 0.0.1-alpha.1 / 0.0.1 — Alpha 1 versioning consistently
2. Audit Project Files
 Check Behavior Pack files
 Check Resource Pack files
 Check TypeScript files
 Check JSON files
 Check textures
 Check recipes
 Check loot tables
 Check manifests
 Check package configuration
 Remove unused files
 Remove obsolete test files
 Verify .gitignore
 Verify source/build directories
3. Clean main.ts

Description: Make the main script suitable for an Alpha release rather than leaving behind temporary development/debugging code.

 Remove temporary debug messages
 Remove unused imports
 Remove unused variables
 Remove experimental code
 Remove commented-out abandoned code
 Keep required event subscriptions
 Keep required custom components
 Confirm startup behavior
 Confirm no unnecessary console/chat output
 Run lint/build after cleanup
4. BP Manifest
 Correct pack name
 Correct description
 Correct UUID
 Correct module UUIDs
 Correct version
 Correct min_engine_version
 Correct script entry
 Correct @minecraft/server dependency
 Confirm manifest loads without errors
5. RP Audit
 Correct RP manifest
 Correct texture paths
 Correct item_texture.json
 Bio-Fuel texture present
 Animal Lard texture present
 Correct texture identifiers
 No missing textures
 No obsolete textures
 Check inventory rendering
 Check held-item rendering
 Check for visual artifacts
6. Bio-Fuel
 teches:bio_fuel exists
 Correct display name
 Correct icon
 Correct stack size
 Correct food behavior
 Correct fuel behavior
 Correct use behavior
 Correct custom component behavior
 Correct texture
 Item can be obtained normally
 Item can be dropped
 Item can be picked up
 Item can be stored
 Item survives world save/reload
 Eating works correctly
 Intended nausea behavior works correctly
7. Animal Lard
 teches:animal_lard exists
 Correct display name
 Correct icon
 Correct stack size
 Correct texture
 Intended animals drop it
 Drop quantities are correct
 Looting works correctly
 Normal vanilla drops remain intact
 Animal Lard can be picked up
 Animal Lard can be stored
 Animal Lard can be moved between inventories
 Animal Lard food behavior works if included
 Animal Lard fuel behavior works if included
8. Recipe
 Bio-Fuel recipe exists
 Correct ingredients
 Correct quantities
 Correct output
 Recipe works in Survival
 Recipe works repeatedly
 Invalid combinations don't produce Bio-Fuel
 No item duplication
 No item loss
 Recipe works after a fresh installation
9. Development Test

Description: Perform the complete feature test in the development environment before building the Alpha package.

 Create test world
 Test Bio-Fuel
 Test Animal Lard
 Test recipe
 Test loot
 Test fuel
 Test food
 Test scripting
 Test item storage
 Test save/reload
 Check logs
 Check for errors
 Check for unexpected behavior
10. Standalone Architecture

Description: Verify the fundamental TechES design rule: Bio-Fuel Expansion must work as an independent add-on.

 Test with only Bio-Fuel Expansion enabled
 Do not require Technical Enchantment
 Do not require another TechES add-on
 Verify all Bio-Fuel features still work
 Verify all Animal Lard features still work
 Verify namespace is teches:
 Verify no unnecessary cross-add-on dependencies
 Confirm the add-on can later be integrated into TechES without requiring its standalone functionality to be rewritten
11. Production Build
 Run production build
 Run production .mcaddon build
 Confirm no build errors
 Confirm no unexpected warnings
 Confirm compiled script is included
 Confirm resource files are included
 Confirm behavior files are included
 Confirm generated package is current
12. Clean-Install Actual .mcaddon

Description: This is the critical Alpha test of the file that an actual user will receive.

 Remove the development installation
 Build the production .mcaddon
 Install the actual .mcaddon
 Create a clean test world
 Enable the add-on
 Verify it loads
 Test Bio-Fuel
 Test Animal Lard
 Test recipe
 Test loot
 Test fuel
 Test food
 Test scripting
 Save and reload
 Verify no development files are required
13. Documentation
 Installation instructions
 Supported Minecraft version
 Bio-Fuel explanation
 Animal Lard explanation
 Recipe information
 Loot information
 Fuel information
 Food information
 Known Alpha limitations
 Standalone-use information
 Version number
14. Screenshots / Presentation
 Bio-Fuel inventory image
 Bio-Fuel held-item image
 Animal Lard image
 Recipe image
 Gameplay image
 Feature showcase image
 Verify images come from the Alpha build
 Ensure presentation accurately represents the current feature set
15. Final Alpha Sign-Off

Description: The final decision point before distributing 0.0.1 — Alpha 1.

 All planned Alpha features tested
 No known release-blocking bugs
 Production .mcaddon tested
 Clean installation tested
 Documentation complete
 Screenshots complete
 Version numbers correct
 Git working tree reviewed
 Commit final Alpha changes
 Create Alpha Git tag
 Archive the exact Alpha release artifact
 Mark Bio-Fuel — 0.0.1 — Alpha 1 as ready for release
🚀 Release

Bio-Fuel — 0.0.1 — Alpha 1

## ITEM TESTS (FOR STEP 2 OF 1ST CHECKLIST)

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
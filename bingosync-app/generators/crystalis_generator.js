var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [{ name: "Buy Tanned Hide", types: ["Armor"] },
{ name: "Buy Leather Armor", types: ["Armor"] },
{ name: "Find Antidote", types: ["Consumable"] },
{ name: "Find Medical Herb", types: ["Consumable"] },
{ name: "Kill a Mimic", types: ["Enemy"] },
{ name: "Kill a Fish Man", types: ["Enemy"] },
{ name: "Kill a Jellyfish", types: ["Enemy"] },
{ name: "Kill an Octopus", types: ["Enemy"] },
{ name: "Kill a Wyvern", types: ["Enemy"] },
{ name: "Kill a Crab", types: ["Enemy"] },
{ name: "Kill a Medusa", types: ["Enemy"] },
{ name: "Kill a Snow/Sand Monster", types: ["Enemy"] },
{ name: "Kill an Entity", types: ["Enemy"] },
{ name: "Kill a Beast Man", types: ["Enemy"] },
{ name: "Kill a Draygonian Soldier", types: ["Enemy"] },
{ name: "Kill a Slime", types: ["Enemy"] },
{ name: "Kill a Tiger Man", types: ["Enemy"] },
{ name: "Kill a Slug ", types: ["Enemy"] },
{ name: "Kill a Golem", types: ["Enemy"] },
{ name: "Kill a Wild Hog Man", types: ["Enemy"] },
{ name: "Kill a Giant Slime", types: ["Enemy"] },
{ name: "Kill a Killer Plant", types: ["Enemy"] },
{ name: "Kill a Giant Spider", types: ["Enemy"] },
{ name: "Kill a Living Rock", types: ["Enemy"] },
{ name: "Kill a Mushroom", types: ["Enemy"] },
{ name: "Kill a Swamp Insect", types: ["Enemy"] },
{ name: "Kill an Evil Bird", types: ["Flying Enemy"] },
{ name: "Kill a Medusa Head", types: ["Flying Enemy"] },
{ name: "Kill a Bat", types: ["Flying Enemy"] },
{ name: "Kill a Flying Swamp Insect", types: ["Flying Enemy"] },
{ name: "Buy Carapace Shield", types: ["Shield"] },];
bingoList[2] = [{ name: "Find Wrap Boots", types: ["Consumable"] },
{ name: "Fruit of Power", types: ["Consumable"] },
{ name: "Kill a Sand/Lava Man", types: ["Enemy"] },
{ name: "Kill a Lizard Man (Flail)", types: ["Enemy"] },
{ name: "Kill a Draygonian Knight", types: ["Enemy"] },
{ name: "Kill a Salamander", types: ["Enemy"] },
{ name: "Kill a Draygonian Archer", types: ["Enemy"] },
{ name: "Kill a Wraith (Invisible)", types: ["Enemy"] },
{ name: "Kill a Giant Eye ", types: ["Enemy"] },
{ name: "Kill a Flying Insect", types: ["Flying Enemy"] },
{ name: "Kill a Devil", types: ["Flying Enemy"] },
{ name: "Kill a Killer Moth/Butterfly", types: ["Flying Enemy"] },
{ name: "Buy Bronze Shield", types: ["Shield"] },
{ name: "Buy Platinum Shield", types: ["Shield"] },
{ name: "Find Sword of Wind", types: ["Sword"] },
{ name: "Find Sword of Fire", types: ["Sword"] },
{ name: "Find Sword of Water", types: ["Sword"] },
{ name: "Find Sword of Thunder", types: ["Sword"] },];
bingoList[3] = [{ name: "Find Fruit of Repun", types: ["Consumable"] },
{ name: "Find Lysis Plant", types: ["Consumable"] },
{ name: "Find Magic Ring", types: ["Consumable"] },
{ name: "Kill a Tomb Guardian / Wizard", types: ["Enemy"] },
{ name: "Kill a Mummy", types: ["Enemy"] },
{ name: "Kill a Skeleton", types: ["Enemy"] },
{ name: "Kill a Tarantula", types: ["Enemy"] },
{ name: "Kill a Scorpion", types: ["Enemy"] },
{ name: "Buy Mirrored Shield", types: ["Shield"] },];
bingoList[4] = [{ name: "Buy Bronze Armor", types: ["Armor"] },
{ name: "Buy Platinum Armor", types: ["Armor"] },
{ name: "Find Ball of Wind", types: ["Battle Upgrade"] },
{ name: "Find Ball of Fire", types: ["Battle Upgrade"] },
{ name: "Find Ball of Water", types: ["Battle Upgrade"] },
{ name: "Find Ball of Thunder", types: ["Battle Upgrade"] },
{ name: "Find Fruit of Lime", types: ["Consumable"] },
{ name: "Find Opel Statue", types: ["Consumable"] },
{ name: "CurbStomp Fruit of Lime", types: ["Consumable"] },
{ name: "Find Eye Glasses", types: ["Consumable"] },
{ name: "Find Gas Mask", types: ["Face/Neck"] },
{ name: "Find Deo's Pendant", types: ["Face/Neck"] },
{ name: "Find Iron Necklace", types: ["Face/Neck"] },
{ name: "Find Shield Ring", types: ["Ring"] },
{ name: "Buy Ceramic Shield", types: ["Shield"] },
{ name: "Save Dwarf child", types: ["Task"] },
{ name: "Talk to Stom in Shyron after the massacre", types: ["Task"] },
{ name: "Fight Stom Legit in round 3", types: ["Task"] },
{ name: "Cure a Status Ailment with another Status Ailment", types: ["Task"] },
{ name: "Get slimed and cure it by exiting the screen", types: ["Task"] },
{ name: "Talk to Real Mesia", types: ["Task"] },
{ name: "Find the Dead Gold Miner", types: ["Task"] },
{ name: "Heal the dolphin", types: ["Trade Quest"] },
{ name: "Cure Slime Kensu", types: ["Trade Quest"] },
{ name: "Find Akahana Item", types: ["Trade Quest"] },
{ name: "Unpetrify the Twins or Akahana", types: ["Trade Quest"] },
{ name: "Spawn the Insect", types: ["Trade Quest"] },
{ name: "Start the windmill", types: ["Trade Quest"] },
{ name: "Enter Styx", types: ["Trade Quest"] },
{ name: "Open the Prison", types: ["Trade Quest"] },
{ name: "Acquire a Boat", types: ["Trade Quest"] },
{ name: "Calm the Sea", types: ["Trade Quest"] },
{ name: "Wake up Kensu", types: ["Trade Quest"] },
{ name: "Wake up Windmill Guard", types: ["Trade Quest"] },
{ name: "Return Queen Item", types: ["Trade Quest"] },
{ name: "Return Kensu Item", types: ["Trade Quest"] },
{ name: "Aquire Deo's Item", types: ["Trade Quest"] },];
bingoList[5] = [{ name: "Find Speed Boots", types: ["Boot"] },
{ name: "Find Rabbit Boots", types: ["Boot"] },
{ name: "Kill Vampire", types: ["Boss"] },
{ name: "Kill Vampire 2", types: ["Boss"] },
{ name: "Use Bow of Moon", types: ["Bow"] },
{ name: "Use Bow of Sun", types: ["Bow"] },
{ name: "Buy Sacred Shield", types: ["Shield"] },
{ name: "Find Flight", types: ["Spell"] },];
bingoList[6] = [{ name: "Buy Soldier Suit", types: ["Armor"] },
{ name: "Buy Ceramic Suit", types: ["Armor"] },
{ name: "Find/Buy Battle Armor", types: ["Armor"] },
{ name: "Find Psycho Armor", types: ["Armor"] },
{ name: "Kill Draygon", types: ["Boss"] },
{ name: "Kill Sabera", types: ["Boss"] },
{ name: "Kill a Sorcerer (Bert)", types: ["Enemy"] },
{ name: "Kill a Black Knight (Flail)", types: ["Enemy"] },
{ name: "Kill a Ground Sentry (Lvl1)", types: ["Enemy"] },
{ name: "Kill a Tower Defense Mech (Lvl2)", types: ["Enemy"] },
{ name: "Kill a Tower Sentinel (Eye)", types: ["Enemy"] },
{ name: "Kill a Air Sentry", types: ["Flying Enemy"] },
{ name: "Find Power Ring", types: ["Ring"] },
{ name: "Find Warrior Ring", types: ["Ring"] },];
bingoList[7] = [{ name: "Use Bow of Truth", types: ["Bow"] },
{ name: "Find/Buy Battle Shield", types: ["Shield"] },];
bingoList[8] = [{ name: "Find Refresh", types: ["Spell"] },
{ name: "Find Telepathy", types: ["Spell"] },
{ name: "Find Teleport", types: ["Spell"] },
{ name: "Find Paralysis", types: ["Spell"] },
{ name: "Find Recover", types: ["Spell"] },
{ name: "Find Barrier", types: ["Spell"] },
{ name: "Find Change", types: ["Spell"] },];
bingoList[9] = [{ name: "Annoyed Kensu using Telepathy", types: ["Spell"] },];
bingoList[10] = [{ name: "Get Stom thrown out of Aryllis’ house", types: ["Spell"] },];
bingoList[11] = [{ name: "Ride the boat", types: ["Trade Quest"] },];
bingoList[12] = [{ name: "Never buy Shield / Armor", types: ["Combat Task"] },];
bingoList[13] = [{ name: "Clear the tower with the Sword of Wind", types: ["Combat Task"] },];
bingoList[14] = [{ name: "Kill Sabera 2", types: ["Boss"] },
{ name: "Kill Kelbesque 2", types: ["Boss"] },
{ name: "Kill Karmine", types: ["Boss"] },
{ name: "Kill Draygon 2", types: ["Boss"] },
{ name: "Made a Swamp Hell Run to Oak", types: ["Task"] },];
bingoList[15] = [{ name: "Find Rabbit and Speed Boots", types: ["Boot"] },
{ name: "Kill Insect", types: ["Boss"] },
{ name: "Kill Kelbesque", types: ["Boss"] },
{ name: "Find Psycho Shield", types: ["Shield"] },];
bingoList[16] = [{ name: "Grind to Level 16", types: ["Combat Task"] },
{ name: "Found Deo's Pendant and Iron Necklace", types: ["Face/Neck"] },
{ name: "30000 Gold on hand", types: ["Task"] },
{ name: "Ride the Dolphin", types: ["Trade Quest"] },];
bingoList[17] = [{ name: "Kill Mado", types: ["Boss"] },
{ name: "Find Tornado Bracelet", types: ["Battle Upgrade"] },
{ name: "Find Flame Bracelet", types: ["Battle Upgrade"] },
{ name: "Find Blizzard Bracelet", types: ["Battle Upgrade"] },
{ name: "Find Storm Bracelet", types: ["Battle Upgrade"] },];
bingoList[18] = [{ name: "Kill ANY Boss with Inverted Controller", types: ["boss"] },
{ name: "Kill Draygon 2 with Wind or Water Sword", types: ["Boss"] },
{ name: "Kill Draygon 2 without using Level 3 Charges", types: ["Boss"] },];
bingoList[19] = [{ name: "Kill Mado 2", types: ["Boss"] },
{ name: "Found Power, Warrior, and Shield rings", types: ["Ring"] },
{ name: "Find 3 Opel Statues", types: ["Consumable"] },];
bingoList[20] = [{ name: "Kill Dyna", types: ["Boss"] },
{ name: "Killed Mado 2 without Level 3 Charge shots", types: ["Boss"] },];
bingoList[21] = [{ name: "Find Crystalis", types: ["Sword"] },
{ name: "Found all Spells", types: ["Spell"] },];
bingoList[22] = [{ name: "Found all Worn Items", types: ["Task"] },];
bingoList[23] = [{ name: "Never equipped Warrior Ring", types: ["Combat Task"] },
{ name: "Never equipped Power Ring", types: ["Combat Task"] },];
bingoList[24] = [{ name: "Find ALL 13 Mimics - Keep count!", types: ["Task"] },];
bingoList[25] = [{ name: "Kill Dyna WITHOUT killing the Blaster Pods", types: ["Boss"] },
{ name: "Never use a consumable", types: ["Combat Task"] },];
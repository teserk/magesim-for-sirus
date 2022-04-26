var ids = {
    // Trinkets
    TRINKET_MERCURIAL_ALCHEMIST_STONE: 44322,
    TRINKET_TWILIGHT_SERPENT: 42395,
    TRINKET_TOME_ARCANE_PHENOMENA: 36972,
    TRINKET_CANNONEERS_FUSELIGHTER: 44013,
    TRINKET_MARK_WAR_PRISONER: 37873,
    TRINKET_FORGE_EMBER: 37660,
    TRINKET_PENDULUM_TELLURIC_CURRENTS: 37264,
    TRINKET_DARKMOON_DEATH: 42990,
    TRINKET_EMBRACE_SPIDER: 39229,
    TRINKET_DYING_CURSE: 40255,
    TRINKET_EXTRACT_NECROMANTIC_POWER: 40373,
    TRINKET_SOUL_DEAD: 40382,
    TRINKET_ILLUSTRATION_DRAGON_SOUL: 40432,
    // Enchants
    BLACK_MAGIC: 59625,
    HYPERSPEED_ACCELERATORS: 54999,
    LIGHTWEAVE_EMBROIDERY: 55642,
    DARKGLOW_EMBROIDERY: 55769,
    // Item sets
    T10_SET: 8, phase: 483,
    T9_SET: 8, phase: 344,
    T8_SET: 836,
    T7_SET: 803,
    T6_SET: 671,
    GLADIATOR_SET: 779,
    DUSKWEAVE_SET: 764,
    // Metas
    META_CHAOTIC_SKYFLARE: 41285,
    META_EMBER_SKYFLARE: 41333,
    META_BEAMING_EARTHSIEGE: 41389,
    META_INSIGHTFUL_EARTHSIEGE: 41401,
    // TBC items
    TRINKET_SERPENT_COIL: 30720,
    TRINKET_MQG: 19339,
    TRINKET_SKULL_GULDAN: 32483,
    TRINKET_SHRUNKEN_HEAD: 33829,
    TRINKET_NAARU_SLIVER: 34429,
    TRINKET_ASHTONGUE_TALISMAN: 32488,
};

var equip = {
    weapon: [
        // eoe
        { id: 40489, title: "Greatstaff of the Nexus", int: 77, sp: 461, hit: 95, haste: 104, twohand: true },
        // os
        { id: 40455, title: "Staff of Restraint", int: 108, spi: 84, sp: 461, crit: 68, twohand: true },
        // naxx
        { id: 40408, title: "Haunting Call", int: 41, spi: 23, sp: 461, hit: 45 },
        { id: 40336, title: "Life and Death", int: 44, sp: 461, crit: 42, haste: 29 },
        { id: 40396, title: "The Turning Tide", int: 50, sp: 520, crit: 37, haste: 48 },
        { id: 39271, title: "Blade of Dormant Memories", int: 38, sp: 408, crit: 40, haste: 27 },
        { id: 40348, title: "Damnation", int: 86, spi: 85, sp: 461, crit: 91, twohand: true },
        { id: 40300, title: "Spire of Sunset", int: 101, sp: 461, haste: 99, mp5: 29, twohand: true },
        { id: 39200, title: "Grieving Spellblade", int: 40, sp: 408, crit: 37, haste: 27 },
        { id: 39424, title: "The Soulblade", int: 44, spi: 42, sp: 461, hit: 30 },
        { id: 39394, title: "Charmed Cierge", int: 68, spi: 90, sp: 408, haste: 89, twohand: true },
        { id: 39256, title: "Sulfur Stave", int: 90, spi: 89, sp: 408, hit: 59, twohand: true },
        { id: 37360, title: "Staff of Draconic Combat", int: 90, spi: 69, sp: 408, haste: 88, twohand: true },
        // prebis
        { id: 45085, title: "Titansteel Spellblade", sp: 408, crit: 53, hit: 30 },
        { id: 44173, title: "Flameheart Spell Scalpel", int: 33, sp: 355, crit: 25, hit: 34, q: "rare" },
        { id: 37377, title: "Netherbreath Spellblade", int: 32, spi: 26, sp: 355, crit: 34, q: "rare" },
        { id: 37721, title: "Cursed Lich Blade", int: 32, spi: 24, sp: 355, hit: 34, q: "rare" },
        { id: 37060, title: "Jeweled Coronation Sword", int: 29, spi: 23, sp: 314, crit: 30, q: "rare" },
        { id: 37384, title: "Staff of Wayward Principles", int: 77, spi: 56, sp: 355, haste: 78, twohand: true, q: "rare" },
        { id: 37617, title: "Staff of Sinister Claws", int: 77, spi: 51, sp: 355, haste: 78, twohand: true, q: "rare" },
        { id: 41821, title: "Chilly Slobberknocker", int: 62, sp: 281, hit: 50, haste: 47, twohand: true, q: "rare" },
        { id: 44748, title: "Stave of Youthful Sorrow", int: 53, sp: 279, crit: 67, hit: 44, twohand: true, q: "rare" },
        // tbc
        { id: 34182, title: "Grand Magister's Staff of Torrents", int: 52, sp: 266, crit: 49, hit: 50, twohand: true, sockets: ["y", "y", "y"], bonus: { sp: 5 } },
        { id: 34336, title: "Sunflare", int: 20, sp: 292, crit: 30, haste: 23 },
    ],
    off_hand: [
        // naxx
        { id: 40192, title: "Accursed Spine", int: 41, spi: 32, sp: 65, crit: 43 },
        { id: 39766, title: "Matriarch's Spawn", int: 41, spi: 43, sp: 66, haste: 32 },
        { id: 40273, title: "Surplus Limb", int: 38, sp: 65, hit: 32, haste: 41 },
        { id: 40350, title: "Urn of Lost Memories", int: 32, sp: 66, crit: 41, mp5: 21 },
        { id: 39199, title: "Watchful Eye", int: 38, spi: 36, sp: 59, hit: 28 },
        { id: 39311, title: "Scepter of Murmuring Spirits", int: 34, sp: 59, crit: 38, mp5: 16 },
        // tbc
        { id: 34179, title: "Heart of the Pit", int: 21, sp: 39, haste: 32 },
    ],
    ranged: [
        // naxx
        { id: 39712, title: "Gemmed Wand of the Nerubians", int: 22, sp: 37, hit: 18, haste: 22 },
        { id: 40284, title: "Plague Igniter", int: 21, spi: 20, sp: 37, crit: 24 },
        { id: 40245, title: "Fading Glow", int: 25, sp: 37, haste: 18, mp5: 11 },
        { id: 40335, title: "Touch of Horror", int: 17, sp: 37, crit: 16, mp5: 15 },
        { id: 39426, title: "Wand of the Archlich", int: 21, spi: 24, sp: 37, haste: 20 },
        { id: 39473, title: "Contortion", int: 20, sp: 33, crit: 15, mp5: 10 },
        // prebis
        { id: 37238, title: "Rod of the Fallen Monarch", int: 21, sp: 33, crit: 27 },
        { id: 37619, title: "Wand of Ahn'kahet", int: 20, spi: 27, sp: 33 },
        // prebis
        { id: 37177, title: "Wand of the San'layn", sp: 21, hit: 14, haste: 34, q: "rare" },
        { id: 37626, title: "Wand of Sseratus", int: 18, spi: 24, sp: 28, q: "rare" },
        { id: 44108, title: "Shinygem Rod", sp: 26, crit: 16, q: "rare" },
        { id: 44214, title: "Purifying Torch", sp: 26, mp5: 10, q: "rare" },
        { id: 34347, title: "Wand of the Demonsoul", int: 10, sp: 22, haste: 18, sockets: ["y"], bonus: { sp: 2 } },
    ],
    head: [
        // icc
        { id: 51281, itemset: ids.T10_SET, title: "Sanctified Bloodmage Hood", int: 139, sp: 186, crit: 122, haste: 98, sockets: ["m", "b"], bonus: {sp: 9}, phase: 4, phase: 4 },
        { id: 51158, itemset: ids.T10_SET, title: "Sanctified Bloodmage Hood", int: 123, sp: 162, crit: 108, haste: 84, sockets: ["m", "b"], bonus: {sp: 9}, phase: 4, phase: 4 },
        { id: 50276, itemset: ids.T10_SET, title: "Bloodmage Hood", int: 109, sp: 140, crit: 96, haste: 72, sockets: ["m", "b"], bonus: {sp: 9}, phase: 4, phase: 4 },
        // totc
        { id: 47764, itemset: ids.T9_SET, title: "Sunstrider's Hood of Triumph", int: 116, sp: 151, hit: 86, haste: 94, sockets: ["m", "b"], bonus: {sp: 9}, phase: 3, phase: 3 },
        { id: 47771, itemset: ids.T9_SET, title: "Sunstrider's Hood of Triumph", int: 103, sp: 131, hit: 74, haste: 82, sockets: ["m", "b"], bonus: {sp: 9}, phase: 3, phase: 3 },
        { id: 47774, itemset: ids.T9_SET, title: "Sunstrider's Hood of Conquest", int: 92, sp: 113, hit: 64, haste: 72, sockets: ["m", "b"], bonus: {sp: 9}, phase: 3, phase: 3 },
        // ulduar
        { id: 46129, itemset: ids.T8_SET, title: "Conqueror's Kirin Tor Hood", int: 87, spi: 66, sp: 113, hit: 69, sockets: ["m", "r"], bonus: {sp: 9}, phase: 2 },
        { id: 45365, itemset: ids.T8_SET, title: "Valorous Kirin Tor Hood", int: 81, spi: 61, sp: 105, hit: 64, sockets: ["m", "r"], bonus: {sp: 9}, phase: 2 },
        // eoe
        { id: 40562, title: "Hood of Rationality", int: 63, spi: 81, sp: 120, crit: 50, sockets: ["m", "b"] },
        // naxx
        { id: 40416, itemset: ids.T7_SET, title: "Valorous Frostfire Circlet", int: 77, spi: 66, sp: 98, crit: 51, sockets: ["m", "r"], bonus: {crit: 8} },
        { id: 39491, itemset: ids.T7_SET, title: "Heroes' Frostfire Circlet", int: 64, spi: 60, sp: 87, crit: 43, sockets: ["m", "r"], bonus: {crit: 8} },
        { id: 40287, title: "Cowl of Vanity", int: 79, spi: 63, sp: 99, haste: 40, sockets: ["m", "r"], bonus: {haste: 8} },
        { id: 39732, title: "Faerlina's Madness", int: 77, spi: 72, sp: 118, hit: 58 },
        { id: 40339, title: "Gothik's Cowl", int: 72, sp: 99, crit: 42, haste: 34, sockets: ["m", "y"], bonus: {crit: 8} },
        { id: 40247, title: "Cowl of Innocent Delight", int: 77, spi: 58, sp: 118, mp5: 25 },
        { id: 39409, title: "Cowl of Winged Fear", int: 60, spi: 45, sp: 87, crit: 36, sockets: ["m", "y"], bonus: {crit: 8} },
        { id: 39295, title: "Cowl of Sheet Lightning", int: 68, sp: 85, haste: 48, mp5: 19, sockets: ["m", "y"], bonus: {sp: 9} },
        // pvp
        { id: 51465, itemset: ids.GLADIATOR_SET, title: "Wrathful Gladiator's Silk Cowl", int: 87, sp: 182, crit: 98, sockets: ["m", "r"], phase: 4 },
        { id: 41947, itemset: ids.GLADIATOR_SET, title: "Relentless Gladiator's Silk Cowl", int: 73, sp: 149, crit: 80, sockets: ["m", "r"], phase: 3 },
        { id: 41946, itemset: ids.GLADIATOR_SET, title: "Furious Gladiator's Silk Cowl", int: 60, sp: 123, crit: 64, sockets: ["m", "r"], phase: 2 },
        { id: 41945, itemset: ids.GLADIATOR_SET, title: "Deadly Gladiator's Silk Cowl", int: 50, sp: 91, crit: 51, sockets: ["m", "r"] },
        { id: 41944, itemset: ids.GLADIATOR_SET, title: "Hateful Gladiator's Silk Cowl", int: 45, sp: 87, crit: 44, sockets: ["m", "r"] },
        { id: 41943, itemset: ids.GLADIATOR_SET, title: "Savage Gladiator's Silk Cowl", int: 39, sp: 73, crit: 36, sockets: ["m", "r"], q: "rare" },
        // prebis
        { id: 42553, title: "Visage Liquification Goggles", int: 60, sp: 87, crit: 73, sockets: ["m", "y"], bonus: {crit: 8} },
        { id: 37294, title: "Crown of Unbridled Magic", int: 62, spi: 52, sp: 81, sockets: ["m", "y"], bonus: {crit: 8}, q: "rare" },
        { id: 37594, title: "Elder Headpiece", int: 77, spi: 55, sp: 91, q: "rare" },
        { id: 37684, title: "Forgotten Shadow Hood", int: 44, spi: 66, sp: 82, sockets: ["m", "b"], bonus: {haste: 8}, q: "rare" },
        { id: 37715, title: "Cowl of the Dire Troll", int: 55, spi: 78, sp: 91, q: "rare" },
        { id: 41984, title: "Hat of Wintry Doom", int: 46, sp: 53, hit: 44, sockets: ["m", "r"], bonus: {int: 8}, q: "rare" },
        // tbc
        { id: 34340, title: "Dark Conjuror's Collar", int: 42, sp: 75, crit: 38, haste: 30, sockets: ["m", "b"], bonus: { sp: 5 } },
        { id: 34405, title: "Helm of Arcane Purity", int: 42, spi: 38, sp: 75, crit: 30, sockets: ["m", "r"], bonus: { sp: 5 } },
        { id: 31056, itemset: ids.T6_SET, title: "Cowl of the Tempest", int: 40, spi: 28, sp: 62, crit: 29, hit: 13, sockets: ["m", "y"] },
    ],
    neck: [
        // eoe
        { id: 40486, title: "Necklace of the Glittering Chamber", int: 34, spi: 38, sp: 69, crit: 37 },
        // os
        { id: 40427, title: "Circle of Arcane Streams", int: 37, sp: 53, crit: 35, hit: 31 },
        // naxx
        { id: 40064, title: "Thunderstorm Amulet", int: 43, spi: 38, sp: 65, hit: 28 },
        { id: 40412, title: "Ousted Bead Necklace", int: 38, spi: 56, sp: 50, crit: 28 },
        { id: 40374, title: "Cosmic Lights", int: 38, sp: 65, crit: 37, haste: 41 },
        { id: 40071, title: "Chains of Adoration", int: 43, sp: 66, haste: 32, mp5: 20 },
        { id: 40378, title: "Ceaseless Pity", int: 41, sp: 66, crit: 43, mp5: 16 },
        { id: 39282, title: "Bone-Linked Amulet", int: 33, spi: 25, sp: 57, crit: 50 },
        { id: 39392, title: "Veiled Amulet of Life", int: 38, spi: 34, sp: 59, haste: 33 },
        { id: 39232, title: "Pendant of Lost Vocations", int: 41, sp: 57, haste: 36, mp5: 15 },
        // prebis
        { id: 42647, title: "Titanium Spellshock Necklace", int: 36, sp: 49, crit: 41, sockets: ["r"], bonus: {int: 4} },
        { id: 43285, title: "Amulet of the Spell Flinger", int: 31, sp: 50, crit: 42, q: "rare" },
        { id: 37595, title: "Necklace of Taldaram", int: 28, sp: 50, hit: 43, q: "rare" },
        { id: 37141, title: "Amulet of Dazzling Light", int: 34, sp: 50, mp5: 18, q: "rare" },
        { id: 37290, title: "Dragon Prow Amulet", int: 33, spi: 43, sp: 50, q: "rare" },
        { id: 37683, title: "Necromancer's Amulet", int: 41, spi: 42, sp: 50, q: "rare" },
        { id: 43404, title: "Zuramat's Necklace", int: 28, spi: 29, sp: 50, q: "rare" },
        // tbc
        { id: 34359, title: "Pendant of Sunfire", int: 19, sp: 34, crit: 25, haste: 25, sockets: ["y"], bonus: { sp: 2 } },
        { id: 34204, title: "Amulet of Unfettered Magics", int: 17, sp: 39, hit: 15, haste: 32 },
    ],
    shoulder: [
        // icc
        { id: 51284, itemset: ids.T10_SET, title: "Sanctified Bloodmage Shoulderpads", int: 103, sp: 150, crit: 90, haste: 82, sockets: ["y"], bonus: {sp: 5}, phase: 4 },
        { id: 51155, itemset: ids.T10_SET, title: "Sanctified Bloodmage Shoulderpads", int: 92, sp: 132, crit: 80, haste: 72, sockets: ["y"], bonus: {sp: 5}, phase: 4 },
        { id: 50279, itemset: ids.T10_SET, title: "Bloodmage Shoulderpads", int: 81, sp: 116, crit: 71, haste: 63, sockets: ["y"], bonus: {sp: 5}, phase: 4 },
        // totc
        { id: 47767, itemset: ids.T9_SET, title: "Sunstrider's Shoulderpads of Triumph", int: 86, sp: 124, crit: 68, haste: 76, sockets: ["b"], bonus: {sp: 5}, phase: 3 },
        { id: 47768, itemset: ids.T9_SET, title: "Sunstrider's Shoulderpads of Triumph", int: 77, sp: 109, crit: 59, haste: 67, sockets: ["b"], bonus: {sp: 5}, phase: 3 },
        { id: 47777, itemset: ids.T9_SET, title: "Sunstrider's Shoulderpads of Conquest", int: 68, sp: 96, crit: 52, haste: 60, sockets: ["b"], bonus: {sp: 5}, phase: 3 },
        // ulduar
        { id: 46134, itemset: ids.T8_SET, title: "Conqueror's Kirin Tor Shoulderpads", int: 65, spi: 33, sp: 98, haste: 62, sockets: ["y"], bonus: {int: 4}, phase: 2 },
        { id: 45369, itemset: ids.T8_SET, title: "Valorous Kirin Tor Shoulderpads", int: 60, spi: 30, sp: 91, haste: 57, sockets: ["y"], bonus: {int: 4}, phase: 2 },
        // eoe
        { id: 40555, title: "Mantle of Dissemination", int: 59, spi: 52, sp: 98, crit: 60 },
        // naxx
        { id: 40419, itemset: ids.T7_SET, title: "Valorous Frostfire Shoulderpads", int: 57, sp: 78, crit: 53, haste: 35, sockets: ["y"], bonus: {haste: 4} },
        { id: 39494, itemset: ids.T7_SET, title: "Heroes' Frostfire Shoulderpads", int: 50, sp: 68, crit: 48, haste: 30, sockets: ["y"], bonus: {haste: 4} },
        { id: 40286, title: "Mantle of the Corrupted", int: 50, sp: 88, hit: 37, haste: 57 },
        { id: 40351, title: "Mantle of the Fatigued Sage", int: 55, spi: 57, sp: 78, hit: 35, sockets: ["b"], bonus: {sp: 5} },
        { id: 39719, title: "Mantle of the Locusts", int: 39, spi: 67, sp: 78, haste: 39, sockets: ["r"], bonus: {int: 4} },
        { id: 40289, title: "Sympathetic Amice", int: 57, sp: 88, crit: 50, mp5: 19 },
        { id: 39310, title: "Mantle of the Extensive Mind", int: 53, sp: 77, haste: 44, mp5: 23 },
        { id: 39284, title: "Miasma Mantle", int: 48, spi: 43, sp: 77, crit: 45 },
        // pvp
        { id: 51467, itemset: ids.GLADIATOR_SET, title: "Wrathful Gladiator's Silk Amice", int: 64, sp: 140, crit: 77, sockets: ["y"], phase: 4 },
        { id: 41966, itemset: ids.GLADIATOR_SET, title: "Relentless Gladiator's Silk Amice", int: 54, sp: 116, crit: 63, sockets: ["y"], phase: 3 },
        { id: 41965, itemset: ids.GLADIATOR_SET, title: "Furious Gladiator's Silk Amice", int: 45, sp: 96, crit: 51, sockets: ["y"], phase: 2 },
        { id: 41964, itemset: ids.GLADIATOR_SET, title: "Deadly Gladiator's Silk Amice", int: 37, sp: 76, crit: 42, sockets: ["y"] },
        { id: 41963, itemset: ids.GLADIATOR_SET, title: "Hateful Gladiator's Silk Amice", int: 33, sp: 68, crit: 36, sockets: ["y"] },
        { id: 41962, itemset: ids.GLADIATOR_SET, title: "Savage Gladiator's Silk Amice", int: 28, sp: 59, crit: 31, sockets: ["y"], q: "rare" },
        // prebis
        { id: 37196, title: "Runecaster's Mantle", int: 47, spi: 44, sp: 68, sockets: ["y"], bonus: {sp: 5}, q: "rare" },
        { id: 37655, title: "Mantle of the Tribunal", int: 59, sp: 68, haste: 42, q: "rare" },
        { id: 37673, title: "Dark Runic Mantle", int: 44, sp: 59, haste: 50, sockets: ["r"], bonus: {spi: 4}, q: "rare" },
        { id: 37691, title: "Mantle of Deceit", int: 54, spi: 42, sp: 68, q: "rare" },
        // tbc
        { id: 34210, title: "Amice of the Convoker", int: 28, sp: 53, crit: 22, haste: 30, sockets: ["r", "y"], bonus: { sp: 4 } },
        { id: 34393, title: "Shoulderpads of Knowledge's Pursuit", int: 33, spi: 22, sp: 53, crit: 26, sockets: ["r", "y"], bonus: { sp: 4 } },
        { id: 31059, itemset: ids.T6_SET, title: "Mantle of the Tempest", int: 27, spi: 21, sp: 46, crit: 21, sockets: ["y", "b"], bonus: { sp: 4 } },
    ],
    back: [
        // naxx
        { id: 40405, title: "Cape of the Unworthy Wizard", int: 42, spi: 49, sp: 74, crit: 42 },
        { id: 40254, title: "Cloak of Averted Crisis", int: 41, sp: 66, crit: 38, mp5: 19 },
        { id: 40253, title: "Shawl of the Old Maid", int: 43, spi: 38, sp: 66, crit: 37 },
        { id: 40251, title: "Shroud of Luminosity", int: 43, sp: 65, crit: 38, haste: 28 },
        { id: 39241, title: "Dark Shroud of the Scourge", int: 38, spi: 36, sp: 60, hit: 28 },
        { id: 39415, title: "Shroud of the Citadel", int: 36, sp: 58, crit: 38, haste: 25 },
        { id: 39425, title: "Cloak of the Dying", int: 43, sp: 66, crit: 38, mp5: 19 },
        { id: 39272, title: "Drape of Surgery", int: 38, sp: 59, haste: 25, mp5: 18 },
        // prebis
        { id: 41610, title: "Deathchill Cloak", sp: 59, crit: 43, haste: 53 },
        { id: 41609, title: "Wispcloak", int: 36, sp: 59, mp5: 25 },
        { id: 37291, title: "Ancient Dragon Spirit Cape", int: 29, sp: 51, haste: 42, q: "rare" },
        { id: 37630, title: "Shroud of Moorabi", int: 43, spi: 32, sp: 51, q: "rare" },
        { id: 37799, title: "Reanimator's Cloak", int: 31, spi: 38, sp: 41, sockets: ["r"], bonus: {int: 4}, q: "rare" },
        { id: 43283, title: "Subterranean Waterfall Shroud", int: 26, spi: 54, sp: 43, q: "rare" },
        { id: 44242, title: "Dark Soldier Cape", int: 38, sp: 46, hit: 29, q: "rare" },
        { id: 44167, title: "Shroud of Dedicated Research", int: 29, sp: 46, haste: 38, q: "rare" },
        // tbc
        { id: 34242, title: "Tattered Cape of Antonidas", int: 26, sp: 42, haste: 32, sockets: ["r"], bonus: { sp: 2 } },
    ],
    chest: [
        // icc
        { id: 51283, itemset: ids.T10_SET, title: "Sanctified Bloodmage Robe", int: 139, sp: 195, crit: 106, haste: 122, sockets: ["r", "b"], bonus: {sp: 7}, phase: 4 },
        { id: 51156, itemset: ids.T10_SET, title: "Sanctified Bloodmage Robe", int: 123, sp: 171, crit: 92, haste: 108, sockets: ["r", "b"], bonus: {sp: 7}, phase: 4 },
        { id: 50278, itemset: ids.T10_SET, title: "Bloodmage Robe", int: 109, sp: 149, crit: 80, haste: 96, sockets: ["r", "b"], bonus: {sp: 7}, phase: 4 },
        // totc
        { id: 47766, itemset: ids.T9_SET, title: "Sunstrider's Robe of Triumph", int: 116, spi: 102, sp: 160, hit: 86, sockets: ["b", "r"], bonus: {sp: 7}, phase: 3 },
        { id: 47769, itemset: ids.T9_SET, title: "Sunstrider's Robe of Triumph", int: 103, spi: 90, sp: 140, hit: 74, sockets: ["b", "r"], bonus: {sp: 7}, phase: 3 },
        { id: 47776, itemset: ids.T9_SET, title: "Sunstrider's Robe of Conquest", int: 92, spi: 80, sp: 122, hit: 64, sockets: ["b", "r"], bonus: {sp: 7}, phase: 3 },
        // ulduar
        { id: 46130, itemset: ids.T8_SET, title: "Conqueror's Kirin Tor Tunic", int: 81, spi: 50, sp: 132, crit: 82, sockets: ["b", "y"], bonus: {crit: 6}, phase: 2 },
        { id: 45368, itemset: ids.T8_SET, title: "Valorous Kirin Tor Tunic", int: 76, spi: 46, sp: 124, crit: 76, sockets: ["b", "y"], bonus: {crit: 6}, phase: 2 },
        // eoe
        { id: 40194, title: "Blanketing Robes of Snow", int: 71, spi: 66, sp: 132, mp5: 16, sockets: ["b"], bonus: {haste: 4} },
        { id: 40526, title: "Gown of the Spell-Weaver", int: 70, sp: 110, crit: 50, hit: 72, sockets: ["y"], bonus: {crit: 3} },
        // naxx
        { id: 40418, itemset: ids.T7_SET, title: "Valorous Frostfire Robe", int: 77, spi: 66, sp: 99, crit: 61, sockets: ["r", "y"], bonus: {hit: 6} },
        { id: 39492, itemset: ids.T7_SET, title: "Heroes' Frostfire Robe", int: 60, spi: 60, sp: 87, crit: 51, sockets: ["r", "y"], bonus: {hit: 6} },
        { id: 40062, title: "Digested Silken Robes", int: 69, spi: 63, sp: 118, crit: 77 },
        { id: 40234, title: "Heigan's Putrid Vestments", int: 77, sp: 99, hit: 49, haste: 51, sockets: ["b", "y"], bonus: {sp: 7} },
        { id: 40602, title: "Robes of Mutation", int: 77, spi: 71, sp: 99, crit: 42, sockets: ["r", "y"], bonus: {spi: 6} },
        { id: 40381, title: "Sympathy", int: 77, spi: 58, sp: 99, mp5: 28, sockets: ["y", "b"], bonus: {sp: 7} },
        { id: 39396, title: "Gown of Blaumeux", int: 68, sp: 105, hit: 45, haste: 59 },
        { id: 39242, title: "Robes of Hoarse Breaths", int: 73, sp: 104, haste: 42, mp5: 33 },
        // pvp
        { id: 51463, itemset: ids.GLADIATOR_SET, title: "Wrathful Gladiator's Silk Raiment", int: 87, sp: 182, crit: 98, sockets: ["r", "y"], phase: 4 },
        { id: 41954, itemset: ids.GLADIATOR_SET, title: "Relentless Gladiator's Silk Raiment", int: 73, sp: 149, crit: 80, sockets: ["r", "y"], phase: 3 },
        { id: 41953, itemset: ids.GLADIATOR_SET, title: "Furious Gladiator's Silk Raiment", int: 60, sp: 123, crit: 64, sockets: ["r", "y"], phase: 2 },
        { id: 41951, itemset: ids.GLADIATOR_SET, title: "Deadly Gladiator's Silk Raiment", int: 50, sp: 98, crit: 51, sockets: ["r", "y"] },
        { id: 41950, itemset: ids.GLADIATOR_SET, title: "Hateful Gladiator's Silk Raiment", int: 45, sp: 87, crit: 44, sockets: ["r", "y"] },
        { id: 41949, itemset: ids.GLADIATOR_SET, title: "Savage Gladiator's Silk Raiment", int: 39, sp: 73, crit: 36, sockets: ["r", "y"], q: "rare" },
        // prebis
        { id: 42102, title: "Spellweave Robe", int: 64, spi: 52, sp: 104, haste: 90 },
        { id: 42101, title: "Ebonweave Robe", int: 89, sp: 105, hit: 68 },
        { id: 42100, title: "Moonshroud Robe", int: 68, spi: 89, sp: 105 },
        { id: 44180, title: "Robes of Crackling Flame", int: 73, sp: 104, haste: 42, mp5: 33 },
        { id: 41554, itemset: ids.DUSKWEAVE_SET, title: "Black Duskweave Robe", int: 46, sp: 80, haste: 70, q: "rare" },
        { id: 37222, title: "Egg Sac Robes", int: 61, sp: 73, haste: 62, sockets: ["r", "y"], bonus: {int: 6}, q: "rare" },
        { id: 37258, title: "Drakewing Raiments", int: 69, sp: 73, haste: 59, sockets: ["y", "r"], bonus: {int: 6}, q: "rare" },
        { id: 37641, title: "Arcane Flame Altar-Garb", int: 77, sp: 91, crit: 60, q: "rare" },
        { id: 37851, title: "Ornate Woolen Stola", int: 74, sp: 91, crit: 60, q: "rare" },
        { id: 43401, title: "Water-Drenched Robe", int: 60, sp: 73, hit: 62, sockets: ["b", "r"], bonus: {hit: 6}, q: "rare" },
        // tbc
        { id: 34364, title: "Sunfire Robe", int: 34, sp: 71, crit: 40, haste: 40, sockets: ["r", "r", "r"], bonus: { sp: 5 } },
        { id: 34399, title: "Robes of Ghostly Hatred", int: 40, spi: 32, sp: 71, crit: 26, haste: 27, sockets: ["r", "r", "y"], bonus: { sp: 5 } },
        { id: 34232, title: "Fel Conquerer Raiments", int: 41, sp: 71, crit: 24, haste: 33, sockets: ["r", "y", "y"], bonus: { sp: 5 } },
        { id: 31057, itemset: ids.T6_SET, title: "Robes of the Tempest", int: 39, spi: 31, sp: 62, crit: 23, hit: 13, sockets: ["y", "y", "b"], bonus: { sp: 5 } },
    ],
    wrist: [
        // naxx
        { id: 40198, title: "Bands of Impurity", int: 39, spi: 37, sp: 56, crit: 34, sockets: ["r"], bonus: {spi: 4} },
        { id: 40325, title: "Bindings of the Expansive Mind", int: 38, sp: 65, crit: 43, hit: 28 },
        { id: 40338, title: "Bindings of Yearning", int: 43, sp: 66, crit: 41, mp5: 14 },
        { id: 39731, title: "Punctilious Bindings", int: 43, spi: 39, sp: 66, haste: 37 },
        { id: 39252, title: "Preceptor's Bindings", int: 38, spi: 34, sp: 59, hit: 33 },
        { id: 39390, title: "Resurgent Phantom Bindings", int: 32, spi: 38, sp: 59, haste: 33 },
        // prebis
        { id: 37361, title: "Cuffs of Winged Levitation", int: 38, spi: 32, sp: 59, haste: 33 },
        { id: 37884, title: "Azure Cloth Bindings", int: 38, sp: 59, crit: 50 },
        { id: 41555, itemset: ids.DUSKWEAVE_SET, title: "Black Duskweave Wristwraps", int: 27, sp: 46, haste: 38, q: "rare" },
        { id: 37370, title: "Cuffs of the Trussed Hall", int: 31, spi: 43, sp: 50, q: "rare" },
        { id: 37613, title: "Flame Sphere Bindings", int: 45, sp: 51, mp5: 15, q: "rare" },
        { id: 37725, title: "Savage Wound Wrap", int: 32, sp: 51, haste: 43, q: "rare" },
        { id: 44200, title: "Ancestral Sinew Wristguards", int: 33, spi: 27, sp: 50, sockets: ["b"], bonus: {int: 4}, q: "rare" },
        // tbc
        { id: 34447, itemset: ids.T6_SET, title: "Bracers of the Tempest", int: 17, spi: 14, sp: 39, crit: 11, haste: 26, sockets: ["r"], bonus: { crit: 2 } },
    ],
    hands: [
        // icc
        { id: 51280, itemset: ids.T10_SET, title: "Sanctified Bloodmage Gloves", int: 103, sp: 150, crit: 90, hit: 82, sockets: ["b"], bonus: {sp: 5}, phase: 4 },
        { id: 51159, itemset: ids.T10_SET, title: "Sanctified Bloodmage Gloves", int: 92, sp: 132, crit: 80, hit: 72, sockets: ["b"], bonus: {sp: 5}, phase: 4 },
        { id: 50275, itemset: ids.T10_SET, title: "Bloodmage Gloves", int: 81, sp: 116, crit: 71, hit: 63, sockets: ["b"], bonus: {sp: 5}, phase: 4 },
        // totc
        { id: 47763, itemset: ids.T9_SET, title: "Sunstrider's Gauntlets of Triumph", int: 86, sp: 124, crit: 76, haste: 68, sockets: ["r"], bonus: {crit: 4}, phase: 3 },
        { id: 47772, itemset: ids.T9_SET, title: "Sunstrider's Gauntlets of Triumph", int: 77, sp: 109, crit: 67, haste: 59, sockets: ["r"], bonus: {crit: 4}, phase: 3 },
        { id: 47773, itemset: ids.T9_SET, title: "Sunstrider's Gauntlets of Conquest", int: 68, sp: 96, crit: 60, haste: 52, sockets: ["r"], bonus: {crit: 4}, phase: 3 },
        // ulduar
        { id: 46132, itemset: ids.T8_SET, title: "Conqueror's Kirin Tor Gauntlets", int: 62, sp: 100, hit: 60, haste: 47, sockets: ["y"], bonus: {hit: 4}, phase: 2 },
        { id: 46131, itemset: ids.T8_SET, title: "Valorous Kirin Tor Gauntlets", int: 57, sp: 93, hit: 55, haste: 44, sockets: ["y"], bonus: {hit: 4}, phase: 2 },
        // os
        { id: 40415, itemset: ids.T7_SET, title: "Valorous Frostfire Gloves", int: 57, sp: 69, crit: 53, hit: 38, sockets: ["r"], bonus: {int: 4} },
        { id: 39495, itemset: ids.T7_SET, title: "Heroes' Frostfire Gloves", int: 51, sp: 59, crit: 48, hit: 33, sockets: ["r"], bonus: {int: 4} },
        // naxx
        { id: 40380, title: "Gloves of Grandeur", int: 57, sp: 88, crit: 43, hit: 38 },
        { id: 40197, title: "Gloves of the Fallen Wizard", int: 50, spi: 74, sp: 88, hit: 25 },
        { id: 39733, title: "Gloves of Token Respect", int: 57, spi: 53, sp: 88, haste: 43 },
        { id: 40303, title: "Wraps of the Persecuted", int: 57, sp: 88, crit: 49, mp5: 25 },
        { id: 39192, title: "Gloves of Dark Gestures", int: 52, spi: 50, sp: 68, hit: 25, sockets: ["r"], bonus: {spi: 4} },
        { id: 39285, title: "Handgrips of Turmoil", int: 48, sp: 68, haste: 44, mp5: 18, sockets: ["y"] },
        // pvp
        { id: 51464, itemset: ids.GLADIATOR_SET, title: "Wrathful Gladiator's Silk Handguards", int: 64, sp: 140, crit: 77, sockets: ["b"], bonus: { sp: 5 }, phase: 4 },
        { id: 41972, itemset: ids.GLADIATOR_SET, title: "Relentless Gladiator's Silk Handguards", int: 54, sp: 116, crit: 63, sockets: ["b"], bonus: { sp: 5 }, phase: 3 },
        { id: 41971, itemset: ids.GLADIATOR_SET, title: "Furious Gladiator's Silk Handguards", int: 45, sp: 96, crit: 39, sockets: ["b"], bonus: { sp: 5 }, phase: 2 },
        { id: 41970, itemset: ids.GLADIATOR_SET, title: "Deadly Gladiator's Silk Handguards", int: 37, sp: 78, crit: 32, sockets: ["b"], bonus: { sp: 5 } },
        { id: 41969, itemset: ids.GLADIATOR_SET, title: "Hateful Gladiator's Silk Handguards", int: 33, sp: 68, crit: 27, sockets: ["b"], bonus: { sp: 5 } },
        { id: 41968, itemset: ids.GLADIATOR_SET, title: "Savage Gladiator's Silk Handguards", int: 28, sp: 59, crit: 22, sockets: ["b"], bonus: { sp: 5 }, q: "rare" },
        // prebis
        { id: 42113, title: "Spellweave Gloves", int: 48, spi: 39, sp: 77, haste: 65 },
        { id: 42111, title: "Ebonweave Gloves", int: 66, sp: 77, hit: 51 },
        { id: 42103, title: "Moonshroud Gloves", int: 51, spi: 67, sp: 76 },
        { id: 37172, title: "Gloves of Glistening Runes", int: 51, spi: 44, sp: 68, crit: 36, sockets: ["r"], bonus: {crit: 4} },
        { id: 37798, title: "Overlook Handguards", int: 51, spi: 66, sp: 77 },
        { id: 37687, title: "Gloves of Distorted Time", int: 44, spi: 53, sp: 59, sockets: ["y"], q: "rare" },
        { id: 37153, title: "Gloves of the Crystal Gardener", int: 44, spi: 58, sp: 68, q: "rare" },
        { id: 37825, title: "Traditionally Dyed Handguards", int: 53, sp: 59, haste: 44, sockets: ["y"], bonus: {haste: 4}, q: "rare" },
        { id: 37843, title: "Giant-Hair Woven Gloves", int: 58, sp: 68, crit: 44, q: "rare" },
        { id: 43287, title: "Silken Bridge Handwraps", int: 41, sp: 59, haste: 50, sockets: ["y"], bonus: {int: 4}, q: "rare" },
        { id: 44256, title: "Sterile Flesh-Handling Gloves", int: 58, spi: 41, sp: 68, q: "rare" },
        { id: 44116, title: "Muddied Crimson Gloves", int: 40, spi: 51, sp: 60, q: "rare" },
        { id: 42095, title: "Light Blessed Mittens", int: 37, spi: 52, sp: 59, q: "rare" },
        // tbc
        { id: 34344, title: "Handguards of Defiled Worlds", int: 32, sp: 47, hit: 27, haste: 36, sockets: ["y", "r"], bonus: { sp: 4 } },
        { id: 34406, title: "Gloves of Tyri's Power", int: 32, spi: 27, sp: 47, haste: 36, sockets: ["r", "y"], bonus: { sp: 4 } },
        { id: 34366, title: "Sunfire Handwraps", int: 30, sp: 53, crit: 37, sockets: ["r", "r"], bonus: { sp: 4 } },
        { id: 31055, itemset: ids.T6_SET, title: "Gloves of the Tempest", int: 26, spi: 21, sp: 46, crit: 19, hit: 20, sockets: ["y"], bonus: { sp: 2 } },
    ],
    waist: [
        // eoe
        { id: 40561, title: "Leash of Heedless Magic", int: 60, spi: 48, sp: 103, haste: 62 },
        // naxx
        { id: 39735, title: "Belt of False Dignity", int: 57, spi: 55, sp: 88, crit: 43 },
        { id: 40301, title: "Cincture of Polarity", int: 57, sp: 88, hit: 43, haste: 53 },
        { id: 40271, title: "Sash of Solitude", int: 58, spi: 37, sp: 78, mp5: 23, sockets: ["b"], bonus: {sp: 5} },
        { id: 39721, title: "Sash of the Parlor", int: 57, sp: 88, crit: 37, mp5: 28 },
        { id: 39190, title: "Agonal Sash", int: 52, spi: 48, sp: 76, haste: 38 },
        { id: 39216, title: "Sash of Mortal Desire", int: 51, spi: 38, sp: 76, crit: 48 },
        { id: 44302, title: "Belt of Dark Mending", int: 50, sp: 77, haste: 55 },
        { id: 37408, title: "Girdle of Bane", int: 51, spi: 38, sp: 77, hit: 48 },
        { id: 37242, title: "Sash of the Servant", int: 52, sp: 76, crit: 64 },
        // prebis
        { id: 44309, title: "Sash of Jordan", int: 55, spi: 55, sp: 66, sockets: ["r"], bonus: {sp: 5} },
        { id: 37680, title: "Belt of Unified Souls", int: 51, sp: 68, hit: 42, q: "rare" },
        { id: 37637, title: "Living Mojo Belt", int: 54, sp: 59, crit: 42, sockets: ["r"], bonus: {crit: 4}, q: "rare" },
        { id: 37289, title: "Sash of Phantasmal Images", int: 44, spi: 57, sp: 68, q: "rare" },
        { id: 37850, title: "Flowing Sash of Order", int: 44, spi: 38, sp: 59, hit: 31, sockets: ["r"], q: "rare" },
        { id: 44104, title: "Fishy Cinch", int: 37, spi: 51, sp: 60, q: "rare" },
        { id: 44196, title: "Sash of the Wizened Wyrm", int: 51, sp: 60, hit: 40, q: "rare" },
        { id: 41986, title: "Deep Frozen Cord", int: 50, sp: 61, crit: 36, q: "rare" },
        // tbc
        { id: 34557, itemset: ids.T6_SET, title: "Belt of the Tempest", int: 29, spi: 20, sp: 50, crit: 17, hit: 14, haste: 29, sockets: ["y"], bonus: { sp: 2 } },
    ],
    legs: [
        // icc
        { id: 51282, itemset: ids.T10_SET, title: "Sanctified Bloodmage Leggings", int: 139, sp: 195, crit: 122, hit: 106, sockets: ["b", "y"], bonus: {sp: 7}, phase: 4 },
        { id: 51157, itemset: ids.T10_SET, title: "Sanctified Bloodmage Leggings", int: 123, sp: 171, crit: 108, hit: 92, sockets: ["b", "y"], bonus: {sp: 7}, phase: 4 },
        { id: 50277, itemset: ids.T10_SET, title: "Bloodmage Leggings", int: 109, sp: 149, crit: 96, hit: 80, sockets: ["b", "y"], bonus: {sp: 7}, phase: 4 },
        // totc
        { id: 47765, itemset: ids.T9_SET, title: "Sunstrider's Leggings of Triumph", int: 116, spi: 86, sp: 160, crit: 102, sockets: ["y", "y"], bonus: {sp: 7}, phase: 3 },
        { id: 47770, itemset: ids.T9_SET, title: "Sunstrider's Leggings of Triumph", int: 103, spi: 74, sp: 140, crit: 90, sockets: ["y", "y"], bonus: {sp: 7}, phase: 3 },
        { id: 47775, itemset: ids.T9_SET, title: "Sunstrider's Leggings of Conquest", int: 92, spi: 64, sp: 122, crit: 80, sockets: ["y", "y"], bonus: {sp: 7}, phase: 3 },
        // ulduar
        { id: 46133, itemset: ids.T8_SET, title: "Conqueror's Kirin Tor Leggings", int: 82, sp: 123, crit: 74, hit: 66, sockets: ["r", "b"], bonus: {crit: 6}, phase: 2 },
        { id: 45367, itemset: ids.T8_SET, title: "Valorous Kirin Tor Leggings", int: 76, sp: 115, crit: 68, hit: 62, sockets: ["r", "b"], bonus: {crit: 6}, phase: 2 },
        // eoe
        { id: 40560, title: "Leggings of the Wanton Spellcaster", int: 92, sp: 132, hit: 82, haste: 66 },
        // naxx
        { id: 40417, itemset: ids.T7_SET, title: "Valorous Frostfire Leggings", int: 77, sp: 99, hit: 43, haste: 67, sockets: ["r", "y"], bonus: {haste: 6} },
        { id: 39493, itemset: ids.T7_SET, title: "Heroes' Frostfire Leggings", int: 68, sp: 87, hit: 36, haste: 64, sockets: ["r", "y"], bonus: {haste: 6} },
        { id: 39720, title: "Leggings of Atrophy", int: 78, sp: 118, crit: 76, hit: 50 },
        { id: 40398, title: "Leggings of Mortal Arrogance", int: 85, spi: 71, sp: 115, crit: 57, sockets: ["r", "b"], bonus: {crit: 6} },
        { id: 40376, title: "Legwraps of the Defeated Dragon", int: 77, spi: 56, sp: 99, hit: 50, sockets: ["r", "b"], bonus: {hit: 6} },
        { id: 40060, title: "Distorted Limbs", int: 77, spi: 72, sp: 118, haste: 58 },
        { id: 39408, title: "Leggings of Sapphiron", int: 60, spi: 72, sp: 88, haste: 41, sockets: ["y", "r"], bonus: {spi: 6} },
        { id: 39309, title: "Leggings of the Instructor", int: 64, spi: 52, sp: 87, crit: 52, sockets: ["r", "b"], bonus: {crit: 6} },
        // pvp
        { id: 51466, itemset: ids.GLADIATOR_SET, title: "Wrathful Gladiator's Silk Trousers", int: 87, sp: 182, crit: 98, sockets: ["r", "b"], bonus: { sp: 7 }, phase: 4 },
        { id: 41960, itemset: ids.GLADIATOR_SET, title: "Relentless Gladiator's Silk Trousers", int: 73, sp: 149, crit: 80, sockets: ["r", "b"], bonus: { sp: 7 }, phase: 3 },
        { id: 41959, itemset: ids.GLADIATOR_SET, title: "Furious Gladiator's Silk Trousers", int: 60, sp: 123, crit: 64, sockets: ["r", "b"], bonus: { sp: 7 }, phase: 2 },
        { id: 41958, itemset: ids.GLADIATOR_SET, title: "Deadly Gladiator's Silk Trousers", int: 50, sp: 99, crit: 51, sockets: ["r", "b"], bonus: { sp: 7 } },
        { id: 41957, itemset: ids.GLADIATOR_SET, title: "Hateful Gladiator's Silk Trousers", int: 45, sp: 87, crit: 44, sockets: ["r", "b"], bonus: { sp: 7 } },
        { id: 41956, itemset: ids.GLADIATOR_SET, title: "Savage Gladiator's Silk Trousers", int: 39, sp: 73, crit: 36, sockets: ["r", "b"], bonus: { sp: 7 }, q: "rare" },
        // prebis
        { id: 37854, title: "Woven Bracae Leggings", int: 68, sp: 105, crit: 89 },
        { id: 37622, title: "Skirt of the Old Kingdom", int: 68, sp: 104, mp5: 45 },
        { id: 37369, title: "Sorrowgrave's Breeches", int: 71, sp: 82, crit: 59, sockets: ["r"], bonus: {crit: 4}, q: "rare" },
        { id: 41553, itemset: ids.DUSKWEAVE_SET, title: "Black Duskweave Leggings", int: 50, sp: 81, haste: 69, q: "rare" },
        { id: 37189, title: "Breeches of the Caller", int: 74, spi: 52, sp: 73, sockets: ["r", "b"], bonus: {haste: 6}, q: "rare" },
        { id: 37876, title: "Cyanigosa's Leggings", int: 59, spi: 78, sp: 91, q: "rare" },
        { id: 43313, title: "Leggings of the Ruins Dweller", int: 45, sp: 73, mp5: 31, sockets: ["b", "b"], bonus: {sp: 7}, q: "rare" },
        { id: 37731, title: "Opposed Stasis Leggings", int: 59, spi: 78, sp: 91, q: "rare" },
        { id: 42093, title: "Frostmoon Pants", int: 50, spi: 68, sp: 61, q: "rare" },
        // tbc
        { id: 34181, title: "Leggings of Calamity", int: 41, sp: 71, crit: 33, haste: 32, sockets: ["r", "r", "y"], bonus: { sp: 5 } },
        { id: 34386, title: "Pantaloons of Growing Strife", int: 36, spi: 25, sp: 71, haste: 42, sockets: ["r", "y", "y"], bonus: { sp: 5 } },
        { id: 31058, itemset: ids.T6_SET, title: "Leggings of the Tempest", int: 47, spi: 29, sp: 62, crit: 29, hit: 20, sockets: ["b"], bonus: { sp: 2 } },
    ],
    feet: [
        // eoe
        { id: 40558, title: "Arcanic Tramplers", int: 52, spi: 62, sp: 99, haste: 46 },
        // naxx
        { id: 40326, title: "Boots of Forlorn Wishes", int: 50, spi: 66, sp: 78, haste: 33, sockets: ["y"], bonus: {spi: 4} },
        { id: 40246, title: "Boots of Impetuous Ideals", int: 57, sp: 88, hit: 37, haste: 55 },
        { id: 40269, title: "Boots of Persuasion", int: 50, spi: 55, sp: 78, crit: 35, sockets: ["y"], bonus: {crit: 4} },
        { id: 40236, title: "Serene Echoes", int: 57, sp: 88, crit: 49, mp5: 25 },
        { id: 39254, title: "Saltarello Shoes", int: 51, spi: 51, sp: 77, haste: 33 },
        { id: 39273, title: "Sullen Cloth Boots", int: 50, spi: 38, sp: 76, crit: 48 },
        // prebis
        { id: 44202, title: "Sandals of Crimson Fury", int: 50, sp: 77, haste: 51, sockets: ["b"], bonus: {int: 4} },
        { id: 37218, title: "Stone-Worn Footwraps", int: 52, sp: 68, crit: 57, q: "rare" },
        { id: 37629, title: "Slithering Slippers", int: 44, sp: 68, crit: 57, q: "rare" },
        { id: 37730, title: "Cleric's Linen Shoes", int: 44, sp: 59, haste: 57, sockets: ["r"], q: "rare" },
        { id: 37867, title: "Footwraps of Teleportation", int: 57, spi: 39, sp: 59, sockets: ["y"], bonus: {sp: 5}, q: "rare" },
        { id: 41985, title: "Silky Iceshard Boots", sp: 60, crit: 37, haste: 29, q: "rare" },
        { id: 42096, title: "Aurora Slippers", int: 40, spi: 51, sp: 60, q: "rare" },
        // tbc
        { id: 34574, itemset: ids.T6_SET, title: "Boots of the Tempest", int: 29, spi: 20, sp: 50, crit: 20, hit: 15, haste: 25, sockets: ["y"], bonus: { sp: 2 } },
        { id: 34919, title: "Boots of Incantations", int: 26, spi: 23, sp: 47, hit: 17, sockets: ["y"], bonus: { sp: 2 } },
    ],
    finger: [
        // os
        { id: 40433, title: "Wyrmrest Band", int: 40, sp: 67, haste: 32, mp5: 20 },
        // naxx
        { id: 40080, title: "Lost Jewel", int: 38, spi: 37, sp: 65, crit: 42 },
        { id: 40375, title: "Ring of Decaying Beauty", int: 40, sp: 66, haste: 35, mp5: 20 },
        { id: 40108, title: "Seized Beauty", int: 43, sp: 66, crit: 38, mp5: 19 },
        { id: 40399, title: "Signet of Manifested Pain", int: 49, sp: 74, crit: 46, haste: 36 },
        { id: 39193, title: "Band of Neglected Pleas", int: 38, sp: 59, crit: 33, mp5: 16 },
        { id: 39407, title: "Circle of Life", int: 36, sp: 59, haste: 34, mp5: 16 },
        { id: 39250, title: "Ring of Holy Cleansing", int: 38, spi: 29, sp: 59, haste: 36 },
        { id: 39244, title: "Ring of the Fated", int: 37, sp: 42, crit: 50, haste: 28 },
        { id: 39389, title: "Signet of the Malevolent", int: 34, sp: 46, hit: 49, haste: 33 },
        { id: 39231, title: "Timeworn Silken Band", int: 38, spi: 28, sp: 59, crit: 36 },
        { id: 40585, title: "Signet of the Kirin Tor", int: 34, sp: 59, crit: 36, haste: 28 },
        { id: 44934, title: "Loop of the Kirin Tor", int: 34, spi: 36, sp: 59, mp5: 14 },
        { id: 37192, title: "Annhylde's Ring", int: 33, sp: 59, haste: 49 },
        { id: 37694, title: "Band of Guile", int: 34, sp: 59, haste: 50 },
        // prebis
        { id: 44283, title: "Signet of Hopeful Light", int: 50, sp: 58, haste: 36 },
        { id: 42644, title: "Titanium Spellshock Ring", int: 33, sp: 49, crit: 42, sockets: ["r"], bonus: {sp: 5} },
        { id: 37195, title: "Band of Enchanted Growth", int: 31, sp: 50, mp5: 21, q: "rare" },
        { id: 37232, title: "Ring of the Traitor King", int: 34, sp: 51, crit: 43, q: "rare" },
        { id: 37371, title: "Ring of the Frenzied Wolvar", int: 28, sp: 51, haste: 43, q: "rare" },
        { id: 37651, title: "The Prospector's Prize", int: 29, hit: 51, haste: 43, q: "rare" },
        { id: 37869, title: "Globule Signet", int: 33, sp: 51, crit: 42, q: "rare" },
        { id: 43408, title: "Solitaire of Reflecting Beams", int: 31, sp: 50, haste: 43, q: "rare" },
        { id: 43253, title: "Ring of Northern Tears", sp: 36, crit: 39, hit: 31, sockets: ["b"], bonus: {hit: 4}, q: "rare" },
        { id: 37732, title: "Spectral Seal of the Prophet", int: 30, spi: 52, sp: 51, q: "rare" },
        // tbc
        { id: 34362, title: "Loop of Forged Power", int: 28, sp: 34, hit: 19, haste: 30 },
        { id: 34230, title: "Ring of Omnipotence", int: 14, sp: 40, crit: 22, haste: 31 },
    ],
    trinket: [
        // os
        { id: ids.TRINKET_ILLUSTRATION_DRAGON_SOUL, title: "Illustration of the Dragon Soul" },
        // naxx
        { id: ids.TRINKET_DYING_CURSE, title: "Dying Curse", hit: 71 },
        { id: ids.TRINKET_EXTRACT_NECROMANTIC_POWER, title: "Extract of Necromantic Power", crit: 95 },
        { id: ids.TRINKET_SOUL_DEAD, title: "Soul of the Dead", crit: 95 },
        { id: ids.TRINKET_EMBRACE_SPIDER, title: "Embrace of the Spider", sp: 98 },
        // prebis
        { id: ids.TRINKET_DARKMOON_DEATH, title: "Darkmoon Card: Death", crit: 85 },
        { id: 42988, title: "Darkmoon Card: Illusion", sp: 100 },
        { id: ids.TRINKET_FORGE_EMBER, title: "Forge Ember", crit: 73, q: "rare" },
        { id: ids.TRINKET_PENDULUM_TELLURIC_CURRENTS, title: "Pendulum of Telluric Currents", haste: 74, q: "rare" },
        { id: ids.TRINKET_MERCURIAL_ALCHEMIST_STONE, title: "Mercurial Alchemist Stone", sp: 59, haste: 50, q: "rare" },
        { id: ids.TRINKET_MARK_WAR_PRISONER, title: "Mark of the War Prisoner", hit: 73, use: true, q: "rare" },
        { id: ids.TRINKET_CANNONEERS_FUSELIGHTER, title: "Cannoneer's Fuselighter", crit: 54, use: true, q: "rare" },
        { id: ids.TRINKET_TOME_ARCANE_PHENOMENA, title: "Tome of Arcane Phenomena", sp: 68, use: true, q: "rare" },
        { id: ids.TRINKET_TWILIGHT_SERPENT, title: "Figurine - Twilight Serpent", hit: 42, sockets: ["r", "b"], bonus: {sp: 7}, use: true, q: "rare" },
        // TBC trinkets
        { id: ids.TRINKET_NAARU_SLIVER, title: "Shifting Naaru Sliver", haste: 54, use: true },
        { id: ids.TRINKET_SKULL_GULDAN, title: "The Skull of Gul'dan", sp: 55, hit: 25, use: true },
        { id: ids.TRINKET_ASHTONGUE_TALISMAN, title: "Ashtongue Talisman" },
        { id: ids.TRINKET_SERPENT_COIL, title: "Serpent-Coil Braid", crit: 30, hit: 12 },
        { id: ids.TRINKET_SHRUNKEN_HEAD, title: "Hex Shrunken Head", sp: 53, use: true },
        { id: ids.TRINKET_MQG, title: "Mind Quickening Gem", use: true },
    ],
};

var gems = [
    { id: ids.META_CHAOTIC_SKYFLARE, title: "Chaotic Skyflare Diamond", color: "m", crit: 21, desc: "+3% crit dmg", req: {b: 2} },
    { id: ids.META_EMBER_SKYFLARE, title: "Ember Skyflare Diamond", color: "m", sp: 25, desc: "+2% int", req: {r: 3} },
    { id: ids.META_BEAMING_EARTHSIEGE, title: "Beaming Earthsiege Diamond", color: "m", crit: 21, desc: "+2% mana", req: {y: 1, r: 2} },
    { id: ids.META_INSIGHTFUL_EARTHSIEGE, title: "Insightful Earthsiege Diamond", color: "m", int: 21, desc: "Chance to restore mana", req: {b: 1, y: 1, r: 1} },
    { id: 42144, title: "Runed Dragon's Eye", color: "r", sp: 39, unique: true },
    { id: 40113, title: "Runed Cardinal Ruby", color: "r", sp: 23 },
    { id: 45883, title: "Runed Stormjewel", color: "r", sp: 23 },
    { id: 39998, title: "Runed Scarlet Ruby", color: "r", sp: 19 },
    { id: 40151, title: "Lumunous Ametrine", color: "o", sp: 12, int: 10 },
    { id: 40152, title: "Potent Ametrine", color: "o", sp: 12, crit: 10 },
    { id: 40153, title: "Veiled Ametrine", color: "o", sp: 12, hit: 10 },
    { id: 40155, title: "Reckless Ametrine", color: "o", sp: 12, haste: 10 },
    { id: 40047, title: "Lumunous Monarch Topaz", color: "o", sp: 9, int: 8 },
    { id: 40048, title: "Potent Monarch Topaz", color: "o", sp: 9, crit: 8 },
    { id: 40049, title: "Veiled Monarch Topaz", color: "o", sp: 9, hit: 8 },
    { id: 40051, title: "Reckless Monarch Topaz", color: "o", sp: 9, haste: 8 },
    { id: 42148, title: "Brilliant Dragon's Eye", color: "y", int: 34, unique: true },
    { id: 42149, title: "Smooth Dragon's Eye", color: "y", crit: 34, unique: true },
    { id: 42156, title: "Rigid Dragon's Eye", color: "y", hit: 34, unique: true },
    { id: 42150, title: "Quick Dragon's Eye", color: "y", haste: 34, unique: true },
    { id: 40123, title: "Brilliant King's Amber", color: "y", int: 20 },
    { id: 40124, title: "Smooth King's Amber", color: "y", crit: 20 },
    { id: 40125, title: "Rigid King's Amber", color: "y", hit: 20 },
    { id: 40128, title: "Quick King's Amber", color: "y", haste: 20 },
    { id: 40012, title: "Brilliant Autumn's Glow", color: "y", int: 16 },
    { id: 40013, title: "Smooth Autumn's Glow", color: "y", crit: 16 },
    { id: 40014, title: "Rigid Autumn's Glow", color: "y", hit: 16 },
    { id: 40017, title: "Quick Autumn's Glow", color: "y", haste: 16 },
    { id: 40132, title: "Glowing Dreadstone", color: "p", sp: 12 },
    { id: 40133, title: "Purified Dreadstone", color: "p", sp: 12, spi: 10 },
    { id: 40134, title: "Royal Dreadstone", color: "p", sp: 12, mp5: 5 },
    { id: 40025, title: "Glowing Twilight Opal", color: "p", sp: 9 },
    { id: 40026, title: "Purified Twilight Opal", color: "p", sp: 9, spi: 8 },
    { id: 40027, title: "Royal Twilight Opal", color: "p", sp: 9, mp5: 4 },
    { id: 40164, title: "Timeless Eye of Zul", color: "g", int: 10 },
    { id: 40165, title: "Jagged Eye of Zul", color: "g", crit: 10 },
    { id: 40166, title: "Vivid Eye of Zul", color: "g", hit: 10 },
    { id: 40169, title: "Forceful Eye of Zul", color: "g", haste: 10 },
    { id: 40170, title: "Seer's Eye of Zul", color: "g", int: 10, spi: 10 },
    { id: 40171, title: "Misty Eye of Zul", color: "g", crit: 10, spi: 10 },
    { id: 40172, title: "Shining Eye of Zul", color: "g", hit: 10, spi: 10 },
    { id: 40174, title: "Intricate Eye of Zul", color: "g", haste: 10, spi: 10 },
    { id: 40175, title: "Dazzling Eye of Zul", color: "g", int: 10, mp5: 5 },
    { id: 40176, title: "Sundered Eye of Zul", color: "g", crit: 10, mp5: 5 },
    { id: 40177, title: "Lambent Eye of Zul", color: "g", hit: 10, mp5: 5 },
    { id: 40179, title: "Energized Eye of Zul", color: "g", haste: 10, mp5: 5 },
    { id: 40085, title: "Timeless Forest Emerald", color: "g", int: 8 },
    { id: 40086, title: "Jagged Forest Emerald", color: "g", crit: 8 },
    { id: 40088, title: "Vivid Forest Emerald", color: "g", hit: 8 },
    { id: 40091, title: "Forceful Forest Emerald", color: "g", haste: 8 },
    { id: 40092, title: "Seer's Forest Emerald", color: "g", int: 8, spi: 8 },
    { id: 40095, title: "Misty Forest Emerald", color: "g", crit: 8, spi: 8 },
    { id: 40099, title: "Shining Forest Emerald", color: "g", hit: 8, spi: 8 },
    { id: 40104, title: "Intricate Forest Emerald", color: "g", haste: 8, spi: 8 },
    { id: 40094, title: "Dazzling Forest Emerald", color: "g", int: 8, mp5: 4 },
    { id: 40096, title: "Sundered Forest Emerald", color: "g", crit: 8, mp5: 4 },
    { id: 40100, title: "Lambent Forest Emerald", color: "g", hit: 8, mp5: 4 },
    { id: 40105, title: "Energized Forest Emerald", color: "g", haste: 8, mp5: 4 },
    { id: 42145, title: "Sparkling Dragon's Eye", color: "b", spi: 34, unique: true },
    { id: 42146, title: "Lustrous Dragon's Eye", color: "b", mp5: 17, unique: true },
    { id: 40120, title: "Sparkling Majestic Zircon", color: "b", spi: 20 },
    { id: 40121, title: "Lustrous Majestic Zircon", color: "b", mp5: 10 },
    { id: 40009, title: "Sparkling Sky Sapphire", color: "b", spi: 16 },
    { id: 40010, title: "Lustrous Sky Sapphire", color: "b", mp5: 8 },
];

var enchants = {
    weapon: [
        { id: 62948, title: "Greater Spellpower", sp: 81, twohand: true },
        { id: 60714, title: "Mighty Spellpower", sp: 63 },
        { id: 59619, title: "Accuracy", crit: 25, hit: 25 },
        { id: ids.BLACK_MAGIC, title: "Black Magic" }, // 35% chance, 35s icd
    ],
    head: [
        { id: 59970, title: "Arcanum of Burning Mysteries", sp: 30, crit: 20 },
        { id: 59960, title: "Arcanum of Blissful Mending", sp: 30, mp5: 10 },
    ],
    shoulder: [
        { id: 59937, title: "Greater Inscription of the Storm ", sp: 24, crit: 15 },
        { id: 59936, title: "Greater Inscription of the Crag", sp: 24, mp5: 8 },
    ],
    back: [
        { id: ids.LIGHTWEAVE_EMBROIDERY, title: "Lightweave Embroidery" },
        { id: ids.DARKGLOW_EMBROIDERY, title: "Darkglow Embroidery" },
        { id: 47898, title: "Greater Speed", haste: 23 },
        { id: 47899, title: "Wisdom", spi: 10 },
    ],
    chest: [
        { id: 60692, title: "Powerful Stats", int: 10, spi: 10 },
        { id: 44509, title: "Greater Mana Restoration", mp5: 10 },
    ],
    wrist: [
        { id: 60767, title: "Superior Spellpower", sp: 30 },
        { id: 44593, title: "Major spirit", spi: 18 },
        { id: 44555, title: "Exceptional Intellect", int: 16 },
    ],
    hands: [
        { id: ids.HYPERSPEED_ACCELERATORS, title: "Hyperspeed Accelerators" },
        { id: 44592, title: "Exceptional Spellpower", sp: 28 },
        { id: 44488, title: "Precision", hit: 20 },
    ],
    legs: [
        { id: 55631, title: "Brilliant Spellthread", sp: 50, spi: 20 },
        { id: 55634, title: "Sapphire Spellthread", sp: 50 },
        { id: 55630, title: "Shining Spellthread", sp: 35, spi: 12 },
        { id: 55632, title: "Azure Spellthread", sp: 35 },
    ],
    feet: [
        { id: 47901, title: "Tuskarr's Vitality" },
        { id: 44508, title: "Greater Spirit", spi: 18 },
        { id: 44584, title: "Greater Vitality", mp5: 7 },
        { id: 60623, title: "Icewalker", hit: 12, crit: 12 },
    ],
    finger: [
        { id: 44636, title: "Greater Spellpower", sp: 23 },
    ],
};

var itemsets = [
    { id: ids.GLADIATOR_SET, set2: { sp: 29 }, set4: { sp: 88 } },
    { id: ids.DUSKWEAVE_SET, set2: { sp: 18 } },
];

var quicksets = {

};

export default { ids, equip, gems, enchants, itemsets, quicksets };

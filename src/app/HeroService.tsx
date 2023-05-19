import {DamageType, PlayerCharacter} from "../classes/player-character";

const heroes: PlayerCharacter[] = []

heroes.push({
    name: 'Loki',
    race: 'Human',
    class: [
        {name: 'Rogue', level: 1},
        {name: 'Wizard', subclass: 'Illusion School', level: 3}
    ],
    background: {name: 'Charlatan', description: 'Always passed himself off as someone else and robbed people.'},
    alignment: ['chaotic', 'neutral'],
    hitPoints: 20,
    defenses: [
        {boost: 11, name: 'Leather Armor', type: 'ac'}
    ],
    attacks: [
        {name: 'Dagger', type: 'weapon', damage: [{amount: 1, dice: 4, damageType: DamageType.PIERCING}]},
        {
            name: 'Sneak Attack',
            type: 'weapon',
            damage: [{amount: 1, dice: 6, damageType: DamageType.PIERCING}]
        },
        {name: 'Catapult', type: 'spell', damage: [{amount: 2, dice: 8, damageType: DamageType.BLUDGEONING}]}
    ],
    skills: [
        {name: 'Minor Illusion', effects: [], description: ''},
        {name: 'Prestidigitation', effects: [], description: ''},
        {name: 'Expertise', effects: ['Sleight of Hand', 'Deception'], description: ''},
        {name: 'Actor', effects: ['Advantage', 'Deception', 'Performance'], description: ''},
        {name: 'Disguise Self', effects: [], description: ''}
    ]
});

heroes.push({
    name: 'Shield Hero',
    race: 'Human',
    class: [
        {name: 'Cleric', subclass: 'Forge Domain', level: 1},
        {name: 'Wizard', subclass: 'Abjuration School', level: 11}
    ],
    background: {name: 'Folk Hero', description: 'Chosen by his Deity to do some mighty deeds.'},
    alignment: ['chaotic', 'good'],
    hitPoints: 41,
    defenses: [
        {boost: 15, name: 'Scale Armor+1', type: 'ac', description: '+1 from Forge cleric skill.'},
        {boost: 2, name: 'Shield', type: 'ac'}
    ],
    attacks: [
        {name: 'Unarmed strike', type: 'unarmed', damage: [{amount: 0, dice: 1, damageType: DamageType.BLUDGEONING}]},
        {
            name: 'Evard\'s Black Tentacles',
            type: 'spell',
            damage: [{amount: 3, dice: 6, damageType: DamageType.BLUDGEONING}],
            description: 'AoE, Restrains targets'
        }
    ],
    skills: []
});

heroes.push({
    name: 'Link',
    race: 'Wood Elf',
    class: [{name: 'Warlock', subclass: 'Celestial Patron', level: 7}],
    background: {name: 'Folk Hero', description: 'Chosen by his Patron to save the people of Hyrule. Reincarnates.'},
    alignment: ['lawful', 'good'],
    hitPoints: 35,
    defenses: [{boost: 13, name: 'Mage Armor', type: 'ac'}],
    attacks: [
        {
            name: 'Shadow Blade',
            type: 'spell',
            damage: [{amount: 3, dice: 8, damageType: DamageType.PSYCHIC}],
            description: 'Conjured weapon'
        },
        {name: 'Dagger', type: 'weapon', damage: [{amount: 1, dice: 4, damageType: DamageType.PIERCING}]}
    ],
    skills: [
        {name: 'Mage Armor', effects: ['at will'], description: ''},
        {name: 'Navi', effects: ['Sprite'], description: 'Familiar, from Pact of the Chain.'},
    ]
});

heroes.push({
    name: 'Madoka',
    race: 'Human',
    class: [{name: 'Warlock', subclass: '?', level: 5}],
    background: {name: '?', description: 'Pretty normal person, didn\'t even know she\'s a Magical Girl at Lv. 1.'},
    alignment: ['lawful', 'good'],
    hitPoints: 8,
    defenses: [{boost: 13, name: 'Mage Armor', type: 'ac', description: 'Only in combination with Disguise self.'}],
    attacks: [
        {
            name: 'Longbow +1', type: 'weapon',
            damage: [
                {amount: 1, dice: 8, damageType: DamageType.PIERCING},
                {amount: 1, dice: 1, damageType: DamageType.PIERCING}
            ], description: 'Conjured pact weapon.'
        },
        {
            name: 'Eldritch Blast', type: 'spell',
            damage: [{amount: 1, dice: 8, damageType: DamageType.FORCE}],
            description: 'Shot from the bow, twice.'
        },
        {
            name: 'Fire Bolt', type: 'spell',
            damage: [{amount: 2, dice: 10, damageType: DamageType.FIRE}],
            description: 'Shot from the bow. Ignites flammable objects.'
        },
        {
            name: 'Ray of Frost', type: 'spell',
            damage: [{amount: 2, dice: 8, damageType: DamageType.COLD}],
            description: 'Shot from the bow. Reduces target\'s speed by 10ft.'
        }
    ],
    skills: [
        {name: 'Mage Armor', effects: ['1/day', 'Duration: 8h'], description: 'Part of magical girl transformation. From Magic Initiate.'},
        {name: 'Disguise Self', effects: ['at will'], description: 'Part of magical girl transformation.'},
        {name: 'Eldritch Invocation', effects: ['Mask of Many Faces', 'Improved Pact Weapon', 'Eldritch Smite'], description: ''},
        {name: 'Meta Magic', effects: ['Quick Spell', '?'], description: 'Used to quicken Transformation'},
        {
            name: 'Pact Magic', effects: [
                '0Eldritch Blast', '0Minor Illusion', '0Prestidigitation',
                '1Charm Person', '1Hex', '1Witch Bolt',
                '2Hold Person',
                '3Remove Curse', '3Fly'
            ], description: 'Cantrips: 3, Spells: 6'
        },
        {
            name: 'Magic Initiate', effects: [
                'Sorcerer',
                '0Fire Bolt', '0Ray of Frost',
                '1Mage Armor'
            ], description: 'Two Cantrips plus one 1st Lv Spell.'
        }
    ]
});

heroes.push({
    name: 'Megumin',
    race: 'Human',
    class: [{name: 'Sorcerer', subclass: 'Storm', level: 6}],
    background: {name: '?', description: ''},
    alignment: ['neutral', 'neutral'],
    hitPoints: NaN,
    defenses: [{boost: 10, name: 'No Armor', type: 'ac'}],
    attacks: [
        {
            name: 'Chromatic Orb', type: 'spell',
            damage: [{amount: 3, dice: 8, damageType: DamageType.LIGHTNING}],
            description: '+1d8 per spell level'
        },
        {
            name: 'Witch Bolt', type: 'spell',
            damage: [{amount: 1, dice: 12, damageType: DamageType.LIGHTNING}],
            description: '+1d12 per spell level'
        },
        {
            name: 'Dragon\'s Breath', type: 'spell',
            damage: [{amount: 3, dice: 6, damageType: DamageType.LIGHTNING}],
            description: '+1d6 per spell level'
        },
        {
            name: 'Lightning Bolt', type: 'spell',
            damage: [{amount: 8, dice: 6, damageType: DamageType.LIGHTNING}],
            description: '+1d6 per spell level'
        },
        // {
        //     name: 'Wrath of the Storm', type: 'feature',
        //     damage: [{amount: 2, dice: 8, damageType: DamageType.LIGHTNING}],
        //     description: 'Reaction on taking damage, 2nd level tempest cleric feature.'
        // },
        {
            name: 'Heart of the Storm', type: 'feature',
            damage: [{amount: 3, dice: 1, damageType: DamageType.LIGHTNING}],
            description: 'When casting a spell.'
        }
    ],
    skills: [
        {name: 'Font of Magic', effects: ['2', '3', '5', '6', '7'], description: ''},
        {name: 'Meta Magic', effects: ['1Quick Spell', '1Distant Spell'], description: ''},
        {name: 'Elemental Adept', effects: ['Lightning'], description: ''},
        {name: 'Spellcasting', effects: ['4', '3', '3'], description: 'Spell slots.'},
        {name: 'Sorcerer Spells', effects: [
            '0Blade Ward', '0Mage Hand', '0Friends', '0Prestidigitation', '0True Strike',
            '1Chromatic Orb', '1Witch Bolt',
            '2Dragon\'s Breath',
            '3Lightning Bolt', '3Thunder Step', '3Haste'
        ]},
        {name: 'TODO: Cleric Spells', effects: ['0Resistance', '0Thaumaturgy', '0Guidance', '1Detect Magic', '1Detect Poison and Disease']},
        {name: 'TODO: Channel divinity', effects: ['Max damage on one Lightning spell', '1/short rest']}
    ]
});

heroes.push({
    name: 'Necromancin\' Dancer',
    race: 'Human',
    class: [{name: 'Bard', level: NaN}],
    background: {
        name: '???',
        description: 'Well he\'s definitely a villain, but I don\'t think that counts as a background.'
    },
    alignment: ['chaotic', 'evil'],
    personality: [
        {
            type: 'Trait',
            description: 'Yeah, I\'m raising the dead~\nI\'m loving the dread~\nLet\'s make some evil!~'
        }
    ],
    skills: [
        {name: 'Spellcasting', effects: ['Otto\'s irresistable dance', 'Animate Dead', 'Create Undead', '']}
    ],
    additionalInfo: [
        {info: 'When I\'m necromancing,\nEveryone\'s dancing\nNo one can stop me, I dare you to try.\nThe dead are infused with sensational groove\nAnd they\'re coming for you now, there\'s nowhere to hide!'},
        {info: 'Yeah, I\'m raising the dead~\nThey rip and they shred~\nAnd make some evil~'}
    ]
    /*


     */
});

export const HeroService = () => {
  return heroes;
}
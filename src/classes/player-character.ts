export enum DamageType {
    PIERCING, SLASHING, BLUDGEONING,
    FIRE, COLD, LIGHTNING, ACID, POISON,
    RADIANT, NECROTIC,
    PSYCHIC,
    FORCE
}

export class AttackDice {
    amount: number = 1;
    dice: number = 1;
    damageType: DamageType = DamageType.FORCE;
}

export class Attack {
    name: string = '';
    type: 'weapon' | 'spell' | 'unarmed' | 'feature' = 'feature';
    /**
     *  ex. {amount: 1, dice: 4} = 1d4<br>
     */
    damage: AttackDice[] = [];
    description?: string;
}

export class Skill {
    name: string = '';
    description?: string;
    effects: string[] = [];
}

export class DefenseSkill {
    /** 'unarmored' | 'natural armor' | 'light armor' | 'medium armor' | 'heavy armor' | ... */
    name: string = '';
    boost: number = 0;
    type: 'ac' | 'tmpHp' = 'ac';
    description?: string;
}

export class Class {
    name: string = '';
    subclass?: string;
    level: number = 0;
}

export class Stats {
    str: number = 0;
    dex: number = 0;
    con: number = 0;
    int: number = 0;
    wis: number = 0;
    cha: number = 0;
}

export class Background {
    name: string = '';
    description?: string;
}

export class PersonalityTrait {
    description: string = '';
    /** (General) Trait, Ideal, Bond, Flaw, etc. */
    type?: string;
}

export class PlayerCharacter {
    name: string = '';
    race?: string;
    class?: Class[];
    stats?: Stats;
    background?: Background;
    alignment?: [
            'chaotic' | 'neutral' | 'lawful',
            'evil' | 'neutral' | 'good'
    ];
    personality?: PersonalityTrait[];
    defenses?: DefenseSkill[];
    hitPoints?: number;
    attacks?: Attack[];
    proficiencies?: string[];
    skills?: Skill[];
}
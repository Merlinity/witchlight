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
    str: string = '0';
    dex: string = '0';
    con: string = '0';
    int: string = '0';
    wis: string = '0';
    cha: string = '0';
}

export class Background {
    name: string = '';
    description?: string;
}

export class PersonalityTrait {
    description: string = '';
    /** (General) Trait, Ideal, Bond, Flaw, etc. */
    type?: 'Trait' | 'Ideal' | 'Bond' | 'Flaw' | string;
}

class Additionalnfo {
    heading?: string;
    info: string = '';
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
    additionalInfo?: Additionalnfo[];
    defenses?: DefenseSkill[];
    hitPoints?: number;
    attacks?: Attack[];
    proficiencies?: string[];
    skills?: Skill[];
}
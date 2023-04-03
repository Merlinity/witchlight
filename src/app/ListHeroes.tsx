import "./ListHeroes.css";
import {HeroService} from "./HeroService";
import {PlayerCharacter} from "../classes/player-character";

export const ListHeroes = () => {
    const heroes: PlayerCharacter[] = HeroService();
    return (
        <div className="HeroList">{heroes.map(hero =>
            (<div className="Hero">
                <span><b>{hero.name}</b>,</span>
                <span>{hero.race},</span>
                <span>{
                    hero.class?.map(
                        cl => cl.name + " (" + cl.level + ')'
                    ).join("/")
                }</span>
            </div>)
        )}</div>
    );
};
import "./ListHeroes.css";
import {HeroService} from "./HeroService";
import {PlayerCharacter} from "../classes/player-character";

export const ListHeroes = () => {
    const heroes: PlayerCharacter[] = HeroService();
    return (
        <div className="hero-list">{heroes.map(hero =>
            (<div key={'hero-' + hero.name} className="hero">
                <span className="hero-name"><b>{hero.name}</b>,</span>
                <span className="hero-race">{hero.race},</span>
                <span className="hero-classes">{
                    hero.class?.map(
                        cl => cl.name + " (" + cl.level + ')'
                    ).join("/")
                }</span>
            </div>)
        )}</div>
    );
};
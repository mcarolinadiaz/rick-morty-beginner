import {useState} from "react";

export default function Characters(props) {
    const {characters, setCharacters} = props;
    const onReset = () => {
        setCharacters(null);
    }
    return (
        <div className={characters}>
            <div className="back-home" onClick={onReset}>Back to home</div>
            <h1>Characters: </h1>
            <div className="container-characters">
                {characters.map((character) => ( // return implícito - adentro de otro return
                    <div className="character-container">
                        <div><img src={character.image} alt={character.name} /></div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>
                                {character.status === 'Alive' ?
                                    (<><span className="alive"/>Alive</>) :
                                    (<><span className="dead"/>Dead</>)}
                            </h6>
                            <p>
                                <span className="text-grey">Episodes: {character.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Specie: {character.species}</span>
                            </p>
                        </div>
                    </div>
                ))
                }
            </div>
            <div className="back-home" onClick={onReset}>Back to home</div>
        </div>
    )
}

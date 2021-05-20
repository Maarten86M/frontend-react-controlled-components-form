import React from 'react';
import './App.css';

function App() {
    const [nameValue, setnameValue] = React.useState('');
    const [agevalue, setageValue] = React.useState(0);
    const [findRecipe, setfinRecipe] = React.useState('Anders');
    const [textAreafield, settextAreafield] = React.useState('');

    function Sendform(e) {
        e.preventDefault();
        console.log(nameValue, agevalue, findRecipe, textAreafield);
    }

    return (

        <div className="pageContainer">
            <form action="">
                <fieldset>
                    <legend>Gegevens</legend>
                    <label htmlFor="nameInputField"> Naam:</label>
                    <input
                        type="text"
                        name="firstname"
                        id="nameInputField"
                        value={nameValue}
                        onChange={(e) => setnameValue(e.target.value)}
                    />

                    <br/>
                    <br/>
                    <label htmlFor="ageInputField">Leeftijd:</label>
                    <input
                        type="text"
                        name="age"
                        id="ageInputField"
                        value={agevalue}
                        onChange={(e) => setageValue(e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <legend>Jouw review</legend>
                    <label htmlFor="findRecipeInputField"> Hoe heb je dit recept gevonden?</label>
                    <select
                        name="findRecipe"
                        id="findRecipeInputField">
                        value={findRecipe}
                        onChange={(e) => setfinRecipe(e.target.value)}
                        <option value="anders">Anders</option>
                        <option value="Google">Google</option>
                        <option value="Vriend">Vriend</option>
                        <option value="Advertentie">Advertentie</option>
                    </select>
                    <br/>
                    <br/>
                    <label htmlFor="textAreaInput">Opmerkingen:</label>
                    <br/>
                    <textarea
                        name="textArea"
                        id="textAreaInput"
                        cols="30"
                        rows="7"
                        placeholder="Wat vond je van het recept?"
                        value={textAreafield}
                        onChange={(e) => settextAreafield(e.target.value)}
                    ></textarea>
                    <br/>
                    <button
                        type="submit"
                        onClick={Sendform}
                    >Versturen
                    </button>

                </fieldset>
            </form>
        </div>
    );
}

export default App;

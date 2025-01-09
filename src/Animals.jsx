export default function Animals() {

    const animals= ["Lion", "Cow", "Sheep", "Snake"];
    const animalList = animals.map((animal) => <li key={animal}>{animal}</li>)

    return (
        <div>
            <h1>Animal Page</h1>
            <ul>
                {animalList}
            </ul>
        </div>
    )
}


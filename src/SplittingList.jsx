import { people } from './People.js';
import { getImageUrl } from './utils.js';

export default function List() {
    const chemists = people.filter(person =>
        person.profession === 'chemist'
    );

    const everyoneElse = people.filter(person =>
        person.profession !== 'chemist'
    );

    return (
        <article>
            <h1>Scientists</h1>
            <h2>Chemists</h2>
            <ul>{chemists.map(person =>
                <li key={person.id}>
                    <img
                        src={getImageUrl(person)}
                        alt={person.name}
                    />
                    <p>
                        <b>{person.name}:</b>
                        <p>Known for {person.accomplishment}</p>
                    </p>
                </li>
            )}</ul>
            <h2>Everyone Else</h2>
            <ul>{everyoneElse.map(person =>
                <li key={person.id}>
                    <img
                        src={getImageUrl(person)}
                        alt={person.name}
                    />
                    <p>
                        <b>{person.name}</b>
                        <p>Known for {person.accomplishment}</p>
                    </p>
                </li>
            )}</ul>
        </article>
    )
}
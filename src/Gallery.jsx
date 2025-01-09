import { getImageUrl } from './utils.js';

function Profile({
    imageId,
    name,
    profession,
    awards,
    discovery,
    imageSize = 70
}) {
    return (
        <section className="profile">
            <h2>{name}</h2>
            <img
                className="avatar"
                src={getImageUrl(imageId)}
                alt="name"
                width={imageSize}
                height={imageSize}
            />
                  <ul>
        <li><b>Profession:</b> {profession}</li>
        <li>
          <b>Awards: {awards.length} </b>
          ({awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

function Avatar ({ person, size}) {
    let thumbnailSize = 's';
    if (size > 90) {
        thumbnailSize = 'b';
    }

    return (
        <img
            className='avatar'
            src={getImageUrl(person, 'b')}
            alt={person.name}
            width={size}
            height={size}
        />
    )

}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Avatar
        size={40}
        person={{
            name: 'Gregorio Y.Zara',
            imageId: '7vQD'
        }}

      />
      <Profile
        imageId="szV5sdG"
        name="Maria Sklodowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
            'Nobel Prize in Physics',
            'Nobel Prize in Chemistry',
            'Davy Medal',
            'Matteucci Medal'
        ]}
      />
      <Profile
        imageId='YfeOqp2'
        name="Katsuko Saruhashi"
        profession="Geo-Chemist"
        discovery="A method for measuring carbon dioxide in seawater"
        awards={[
            'Tanaka Prize',
            'Miyake Price for geochemist'
        ]}
      />
      </div>
  );
}
export const CastInfo = ({ cast }) => {
  return (
    <ul>
      {cast.map(({ profile_path, character, name, id }) => (
        <li key={id}>
          <div>
            <img src={profile_path} alt={name} />
          </div>
          <h4>{name}</h4>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

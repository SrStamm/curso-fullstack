function UserCard(props) {
  const { user } = props;

  return (
    <div className="user-card">
      <div>
        <image src={user.avatar} alt=""></image>
      </div>
      <div>
        <h3>{user.nome}</h3>
        {user.ativo ? (
          <span className="status-ativo">🟢 Ativo</span>
        ) : (
          <span className="status-inativo">🔴 Inativo</span>
        )}
        {user.salario > 40000 && <p>💰 {user.salario}€</p>}
      </div>
      <div>
        <h4>Skills</h4>
        {user.skills.map((skill) => (
          <li className="l-skill" key={skill}>
            {skill}
          </li>
        ))}
      </div>
    </div>
  );
}

export default UserCard;

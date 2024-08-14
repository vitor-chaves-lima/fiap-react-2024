function PersonalInfo() {
  return (
    <div className="personal-info">
      <h2>Informações Pessoais</h2>
      <p>Nome: João</p>
      <p>Email: joao@example.com</p>
      <p>Telefone: (00) 12345-6789</p>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills">
      <h2>Habilidades</h2>
      <div className="skill-card">
        <h3>HTML</h3>
        <p>Nível: Avançado</p>
      </div>
      <div className="skill-card">
        <h3>CSS</h3>
        <p>Nível: Intermediário</p>
      </div>
      <div className="skill-card">
        <h3>JavaScript</h3>
        <p>Nível: Básico</p>
      </div>
    </div>
  );
}

function Info() {
  return (
    <section id="info">
      <PersonalInfo />
      <Skills />
    </section>
  );
}

export default Info;

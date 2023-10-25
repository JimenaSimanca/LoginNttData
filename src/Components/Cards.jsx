const data = "./src/api.json";

function Card({ item }) {
    return (
      <div className="card">
        <img src={item.foto} alt="Imagen" />
        <div className="card-body">
          <h3>{item.titulo}</h3>
          <h4>{item.subtitulo}</h4>
          <p>{item.texto}</p>
        </div>
      </div>
    );
  }

  function App() {
    const data = ["./src/api.json"];
  
    return (
      <div>
        <div className="card-container">
          {data.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    );
  }
  
  export default App;

  
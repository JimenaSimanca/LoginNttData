import React, { useEffect, useState } from 'react';

function AddNote() {
    const [noteTitle, setNoteTitle] = useState('');
    const [noteSubtitle, setNoteSubtitle] = useState('');
    const [noteText, setNoteText] = useState('');
    const [noteCategory, setNoteCategory] = useState('');
    const [image, setImage] = useState(null);
    const [imageId, setImageId] = useState();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]); 
    };
  
    useEffect(() => { fetch('../src/api.json')
      .then((response) => response.json()) 
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  }, [])
    
    return (
      <div className='container'>
        {loading ? (
          <div className="loading-screen">
            <a><img  src="https://i.ibb.co/6H3kfjz/148033-loading-variation.gif" /></a>
            <h4>Cargando Nota...</h4>
          </div>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <h4>Notas</h4>
            <br></br>
            <div className="labelFlex">
              <label htmlFor="noteTitle">Título</label>
              <input
                placeholder="Nota"
                className="input"
                type="text"
                id="noteTitle"
                value={noteTitle}
                onChange={(e) => setNoteTitle(e.target.value)}
              />
            </div>
            <div className="labelFlex">
              <label htmlFor="noteSubtitle">Subtítulo</label>
              <input
                placeholder="Nota"
                className="input"
                type="text"
                id="noteSubtitle"
                value={noteSubtitle}
                onChange={(e) => setNoteSubtitle(e.target.value)}
              />
            </div>

            <div className="labelFlex">
              <label htmlFor="noteText">Texto</label>
              <input
                placeholder="Nota"
                className="input"
                type="text"
                id="noteText"
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
              />
            </div>

            <div className="labelFlex">
              <label htmlFor="noteCategory">Catergoría</label>
              <input
                placeholder="Nota"
                className="input"
                type="text"
                id="noteCategory"
                value={noteCategory}
                onChange={(e) => setNoteCategory(e.target.value)}
              />
            </div>
  
            <div className="labelFlex">
              <label htmlFor="image">Selecciona una imagen</label>
              <input
                className="input"
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
  
            <button className="primary-button login size" id="height1" type="submit">
              Subir Nota
            </button>
          </form>
        )}
      </div>
    );
  
  export default AddNote;
  
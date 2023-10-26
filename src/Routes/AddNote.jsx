import React, { useState, useRef } from 'react';

function AddNote() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const formRef = useRef(null);

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('subtitle', subtitle);
    formData.append('text', text);
    formData.append('category', category);
    formData.append('image', image);
    
  };

  return (
    <section>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Subtítulo"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />

        <textarea
          placeholder="Texto"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input
          type="text"
          placeholder="Categoría"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input type="file" onChange={handleImageChange} />

        <button type="button" onClick={handleReset}>
          Subir
        </button>
      </form>
    </section>
  );
}

export default AddNote;
  
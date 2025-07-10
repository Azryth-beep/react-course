import React, { useState, useEffect, useRef, useCallback } from 'react';

// Simulación de una API que devuelve datos paginados
const fetchData = async (page) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const itemsPerPage = 10;
      const startIndex = (page - 1) * itemsPerPage;
      const newItems = Array.from({ length: itemsPerPage }, (_, i) => ({
        id: startIndex + i,
        text: `Elemento de la página ${page}, número ${startIndex + i + 1}`
      }));
      resolve(newItems);
    }, 1000); // Simula un retraso de red
  });
};

function ListaConScrollInfinito() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // Indica si hay más datos para cargar
  const listRef = useRef(null); // Referencia al contenedor de la lista

  // Función para cargar más datos
  const loadMoreItems = useCallback(async () => {
    if (loading || !hasMore) return; // Evita cargar si ya estamos cargando o no hay más

    setLoading(true);
    try {
      const newItems = await fetchData(page);
      if (newItems.length === 0) {
        setHasMore(false); // No hay más elementos
      } else {
        setItems(prevItems => [...prevItems, ...newItems]);
        setPage(prevPage => prevPage + 1);
      }
    } catch (error) {
      console.error('Error cargando datos:', error);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore]); // Dependencias: recargar si estas cambian

  // useEffect para cargar la primera página al montar el componente
  useEffect(() => {
    loadMoreItems();
  }, []); // Carga inicial

  // useEffect para manejar el scroll
  useEffect(() => {
    const handleScroll = () => {
      if (listRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = listRef.current;
        // Si el usuario está a 200px del final de la lista
        if (scrollTop + clientHeight >= scrollHeight - 200 && !loading && hasMore) {
          loadMoreItems();
        }
      }
    };

    const currentListRef = listRef.current; // Captura la referencia actual
    if (currentListRef) {
      currentListRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      // Limpia el event listener al desmontar el componente
      if (currentListRef) {
        currentListRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, [loading, hasMore, loadMoreItems]); // Dependencias: solo si cambian el estado de carga o si hay más datos

  return (
    <div
      ref={listRef}
      style={{ height: '400px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}
    >
      <h2>Lista con Scroll Infinito</h2>
      {items.map(item => (
        <div key={item.id} style={{ padding: '10px', borderBottom: '1px dashed #eee' }}>
          {item.text}
        </div>
      ))}
      {loading && <p style={{ textAlign: 'center' }}>Cargando más elementos...</p>}
      {!hasMore && !loading && <p style={{ textAlign: 'center' }}>No hay más elementos para cargar.</p>}
    </div>
  );
}

export default ListaConScrollInfinito;
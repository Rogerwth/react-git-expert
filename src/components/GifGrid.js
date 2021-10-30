import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
    const { images, loading } = useFetchGifs(category);

    return loading ? (
        <p className="animate__animated animate__flash">Cargando...</p>
    ) : (
        <>
            <h3>{category}</h3>
            <div className="card-grid animate__animated animate__fadeIn">
                {images.map(img => {
                    return <GifGridItem key={img.id} {...img} />;
                })}
            </div>
        </>
    );
};

export default GifGrid;

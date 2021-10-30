import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = category => {
    const [state, setstate] = useState({
        images: [],
        loading: true,
    });

    useEffect(() => {
        getGifs(category).then(images => {
            setstate({
                images: images,
                loading: false,
            });
        });
    }, [category]);

    return state;
};

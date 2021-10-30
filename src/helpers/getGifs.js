export const getGifs = async category => {
    const apiKey = 'cglCJaTZSgn4L65r6Gdw9aRk1DTShH1i';
    const limit = 10;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=${limit}&q=${encodeURI(
        category
    )}`;

    const { data } = await fetch(url).then(response => {
        return response.json();
    });

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        };
    });

    return gifs;
};

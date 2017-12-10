import fetch from 'isomorphic-fetch';

const apiKey = '0aad29978d054324994bc88cf3163a91';
const countries = ['ru', 'it', 'ca'];

try {
    const allNews = countries.map(value => (async (country) => {
        const response = await fetch(`http://newsapi.org/v2/sources?apiKey=${apiKey}&country=${country}`);
        const json = await response.json();

        return await (({sources}) => {
                    return sources.map(({name, description}) => ({name, description}));
                })(json);
    })(value));

    Promise.all(allNews).then(data => {
        console.log([].concat(...data));
    })
} catch (e) {
    console.log("ERROR:", e.message);
}

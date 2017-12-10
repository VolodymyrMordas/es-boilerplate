import fetch from 'isomorphic-fetch';

const apiKey = '0aad29978d054324994bc88cf3163a91';
const countries = ['ru', 'it', 'ca'];

const allPromises = countries.map(abbr =>
        fetch(`http://newsapi.org/v2/sources?apiKey=${apiKey}&country=${abbr}`)
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(({sources}) => {
                return sources.map(({name, description}) => ({name, description}));
            }).catch((e) => {
                console.log("ERROR:", e.message);
                return [];
        })
    );
Promise.all(allPromises)
    .then(values => {
        console.log([].concat(...values))
    })
    .catch((error) => {
        console.log("ERROR:", error.message);
    });

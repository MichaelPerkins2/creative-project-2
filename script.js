document
    .getElementById("search-btn")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const value = document.getElementById("search-input").value;
        if (value === "") return;
        console.log(value);

        const url =
            "https://imdb-api.com/en/API/SearchMovie/k_r66f91z7/" +
            value;

        const url2 =
            "https://imdb-api.com/en/API/SearchSeries/k_r66f91z7/" +
            value;

            // For Movies
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {

                console.log(json);

                let results = "";
                results += `<h1 style="margin: 2em 0;">Search Results</h1>
                            <hr>
                            <h2>Movies</h2>
                            <hr>`;
                for (let i = 0; i < json.results.length; i++) {
                    results +=
                        `<div class="container">
                            <div class="row">
                                <div class="col">
                                    <h3>Title: <strong>${json.results[i].title}</strong></h4> 
                                    <h4>Description: <em>${json.results[i].description}</em></h4>
                                    <h5><a href="">Our Review:</a> Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua. Ut enim ad minim veniam...</h5>
                                </div>
                                <div class="image-container col">
                                    <img class="search-img" src="${json.results[i].image}">
                                </div>
                            </div>
                            <hr>
                        </div>
                        `;

                }
                document.getElementById("main").innerHTML = "";
                document.getElementById("movieResults").innerHTML = results;
            });

            // For TV Shows
        fetch(url2)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {

                console.log(json);

                let results = "";
                results += `<h2>TV Shows</h2>
                            <hr>`;
                for (let i = 0; i < json.results.length; i++) {
                    results +=
                        `<div class="container">
                            <div class="row">
                                <div class="col">
                                    <h3>Title: <strong>${json.results[i].title}</strong></h4> 
                                    <h4>Description: <em>${json.results[i].description}</em></h4>
                                    <h5><a href="">Our Review:</a> Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua. Ut enim ad minim veniam...</h5>
                                </div>
                                <div class="image-container col">
                                    <img class="search-img" src="${json.results[i].image}">
                                </div>
                            </div>
                            <hr>
                        </div>
                        `;

                }
                document.getElementById("tvResults").innerHTML = results;
            });
    });
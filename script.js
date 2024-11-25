document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = 'https://sheetdb.io/api/v1/iu35uhxxtye9f';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('uslugi-container');

            data.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('col-md-6', 'col-lg-4');

                div.innerHTML = `
                    <div class="card shadow-sm h-100 border-0">
                        <div class="card-body">
                            <h5 class="card-title  fw-bold">${item['Title']}</h5>
                            <p class="card-text text-muted">${item['Desc']}</p>
                        </div>
                    
                    </div>
                `;
                container.appendChild(div);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

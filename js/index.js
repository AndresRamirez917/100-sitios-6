

async function getData() {
    const result = await fetch('https://rickandmortyapi.com/api/character');
    const images = await result.json();
    console.log(images)
    images.results.forEach(element => {
        if(element.id <= 3 ){
            const content = document.createRange().createContextualFragment(`
      
       
                    <div class="card">
                        <h2>${element.name}</h2>
                        <img src="${element.image}" class="" alt="">
                        <p><a href="${element.image}">link</a></p>
                    </div>
  

                `)
                const header =  document.querySelector('.container-flex')
                header.append(content)
        }
    });
}

getData()
const header =  document.querySelector('.header')

async function getData() {
    const result = await fetch('https://jsonplaceholder.typicode.com/photos/');
    const images = await result.json();
    images.forEach(element => {
        if(element.id == 1){
            const content = document.createRange().createContextualFragment(`

                  <div class="container">
            <h1 class=" text-title fw-bold py-5">2024</h1>
            <div class="text-container py-5 px-5 text-center">
                happy <br>
                <p class="new">new</p> 
                year <br>
                <span>party</span>    
            </div>
            <p class="py-3">31 nigth december</p>
            <hr class="m-auto">
            <p class="py-3">at downtown</p>
            <p class="direccion">Imagen cargada desde http://jsonplaceholder.typicode.com/photos</p>
            <img src="${element.url}" class="jsonimage" alt="">
                <p><a href="${element.url}">link</a></p>
        <div class="text-container-2">
            <p class="py-4">get free beer and concktails</p>
            <h1 class="py-3">$30</h1>
            <button class="btn-primar text-uppercase">rsvp</button>
        </div>
        </div>
                
                
                `)
                header.append(content)
        }
    });
}

getData()
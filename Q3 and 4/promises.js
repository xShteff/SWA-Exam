$(document).ready(() => {
    var loadImage = function(url) {
        return new Promise((resolve, reject) => {
            let image = new Image();
    
            image.onload = () => {
                resolve(image);
            }
    
            image.onerror = () => {
                reject(new Error(`Could not load image at ${url}`))
            }
            image.height = 100;
            image.width = 100;
            image.src = url;
           
        })
    }
    
    let addImg = (src) => {
        let imgEl = document.createElement("img");
        imgEl.src = src;
        document.body.appendChild(imgEl);
    }
    Promise.all([
        loadImage('bird1.jpg'),
        loadImage('bird2.jpeg'),
        loadImage('bird3.png'),
    ]).then((images) => {
        images.forEach(img => addImg(img.src));
    }).catch((error) => {
        alert(error);
    })
});
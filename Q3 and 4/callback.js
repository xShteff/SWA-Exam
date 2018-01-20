$(document).ready(function() {
  var loadImage = function(url, callback) {
    let image = new Image();

    image.onload = () => {
      callback(null, image);
    };

    image.onerror = () => {
      callback(new Error(`Could not load image at ${url}`));
    };

    image.src = url;
  };

  let addImg = src => {
    let imgEl = document.createElement("img");
    imgEl.src = src;
    document.body.appendChild(imgEl);
  };

  loadImage("bird1.jpg", (error, img1) => {
    if (error) throw error;
    addImg(img1.src);
    loadImage("bird2.jpeg", (error, img2) => {
      if (error) throw error;
      addImg(img2.src);
      loadImage("bird3.png", (error, img3) => {
        if (error) throw error;
        addImg(img3.src);
      });
    });
  });
});

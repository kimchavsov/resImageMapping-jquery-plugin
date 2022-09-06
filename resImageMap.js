/*
* resImageMap javascript
*
* A responsive image mapping plugin which help resizing the mapping area coordinates to match the actual image size on load and window.resize
*
*/

function resImageMaps(image) {
  const img = image;
  let width = image.width
  let height = image.height
  const map = img.useMap.replace("#", '')

  let wPercent = width/100
  let hPercent =  height/100


  // Select individual area not the map function
  document.querySelectorAll(img[map] > area).forEach(function(area) {
    console.log(this.coords)
  })

  // todo adjust the coordinate accordingly
  // test in uat site
}

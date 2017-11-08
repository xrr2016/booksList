const imgs = [
  'http://img2.imgtn.bdimg.com/it/u=1915303574,3974822154&fm=214&gp=0.jpg',
  'http://img1.imgtn.bdimg.com/it/u=704274510,4056704708&fm=214&gp=0.jpg',
  'http://p3.gexing.com/shaitu/20130303/2013/51333e83994f6.jpg',
  'http://pic1.win4000.com/wallpaper/1/5940e073e4fd0.jpg',
  'http://pic1.win4000.com/wallpaper/a/594236f759b52.jpg'
]

let index = 0,
  count = 0
const imgsLen = imgs.length
const picture = document.querySelector('.picture')
const loading = document.querySelector('.loading')
const progress = document.querySelector('.progress')
picture.setAttribute('src', imgs[index])
const btns = document.querySelectorAll('button.control-btn')

const handleLoadImg = function(img, event) {
  progress.innerHTML = Math.round((count + 1) / imgs.length * 100) + '%'
  if (count >= imgsLen - 1) {
    console.log('loaded all img')
    loading.classList.add('hide')
    document.title = 1 + '/' + imgs.length
  }
  count++
}
const handleButtonClick = function(event) {
  const target = event.target
  if (target.dataset.control === 'prev') {
    index = Math.max(0, --index)
  } else {
    index = Math.min(imgs.length - 1, ++index)
  }
  document.title = index + 1 + '/' + imgs.length
  picture.setAttribute('src', imgs[index])
}

imgs.forEach(function(imgSrc, index, imgs) {
  const img = new Image()
  img.addEventListener('load', handleLoadImg)
  img.addEventListener('error', handleLoadImg)
  img.src = imgSrc
})
btns.forEach(function(btn) {
  btn.addEventListener('click', handleButtonClick)
})

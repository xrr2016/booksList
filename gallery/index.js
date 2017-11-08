const imgs = [
  'http://img2.imgtn.bdimg.com/it/u=1915303574,3974822154&fm=214&gp=0.jpg',
  'http://img1.imgtn.bdimg.com/it/u=704274510,4056704708&fm=214&gp=0.jpg',
  'http://p3.gexing.com/shaitu/20130303/2013/51333e83994f6.jpg',
  'http://pic1.win4000.com/wallpaper/1/5940e073e4fd0.jpg',
  'http://pic1.win4000.com/wallpaper/a/594236f759b52.jpg'
]

let index = 0
const picture = document.querySelector('.picture')
picture.setAttribute('src', imgs[index])
const btns = document.querySelectorAll('button.control-btn')

const handleButtonClick = function(event) {
  const target = event.target
  if (target.dataset.control === 'prev') {
    console.log('prev')
    index = Math.max(0, --index)
  } else {
    console.log('next')
    index = Math.min(imgs.length - 1, ++index)
  }
  document.title = index + 1 + '/' + imgs.length
  picture.setAttribute('src', imgs[index])
}

btns.forEach(function(btn) {
  btn.addEventListener('click', handleButtonClick)
})

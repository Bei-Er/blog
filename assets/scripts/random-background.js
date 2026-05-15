$(function () {
  const BG_SELECTOR = '#BKG'
  
  const randomNumber = Math.floor(Math.random() * 16)
  const imagePath = `/blog/assets/images/bg-${ randomNumber }.jpg`
  
  // 这里执行一次就可以，背景图元素会一直存在，pjax 时不会覆盖
  updateBackground()
  
  function updateBackground() {
    const $backgroundEl = $(BG_SELECTOR)
    
    $backgroundEl.css({
      backgroundImage: `url("${ imagePath }")`,
    })
  }
})
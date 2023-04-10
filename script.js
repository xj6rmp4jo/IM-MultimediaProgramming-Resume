let imageIndex = 0, textIndex = 0;
const texts = ['一下書卷獎', '二上書卷獎', '創意競賽 - 入圍', '專業學科優異 : 計算機概論(一)', 
               '專業學科優異 : 計算機概論(二)', '專業學科優異 : 資料結構',
               '專業學科優異 : 組合語言與嵌入式系統', '專業學科優異 : NET 程式設計'];
setInterval(function(){changeImg(); changeText();}, 4000);


function changeImg() {
  const imageContainer = document.getElementById('image-container');
  const image = imageContainer.getElementsByTagName('img')[0];
  imageIndex++;

  if (imageIndex > 7) imageIndex = 0;
  image.src = `./image/honor/img${imageIndex}.jpg`;
} // changeImg()

function changeText() {
    const textContainer = document.getElementById('text-container');
    const textElement = document.getElementById('text');
    textIndex++;
  
    if (textIndex >= texts.length) textIndex = 0;
    textElement.textContent = texts[textIndex];
} // changeText()
let news = [
  {number: '1',
    date: '12/12/2015',
    text: 'News 1: This is the text for news card 1'
  },
  {number: '2',
    date: '12/13/2015',
    text: 'News 2: This is the text for news card 2'
  },
  {number: '3',
    date: '12/14/2015',
    text: 'News 3: This is the text for news card 3'
  }
];

const newsPrint = (num) => {
  let x,y;
  if(num == 1){
    x = 2, y =3;
  }
  else if (num == 2){
    x=1, y=3;
  }
  else {
    x=1, y=2
  };
  $(`#ball-${num}`).css("background-color","#d8dbde");
  $(`#ball-${x}`).css("background-color","#ffffff");
  $(`#ball-${y}`).css("background-color","#ffffff");
  $('#news-num').text(news[num-1].number);
  $('.card-date').text(news[num-1].date);
  $('.news-card-text').text(news[num-1].text);
}


const timeSlide = () => {
  let counter = 2;
  setInterval(function(){
    if (counter > 3){
      counter = 1;
    }
    newsPrint(counter);
    counter ++;
  }, 5000)
}

newsPrint(1);
timeSlide();
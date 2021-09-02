let city = document.querySelector('.project_info_items_text_city')
let area = document.querySelector('.project_info_items_text_area')
let time = document.querySelector('.project_info_items_text_time')
let cost = document.querySelector('.project_info_items_text_cost')
let img = document.querySelector('.slider_images')

let link1 = document.querySelector('.link_item1')
let link2 = document.querySelector('.link_item2')
let link3 = document.querySelector('.link_item3')

let leftArrow = document.querySelector('.left-arrow')
let rightArrow = document.querySelector('.right-arrow')
let dot1 = document.querySelector('.dot_dot1')
let dot2 = document.querySelector('.dot_dot2')
let dot3 = document.querySelector('.dot_dot3')

let sliderItem = [{
   url: 'img/image1.png',
   city: 'Rostov-on-Don LCD admiral',
   apartmentArea: '81 m2',
   repairTime :'3.5 months',
   repairCost: 'Upon request',
   activeDot() {
      dot1.style.background = `url("img/dot_active.svg") no-repeat`;
      dot2.style.background = `url("img/dot_inactive.svg") no-repeat`;
      dot3.style.background = `url("img/dot_inactive.svg") no-repeat`;
   },
   activeLink() {
      link1.style.textDecoration = 'underline';
      link1.style.color = '#E3B873';
      link2.style.textDecoration = 'none';
      link2.style.color = `rgba(255, 255, 255, 0.3)`;
      link3.style.textDecoration = 'none';
      link3.style.color = `rgba(255, 255, 255, 0.3)`;
   }
},
   {
   url: 'img/image2.png',
   city: 'Sochi Thieves',
   apartmentArea: '105 m2',
   repairTime :'4 months',
   repairCost: 'Upon request',
   activeDot() {
      dot1.style.background = `url("img/dot_inactive.svg") no-repeat`;
      dot2.style.background = `url("img/dot_active.svg") no-repeat`;
      dot3.style.background = `url("img/dot_inactive.svg") no-repeat`;
   },
   activeLink() {
      link1.style.textDecoration = 'none';
      link1.style.color = `rgba(255, 255, 255, 0.3)`;
      link2.style.textDecoration = 'underline';
      link2.style.color = '#E3B873';
      link3.style.textDecoration = 'none';
      link3.style.color = `rgba(255, 255, 255, 0.3)`;
   }
},
   {
      url: 'img/image3.png',
      city: 'Rostov-on-Don Patriotic',
      apartmentArea: '93 m2',
      repairTime :'3 months',
      repairCost: 'Upon request',
      activeDot() {
         dot1.style.background = `url("img/dot_inactive.svg") no-repeat`;
         dot2.style.background = `url("img/dot_inactive.svg") no-repeat`;
         dot3.style.background = `url("img/dot_active.svg") no-repeat`;
      },
      activeLink() {
         link1.style.textDecoration = 'none';
         link1.style.color = `rgba(255, 255, 255, 0.3)`;
         link2.style.textDecoration = 'none';
         link2.style.color = `rgba(255, 255, 255, 0.3)`;
         link3.style.textDecoration = 'underline';
         link3.style.color = '#E3B873';
   }
}]
function slide1(data) {
   img.style.background = `url(${data[0].url})`
   city.innerText = data[0].city;
   area.innerHTML = data[0].apartmentArea;
   time.innerText = data[0].repairTime;
   cost.innerText = data[0].repairCost;
   data[0].activeDot()
   data[0].activeLink()
}

function slide2(data) {
   img.style.background = `url(${data[1].url})`
   city.innerText = data[1].city;
   area.innerText = data[1].apartmentArea;
   time.innerText = data[1].repairTime;
   cost.innerText = data[1].repairCost;
   data[1].activeDot()
   data[1].activeLink()
}

function slide3(data) {
   img.style.background = `url(${data[2].url})`
   city.innerText = data[2].city;
   area.innerText = data[2].apartmentArea;
   time.innerText = data[2].repairTime;
   cost.innerText = data[2].repairCost;
   data[2].activeDot()
   data[2].activeLink()
}

function intialPosition() {
   slide1(sliderItem)
}

intialPosition()

let currentInx = 0

rightArrow.addEventListener('click', () => {
   if (currentInx === 0) {
      currentInx += 1;
      slide2(sliderItem)
   }
   else if (currentInx === 1){
      currentInx += 1;
      slide3(sliderItem)
   }
   else{
      currentInx = 0
      slide1(sliderItem)
   }
})

leftArrow.addEventListener('click', () => {
   if (currentInx === 0) {
      currentInx = 2;
      slide3(sliderItem)
   }
   else if (currentInx === 2){
      currentInx -= 1;
      slide2(sliderItem)
   }
   else{
      currentInx = 0
      slide1(sliderItem)
   }
})

dot1.addEventListener('click', () => {
   currentInx = 0
   slide1(sliderItem)
})

dot2.addEventListener('click', () => {
   currentInx = 1
   slide2(sliderItem)
})

dot3.addEventListener('click', () => {
   currentInx = 2
   slide3(sliderItem)
})

link1.addEventListener('click', () => {
   currentInx = 0
   slide1(sliderItem)
})

link2.addEventListener('click', () => {
   currentInx = 1
   slide2(sliderItem)
})

link3.addEventListener('click', () => {
   currentInx = 2
   slide3(sliderItem)
})
new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    // scrollHorizontally: false,
    navigation: true,

  });

  const Body = document.querySelector('body');
const Nav_btn = document.querySelector('#nav-icon');

// section3 slider
const s_Icons = document.querySelectorAll('.slide-icons li');
const s_Left = document.querySelector('.slide-btn.left');
const s_Right = document.querySelector('.slide-btn.right');
const Bg = document.querySelector('#sec3');
const s_Slider = document.querySelectorAll('.sec3-slider div');
const a_Box = document.querySelectorAll('.a-box a')
const s_reset = () => {
  s_Slider.forEach((elem, idx) => {
    s_Slider[idx].classList.remove('on');
    s_Icons[idx].classList.remove('active');
    a_Box[idx].classList.remove('active')
  });
};

s_Icons.forEach((li) => {
  li.addEventListener('click', (e) => {
    let target = e.target.dataset.index;
    console.log(target);
    s_reset();
    if (li.tagName === 'LI') {
      for (let i = 0; i < s_Icons.length; i++) {
        if (target == i) {
          s_Slider[i].classList.add('on');
          s_Icons[i].classList.add('active');
          a_Box[i].classList.add('active')
          Bg.style.backgroundImage = `url(./img/sec2_bg_${[i]}.png)`;
        }
      }
    }
  });
});

const next = (e) => {
  e.preventDefault();
  let crtSlide = document.querySelector('.sec3-slider div.on');
  let i = crtSlide.dataset.index;
  s_reset();
  i++;
  if (i >= s_Slider.length) {
    i = 0;
  }
  s_Slider[i].classList.add('on');
  s_Icons[i].classList.add('active');
  a_Box[i].classList.add('active');
  Bg.style.backgroundImage = `url(./img/sec2_bg_${[i]}.png)`;
};

s_Right.addEventListener('click', next);

const prev = (e) => {
  e.preventDefault();
  let crtSlide = document.querySelector('.sec3-slider div.on');
  let i = crtSlide.dataset.index;
  s_reset();
  i--;
  if (i < 0) {
    i = s_Slider.length - 1;
  }
  s_Slider[i].classList.add('on');
  s_Icons[i].classList.add('active');
  a_Box[i].classList.add('active');
  Bg.style.backgroundImage = `url(./img/sec2_bg_${[i]}.png)`;
};

s_Left.addEventListener('click', prev);

Nav_btn.addEventListener('click', () => {
  Body.classList.toggle('nav-active');
});


// section5 slider
// const sec4-s_Icons = document.querySelectorAll('.sec4-slide-icons li');
// const sec4-s_Left = document.querySelector('.sec4-slide-btn.left');
// const sec4-s_Right = document.querySelector('.sec4-slide-btn.right');

// const sec4-s_Slider = document.querySelectorAll('.sec4-inner');
// const sec4-a_Box = document.querySelectorAll('.a-box a')
// const sec4-s_reset = () => {
//   sec4-s_Slider.forEach((elem, idx) => {
//     sec4-s_Slider[idx].classList.remove('on');
//     sec4-s_Icons[idx].classList.remove('active');
//     sec4-a_Box[idx].classList.remove('active')
//   });
// };

// s_Icons.forEach((li) => {
//   li.addEventListener('click', (e) => {
//     let target = e.target.dataset.index;
//     console.log(target);
//     s_reset();
//     if (li.tagName === 'LI') {
//       for (let i = 0; i < s_Icons.length; i++) {
//         if (target == i) {
//           sec4-s_Slider[i].classList.add('on');
//           sec4-s_Icons[i].classList.add('active');
//           sec4-a_Box[i].classList.add('active')

//         }
//       }
//     }
//   });
// });

// const sec4-next = (e) => {
//   e.preventDefault();
//   let crtSlide = document.querySelector('.sec4-inner.on');
//   let i = crtSlide.dataset.index;
//   s_reset();
//   i++;
//   if (i >= s_Slider.length) {
//     i = 0;
//   }
//   sec4-s_Slider[i].classList.add('on');
//   sec4-s_Icons[i].classList.add('active');
//   sec4-a_Box[i].classList.add('active');

// };

// s_Right.addEventListener('click', next);

// const sec4-prev = (e) => {
//   e.preventDefault();
//   let crtSlide = document.querySelector('.sec4-inner.on');
//   let i = crtSlide.dataset.index;
//   s_reset();
//   i--;
//   if (i < 0) {
//     i = s_Slider.length - 1;
//   }
//   sec4-s_Slider[i].classList.add('on');
//   sec4-s_Icons[i].classList.add('active');
//   sec4-a_Box[i].classList.add('active');

// };

// s_Left.addEventListener('click', prev);

// Nav_btn.addEventListener('click', () => {
//   Body.classList.toggle('nav-active');
// });
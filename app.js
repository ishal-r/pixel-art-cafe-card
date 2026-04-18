const clickSounds = {
  btn1: new Audio('pop.mp3'),
  btn2: new Audio('pop.mp3'),
  btn3: new Audio('pop.mp3'),
  btn4: new Audio('pop.mp3'),
  btn5: new Audio('pop.mp3'),
  btn6: new Audio('pop.mp3'),
  btnBack: new Audio('pop.mp3')  
};
clickSounds.btn1.volume  = 0.3;
clickSounds.btnBack.volume = 0.3;
clickSounds.btn2.volume  = 0.3;
clickSounds.btn3.volume  = 0.3;
clickSounds.btn4.volume  = 0.3;
clickSounds.btn5.volume  = 0.3;
clickSounds.btn6.volume  = 0.3;

const widget      = document.getElementById('widget');
const backBtn     = document.getElementById('btnBack');
const allBtns     = document.querySelectorAll('.btn');


const homeBg = 'shop2.png';
let onHomepage = true;
  // starts on homepage
const pageMap = {
  btn1: 'open2.png',
  btn2: 'f1.png',
  btn3: 'f2.png',
  btn4: 'f3.png',
  btn5: 'f4.png',
  btn6: 'f5.png'
};

// Helper to change background
function setBackground(image) {
  widget.style.background = `url('${image}') center/contain no-repeat`;
  onHomepage = (image === homeBg); 
}

// Hide all buttons except back
function showBackOnly() {
  allBtns.forEach(btn => {
    btn.style.display = (btn.id === 'btnBack') ? 'block' : 'none';
  });
}

// Show all buttons
function showAllButtons() {
  allBtns.forEach(btn => {
    btn.style.display = 'block';
  });
}

// Clear any overlay text
function clearOverlay() {
  overlayText.style.display = 'none';
  overlayText.textContent = '';
  overlay.style.display = 'none';
  overlay.textContent = '';
  Texty.style.display = 'none';
  Texty.textContent = '';
}
function stopMusic() {
  bgMusic.pause();
  bgMusic.currentTime = 15;

}

Object.entries(pageMap).forEach(([btnId, img]) => {
  document.getElementById(btnId).addEventListener('click', () => {
      if (clickSounds[btnId]) {
      clickSounds[btnId].currentTime = 1.75;
      clickSounds[btnId].play().catch(()=>{});
    }
    // 1) swap the background
    setBackground(img);

    // 2) hide all buttons except back
    showBackOnly();

    // 3) clear any old overlay
    clearOverlay();


  });
});

// Handle back button
backBtn.addEventListener('click', () => {
    if (clickSounds.btnBack) {
    clickSounds.btnBack.currentTime = 1.75;
    clickSounds.btnBack.play().catch(()=>{});
  }
  
  // reset to home
  setBackground(homeBg);
  
  // restore all buttons
  showAllButtons();

  // clear overlay text
  clearOverlay();

});

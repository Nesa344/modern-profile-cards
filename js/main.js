 // Selectiong the HTML elements from the DOM
 const btnOneOpen = document.querySelectorAll('.one-menu-btn');
 const btnOneClose = document.querySelectorAll('.one-menu-btn-close');
 const btnOneOptions = document.querySelectorAll('.one-options-btn');
 const overlayOne = document.querySelectorAll('.card-one-menu');
 const optionsOne = document.querySelectorAll('.card-one-options');
 const cardOne = document.querySelectorAll('.card-one');

 // Adding an event listener for each element
 for(let i = 0;i < cardOne.length;i++) {
   btnOneOpen[i].addEventListener('click', overlayOneOpen);
   btnOneClose[i].addEventListener('click', overlayOneClose);
   btnOneOptions[i].addEventListener('click', optionsOneToggle);

   //Function that opens the card menu when the menu button is pressed
   function overlayOneOpen() {
     overlayOne[i].style.left = '0';
   }
   
   //Function that closes the card menu when the X button is pressed
   function overlayOneClose() {
     overlayOne[i].style.left = '-100%';
   }
   
   //Function that opens and closes the card options when the options button is pressed
   function optionsOneToggle() {
     optionsOne[i].classList.toggle('card-one-options-open');
   }
 }

 
  // Selectiong the HTML elements from the DOM
  const btnTwoOpen = document.querySelectorAll('.two-menu-btn');
  const btnTwoClose = document.querySelectorAll('.two-menu-btn-close');
  const btnTwoOptions = document.querySelectorAll('.two-options-btn');
  const overlayTwo = document.querySelectorAll('.card-two-menu');
  const optionsTwo = document.querySelectorAll('.card-two-options');
  const cardTwo = document.querySelectorAll('.card-two');

  // Adding an event listener for each element
  for (let i = 0; i < cardTwo.length; i++) {
    btnTwoOpen[i].addEventListener('click', overlayTwoOpen);
    btnTwoClose[i].addEventListener('click', overlayTwoClose);
    btnTwoOptions[i].addEventListener('click', optionsTwoToggle);

    //Function that opens the card menu when the menu button is pressed
    function overlayTwoOpen() {
      overlayTwo[i].style.left = '0';
    }

    //Function that closes the card menu when the X button is pressed
    function overlayTwoClose() {
      overlayTwo[i].style.left = '-25.7em';
    }

    //Function that opens and closes the card options when the options button is pressed
    function optionsTwoToggle() {
      optionsTwo[i].classList.toggle('card-two-options-open');
    }
  }

   // Selectiong the HTML elements from the DOM
   const cardFour = document.querySelectorAll('.card-four');
   const btnFour = document.querySelectorAll('.card-four-btn-circle');
   const btnFourLeft = document.querySelectorAll('.four-btn-left');
   const btnFourRight = document.querySelectorAll('.four-btn-right');
   const fourOverlay = document.querySelectorAll('.card-four-top-overlay');
   const fourInfo = document.querySelectorAll('.four-info');
   const fourBtnText = document.querySelectorAll('.four-btn-text');

   // Adding an event listener for each element
   for (let i = 0; i < cardFour.length; i++) {
     fourBtnText[i].innerHTML = '+';
     btnFour[i].addEventListener('click', slideFourOpen);
     
     // Function for all the animations(button slides overlay slide and button changing text)
     function slideFourOpen() {
       fourOverlay[i].classList.toggle('four-overlay-slide');
       btnFourRight[i].classList.toggle('four-btn-right-slide');
       btnFourLeft[i].classList.toggle('four-btn-left-slide');
       fourInfo[i].classList.toggle('four-info-slide');
       
       // Button changes from '+' to '-' when the car opens
       if (fourOverlay[i].classList.contains('four-overlay-slide')) {
         fourBtnText[i].innerHTML = '-';
       } else {
         fourBtnText[i].innerHTML = '+';
       }
     }
   }

    // Selectiong the HTML elements from the DOM
    const btnFive = document.querySelectorAll('.card-five-btn-circle');
    const btnFiveLeft = document.querySelectorAll('.five-btn-left');
    const btnFiveRight = document.querySelectorAll('.five-btn-right');
    const fiveOverlay = document.querySelectorAll('.card-five-top-overlay');
    const fiveInfo = document.querySelectorAll('.five-info');
    const fiveIcons = document.querySelectorAll('.five-social-media');
    const cardFive = document.querySelectorAll('.card-five');

    // Adding an event listener for each element
    for (let i = 0; i < cardFive.length; i++) {
      btnFive[i].innerHTML = '+';
      btnFive[i].addEventListener('click', slideFiveOpen);

      // Function for all the animations(button slides overlay slide and button changing text)
      function slideFiveOpen() {
        fiveOverlay[i].classList.toggle('five-overlay-slide');
        btnFiveRight[i].classList.toggle('five-btn-right-slide');
        btnFiveLeft[i].classList.toggle('five-btn-left-slide');
        fiveInfo[i].classList.toggle('five-info-slide');

        // Button changes from '+' to '-' when the car opens, button moves and icons dissapear
        if (fiveOverlay[i].classList.contains('five-overlay-slide')) {
          btnFive[i].innerHTML = '-';
          btnFive[i].style.top = '2.7em';
          fiveIcons[i].style.display = 'none';
        } else {
          btnFive[i].innerHTML = '+';
          btnFive[i].style.top = '1.4em';
          fiveIcons[i].style.display = 'block';
        }
      }
    }

     // Selectiong the HTML elements from the DOM
     const btnSevenOpen = document.querySelectorAll('.card-seven-btn');
     const btnSevenClose = document.querySelectorAll('.card-seven-close-btn');
     const cardSevenTop = document.querySelectorAll('.card-seven-top');
     const cardSevenMiddle = document.querySelectorAll('.card-seven-middle');
     const cardSevenBottom = document.querySelectorAll('.card-seven-bottom');
     const cardSeven = document.querySelectorAll('.card-seven');
 
     // Adding an event listener for each element
     for (let i = 0; i < cardSeven.length; i++) {
       btnSevenOpen[i].addEventListener('click', cardSevenOpen);
       btnSevenClose[i].addEventListener('click', cardSevenClose);
 
       // Function for fading out
       function cardSevenOpen() {
         cardSevenTop[i].classList.add('fadeOut');
         cardSevenBottom[i].classList.add('fadeOut');
 
         cardSevenBottom[i].style.display = 'none';
         cardSevenTop[i].style.display = 'none';
 
         cardSevenMiddle[i].classList.add('fadeIn');
         cardSevenMiddle[i].style.display = 'block';
       }
 
       // Function for fading back in
       function cardSevenClose() {
         cardSevenTop[i].classList.remove('fadeOut');
         cardSevenBottom[i].classList.remove('fadeOut');
 
         cardSevenBottom[i].style.display = 'block';
         cardSevenTop[i].style.display = 'block';
 
         cardSevenMiddle[i].classList.remove('fadeIn');
         cardSevenMiddle[i].style.display = 'none';
       }
     }

      // Selectiong the HTML elements from the DOM
    const btnEightOpen = document.querySelectorAll('.card-eight-btn');
    const btnEightClose = document.querySelectorAll('.card-eight-close-btn');
    const eightInfo = document.querySelectorAll('.eight-info');
    const cardEightMiddle = document.querySelectorAll('.card-eight-middle');
    const eightStats = document.querySelectorAll('.eight-stats');
    const cardEight = document.querySelectorAll('.card-eight');

    // Adding an event listener for each element
    for (let i = 0; i < cardEight.length; i++) {
      btnEightOpen[i].addEventListener('click', cardEightOpen);
      btnEightClose[i].addEventListener('click', cardEightClose);

      // Function for fading out
      function cardEightOpen() {
        eightInfo[i].classList.add('fadeOut');
        eightStats[i].classList.add('fadeOut');

        eightStats[i].style.display = 'none';
        eightInfo[i].style.display = 'none';

        cardEightMiddle[i].classList.add('fadeIn');
        cardEightMiddle[i].style.display = 'block';
      }

      // Function for fading back in
      function cardEightClose() {
        eightInfo[i].classList.remove('fadeOut');
        eightStats[i].classList.remove('fadeOut');

        eightStats[i].style.display = 'block';
        eightInfo[i].style.display = 'block';

        cardEightMiddle[i].classList.remove('fadeIn');
        cardEightMiddle[i].style.display = 'none';
      }
    }

     // Selectiong the HTML elements from the DOM
     const btnNineOpen = document.querySelectorAll('.card-nine-btn');
     const btnNineClose = document.querySelectorAll('.card-nine-close-btn');
     const cardNineTop = document.querySelectorAll('.card-nine-top');
     const cardNineMiddle = document.querySelectorAll('.card-nine-middle');
     const cardNineBottom = document.querySelectorAll('.card-nine-bottom');
     const cardNine = document.querySelectorAll('.card-nine');
 
     // Adding an event listener for each element
     for (let i = 0; i < cardNine.length; i++) {
       btnNineOpen[i].addEventListener('click', cardNineOpen);
       btnNineClose[i].addEventListener('click', cardNineClose);
 
       // Function for fading out
       function cardNineOpen() {
         cardNineTop[i].classList.add('fadeOut');
         cardNineBottom[i].classList.add('fadeOut');
 
         cardNineBottom[i].style.display = 'none';
         cardNineTop[i].style.display = 'none';
 
         cardNineMiddle[i].classList.add('fadeIn');
         cardNineMiddle[i].style.display = 'block';
       }
 
       // Function for fading back in
       function cardNineClose() {
         cardNineTop[i].classList.remove('fadeOut');
         cardNineBottom[i].classList.remove('fadeOut');
 
         cardNineBottom[i].style.display = 'block';
         cardNineTop[i].style.display = 'block';
 
         cardNineMiddle[i].classList.remove('fadeIn');
         cardNineMiddle[i].style.display = 'none';
       }
     }

       // Selectiong the HTML elements from the DOM
    const btnTenOpen = document.querySelectorAll('.ten-arrow-btn-left');
    const btnTenClose = document.querySelectorAll('.ten-arrow-btn-right');
    const cardTenLeft = document.querySelectorAll('.card-ten-left');
    const cardTenRight = document.querySelectorAll('.card-ten-right');
    const tenFixedButtons = document.querySelectorAll('.ten-buttons-right');
    const cardTen = document.querySelectorAll('.card-ten');

    // Adding an event listener for each element
    for (let i = 0; i < cardTen.length; i++) {
      btnTenOpen[i].addEventListener('click', tenSlideOpen);
      btnTenClose[i].addEventListener('click', tenSlideClose);

      // Function for opening the card(slide animation)
      function tenSlideOpen() {
        cardTenLeft[i].style.left = '-23em';
        cardTenRight[i].style.left = '0';
        tenFixedButtons[i].style.left = '0';
      }

      // Function for closing the card
      function tenSlideClose() {
        cardTenLeft[i].style.left = '0';
        cardTenRight[i].style.left = '23em';
        tenFixedButtons[i].style.left = '23em';
      }
    }

     // Selectiong the HTML elements from the DOM
     const btnTwelve = document.querySelectorAll('.card-twelve-btn-circle');
     const cardTwelveLeft = document.querySelectorAll('.card-twelve-left');
     const cardTwelveRight = document.querySelectorAll('.card-twelve-right');
     const cardTwelve = document.querySelectorAll('.card-twelve');
 
     // Adding an event listener for each element
     for (let i = 0; i < cardTwelve.length; i++) {
       btnTwelve[i].addEventListener('click', cardTwelveOpen)
 
       function cardTwelveOpen() {
         cardTwelveLeft[i].classList.toggle('card-left-open');
         cardTwelveRight[i].classList.toggle('card-right-open');
       }
     }

       // Selectiong the HTML elements from the DOM
    const elevenCircles = document.getElementsByClassName('eleven-circle');
    const cardEleven = document.querySelectorAll('.card-eleven');
    const pagination = document.querySelectorAll('.eleven-pagination');

    for (let i = 0; i < cardEleven.length; i++) {
      // Adding an event listener to all pagination circles
      for (let i = 0; i < elevenCircles.length; i++) {
        elevenCircles[i].addEventListener('click', slideElevenContent);
      }
    }
    
    // Function for the sliding animation when pagination circle is pressed
    function slideElevenContent(e) {
      // Selectiong card right
      e.target.parentElement.parentElement.parentElement.parentElement.children[1].style.left = e.target.getAttribute('data-width');
      // Adding and removing orange background to circles
      for (let i = 0; i < 4; i++) {
        e.target.parentElement.children[i].classList.remove('eleven-circle-active');
      }
      e.target.classList.add('eleven-circle-active');
    }

    const cardsMenuBtn = document.querySelector('.nav-menu-button');
    const navTwo = document.querySelector('.nav-two');
    const lines = document.querySelectorAll('.line');

    cardsMenuBtn.addEventListener('click', navOpen);

    function navOpen() {
      navTwo.classList.toggle('nav-two-open');
      lines[0].classList.toggle('line1');
      lines[1].classList.toggle('line2');
      lines[2].classList.toggle('line3');
    }

    window.onload = function () {
      document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
      }, false);
      document.addEventListener("keydown", function (e) {
        //document.onkeydown = function(e) {
        // "I" key
        if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
          disabledEvent(e);
        }
        // "J" key
        if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
          disabledEvent(e);
        }
        // "S" key + macOS
        if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
          disabledEvent(e);
        }
        // "U" key
        if (e.ctrlKey && e.keyCode == 85) {
          disabledEvent(e);
        }
        // "F12" key
        if (event.keyCode == 123) {
          disabledEvent(e);
        }
      }, false);
      function disabledEvent(e) {
        if (e.stopPropagation) {
          e.stopPropagation();
        } else if (window.event) {
          window.event.cancelBubble = true;
        }
        e.preventDefault();
        return false;
      }
    }; 

   
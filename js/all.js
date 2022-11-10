$(document).ready(function(){
  $('.autoplay').slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                  
              }
          },
          {
              breakpoint: 576,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
  });
});


// $(function() {
//   $("#bg_mountain_01").on(
//     responsive: [
//         {
//             breakpoint: 768,
//             $(".this").removeClass("active");
//             e.preventDefault();
//           }
//             }
//         },
//       ]
//     );
// });
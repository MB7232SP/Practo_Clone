let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




    
    
    var slide = document.querySelector('#slide')
    var slide_left = document.querySelector('#slide_left')
    var slide_right = document.querySelector('#slide_right')
    var slide_2 = document.querySelector('#slide_2')
    var slide_left_2 = document.querySelector('#slide_left_2')
    var slide_right_2 = document.querySelector('#slide_right_2')


    

    
    function slider() {
        var arr = [
            ['https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg',
                'Dentist', "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, excepturi"],
            ['https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg',
            'Dentist', "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, excepturi"],
            ['https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg',
            'Dentist', "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, excepturi"],
            ['https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg',
            'Dentist', "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, excepturi"],
            ['https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-surgeon@2x.jpg',
            'Dentist', "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, excepturi"],
            ['https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-orthopedist@2x.jpg',
            'Dentist', "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, excepturi"],
            ['https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-doctor@2x.jpg',
            'Dentist', "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, excepturi"],
            ['https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-pediatrician@2x.jpg',
            'Dentist', "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, excepturi"],
            ['https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gastroenterologist@2x.jpg',
            'Dentist', "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, excepturi"],
          
        ]
        //arr[element]
        var a = 0
        var b = 4

        function next(i, j) {
            slide.innerHTML = ''
            for (i; i < j; i++) {
                var div = document.createElement('div')
                var content =
                    `
                <div id="img" style="background-image: url(${arr[i][0]})"></div>
                    <div id="content">
                        <p >${arr[i][1]}</p>
                        <p>${arr[i][2]}</p>
                    </div>
                </div>
            `
                div.innerHTML = content
                slide.append(div)
            }
            if (a == 0) {
                slide_left.style.display = 'none'
                slide_right.style.display = 'flex'
                return
            }

        }
        next(a, b)

        slide_left.addEventListener('click', () => {
            a--
            b--
            if (a == 0) {
                slide_left.style.display = 'none'
                slide_right.style.display = 'flex'
                return
            } else {
                slide_left.style.display = 'flex'
                slide_right.style.display = 'flex'
            }
            next(a, b)
        })

        slide_right.addEventListener('click', () => {
            a++
            b++
            if (b == arr.length - 1) {
                slide_right.style.display = 'none'
                slide_left.style.display = 'flex'
            } else {
                slide_right.style.display = 'flex'
                slide_left.style.display = 'flex'
            }
            next(a, b)
        })
    }
    slider()

    


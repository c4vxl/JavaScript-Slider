class slider {
    constructor(sliderElement) {

        // define variables
        this.sliderElement = sliderElement;
        this.dotContainer = sliderElement.querySelector(".dot_container");
        this.slider_next = sliderElement.querySelector(".slider_next");
        this.slider_last = sliderElement.querySelector(".slider_last");
        this.slides = sliderElement.querySelector(".slider_content").querySelectorAll("section");
        this.currentSlide = 0;

        // spawn dots
        for (let i=0;i<this.slides.length;i++) {
            const dotElement = document.createElement("div");
            dotElement.addEventListener("click", (event) => {
                this.displaySlide(i);
            })
            this.dotContainer.appendChild(dotElement);
        }

        // display first slide
        this.displaySlide(0);

        this.slider_next.addEventListener("click", (event) => {
            this.nextSlide();
        });

        this.slider_last.addEventListener("click", (event) => {
            this.lastSlide();
        });
    }

    displaySlide(n) {
        // make a list of all dots
        const dots = this.dotContainer.querySelectorAll("div");

        // set current slide to n (if n > than length of the slides => n = 0 ; if n < than 0 => n = length of slides - 1)
        this.currentSlide = n = (n < 0) ? this.slides.length - 1 : (n > this.slides.length - 1) ? 0 : n;

        // hide all slides
        this.slides.forEach(element => {
            element.style.display = "none";
        });

        // make all dots inactive
        dots.forEach(element => {
            element.classList.remove("active");
        });

        // display current slide
        this.slides[n].style.display = "block";

        // make current dot active
        dots[n].classList.add("active");
    }

    nextSlide() {
        this.displaySlide(this.currentSlide+1);
    }

    lastSlide() {
        this.displaySlide(this.currentSlide-1);
    }
}


document.querySelectorAll(".slider_parent").forEach(element => {
    new slider(element);
})
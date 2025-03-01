gsap.registerPlugin(ScrollTrigger);

let scroll;

const body = document.body;
const select = (e) => document.querySelector(e);
const selectAll = (e) => document.querySelectorAll(e);
//const container = select('.site-main');

initPageTransitions();

// Animation - First Page Load
function initLoaderHome() { 

  var tl = gsap.timeline();

	tl.set(".loading-screen", { 
		top: "0",
	});	

  if ($(window).width() > 540) { 
    tl.set("main .once-in", {
      y: "50vh"
    });
  } else {
    tl.set("main .once-in", {
      y: "10vh"
    });
  }

  tl.set(".loading-words", { 
		opacity: 0,
    y: -50
	});

  tl.set(".loading-words .active", { 
		display: "none",
	});

  tl.set(".loading-words .home-active, .loading-words .home-active-last", { 
		display: "block",
    opacity: 0
	});

  tl.set(".loading-words .home-active-first", { 
		opacity: 1,
	});

  if ($(window).width() > 540) { 
    tl.set(".loading-screen .rounded-div-wrap.bottom", { 
      height: "10vh",
    });	
  } else {
    tl.set(".loading-screen .rounded-div-wrap.bottom", { 
      height: "5vh",
    });	
  }

  tl.set("html", { 
		cursor: "wait"
	});

  tl.call(function() {
    scroll.stop();
  });

  tl.to(".loading-words", {
		duration: .8,
		opacity: 1,
    y: -50,
    ease: "Power4.easeOut",
    delay: .5
	});

  tl.to(".loading-words .home-active", {
		duration: .01,
		opacity: 1,
    stagger: .15,
    ease: "none",
    onStart: homeActive
  },"=-.4");

  function homeActive() {
    gsap.to(".loading-words .home-active", {
      duration: .01,
      opacity: 0,
      stagger: .15,
      ease: "none",
      delay: .15
    });
  }

  tl.to(".loading-words .home-active-last", {
		duration: .01,
		opacity: 1,
    	delay: .15
  });
  
	tl.to(".loading-screen", {
		duration: .8,
		top: "-100%",
		ease: "Power4.easeInOut",
    	delay: .2
  });

  tl.to(".loading-screen .rounded-div-wrap.bottom", {
		duration: 1,
		height: "0vh",
		ease: "Power4.easeInOut"
	},"=-.8");

  tl.to(".loading-words", {
		duration: .3,
		opacity: 0,
    	ease: "linear"
	},"=-.8");

	tl.set(".loading-screen", { 
		top: "calc(-100%)" 
	});	

  tl.set(".loading-screen .rounded-div-wrap.bottom", { 
		height: "0vh"
	});	

  tl.to("main .once-in", {
		duration: 1.5,
    y: "0vh",
    stagger: .07,
		ease: "Expo.easeOut",
    	clearProps: true
	},"=-.8");

  tl.set("html", { 
		cursor: "auto"
	},"=-1.2");

  tl.call(function() {
    scroll.start();
  });
  
}

// Animation - First Page Load
function initLoader() { 

  var tl = gsap.timeline();

	tl.set(".loading-screen", { 
		top: "0",
	});	

  if ($(window).width() > 540) { 
    tl.set("main .once-in", {
      y: "50vh"
    });
  } else {
    tl.set("main .once-in", {
      y: "10vh"
    });
  }

  tl.set(".loading-words", { 
		opacity: 1,
    y: -50
	});

  if ($(window).width() > 540) { 
    tl.set(".loading-screen .rounded-div-wrap.bottom", { 
      height: "10vh",
    });	
  } else {
    tl.set(".loading-screen .rounded-div-wrap.bottom", { 
      height: "5vh",
    });	
  }

  tl.set("html", { 
		cursor: "wait"
	});
  
	tl.to(".loading-screen", {
		duration: .8,
		top: "-100%",
		ease: "Power4.easeInOut",
    delay: .5
  });

  tl.to(".loading-screen .rounded-div-wrap.bottom", {
		duration: 1,
		height: "0vh",
		ease: "Power4.easeInOut"
	},"=-.8");

  tl.to(".loading-words", {
		duration: .3,
		opacity: 0,
    ease: "linear",
	},"=-.8");

	tl.set(".loading-screen", { 
		top: "calc(-100%)" 
	});	

  tl.set(".loading-screen .rounded-div-wrap.bottom", { 
		height: "0vh"
	});	

  tl.to("main .once-in", {
		duration: 1,
    y: "0vh",
    stagger: .05,
		ease: "Expo.easeOut",
    clearProps: "true"
	},"=-.8");

  tl.set("html", { 
		cursor: "auto",
	},"=-.8");

}


// Animation - Page transition In
function pageTransitionIn() {
	var tl = gsap.timeline();

  tl.call(function() {
    scroll.stop();
  });

  tl.set(".loading-screen", { 
		top: "100%" 
	});	

  tl.set(".loading-words", { 
		opacity: 0,
    y: 0
	});

  tl.set("html", { 
		cursor: "wait"
	});

  if ($(window).width() > 540) { 
    tl.set(".loading-screen .rounded-div-wrap.bottom", { 
      height: "10vh",
    });	
  } else {
    tl.set(".loading-screen .rounded-div-wrap.bottom", { 
      height: "5vh",
    });	
  }

	tl.to(".loading-screen", {
		duration: .5,
		top: "0%",
		ease: "Power4.easeIn"
	});

  if ($(window).width() > 540) { 
    tl.to(".loading-screen .rounded-div-wrap.top", {
      duration: .4,
      height: "10vh",
      ease: "Power4.easeIn"
    },"=-.5");
  } else {
    tl.to(".loading-screen .rounded-div-wrap.top", {
      duration: .4,
      height: "10vh",
      ease: "Power4.easeIn"
    },"=-.5");
  }

  tl.to(".loading-words", {
		duration: .8,
		opacity: 1,
    y: -50,
    ease: "Power4.easeOut",
    delay: .05
	});

  tl.set(".loading-screen .rounded-div-wrap.top", {
		height: "0vh"
	});

	tl.to(".loading-screen", {
		duration: .8,
		top: "-100%",
		ease: "Power3.easeInOut"
	},"=-.2");

  tl.to(".loading-words", {
		duration: .6,
		opacity: 0,
    ease: "linear"
	},"=-.8");

  tl.to(".loading-screen .rounded-div-wrap.bottom", {
		duration: .85,
		height: "0",
		ease: "Power3.easeInOut"
	},"=-.6");

  tl.set("html", { 
		cursor: "auto"
	},"=-0.6");

  if ($(window).width() > 540) { 
    tl.set(".loading-screen .rounded-div-wrap.bottom", {
      height: "10vh"
    });
  } else {
    tl.set(".loading-screen .rounded-div-wrap.bottom", {
      height: "5vh"
    });
  }

  tl.set(".loading-screen", { 
		top: "100%" 
	});	

  tl.set(".loading-words", {
		opacity: 0,
	});
  
}


// Animation - Page transition Out
function pageTransitionOut() {
	var tl = gsap.timeline();

  if ($(window).width() > 540) { 
    tl.set("main .once-in", {
      y: "50vh",
    });
  } else {
    tl.set("main .once-in", {
      y: "20vh"
    });
  }
  
  tl.call(function() {
    scroll.start();
  });

  tl.to("main .once-in", {
    duration: 1,
    y: "0vh",
    stagger: .05,
    ease: "Expo.easeOut",
    delay: .8,
    clearProps: "true"
  });

}

function initPageTransitions() {

  //let scroll;

  // do something before the transition starts
  barba.hooks.before(() => {
    select('html').classList.add('is-transitioning');
  });

  // do something after the transition finishes
  barba.hooks.after(() => {
    select('html').classList.remove('is-transitioning');
    // reinit locomotive scroll
    scroll.init();
    scroll.stop();
  });

  // scroll to the top of the page
  barba.hooks.enter(() => {
    scroll.destroy();
  });

  // scroll to the top of the page
  barba.hooks.afterEnter(() => {
    window.scrollTo(0, 0);
    initCookieViews();
  });

  if ($(window).width() > 540) { 
    barba.hooks.leave(() => {
      $(".btn-hamburger, .btn-menu").removeClass('active');
      $("main").removeClass('nav-active');
    }); 
  }
  

  barba.init({
    sync: true,
    debug: false,
    timeout:7000,
    transitions: [{
      name: 'default',
      once(data) {
        // do something once on the initial page load
        initSmoothScroll(data.next.container);
        initScript();
        initCookieViews();
        initLoader();
      },
      async leave(data) {
        // animate loading screen in
        pageTransitionIn(data.current);
        await delay(495);
        data.current.container.remove();
      },
      async enter(data) {
        // animate loading screen away
        pageTransitionOut(data.next);
        initNextWord(data);
      },
      async beforeEnter(data) {
        ScrollTrigger.getAll().forEach(t => t.kill());
        scroll.destroy();
        initSmoothScroll(data.next.container);
        initScript(); 
      },
    }, 
    {
      name: 'to-home',
      from: {
      },
      to: {
        namespace: ['home']
      },
      once(data) {
        // do something once on the initial page load
        initSmoothScroll(data.next.container);
        initScript();
        initCookieViews();
        initLoaderHome();
      },
    }]
  });

  function initSmoothScroll(container) {

    scroll = new LocomotiveScroll({
      	el: container.querySelector('[data-scroll-container]'),
      	smooth: true,
	  	lerp: 0.03, // Linear Interpolation, 0 > 1 // Try 0.01
	  	multiplier: 1.4, // Effect Multiplier
	  	reloadOnContextChange: true,
	  	touchMultiplier: 2,
	  	smoothMobile: 0,
	  	smartphone: {
	  	smooth: !0,
		breakpoint: 767
	  },
	  tablet: {
		smooth: !1,
		breakpoint: 1024
	  },
    });

    window.onresize = scroll.update();

    scroll.on("scroll", () => ScrollTrigger.update());

    ScrollTrigger.scrollerProxy('[data-scroll-container]', {
      scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: container.querySelector('[data-scroll-container]').style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.defaults({
      scroller: document.querySelector('[data-scroll-container]'),
    });

    /**
     * Remove Old Locomotive Scrollbar
     */

    const scrollbar = selectAll('.c-scrollbar');

    if(scrollbar.length > 1) {
      scrollbar[0].remove();
    }

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener('refresh', () => scroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }  
}

function initNextWord(data) {
  // update Text Loading https://github.com/barbajs/barba/issues/507
  let parser = new DOMParser();
  let dom = parser.parseFromString(data.next.html, 'text/html');
  let nextProjects = dom.querySelector('.loading-words');
  document.querySelector('.loading-words').innerHTML = nextProjects.innerHTML;
}

function delay(n) {
	n = n || 2000;
	return new Promise((done) => {
		setTimeout(() => {
			done();
		}, n);
	});
}


/**
 * Fire all scripts on page load
 */
function initScript() {
  select('body').classList.remove('is-loading');
  initCheckTouchDevice();
  initScrolltriggerNav();
  initScrollLetters();
  initLazyLoad();
  initPlayVideoInview();
  initScrolltriggerAnimations();
  initScrollText();
  initScrollReveal();
  initWindowMouseCursor();
  initPlaySlider();
  initVimeo();
}



/**
* Check touch device
*/
function initCheckTouchDevice() {
    
  function isTouchScreendevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;      
  };
  
  if(isTouchScreendevice()){
    $('main').addClass('touch');
    $('main').removeClass('no-touch');
  } else {
    $('main').removeClass('touch');
    $('main').addClass('no-touch');
  }
  $(window).resize(function() {
    if(isTouchScreendevice()){
       $('main').addClass('touch');
       $('main').removeClass('no-touch');
    } else {
       $('main').removeClass('touch');
       $('main').addClass('no-touch');
    }
  });

}


/**
* Cookie Views
*/
function initCookieViews() {
  // Set cookie for columns/rows view
  // https://www.youtube.com/watch?v=rfwiyBoVwdQ&ab_channel=TimothyRicks
  if (Cookies.get("view") == "columns") {
    $('.grid-row .rows-btn').removeClass('active');
    $('.grid-row .columns-btn').addClass('active');
    $('#work .grid-rows-part').removeClass('visible');
    $('#work .grid-columns-part').addClass('visible');
    scroll.update();
    ScrollTrigger.refresh();
  }
}


/**
* Scrolltrigger Scroll Check
*/
function initScrolltriggerNav() {
    
  ScrollTrigger.create({
    start: 'top -30%',
    onUpdate: self => {
      $("main").addClass('scrolled');
    },
    onLeaveBack: () => {
      $("main").removeClass('scrolled');
    },
  });

}


/**
* Scrolltrigger Scroll Letters Home
*/
function initScrollLetters() {

var points = gsap.utils.toArray('.point');
var indicators = gsap.utils.toArray('.indicator');

var height = 100 * points.length;

gsap.set('.indicators', {display: "flex"});
	
var tl = gsap.timeline({
  duration: points.length,
  scrollTrigger: {
    trigger: ".spreadteam",
    start: "top center",
    end: "+="+height+"%",
	scroller: document.querySelector('[data-scroll-container]'),
    scrub: true,
    id: "points",
  }
})

var pinner = gsap.timeline({
  scrollTrigger: {
    trigger: ".spreadteam .wrapper",
    start: "top top",
    end: "+="+height+"%",
	scroller: document.querySelector('[data-scroll-container]'),
    scrub: true,
    pin: ".spreadteam .wrapper",
    pinSpacing: true,
    id: "pinning",
    //markers: true
  }
})



points.forEach(function(elem, i) {
  gsap.set(elem, {position: "absolute", top: 0});

  //tl.to(indicators[i], {backgroundColor: "orange", duration: 0.25}, i)
  tl.from(elem.querySelector('img'), {autoAlpha:0}, i)
  tl.from(elem.querySelector('article'), {autoAlpha:0, translateY: 100}, i)
  
  if (i != points.length-1) {
    //tl.to(indicators[i], {backgroundColor: "#adadad", duration: 0.25}, i+0.75)
    tl.to(elem.querySelector('article'), {autoAlpha:0, translateY: -100}, i + 0.75)
    tl.to(elem.querySelector('img'), {autoAlpha:0}, i + 0.75)
  }
	
});	

}

/**
* Lazy Load
*/
function initLazyLoad() {
    // https://github.com/locomotivemtl/locomotive-scroll/issues/225
    // https://github.com/verlok/vanilla-lazyload
    var lazyLoadInstance = new LazyLoad({ 
      elements_selector: ".lazy",
    });

}

/**
* Play Video Inview
*/
function initPlayVideoInview() {

  let allVideoDivs = gsap.utils.toArray('.playpauze');

  allVideoDivs.forEach((videoDiv, i) => {

    let videoElem = videoDiv.querySelector('video')

    ScrollTrigger.create({
      scroller: document.querySelector('[data-scroll-container]'),
      trigger: videoElem,
      start: '0% 120%',
      end: '100% -20%',
      onEnter: () => videoElem.play(),
      onEnterBack: () => videoElem.play(),
      onLeave: () => videoElem.pause(),
      onLeaveBack: () => videoElem.pause(),
    });

  });
}

/**
* Scrolltrigger Animations Desktop + Mobile
*/
function initScrolltriggerAnimations() {
    
  if(document.querySelector(".footer-wrap")) {
  // Scrolltrigger Animation : Footer + hamburger
  $(".footer-wrap").each(function (index) {
    let triggerElement = $(this);
    let targetElementHamburger = $(".btn-hamburger .btn-click");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "50% 100%",
        end: "100% 120%",
        scrub: 0
      }
    });
    tl.from(targetElementHamburger, {
      boxShadow: "0px 0px 0px 0px rgb(0, 0, 0)",
      ease: "none"
    });
  });
  }

  // Scrolltrigger Animation : Span Lines Intro Home
  if(document.querySelector(".span-lines.animate")) {
  $(".span-lines.animate").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".span-lines.animate .span-line-inner");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        toggleActions:'play none none reset', 
        start: "0% 100%",
        end: "100% 0%"
      }
    });
    if(targetElement) {
      tl.from(targetElement, {
        y: "100%",
        stagger: .01,
        ease: "power3.out",
        duration: 1,
        delay: 0
      });
    }
  });
  }

  if(document.querySelector(".fade-in.animate")) {
  // Scrolltrigger Animation : Fade in
  $(".fade-in.animate").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(this);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        toggleActions:'play none none reset',
        start: "0% 110%",
        end: "100% 0%",
      }
    });
    if(targetElement) {
      tl.from(targetElement, {
        y: "2em",
        opacity: 0,
        ease: "expo.out",
        duration: 1.75,
        delay: 0
      });
    }
  });
  }

  // Disable GSAP on Mobile
  // Source: https://greensock.com/forums/topic/26325-disabling-scrolltrigger-on-mobile-with-mediamatch/
  ScrollTrigger.matchMedia({
    
    // Desktop Only Scrolltrigger 
    "(min-width: 721px)": function() {
   
      
      if(document.querySelector(".footer-footer-wrap")) {
      // Scrolltrigger Animation : Footer General Footer
      $(".footer-footer-wrap").each(function (index) {
        let triggerElement = $(this);
        let targetElementRound = $(".footer-rounded-div .rounded-div-wrap");
        let targetElementArrow = $("footer .arrow");
      
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: "0% 100%",
            end: "100% 100%",
            scrub: 0
          }
        });
        tl.to(targetElementRound, {
          height: 0,
          ease: "none"
        }, 0)
        .from(targetElementArrow, {
          rotate: 15,
          ease: "none"
        }, 0);
      });
      }

      if(document.querySelector(".footer-case-wrap")) {
        // Scrolltrigger Animation : Footer Case
        $(".footer-case-wrap").each(function (index) {
          let triggerElement = $(this);
          let targetElementRound = $(".footer-rounded-div .rounded-div-wrap");
        
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: triggerElement,
              start: "0% 100%",
              end: "100% 100%",
              scrub: 0
            }
          });
          tl.to(targetElementRound, {
            height: 0,
            ease: "none"
          }, 0);
        });
        }
    
    }, // End Desktop Only Scrolltrigger
  
    // Mobile Only Scrolltrigger
    "(max-width: 720px)": function() {
    
      if(document.querySelector(".footer-wrap")) {
      // Scrolltrigger Animation : Footer
      $(".footer-wrap").each(function (index) {
        let triggerElement = $(this);
        let targetElementRound = $(".footer-rounded-div .rounded-div-wrap");
      
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: "0% 100%",
            end: "100% 100%",
            scrub: 0
          }
        });
        tl.to(targetElementRound, {
          height: 0,
          ease: "none"
        }, 0);
      });
    }
    
    } // End Mobile Only Scrolltrigger
  
  }); // End GSAP Matchmedia

const sections = gsap.utils.toArray('.word-lines')

sections.forEach(function (sec, i) {  

  gsap.fromTo(sec, { 
    x: () => i % 2 === 0 ? 0 : -(sec.scrollWidth - window.innerWidth) 
  }, { 
    x: () => i % 2 === 0 ? -(sec.scrollWidth - window.innerWidth) : 0, 
    ease: "none",
    scrollTrigger: {
      trigger: sec,   
      start: () => "top bottom",
      end: () => "bottom top",
	  scroller: document.querySelector('[data-scroll-container]'),
	  duration: 3.0,
      invalidateOnRefresh: true,
      scrub: true,
      //markers: true,
    }
  });

}); 
	
}

function initScrollText() {

let marquee = document.querySelectorAll(".marquee__wrapper");
          marquee.forEach((wrapper, index) => {
            let el = wrapper.querySelector(".box");
            // set a default rate, the higher the value, the faster it is

            let rate = 230;
            if (index === 1) {
                rate = 200;
            } else if (index === 2) {
                rate = 150;
            }
            // get the width of the element
            let distance = el.getBoundingClientRect().width;
            // get the margin-right of the element
            let style = window.getComputedStyle(el);
            let marginRight = parseInt(style.marginRight, 10) || 0;

            // get the total width of the element
            let totalDistance = parseFloat(distance.toFixed(2), 10);
            // get the duration of the animation
            let time = totalDistance / rate;
            console.log(totalDistance, "totalDistance");
            // get the parent of the element
            let container = el.parentElement;

            gsap.to(container, {
                repeat: -1,
                x: -1 * totalDistance,
                ease: "none",
                duration: 30,
                paused: false
            });
            
            gsap.fromTo(".typography-headline-hero", {xPercent: 100}, {
                xPercent: -100,
                duration: 8,
                delay: 0.2,
                ease: "none"
            }); 
        });	  
}
	  
  
function initScrollReveal() {
	
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3
};

let revealCallback = (entries, self) => {
  entries.forEach((entry) => {
    let container = entry.target;
    let img = entry.target.querySelector("img, video, iframe");
    const easeInOut = "power3.out";
    const revealAnim = gsap.timeline({ ease: easeInOut });

    if (entry.isIntersecting) {
      revealAnim.set(container, {
        visibility: "visible"
      });
      revealAnim.fromTo(
        container,
        {
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
        },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1,
          ease: easeInOut
        }
      );
      revealAnim.from(img, 4, {
        scale: 1.4,
        ease: easeInOut,
        delay: -1
      });
      self.unobserve(entry.target);
    }
  });
};

let revealObserver = new IntersectionObserver(revealCallback, options);

document.querySelectorAll(".reveal").forEach((reveal) => {
  revealObserver.observe(reveal);
});

}

function initWindowMouseCursor() {
 
const $bigBall = document.querySelector('.cursor__ball--big');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, .2, {
    x: e.pageX - 5,
    y: e.pageY - 7
  })
}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 2
  })
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  })
}
	
}


function initPlaySlider() {
	
   $('.variable-width').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 6500,
  margin: 10,
  pauseOnHover: false,
  cssEase: 'linear',
  variableWidth: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$('.responsive').slick({
  dots: true,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
	
}

function initVimeo() {

if(Vimeo && document.querySelector('.iframeVimeo iframe')){
var player = new Vimeo.Player(document.querySelector('.iframeVimeo iframe'));
var iframe = document.querySelector('.iframeVimeo').addEventListener('click', function() {
	if(player){
    player.getPaused().then(function(paused) {
        if (paused) {
            player.play();
        } else {
            player.pause();
        }
    }).catch(function(error) {
    });
	}
});	
}
	
}
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const menuList = document.getElementById('menuList');
    const triggerButton = document.getElementById('triggerButton');
    const menuItems = document.querySelectorAll('.menu__list a');

    // Load menu state from localStorage
    if (localStorage.getItem('menuOpen') === 'true') {
        menuList.classList.add('show');
        triggerButton.checked = true;
    } else {
        menuList.classList.remove('show');
        triggerButton.checked = false;
    }

    // Toggle menu and save state
    menuButton.addEventListener('click', function() {
        const isChecked = triggerButton.checked;
        triggerButton.checked = !isChecked;

        if (!isChecked) {
            menuList.classList.add('show');
        } else {
            menuList.classList.remove('show');
        }

        // Save the new state to localStorage
        localStorage.setItem('menuOpen', triggerButton.checked);
    });

    // Add click handlers to close the menu when clicking on a menu item
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Close the menu
            menuList.classList.remove('show');
            triggerButton.checked = false;

            // Update localStorage to reflect that the menu is closed
            localStorage.setItem('menuOpen', false);
        });
    });
});

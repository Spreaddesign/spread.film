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
      inertia: 0.8,
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

    scroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy('[data-scroll-container]', {
      scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: container.querySelector('[data-scroll-container]').style.transform ? "transform" : "fixed"
    });

    /**
     * Remove Old Locomotive Scrollbar
     */

    const scrollbar = selectAll('.c-scrollbar');

    if (scrollbar.length > 1) {
      scrollbar[0].remove();
    }

    var points = gsap.utils.toArray('.point');
    var indicators = gsap.utils.toArray('.indicator');

    var height = 100 * points.length;

    gsap.set('.indicators', {
      display: "flex"
    });

    var tl = gsap.timeline({
      duration: points.length,
      scrollTrigger: {
        trigger: ".spreadteam",
        start: "top center",
        end: "+=" + height + "%",
        scroller: "[data-scroll-container]",
        scrub: true,
        id: "points",
      }
    })

    var pinner = gsap.timeline({
      scrollTrigger: {
        trigger: ".spreadteam .wrapper",
        start: "top top",
        end: "+=" + height + "%",
        scroller: "[data-scroll-container]",
        scrub: true,
        pin: ".spreadteam .wrapper",
        pinSpacing: true,
        id: "pinning",
        //markers: true
      }
    })


    points.forEach(function (elem, i) {
      gsap.set(elem, {
        position: "absolute",
        top: 0
      });

      tl.to(indicators[i], {
        backgroundColor: "orange",
        duration: 0.25
      }, i)
      tl.from(elem.querySelector('img'), {
        autoAlpha: 0
      }, i)
      tl.from(elem.querySelector('article'), {
        autoAlpha: 0,
        translateY: 100
      }, i)

      if (i != points.length - 1) {
        tl.to(indicators[i], {
          backgroundColor: "#adadad",
          duration: 0.25
        }, i + 0.75)
        tl.to(elem.querySelector('article'), {
          autoAlpha: 0,
          translateY: -100
        }, i + 0.75)
        tl.to(elem.querySelector('img'), {
          autoAlpha: 0
        }, i + 0.75)
      }

    });


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
          scroller: "[data-scroll-container]",
          duration: 3.0,
          invalidateOnRefresh: true,
          scrub: true,
          //markers: true,
        }
      });

    });


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
        const revealAnim = gsap.timeline({
          ease: easeInOut
        });

        if (entry.isIntersecting) {
          revealAnim.set(container, {
            visibility: "visible"
          });
          revealAnim.fromTo(
            container, {
              clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
            }, {
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

    // JavaScript Document
    let marquee = document.querySelectorAll(".marquee__wrapper");

    // added event listener because it doesn't get the right width
    addEventListener("load", function () {
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
        gsap.fromTo(".typography-headline-hero", {
          xPercent: 100
        }, {
          xPercent: -100,
          duration: 8,
          delay: 0.2,
          ease: "none"
        });

      });
    });


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
  initWindowInnerheight();
  initCheckTouchDevice();
  initHamburgerNav();
  initMagneticButtons();
  initStickyCursorWithDelay();
  initVisualFilter();
  initScrolltriggerNav();
  initScrollLetters();
  initTricksWords();
  initContactForm();
  initTimeZone();
  initLazyLoad();
  initPlayVideoInview();
  initScrolltriggerAnimations();
}

/**
* Window Inner Height Check
*/
function initWindowInnerheight() {
    
  // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
  $(document).ready(function(){
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    $('.btn-hamburger').click(function(){
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  });

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
  TweenMax.to($bigBall, .4, {
    x: e.pageX - 15,
    y: e.pageY - 15
  })
}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 4
  })
}

function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  })
}
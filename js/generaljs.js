                   
                gsap.registerPlugin(ScrollTrigger);
                const isDesktop = window.matchMedia("(min-width: 767px)").matches;
                if(isDesktop){
                    // lenis for smooth scroll
                    const lenis = new Lenis()
                        // lenis.on('scroll', (e) => {console.log(e)})

                        function raf(time) {
                        lenis.raf(time)
                        requestAnimationFrame(raf)
                        }
                        requestAnimationFrame(raf)

                }
 



                // nav toggle 
                const body = document.querySelector('body');
                const navWraper = document.querySelector('.nav-wraper');
                const line1 = document.querySelector('.line1');
                const line2 = document.querySelector('.line2');
                navWraper.addEventListener('click',()=>{
                    body.classList.toggle('nav-active');
                })
                

                // theme toggle 
                const themeToggle = document.querySelector('.theme-toggle')
                const root = document.querySelector('.root')
                themeToggle.addEventListener('click',()=>{
                    if(root.classList.contains("dark-theme")){
                        localStorage.setItem('color-scheme','light');
                        setTheme();
                    }else{
                        localStorage.setItem('color-scheme','dark');
                        setTheme();
                    }
                })
                //theme reset
                const themeReset = document.querySelector('.theme-reset')
                themeReset.addEventListener('click',()=>{
                    const theme = localStorage.getItem('color-scheme');
                    localStorage.removeItem('color-scheme');
                    setTheme()
                })
                // viewing changes of theme in window
                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches }) => {
                    setTheme()
                });

                // splitig text  for animation
                function textSplit() {
                    let textWrapper = document.querySelectorAll(".text-up");
                    textWrapper.forEach(text =>{
                        text.innerHTML = text.textContent.replace( /./g , "<span class='char'>$&</span>");
                    })
                }
                textSplit();

                //fadeup
                var animateUp = anime.timeline({ loop: false, autoplay:false  })
                animateUp.add({
                    targets: " .char , .hero-joke,.horizontal-text-wraper ",
                    translateY: [120, 0],
                    translateZ: 0,
                    opacity: [0, 1],
                    easing: "easeOutExpo",
                    duration: 1600,
                    delay: (el, i) => 300 + 30 * i,
                })   
                // after loding text animation
                // Wait before playing animation
                window.addEventListener("load", function heroAnimation() {
                    setTimeout(()=>{
                        animateUp.play()
                    }
                    , 1000);
                })





                ScrollTrigger.create({
                        trigger:'.horizontal-text-wraper',
                        scrub: 0,
                        start: "top bottom",
                        end: "bottom top",
                        animation: gsap.to('.sentence-forward', {
                            x:isDesktop ? -150 : -50,
                            duration: isDesktop ? 4:3 // reduce duration for mobile
                        }),
                        // throttle: isDesktop ? 1:0.1  // Adjust the throttle value as needed
                    });

                        
                    const projectWrapers = gsap.utils.toArray('.project-wraper');
                    
                    projectWrapers.forEach(item => {
                        gsap.from(item, {
                            // animation properties
                            y:isDesktop ? 80 : 60 ,
                            opacity:0,
                            duration: 0.8, // reduce duratio
                            scrollTrigger: {
                                trigger: item,
                                toggleActions:"play none none reverse",
                                // scrollTrigger options
                                    start: "10% bottom",
                                    end: "90% top",
                            }
                        });
                        
                    });

                    


                    const projectNames = gsap.utils.toArray('.project-name');
                    projectNames.forEach(item => {
                        gsap.from(item, {
                            // animation properties
                            y:isDesktop ? -80 : -60 ,
                            opacity:0,
                            duration: 0.6, // reduce duratio

                            scrollTrigger: {
                                toggleActions:"play none restart reverse",
                                trigger: item,
                                // scrollTrigger options

                                    start: "120% bottom",
                                    end: "top top",
                                }
                        })
                    });


                    const projectTagsWrapers = gsap.utils.toArray('.project-tags-wrapper');
                    projectTagsWrapers.forEach(item => {
                        gsap.from(item, {
                            // animation properties
                            y:isDesktop ? 40 : 30 ,
                            opacity:0,
                            duration: 0.5, // reduce duratio
                            delay:0.25,

                            scrollTrigger: {
                                toggleActions:"play none none reverse",

                                trigger: item,
                                // scrollTrigger options
                                    start: "30% bottom",
                                    end: "top top",
                                }
                        });
                    });



                    // body bg change based on project  
                    function bodyBgChangeviaProject(project){
                        if(root.classList.contains("dark-theme")){
                            body.style.backgroundColor=project.dataset.bgColorDark;
                        }
                        else if(root.classList.contains("light-theme")){
                            body.style.backgroundColor=project.dataset.bgColorLight;
                        }
                        else {
                            body.style.backgroundColor=project.dataset.bgColorLight;
                        }
                    }
                    projectWrapers.forEach(project=>{
                        project.addEventListener("mouseover",e=>{
                             bodyBgChangeviaProject(project);
                        })
                        project.addEventListener("mouseout",e=>{
                            body.style.backgroundColor='var(--current-bg-color)';
                        })
                    })


                    
                    // project hover scale up
                    const projects = document.querySelectorAll('.project');
                    projects.forEach(project=>{
                        const projectMediaZoom = gsap.timeline();
                        projectMediaZoom.to(project.children[0].children[0], { scale: 1.05, duration: 0.5 , ease: Power3.out});
                        projectMediaZoom.pause();
                        project.addEventListener('mouseenter', () => {
                            projectMediaZoom.play(); // Play the animation
                        });
                        project.addEventListener('mouseleave', () => {
                            projectMediaZoom.reverse(); // Reverse the animation
                        });
                    })

                    // copy clipboard code 
                    // let text = document.querySelector('.myText').innerHTML
                    // const copyContent = async () => {

                    //     try {
                    //         await navigator.permissions.query({ name: "write-on-clipboard" }).then((result) => {
                    //             if (result.state == "granted" || result.state == "prompt") {
                    //               alert("Write access granted!");
                    //               let text = document.getElementById('myText').innerHTML;
                    //             }
                    //           });
                    //       await navigator.clipboard.writeText(text);
                    //       console.log('Content copied to clipboard');
                    //     } catch (err) {
                    //       console.error('Failed to copy: ', err);
                    //     }
                    //   }
                     
                    // document.getElementById('myText').addEventListener("click",()=>{
                        
                        
                    //     copyContent()
                    //     console.log("clicked")
                    // })

                    
                    





                // ScrollTrigger.create({
                //         trigger:'.project-wraper',
                //         start: "center bottom",
                //         end: "bottom top",
                //         animation: gsap.from('.project-wraper', {
                //             y:isDesktop ? 80 : 60 ,
                //             opacity:0,
                //             duration: 1 // reduce duration for mobile
                //         }),
                //         throttle: isDesktop ? 1:0.1  // Adjust the throttle value as needed
                //     });


                    

                        // if(isDesktop){
                        //     gsap.to('.sentence-forward', {
                        //         ScrollTrigger: {
                        //         scrub: true,
                        //         start: "top bottom",
                        //         end: "bottom top",
                        //         // pin:true,
                        //         markers:true,
                                
                        //     },
                        //         x:-400 ,
                        //         duration:3  
                        //     }) // The animation to be triggered
                        //     // ScrollTrigger.create();
                        // }else{
                        //     //     ScrollTrigger.create({
                        //     //     scrub: 0.8,
                        //     //     start: "top bottom",
                        //     //     end: "bottom top",
                        //     //     pin:true,
                        //     //     markers:true,
                        //     //     // animation: gsap.to('.sentence-forward', {x:-400 ,duration:3  }) // The animation to be triggered
                        //     // });
                        // }



                // let t3 = gsap.timeline({ scrollTrigger: {
                //     scrub: 1,
                //     start: "top 100vh",
                //     end: "bottom top",
                //     pin:true,
                //     markers:true,
                // }})

                // t3.to('.horizontal-text-wraper',{
                // y:-600,
                // // rotation:360,
                // duration:3
                // })

              
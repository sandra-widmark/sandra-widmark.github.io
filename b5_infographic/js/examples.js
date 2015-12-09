//jquery tweening function

            var controller;
            $(document).ready(function($) {
                // init controller
                controller = new ScrollMagic();
            });


     
            $(document).ready(function($) {
                // build tween
                var tween = TweenMax.to(".circle-container", 0.5, {backgroundColor: "green", scale: 2.5});

                // build scene
                var scene = new ScrollScene({triggerElement: "second-section"})
                                .setTween(tween)
                                .addTo(controller);

                // show indicators (requires debug extension)
                scene.addIndicators();
            });




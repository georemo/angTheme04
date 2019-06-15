import * as $ from 'jquery';
import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { AppStateService } from './services/app-state.service';
import { SessService } from './services/sess.service';
import PerfectScrollbar from 'perfect-scrollbar';
// declare var $: any;
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angTheme04';
  subscription;

  constructor(
    private appState: AppStateService, /* injecting access to appState. Dectates layout modes eg login, anon, private */
    private sess: SessService
  ) {
  }
  public ngOnInit() {

    $(document).ready(() => {
      console.log('...jquery is ready');
      const $body = $('body');
      const inner = $('.main-wrapper > .inner');
      const closedbar = $('.closedbar');
      const body = $('body');
      const sideLeft = $('#pageslide-left');
      const sidebarWidth = sideLeft.outerWidth(true);
      let activeAnimation = false;
      let hoverSideBar = false;
      const supportTransition = true;
      let $windowWidth;
      let $windowHeight;
      const subViews = $('.subviews');
      const topBar = $('.topbar');
      const mainNavigation = $('.main-navigation');
      const mainContent = $('.main-content');
      const footer = $('.main-wrapper > footer');

      console.log('...01');
      // const mn = document.querySelector('.main-navigation');
      // const psMainNavigation = new PerfectScrollbar('.main-navigation');
      console.log('...02');
      // const psRightWrp = new PerfectScrollbar('.right-wrapper');
      console.log('...03');

      // function to get viewport/window size (width and height)
      const viewport = function () {
        let e = window;
        let a = 'inner';
        // if (!('innerWidth' in window)) {
        //   a = 'client';
        //   e = document.documentElement || document.body;//was throwing error...have not been resolved
        // }
        return {
          width: e[a + 'Width'],
          height: e[a + 'Height']
        };
      };

      // function to adapt the Main Content height to the Main Navigation height
      const runContainerHeight = function () {
        if (subViews.is(':visible')) {
          $('.main-container').css({

            'max-height': $windowHeight - topBar.outerHeight(true),
            'min-height': $windowHeight - topBar.outerHeight(true),

          });
        }
        if ($("#slidingbar-area").is(':visible')) {
          $("#slidingbar-area").css({
            'max-height': $windowHeight
          });
        }
        if ($windowWidth > 991) {
          mainNavigation.css({
            height: $windowHeight - topBar.outerHeight(true) - $(".slide-tools").outerHeight(true)
          });
          $(".navbar-content").css({
            height: $windowHeight - topBar.outerHeight(true)
          });
        } else {
          mainNavigation.css({
            height: $windowHeight - $(".slide-tools").outerHeight(true)
          });
          $(".navbar-content").css({
            height: $windowHeight
          });
        }

        $(".right-wrapper").css({
          height: $windowHeight
        });

        if ($body.hasClass("isMobile") == false && mainNavigation.length) {
          mainNavigation.perfectScrollbar('update');
          $('.right-wrapper').perfectScrollbar('update');
          // psMainNavigation.update();
          // psRightWrp.update();
        }
        if ($("#horizontal-menu").length) {
          mainContent.css({
            "min-height": $windowHeight - topBar.outerHeight(true) - $("#horizontal-menu").outerHeight(true) - footer.outerHeight(true)
          });
        } else {
          mainContent.css({
            "min-height": $windowHeight - topBar.outerHeight(true) - footer.outerHeight(true)
          });
        }

        if (subViews.is(":visible")) {
          subViews.css({
            height: $windowHeight - topBar.outerHeight(true) - $(".toolbar").outerHeight(true)
          });
        }

      };


      // function to adjust the template elements based on the window size
      const runElementsPosition = function () {
        $windowWidth = viewport().width;
        $windowHeight = viewport().height;
        runContainerHeight();

      };


      // function to Right and Left PageSlide
      const runToggleSideBars = function () {
        let configAnimation;
        let extendOptions;
        let globalOptions = {
          duration: 150,
          mobileHA: true,
          progress: () => {
            activeAnimation = true;
          }
        };
        $("#pageslide-left, #pageslide-right").on("mouseover", function (e) {
          hoverSideBar = true;
        }).on("mouseleave", function (e) {
          hoverSideBar = false;
        });



        $('.sb-toggle-left, .closedbar').on('click', (e) => {
          // e.preventDefault();
          console.log('.sb-toggle-left clicked');
          if (activeAnimation == false) {
            console.log('activeAnimation == false');
            console.log(`windowWidth=${$windowWidth}`);
            if ($windowWidth > 991) {
              console.log('$windowWidth > 991');
              $body.removeClass("sidebar-mobile-open");
              if ($body.hasClass("sidebar-close")) {
                if ($body.hasClass("layout-boxed") || $body.hasClass("isMobile")) {
                  $body.removeClass("sidebar-close");
                  closedbar.removeClass("open");
                  $(window).trigger('resize');
                } else {
                  closedbar.removeClass("open").hide();
                  closedbar.css({
                    //translateZ: 0,
                    left: -closedbar.width()
                  });

                  extendOptions = {
                    complete: function () {
                      $body.removeClass("sidebar-close");
                      $(".main-container, #pageslide-left, #footer .footer-inner, #horizontal-menu .container, .closedbar").attr('style', '');
                      $(window).trigger('resize');
                      activeAnimation = false;
                    }
                  };
                  configAnimation = $.extend({}, extendOptions, globalOptions);
                  $(".main-container, footer .footer-inner, #horizontal-menu .container").animate({
                    //translateZ: 0,
                    marginLeft: sidebarWidth
                  }, configAnimation);

                }

              } else {
                if ($body.hasClass("layout-boxed") || $body.hasClass("isMobile")) {
                  $body.addClass("sidebar-close");
                  closedbar.addClass("open");
                  $(window).trigger('resize');
                } else {
                  sideLeft.css({
                    zIndex: 0

                  });
                  extendOptions = {
                    complete: function () {
                      closedbar.show().animate({
                        // translateZ: 0,
                        left: 0
                      }, 100, function () {
                        activeAnimation = false;
                        closedbar.addClass("open");
                        $body.addClass("sidebar-close");
                        $(".main-container, footer .footer-inner, #horizontal-menu .container, .closedbar").attr('style', '');
                        $(window).trigger('resize');
                      });
                    }
                  };
                  configAnimation = $.extend({}, extendOptions, globalOptions);
                  $(".main-container, footer .footer-inner, #horizontal-menu .container").animate({
                    // translateZ: 0,
                    marginLeft: 0
                  }, configAnimation);
                }
              }

            } else {
              if ($body.hasClass("sidebar-mobile-open")) {
                if (supportTransition) {
                  extendOptions = {
                    complete: function () {
                      inner.attr('style', '').removeClass("inner-transform");
                      // remove inner-transform (hardware acceleration) for restore z-index
                      $body.removeClass("sidebar-mobile-open");
                      activeAnimation = false;
                    }
                  };
                  configAnimation = $.extend({}, extendOptions, globalOptions);

                  inner.animate({
                    translateZ: 0,
                    translateX: [-sidebarWidth, 0]
                  }, configAnimation);
                } else {
                  $body.removeClass("sidebar-mobile-open");
                }
              } else {
                if (supportTransition) {
                  inner.addClass("inner-transform");
                  // add inner-transform for hardware acceleration
                  extendOptions = {
                    complete: function () {
                      inner.attr('style', '');
                      $body.addClass("sidebar-mobile-open");
                      activeAnimation = false;
                    }
                  };
                  configAnimation = $.extend({}, extendOptions, globalOptions);
                  inner.animate({
                    translateZ: 0,
                    translateX: [sidebarWidth, 0]
                  }, configAnimation);
                } else {
                  $body.addClass("sidebar-mobile-open");
                }

              }
            }
          }
          e.preventDefault();
        });
        $('.sb-toggle-right').on('click', function (e) {
          e.preventDefault();
          console.log('.sb-toggle-right is clicked ...001');
          console.log('activeAnimation>>');
          console.dir(activeAnimation);
          if (activeAnimation == false) {
            console.log('.sb-toggle-right is clicked ...002');
            console.log('activeAnimation is FASLE');
            if ($windowWidth > 991) {
              console.log('.sb-toggle-right is clicked ...003');
              console.log('$windowWidth > 991');
              $body.removeClass("sidebar-mobile-open");
            }
            if ($body.hasClass("right-sidebar-open")) {
              console.log('.sb-toggle-right is clicked ...004');
              if (supportTransition) {
                console.log('.sb-toggle-right is clicked ...005');
                inner.attr('style', '').removeClass("inner-transform");
                // remove inner-transform (hardware acceleration) for restore z-index
                $body.removeClass("right-sidebar-open");
                activeAnimation = false;
                ////////////////////////////////////////////////
                // ORIGINAL CODES:
                // ================
                // extendOptions = {
                //   complete: function () {
                //     inner.attr('style', '').removeClass("inner-transform");
                //     // remove inner-transform (hardware acceleration) for restore z-index
                //     $body.removeClass("right-sidebar-open");
                //     activeAnimation = false;
                //   }
                // };
                // configAnimation = $.extend({}, extendOptions, globalOptions);
                // inner.animate({
                //   translateZ: 0,
                //   translateX: [sidebarWidth, 0]
                // }, configAnimation);
              } else {
                console.log('.sb-toggle-right is clicked ...006');
                $body.removeClass("right-sidebar-open");
              }
            } else {
              console.log('.sb-toggle-right is clicked ...007');
              if (supportTransition) {
                console.log('.sb-toggle-right is clicked ...008');
                console.log('inner>>');
                console.dir(inner);
                inner.addClass("inner-transform");

                console.log('.sb-toggle-right is clicked ...0081');
                // add inner-transform for hardware acceleration
                inner.attr('style', '');
                $body.addClass("right-sidebar-open");
                activeAnimation = false;

                ////////////////////////////////////////////////
                // ORIGINAL CODES:
                // ================
                // extendOptions = {
                //   complete: function () {
                //     inner.attr('style', '');
                //     $body.addClass("right-sidebar-open");
                //     activeAnimation = false;
                //   }
                // };
                // configAnimation = $.extend({}, extendOptions, globalOptions);
                // inner.animate({
                //   translateZ: 0,
                //   translateX: [-sidebarWidth, 0]
                // }, configAnimation);
              } else {
                console.log('.sb-toggle-right is clicked ...009');
                $body.addClass("right-sidebar-open");
              }
            }
          }
          e.preventDefault();
        });
      };


      const runClosedBarButton = () => {
        let t;
        closedbar.mouseover(() => {
          console.log('closedbar.mouseover triggered');
          if ($body.hasClass("layout-boxed") == false && $body.hasClass("isMobile") == false && closedbar.hasClass("open")) {
            t = setTimeout(function () {
              closedbar.animate({
                left: -closedbar.width()
              });
              sideLeft.css({
                left: -sidebarWidth,
                zIndex: 1021
              }).animate({
                left: 0
              });
            }, 800);
          }

        }).mouseleave(function () {
          console.log('closedbar.mouseover triggered');
          if ($body.hasClass("layout-boxed") == false && $body.hasClass("isMobile") == false) {
            clearTimeout(t);
          }
        });
        sideLeft.mouseleave(function () {
          console.log('sideLeft.mouseover triggered');
          if ($body.hasClass("sidebar-close") && closedbar.hasClass("open") && $body.hasClass("isMobile") == false) {
            sideLeft.animate({
              left: -sidebarWidth

            }, function () {
              closedbar.animate({
                left: 0
              });
              sideLeft.css({
                left: 0,
                zIndex: 0
              });
            });
          }
        });
      }; // end runClosedBarButton()

      runContainerHeight();
      runElementsPosition();
      runToggleSideBars();
      runClosedBarButton();
    }); // end jq on ready()

    //let subRet;
    const maxDistance = this.sess.maxDistance;
    this.subscription =
      fromEvent(document, 'mousemove')
        .subscribe(e => {
          // console.log(e);
          // if (this.sess.isLoggedIn()) {
          //   console.log('loggedin == ture');
          //   const now = new Date().getTime();
          //   console.log('now>>');
          //   console.log(now);
          //   console.log('this.sess.maxDistance>>');
          //   console.log(this.sess.maxDistance);
          //   console.log('maxDistance>>');
          //   console.log(localStorage.getItem('maxDistance'));
          //   this.sess.countDownDate = now + Number(localStorage.getItem('maxDistance'));
          //   console.log('this.sess.countDownDate>>');
          //   console.log(this.sess.countDownDate);
          //   // console.log('subRet>>');
          //   // console.dir(subRet);
          //   // this.countDownDate = subRet;
          // }
        });

  } // end ngOnInit()

  ngOnDestroy() {
    this.subscription.unsubscribe();
    //this.sess.logout();
  }


} // end class AppComponent


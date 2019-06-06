import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerService } from '../../../services/server.service';
import { ApiClientService } from '../../../services/api-client.service';
import { AppStateService } from '../../../services/app-state.service';
import PerfectScrollbar from 'perfect-scrollbar';

interface Resp {
  app_state: any;
  data: any;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public resp: Resp;
  private apiClient: ApiClientService;
  private authObservable: Observable<object>;
  private productsObservable: Observable<object>;
  constructor(
    private http: HttpClient,
    private appState: AppStateService, /* injecting access to appState. Dectates layout modes eg login, anon, private */
    private server: ServerService, /* injecting access to server communications services */
    apiClient: ApiClientService
  ) {
    this.apiClient = apiClient;
    this.resp = {
                  app_state: null,
                  data: null
                };

    // In order to demonstrate that Axios will engage the XSRF protection, let's
    // set an XSRF-TOKEN cookie.
    // --
    // NOTE: This would normally be some unpredictable value set by the server.
    document.cookie = 'XSRF-TOKEN=server-generated-token';
  }

  ngOnInit() {
    var Login = function (
      lc /* instance of LoginComponent...'this' is not accessible inside Login() */
    ) {
      "use strict";
      // const psMainNavigation = new PerfectScrollbar('.main-navigation');
      const runBoxToShow = function () {
        console.log('starting runBoxToShow()');
        let el = $('.box-login');
        if (getParameterByName('box').length) {
          switch (getParameterByName('box')) {
            case "register":
              el = $('.box-register');
              break;
            case "forgot":
              el = $('.box-forgot');
              break;
            default:
              el = $('.box-login');
              break;
          }
        }
        el.show().addClass("animated flipInX").on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
          $(this).removeClass("animated flipInX");
        });
      };
      var runLoginButtons = function () {
        $('.forgot').on('click', function () {
          $('.box-login').removeClass("animated flipInX").addClass("animated bounceOutRight").on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).hide().removeClass("animated bounceOutRight");
            console.log('.box-login clicked');
          });
          $('.box-forgot').show().addClass("animated bounceInLeft").on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).show().removeClass("animated bounceInLeft");

          });
        });
        $('.register').on('click', function () {
          $('.box-login').removeClass("animated flipInX").addClass("animated bounceOutRight").on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).hide().removeClass("animated bounceOutRight");

          });
          $('.box-register').show().addClass("animated bounceInLeft").on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).show().removeClass("animated bounceInLeft");

          });

        });
        $('.go-back').click(function () {
          var boxToShow;
          if ($('.box-register').is(":visible")) {
            boxToShow = $('.box-register');
          } else {
            boxToShow = $('.box-forgot');
          }
          boxToShow.addClass("animated bounceOutLeft").on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            boxToShow.hide().removeClass("animated bounceOutLeft");

          });
          $('.box-login').show().addClass("animated bounceInRight").on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).show().removeClass("animated bounceInRight");

          });
        });
      };
      //function to return the querystring parameter with a given name.
      var getParameterByName = function (name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
      };
      var runSetDefaultValidation = function () {
        $.validator.setDefaults({
          errorElement: "span", // contain the error msg in a small tag
          errorClass: 'help-block',
          errorPlacement: function (error, element) {// render error placement for each input type
            if (element.attr("type") == "radio" || element.attr("type") == "checkbox") {// for chosen elements, need to insert the error after the chosen container
              error.insertAfter($(element).closest('.form-group').children('div').children().last());
            } else if (element.attr("name") == "card_expiry_mm" || element.attr("name") == "card_expiry_yyyy") {
              error.appendTo($(element).closest('.form-group').children('div'));
            } else {
              error.insertAfter(element);
              // for other inputs, just perform default behavior
            }
          },
          ignore: ':hidden',
          success: function (label, element) {
            label.addClass('help-block valid');
            // mark the current input as valid and display OK icon
            $(element).closest('.form-group').removeClass('has-error');
          },
          highlight: function (element) {
            $(element).closest('.help-block').removeClass('valid');
            // display OK icon
            $(element).closest('.form-group').addClass('has-error');
            // add the Bootstrap error class to the control group
          },
          unhighlight: function (element) {// revert the change done by hightlight
            $(element).closest('.form-group').removeClass('has-error');
            // set error class to the control group
          }
        });
      };
      var runLoginValidator = function (lc) {
        var form = $('.form-login');
        var errorHandler = $('.errorHandler', form);
        form.validate({
          rules: {
            username: {
              minlength: 2,
              required: true
            },
            password: {
              minlength: 6,
              required: true
            }
          },
          submitHandler: function (form) {
            errorHandler.hide();
            //form.submit();
            //let qs = getParameterByName('loginQs');
            let inputs = $('#myForm :input');
            console.log('login success');
            let controls = $('.form-login :input');
            let data = [];
            $.each(controls, function () {
              const r = { name: $(this).attr('name'), val: $(this).val() };
              console.log('r>>');
              console.dir(r);
              data.push(r);
            });
            console.log('data>>');
            console.dir(data);
            lc.login(data);
          },
          invalidHandler: function (event, validator) {//display error alert on form submit
            errorHandler.show();
          }
        });
      };
      var runForgotValidator = function () {
        var form2 = $('.form-forgot');
        var errorHandler2 = $('.errorHandler', form2);
        form2.validate({
          rules: {
            email: {
              required: true
            }
          },
          submitHandler: function (form) {
            errorHandler2.hide();
            form2.submit();
          },
          invalidHandler: function (event, validator) {//display error alert on form submit
            errorHandler2.show();
          }
        });
      };
      var runRegisterValidator = function () {
        var form3 = $('.form-register');
        var errorHandler3 = $('.errorHandler', form3);
        form3.validate({
          rules: {
            full_name: {
              minlength: 2,
              required: true
            },
            address: {
              minlength: 2,
              required: true
            },
            city: {
              minlength: 2,
              required: true
            },
            gender: {
              required: true
            },
            email: {
              required: true
            },
            password: {
              minlength: 6,
              required: true
            },
            password_again: {
              required: true,
              minlength: 5,
              equalTo: "#password"
            },
            agree: {
              minlength: 1,
              required: true
            }
          },
          submitHandler: function (form) {
            errorHandler3.hide();
            form3.submit();

          },
          invalidHandler: function (event, validator) {//display error alert on form submit
            errorHandler3.show();
          }
        });
      };
      return {
        // main function to initiate template pages
        init: function (lc) {
          runBoxToShow();
          runLoginButtons();
          runSetDefaultValidation();
          runLoginValidator(lc);
          runForgotValidator();
          runRegisterValidator();
        }
      };
    }();

    $('body').addClass('login');
    Login.init(this);

  }

  async login(data) {
    this.subLogin(data);
    // this.obsvLogin(data);
    // this.loadProducts();

    // const params = {
    //   "ctx": "Sys",
    //   "m": "User",
    //   "c": "UserController",
    //   "a": "Login",
    //   "dat": { "username": "karl", "password": "secret" },
    //   "args": null
    // };
    // this.axiosLogin(params);
  }

  async subLogin(data) {
    console.log('starting LoginComponent::subLogin(data)...01');
    console.log('subLogin/data>>');
    console.dir(data);
    let loginSuccess = false;
    let params = {
      "ctx": "Sys",
      "m": "User",
      "c": "UserController",
      "a": "Login",
      "dat": { "username": data[0].val, "password": data[1].val },
      "args": null
    };

    //this.server.proc1(params);

    this.server.proc(params).subscribe((res) => {
      console.log(res);
      this.appState.setMode('anon');
    });

    // console.log('LoginComponent::login(data)...02');
    // this.authObservable = this.server.proc(params);
    // this.authObservable.subscribe((res) => {
    //   console.log(res);
    //   //this.appState.setMode('anon');
    // });
    //this.appState.setMode('anon');

    // const ret = await this.server.procAsync(params);
    // console.log('ret>>');
    // console.dir(ret);
    // this.appState.setMode('anon');

    //await this.server.procAsync(params);
  }

  async obsvLogin(data) {
    console.log('starting LoginComponent::login(data)...01');
    let loginSuccess = false;
    let params = {
      "ctx": "Sys",
      "m": "User",
      "c": "UserController",
      "a": "Login",
      "dat": { "username": "karl", "password": "secret" },
      "args": null
    };

    console.log('LoginComponent::login(data)...02');
    this.authObservable = this.server.proc(params);
    this.authObservable.subscribe((res) => {
      console.log(res);
      this.appState.setMode('anon');
    });
    // this.appState.setMode('anon');

    // const ret = await this.server.procAsync(params);
    // console.log('ret>>');
    // console.dir(ret);
    // this.appState.setMode('anon');

    //await this.server.procAsync(params);
  }

  // ---
  // PUBLIC METHODS.
  // Consuming axios services
  // ---

  // I load the list of friends.
  // public async loadProducts(): Promise<void> {

  //   try {

  //     // NOTE: For the sake of simplicity, I'm letting the Component talk directly
  //     // to the ApiClient. However, in a production app, I'd create an abstraction
  //     // around Friend access (ie, something like FriendService or FriendGateway)
  //     // which would handle the low-level details of the ApiClient request and
  //     // error handling. But, since this is just a post about using Axios in
  //     // Angular, I'm removing the middle man for the controlled scenario.
  //     this.products = await this.apiClient.get<Product[]>({
  //       url: 'http://localhost:3000/products'
  //       /*
  //       params: {
  //         limit: 10
  //       }
  //       */
  //     });

  //     console.log('products>>');
  //     console.dir(this.products);
  //     this.appState.setMode('anon');

  //   } catch (error) {

  //     console.error(error);

  //   }

  //   // console.log('products>>');
  //   // console.dir(this.products);
  //   // this.appState.setMode('anon');

  // }

  public async axiosLogin(data): Promise<void> {

    try {

      // NOTE: For the sake of simplicity, I'm letting the Component talk directly
      // to the ApiClient. However, in a production app, I'd create an abstraction
      // around Friend access (ie, something like FriendService or FriendGateway)
      // which would handle the low-level details of the ApiClient request and
      // error handling. But, since this is just a post about using Axios in
      // Angular, I'm removing the middle man for the controlled scenario.
      this.resp = await this.apiClient.post<Resp>({
        url: 'http://localhost:8080/api',
        params: data
      });

      console.log('resp>>');
      console.dir(this.resp);
      this.appState.setMode('anon');

    } catch (error) {

      console.error(error);

    }

    // console.log('products>>');
    // console.dir(this.products);
    // this.appState.setMode('anon');

  }

}

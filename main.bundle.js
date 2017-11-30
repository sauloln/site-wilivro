webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_owl_carousel__ = __webpack_require__("../../../../ngx-owl-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_owl_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ngx_owl_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_6__index_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_routes__["a" /* ROUTES */]),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_owl_carousel__["OwlModule"],
                __WEBPACK_IMPORTED_MODULE_10_ng2_page_scroll__["a" /* Ng2PageScrollModule */],
                __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyB_IqTZfHLK-i9L-450YY60qPSxG5GwHBU'
                })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");

var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__index_index_component__["a" /* IndexComponent */] }
];


/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#footer .col-12 {\r\n  font-family: GothamLight;\r\n  font-size: 12px;\r\n  color: #1c303b;\r\n}\r\n\r\n#footer i.fa-facebook-official,\r\n#footer i.fa-youtube-play {\r\n  font-size: 30px;\r\n  cursor: pointer;\r\n  color: #1c303b;\r\n}\r\n\r\n#footer i.fa-facebook-official:hover {\r\n  color: #3b5998;\r\n}\r\n\r\n#footer i.fa-youtube-play:hover {\r\n  color: red;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"footer\" class=\"py-3\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"container\">\r\n      <div class=\"col-12 text-center\">\r\n        <a href=\"https://www.facebook.com/WiLivro\" target=\"_blank\">\r\n          <i class=\"fa fa-facebook-official px-1\" aria-hidden=\"true\"></i>\r\n        </a>\r\n        <a href=\"https://www.youtube.com/user/videoswilivro\" target=\"_blank\">\r\n          <i class=\"fa fa-youtube-play px-1\" aria-hidden=\"true\"></i>\r\n        </a>\r\n      </div>\r\n      <div class=\"col-12 text-center\">\r\n        <i class=\"fa fa-copyright\" aria-hidden=\"true\"></i>\r\n        Wilivro | Todos os direitos reservados\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*posição do video*/\r\n\r\n#ct-video {\r\n  position: relative;\r\n  left: 0;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  height: 730px;\r\n  z-index: -1;\r\n}\r\n\r\n#ct-video .container {\r\n  height: 100%;\r\n  padding-top: 90px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  color: #fff;\r\n}\r\n\r\n#ct-video .container h1 {\r\n  font-family: GothamXLight;\r\n  font-size: 78px;\r\n}\r\n\r\n#ct-video .container div p {\r\n  font-family: GothamLight;\r\n  font-size: 24px;\r\n}\r\n\r\nvideo#bg-vid {\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  width: auto;\r\n  height: auto;\r\n  z-index: -1000;\r\n}\r\n\r\n.shadow {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(230, 190, 0, 0.35);\r\n  top: 0;\r\n  left: 0;\r\n  z-index: -100;\r\n}\r\n\r\n\r\n/* Section Sobre */\r\n\r\n#sobre h1 {\r\n  color: #1c303b;\r\n}\r\n\r\n#sobre p {\r\n  font-family: OpenSansLight;\r\n  font-size: 22px;\r\n  color: #1c303b;\r\n}\r\n\r\n\r\n/* section Produtos */\r\n\r\n#produtos .container-fluid {\r\n  background-color: #3da490;\r\n}\r\n\r\n#produtos h4 {\r\n  color: #e6b653;\r\n  --laranja: #fdc00f;\r\n  font-family: GothamBold;\r\n}\r\n\r\n#produtos p {\r\n  font-family: OpenSansLight;\r\n  font-size: 19px;\r\n  font-weight: 100;\r\n  color: #fff;\r\n}\r\n\r\n#produtos button {\r\n  padding: 15px 50px;\r\n  background-color: #fdc00f;\r\n  border-bottom: 3px solid #d7a30d;\r\n  color: #1c303b;\r\n  font-family: OpenSansBold;\r\n  cursor: pointer;\r\n}\r\n\r\n#produtos button:hover {\r\n  background-color: #f4b500;\r\n  border-bottom: 3px solid #fdc00f;\r\n}\r\n\r\n.c-parallax {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  -webkit-transform-style: inherit;\r\n          transform-style: inherit;\r\n}\r\n\r\n\r\n/* Section Resultado */\r\n\r\n#resultado {\r\n  background: #1c303b;\r\n  background: url(" + __webpack_require__("../../../../../src/assets/img/criancas.jpg") + ") no-repeat;\r\n  background-size: cover;\r\n  background-position: 50%;\r\n  height: auto;\r\n}\r\n\r\n#resultado div.col-12,\r\n#resultado div.col-sm-4 {\r\n  color: #e6b653;\r\n  height: auto;\r\n  margin-left: -3px;\r\n}\r\n\r\n#resultado span.plus {\r\n  color: #fdc00f;\r\n  font-family: OpenSansLight;\r\n}\r\n\r\n#resultado span.cont {\r\n  color: #fff;\r\n  font-family: OpenSansBold;\r\n}\r\n\r\n#resultado div.object {\r\n  font-family: OpenSansLight;\r\n}\r\n\r\n\r\n/* Section Clientes */\r\n\r\n#clientes {\r\n  background: #E7E6E3;\r\n}\r\n\r\n#clientes h1 {\r\n  color: #1c303b;\r\n}\r\n\r\n#clientes .owl-item,\r\n#clientes .owl-carousel.owl-loaded {\r\n  height: 150px;\r\n}\r\n\r\n#clientes .owl-item {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-filter: grayscale(100%);\r\n  filter: grayscale(100%);\r\n}\r\n\r\n#clientes .owl-item:hover {\r\n  cursor: pointer;\r\n  -webkit-filter: grayscale(0%);\r\n  filter: grayscale(0%);\r\n}\r\n\r\n#clientes .owl-dots {\r\n  margin-top: -20px;\r\n}\r\n\r\n\r\n/* Section Interessado */\r\n\r\n#interessado {\r\n  background: rgb(204, 53, 53);\r\n  background: linear-gradient(to right, rgba(204, 53, 53, 1) 0%, rgba(212, 110, 110, 1) 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cc3535', endColorstr='#d46e6e', GradientType=1);\r\n}\r\n\r\n#interessado p {\r\n  margin: 50px 0;\r\n  font-size: 22px;\r\n  color: #fff;\r\n  font-family: GothamLight;\r\n}\r\n\r\n#interessado .input-group {\r\n  padding-bottom: 10px;\r\n}\r\n\r\n#interessado .input-group-addon .fa {\r\n  font-size: 30px;\r\n}\r\n\r\n#interessado .input-group-addon {\r\n  height: auto;\r\n  background: rgba(255, 255, 255, .75);\r\n  color: #828282;\r\n  border: 1px solid rgba(0, 0, 0, .15) !important;\r\n  border-right: none !important;\r\n}\r\n\r\n#interessado .input-group-addon:nth-of-type(1) {\r\n  width: 56px;\r\n  height: 58px;\r\n}\r\n\r\n#interessado .input-group-addon.bars {\r\n  width: 65px;\r\n}\r\n\r\n#interessado input,\r\n#interessado select {\r\n  height: 58px;\r\n  color: #636c72;\r\n  border: 1px solid rgba(0, 0, 0, .15) !important;\r\n  border-left: none !important;\r\n  font-family: GothamLight;\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n  background: rgba(255, 255, 255, .75);\r\n}\r\n\r\n#interessado textarea {\r\n  color: #828282;\r\n  border: 1px solid rgba(0, 0, 0, .15) !important;\r\n  font-family: GothamLight;\r\n  background: rgba(255, 255, 255, .75);\r\n  height: 126px;\r\n}\r\n\r\n#interessado button {\r\n  font-family: GothamLight;\r\n  background-color: transparent;\r\n  color: #fff;\r\n  border: 1px solid #e6b653;\r\n  width: 100%;\r\n  padding: 15px 0;\r\n  cursor: pointer;\r\n  height: 58px;\r\n  margin-top: 10px;\r\n}\r\n\r\ninput:-webkit-autofill,\r\ninput:-webkit-autofill:hover,\r\ninput:-webkit-autofill:focus,\r\ninput:-webkit-autofill:active {\r\n  transition: background-color 5000s ease-in-out 0s;\r\n}\r\n\r\n\r\n/* Section Wilivro mapa */\r\n\r\nagm-map {\r\n  height: 400px;\r\n}\r\n\r\n#wilivro {\r\n  overflow: hidden;\r\n}\r\n\r\n#wilivro .teste {\r\n  position: relative;\r\n  height: 100px;\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n#wilivro .btn {\r\n  z-index: 12;\r\n  height: 150px;\r\n  background: #ebc77b;\r\n  border-radius: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n#wilivro .btn.active {\r\n  background: #e6b653;\r\n}\r\n\r\n#wilivro>.row>.btn:nth-of-type(1) {\r\n  border-right: 2px solid #e7e6e3;\r\n}\r\n\r\n#wilivro .btn p {\r\n  font-family: GothamLight;\r\n}\r\n\r\n.title {\r\n  font-family: GothamXLight;\r\n  color: #fff;\r\n}\r\n\r\n\r\n/* CSS Smartphones */\r\n\r\n@media (max-width: 992px) {\r\n  #ct-video {\r\n    background: url(" + __webpack_require__("../../../../../src/assets/img/mob.png") + ") no-repeat;\r\n    background-size: auto 100%;\r\n    background-position: center;\r\n  }\r\n  #bg-vid {\r\n    display: none;\r\n  }\r\n  #ct-video .container h1 {\r\n    text-align: center;\r\n    font-family: GothamXLight;\r\n    font-size: 50px;\r\n  }\r\n  #ct-video .container div p {\r\n    font-family: GothamLight;\r\n    font-size: 20px;\r\n  }\r\n  /* Section Produtos */\r\n  #produtos h1 {\r\n    font-size: 33px;\r\n    margin-bottom: 50px;\r\n  }\r\n  #produto2 {\r\n    border-top: 2px solid #46b29d;\r\n    border-bottom: 2px solid #46b29d;\r\n  }\r\n  .c-parallax {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    -webkit-box-flex: 100%;\r\n        -ms-flex: 100%;\r\n            flex: 100%;\r\n    padding: 10%;\r\n    text-align: center;\r\n  }\r\n  /* Section Resultado */\r\n  #resultado h1 {\r\n    font-size: 30px;\r\n  }\r\n  #resultados {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n  #resultado span.plus {\r\n    font-size: 60px;\r\n  }\r\n  #resultado span.cont {\r\n    font-size: 60px;\r\n  }\r\n  #resultado div.object {\r\n    font-size: 20px;\r\n    margin-top: -20px;\r\n    margin-left: 35px;\r\n  }\r\n  /* Section Interessado */\r\n  #interessado h1 {\r\n    font-size: 30px;\r\n  }\r\n  .b-title {\r\n    border-bottom: 2px solid #e6b653;\r\n  }\r\n  /* Final CSS Smartphones */\r\n}\r\n\r\n@media (min-width: 993px) {\r\n  #produto1,\r\n  #produto2,\r\n  #produto3 {\r\n    position: relative;\r\n    height: 505px;\r\n    padding: 150px 0;\r\n  }\r\n  #produto1 {\r\n    background: url(" + __webpack_require__("../../../../../src/assets/img/tablet1.png") + ") no-repeat;\r\n    background-size: 50%;\r\n    background-attachment: fixed;\r\n    background-position: 100% 50%;\r\n    background-color: #3da490;\r\n  }\r\n  #produto2 {\r\n    background: url(" + __webpack_require__("../../../../../src/assets/img/tablet2.png") + ") no-repeat;\r\n    background-size: 50%;\r\n    background-attachment: fixed;\r\n    background-position: 100% 50%;\r\n    border-top: 2px solid #46b29d;\r\n    border-bottom: 2px solid #46b29d;\r\n    background-color: #3da490;\r\n  }\r\n  #produto3 {\r\n    background: url(" + __webpack_require__("../../../../../src/assets/img/tablet3.png") + ") no-repeat;\r\n    background-size: 50%;\r\n    background-attachment: fixed;\r\n    background-position: 100% 50%;\r\n    background-color: #3da490;\r\n  }\r\n  /* Section Resultado */\r\n  #resultado div.col-4 {\r\n    color: #e6b653;\r\n    height: 308px;\r\n    margin-left: -3px;\r\n  }\r\n  #resultado span.plus {\r\n    color: #fdc00f;\r\n    font-size: 80px;\r\n    font-family: OpenSansLight;\r\n  }\r\n  #resultado span.cont {\r\n    color: #fff;\r\n    font-size: 80px;\r\n    font-family: OpenSansBold;\r\n  }\r\n  #resultado div.object {\r\n    font-family: OpenSansLight;\r\n    font-size: 28px;\r\n    margin-top: -30px;\r\n    margin-left: 50px;\r\n  }\r\n  .c-parallax {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-align: baseline;\r\n        -ms-flex-align: baseline;\r\n            align-items: baseline;\r\n  }\r\n  .title {\r\n    border-bottom: 2px solid #e6b653;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"ct-video\">\r\n  <video autoplay loop id=\"bg-vid\">\r\n    <source src=\"assets/media/home.mp4\" type=\"video/mp4\">\r\n    <source src=\"assets/media/home.webm\" type=\"video/webm\">\r\n  </video>\r\n  <div class=\"shadow\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"d-flex flex-column justify-content-center align-items-center \">\r\n      <h1>Transforme a educação</h1>\r\n      <p class=\"col-10 text-center\">Conheça as soluções da Wilivro e junte-se as organizações que já estão inovando a educação com o uso da tecnologia</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<section id=\"sobre\">\r\n  <div class=\"container-fluid px-0\">\r\n    <div class=\"d-flex flex-column justify-content-center align-items-center mt-4\">\r\n\r\n      <div class=\"col-12 text-center b-title\">\r\n        <h1 class=\"py-5 px-5 title d-inline-table\">SOBRE</h1>\r\n      </div>\r\n\r\n      <img class=\"my-4\" src=\"assets/img/icons/sobre.png\" alt=\"\">\r\n      <p class=\"col-10 col-sm-10 col-md-8 col-lg-6 text-center mb-5\">\r\n        Nunca é demais lembrar o peso e o significado destes problemas, uma vez que a consulta aos diversos militantes acarreta um\r\n        processo de reformulação e modernização dos níveis de motivação departamental. Uma vez que a consulta aos diversos\r\n        militantes acarreta um processo de reformulação.\r\n      </p>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section id=\"produtos\">\r\n  <div class=\"container-fluid px-0\">\r\n    <div class=\"col-12 text-center b-title\">\r\n      <h1 class=\"py-5 px-5 my-0 d-inline-table title\">NOSSOS PRODUTOS</h1>\r\n    </div>\r\n    <div id=\"produto1\">\r\n      <div class=\"c-parallax col-lg-4 offset-lg-2\">\r\n        <h4>PLATAFORMA DE ENSINO PERSONALIZADO</h4>\r\n        <p>\r\n          Uma vez que a consulta aos diversos militantes acarreta um processo de reformulação e modernização dos níveis de motivação\r\n          departamental. uma vez que a consulta aos diversos militantes acarreta um processo de reformulação.\r\n        </p>\r\n        <button class=\"btn\">SAIBA MAIS</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div id=\"produto2\">\r\n      <div class=\"c-parallax col-lg-4 offset-lg-2\">\r\n        <h4>CURSOS ON-LINE</h4>\r\n        <p>\r\n          Uma vez que a consulta aos diversos militantes acarreta um processo de reformulação e modernização dos níveis de motivação\r\n          departamental. Uma vez que a consulta aos diversos militantes acarreta um processo de reformulação.\r\n        </p>\r\n        <button class=\"btn\">SAIBA MAIS</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div id=\"produto3\">\r\n      <div class=\"c-parallax col-lg-4 offset-lg-2\">\r\n        <h4>GAMES</h4>\r\n        <p>\r\n          Uma vez que a consulta aos diversos militantes acarreta um processo de reformulação e modernização dos níveis de motivação\r\n          departamental. Uma vez que a consulta aos diversos militantes acarreta um processo de reformulação.\r\n        </p>\r\n        <button class=\"btn\">SAIBA MAIS</button>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</section>\r\n\r\n<section id=\"resultado\">\r\n  <div class=\"container-fluid px-0\">\r\n\r\n    <div class=\"col-12 text-center b-title\">\r\n      <h1 class=\"py-5 px-5 my-0 d-inline-table title\">RESULTADOS</h1>\r\n    </div>\r\n\r\n    <div id=\"resultados\" class=\"col-12 px-0 pt-4 pb-5\">\r\n      <div class=\"col-12 col-sm-4 px-0 d-inline-flex flex-column justify-content-center align-items-center\">\r\n        <div>\r\n          <span class=\"plus\">+</span>\r\n          <span class=\"cont\" data-jump=\"500\" data-speed=\"0.1\" data-total=\"200000\" data-inicial=\"0\">0</span>\r\n        </div>\r\n        <div class=\"object\">alunos alcançados</div>\r\n      </div>\r\n\r\n      <div class=\"col-12 col-sm-4 px-0 d-inline-flex flex-column justify-content-center align-items-center\">\r\n        <div>\r\n          <span class=\"plus\">+</span>\r\n          <span class=\"cont\" data-jump=\"5\" data-speed=\"1\" data-total=\"1735\" data-inicial=\"0\">0</span>\r\n        </div>\r\n        <div class=\"object\">escolas</div>\r\n      </div>\r\n\r\n      <div class=\"col-12 col-sm-4 px-0 d-inline-flex flex-column justify-content-center align-items-center\">\r\n        <div>\r\n          <span class=\"plus\">+</span>\r\n          <span class=\"cont\" data-jump=\"2\" data-speed=\"1\" data-total=\"450\" data-inicial=\"0\">0</span>\r\n        </div>\r\n        <div class=\"object\">municípios</div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section id=\"clientes\">\r\n  <div class=\"container-fluid px-0\">\r\n\r\n    <div class=\"col-12 text-center b-title\">\r\n      <h1 class=\"py-5 px-5 my-0 d-inline-table title\">CLIENTES</h1>\r\n    </div>\r\n\r\n    <div class=\"owl-carousel owl-theme\">\r\n      <div *ngFor=\"let image of images\" class=\"item\">\r\n        <img class=\"px-3\" src=\"{{image}}\" alt=\"\">\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</section>\r\n\r\n<section id=\"interessado\" class=\"pb-5\">\r\n  <div class=\"container-fluid px-0\">\r\n\r\n    <div class=\"col-12 text-center b-title\">\r\n      <h1 class=\"py-5 px-md-5 my-0 d-inline-table title\">INTERESSADO(A)?</h1>\r\n    </div>\r\n    <div class=\"col-12 text-center\">\r\n      <p>Vamos adorar falar com você</p>\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n      <form class=\"col-12\" id=\"contato\" action=\"http://formspree.io/wilivro@wilivro.com.br\" method=\"post\">\r\n\r\n        <div class=\"row mb-0 pb-0\">\r\n          <div class=\"col-12 col-md-6 px-2\">\r\n            <div class=\"col-12 px-0\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-addon\">\r\n                  <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n                </div>\r\n                <input name=\"nome\" type=\"text\" class=\"form-control\" placeholder=\"Nome\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12 px-0\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-addon\">\r\n                  <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\r\n                </div>\r\n                <input name=\"email\" type=\"text\" class=\"form-control\" placeholder=\"E-mail\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12 px-0\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-addon\">\r\n                  <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\r\n                </div>\r\n                <input name=\"telefone\" type=\"number\" class=\"form-control\" placeholder=\"Telefone\" required>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-md-6 px-2\">\r\n            <div class=\"form-group\">\r\n              <textarea name=\"mensagem\" class=\"form-control\" placeholder=\"Digite aqui o seu texto\" rows=\"5\" required></textarea>\r\n              <button type=\"submit\" class=\"btn\">ENVIAR</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 text-center px-2\">\r\n            <div id=\"msgForm\"></div>\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n</section>\r\n\r\n<section id=\"wilivro\">\r\n  <div class=\"row col-12 mx-0 px-0\">\r\n    <div class=\"btn unit active col-12 col-md-6\" (mouseenter)=\"ngClickRJ($event)\">\r\n      <h1>RJ</h1>\r\n      <p>\r\n        Av. Afrânio de Melo Franco, 333\r\n        <br/>Quintandinha - Petrópolis - RJ - Brasil\r\n        <br/>+55 24 2248-7384\r\n        <br/>contato@wilivro.com.br\r\n      </p>\r\n    </div>\r\n    <div class=\"btn unit col-12 col-md-6\" (mouseenter)=\"ngClickRN($event)\">\r\n      <h1>RN</h1>\r\n      <p>\r\n        Rua Coronel José Guimarães, 136\r\n        <br/>Lagoa Nova - Natal - RN - Brasil\r\n        <br/>+55 84 3206-0243\r\n        <br/>contato@wilivro.com.br\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [styles]=\"styles\" [scrollwheel]=\"scrollwheel\" [zoom]=\"zoom\" [styles]=\"styles\">\r\n    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [iconUrl]=\"iconUrl\"></agm-marker>\r\n  </agm-map>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var on = true;
var PATH = "assets/img/home/clientes/";
var isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? true : false;
var IndexComponent = (function () {
    function IndexComponent(titleService) {
        this.titleService = titleService;
        this.lat = -22.532491;
        this.lng = -43.209290;
        this.scrollwheel = false;
        this.zoom = 16;
        this.styles = [
            {
                elementType: "geometry",
                stylers: [{ color: "#1d2c4d" }]
            },
            {
                elementType: "labels.text.fill",
                stylers: [{ color: "#8ec3b9" }]
            },
            {
                elementType: "labels.text.stroke",
                stylers: [{ color: "#1a3646" }]
            },
            {
                featureType: "administrative.country",
                elementType: "geometry.stroke",
                stylers: [{ color: "#4b6878" }]
            },
            {
                featureType: "administrative.land_parcel",
                elementType: "labels.text.fill",
                stylers: [{ color: "#64779e" }]
            },
            {
                featureType: "administrative.province",
                elementType: "geometry.stroke",
                stylers: [{ color: "#4b6878" }]
            },
            {
                featureType: "landscape.man_made",
                elementType: "geometry.stroke",
                stylers: [{ color: "#334e87" }]
            },
            {
                featureType: "landscape.natural",
                elementType: "geometry",
                stylers: [{ color: "#023e58" }]
            },
            {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{ color: "#283d6a" }]
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6f9ba5" }]
            },
            {
                featureType: "poi",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#1d2c4d" }]
            },
            {
                featureType: "poi.park",
                elementType: "geometry.fill",
                stylers: [{ color: "#023e58" }]
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#3C7680" }]
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#304a7d" }]
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#98a5be" }]
            },
            {
                featureType: "road",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#1d2c4d" }]
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#2c6675" }]
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#255763" }]
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#b0d5ce" }]
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#023e58" }]
            },
            {
                featureType: "transit",
                elementType: "labels.text.fill",
                stylers: [{ color: "#98a5be" }]
            },
            {
                featureType: "transit",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#1d2c4d" }]
            },
            {
                featureType: "transit.line",
                elementType: "geometry.fill",
                stylers: [{ color: "#283d6a" }]
            },
            {
                featureType: "transit.station",
                elementType: "geometry",
                stylers: [{ color: "#3a4762" }]
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#0e1626" }]
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#4e6d70" }]
            }
        ];
        this.images = [
            PATH + "logo_Gov_Ceara-01.png",
            PATH + "logo_novo.png",
            PATH + "logo_topo.png",
            PATH + "ensinart-logo-01.png",
            PATH + "pro-cidadania.png"
        ];
    }
    IndexComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    IndexComponent.prototype.ngOnInit = function () {
        if (!isMobile) {
            this.iconUrl = 'assets/img/icons/markerRJ.svg';
        }
        this.setTitle('Wilivro');
        this.resultados();
        this.habilitarFormSubmit();
    };
    IndexComponent.prototype.ngAfterViewInit = function () {
        var qtdItems = 5;
        if (isMobile) {
            qtdItems = 2;
        }
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            items: qtdItems,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        });
    };
    IndexComponent.prototype.ngClickRN = function (el) {
        this.ngToggle(el);
        if (!isMobile) {
            this.iconUrl = 'assets/img/icons/markerRN.svg';
        }
        this.lat = -5.817215;
        this.lng = -35.213243;
    };
    IndexComponent.prototype.ngClickRJ = function (el) {
        this.ngToggle(el);
        if (!isMobile) {
            this.iconUrl = 'assets/img/icons/markerRJ.svg';
        }
        this.lat = -22.532491;
        this.lng = -43.209290;
    };
    IndexComponent.prototype.ngToggle = function (el) {
        if ($(el.path[1]).hasClass('active'))
            return;
        $('.unit').toggleClass('active');
    };
    IndexComponent.prototype.habilitarFormSubmit = function () {
        var $contactForm = $('#contato');
        $contactForm.submit(function (e) {
            e.preventDefault();
            $.ajax({
                url: 'http://formspree.io/wilivro@wilivro.com.br',
                type: 'POST',
                data: $(this).serialize(),
                dataType: 'json',
                beforeSend: function () {
                    $contactForm.find('#msgForm').html('<div class="alert alert-info">Enviando mensagem</div>');
                    $contactForm[0].reset();
                },
                success: function (data) {
                    $contactForm.find('.alert-info').html('<div class="alert alert-success">Mensagem enviada!</div>').removeClass('alert alert-info');
                },
                error: function (err) {
                    console.log(err);
                    $contactForm.find('.alert-info').html('<div class="alert alert-danger">Ocorreu um erro ao enviar sua mensagem, tente novamente mais tarde.</div>').removeClass('alert alert-info');
                }
            });
        });
    };
    IndexComponent.prototype.contador = function (el, inicial, total, speed, jump) {
        setInterval(function () {
            if (inicial <= total) {
                el.innerHTML = inicial;
            }
            inicial = inicial + jump;
        }, speed);
    };
    IndexComponent.prototype.resultados = function () {
        if (isMobile) {
            $('span.cont').map(function () {
                var total = $(this).attr('data-total');
                $(this).html(total);
            });
            return;
        }
        var _this = this;
        $(document).scroll(function () {
            if (!on)
                return;
            if (window.scrollY > $('#resultado').offset().top - window.innerHeight / 2) {
                $('span.cont').map(function () {
                    var inicial = $(this).attr('data-inicial');
                    var total = $(this).attr('data-total');
                    var speed = $(this).attr('data-speed');
                    var jump = $(this).attr('data-jump');
                    _this.contador(this, parseInt(inicial), parseInt(total), parseInt(speed), parseInt(jump));
                });
                on = false;
            }
        });
    };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-index',
            template: __webpack_require__("../../../../../src/app/index/index.component.html"),
            styles: [__webpack_require__("../../../../../src/app/index/index.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#menu {\r\n  position: absolute;\r\n  width: 100%;\r\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.65) -10%, rgba(0, 0, 0, 0) 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000', GradientType=0);\r\n}\r\n\r\n#menu nav,\r\n#menu,\r\n#menu nav {\r\n  height: 115px;\r\n}\r\n\r\n#menu ul li a {\r\n  color: #fff;\r\n  font-weight: 600;\r\n  font-size: 13px;\r\n}\r\n\r\n#menu #logo img,\r\n#menu #logo {\r\n  width: 170px;\r\n}\r\n\r\n#menu div#navbar-menu button {\r\n  color: #fff;\r\n  width: 175px;\r\n  border: 1px solid #fff;\r\n  font-weight: 600;\r\n  font-size: 13px;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  font-family: OpenSansBold, Arial, sans-serif;\r\n}\r\n\r\n#menu div#navbar-menu button:hover {\r\n  background-color: rgba(0, 0, 0, .5);\r\n}\r\n\r\n\r\n/* CSS Smartphones */\r\n\r\n@media screen and (max-width: 992px) {\r\n  #btn-menu {\r\n    color: #fff;\r\n    font-size: 30px;\r\n  }\r\n  #navbar-menu ul,\r\n  #menu {\r\n    width: 100%;\r\n    background-color: #1c303b;\r\n  }\r\n  #navbar-menu ul {\r\n    margin-top: -15px;\r\n  }\r\n  #navbar-menu ul li {\r\n    text-align: center;\r\n    margin: 5px 0;\r\n  }\r\n  /* Final CSS Smartphones */\r\n}\r\n\r\n@media screen and (min-width: 993px) {\r\n  #navbar-menu,\r\n  #navbar-menu ul {\r\n    height: 100%;\r\n  }\r\n  #navbar-menu ul li {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    margin: 0 20px;\r\n    box-sizing: border-box;\r\n    margin: 5px 10px;\r\n  }\r\n  #navbar-menu ul li:hover:not(.not) {\r\n    border-top: 5px solid #cb613f;\r\n    margin-top: 0;\r\n  }\r\n  #navbar-menu ul li:hover:not(.not) a {\r\n    color: #48ac97;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"menu\" class=\"container-fluid px-0\">\r\n  <nav class=\"navbar navbar-toggleable-md col-lg-10 offset-lg-1 py-0 px-0\">\r\n    <button id=\"btn-menu\" class=\"navbar-toggler navbar-toggler-right p-3 my-3 mt-4\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu\"\r\n      aria-controls=\"navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <i class=\"fa fa-bars color-b\" aria-hidden=\"true\"></i>\r\n    </button>\r\n    <a id=\"logo\" class=\"navbar-brand py-4 px-3 mt-2 ml-2\" href=\"#\">\r\n      <img src=\"assets/img/icons/logo.svg\">\r\n    </a>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbar-menu\">\r\n      <div class=\"mr-auto\"></div>\r\n      <div class=\"my-2 my-lg-0\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link linear\" href=\"#sobre\">SOBRE</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link linear\" href=\"#solucoes\">SOLUÇÕES</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link linear\" href=\"#proketos\">PROJETOS</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link linear\" href=\"#wiquadro\">WIQUADRO</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link linear\" pageScroll href=\"#interessado\">CONTATO</a>\r\n          </li>\r\n          <li class=\"nav-item not\">\r\n            <button class=\"btn-outline-success my-2 my-sm-0 py-3 px-4 d-inline linear\" type=\"submit\">ÁREA DO ALUNO</button>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menu/menu.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/img/criancas.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "criancas.ef35147c0efdddb49114.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/mob.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mob.87c280eb511a08230b63.png";

/***/ }),

/***/ "../../../../../src/assets/img/tablet1.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tablet1.e4aed3d1377db133aba2.png";

/***/ }),

/***/ "../../../../../src/assets/img/tablet2.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tablet2.e586b82c5576cd4b3f33.png";

/***/ }),

/***/ "../../../../../src/assets/img/tablet3.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tablet3.f6cb2d0797defb14b091.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
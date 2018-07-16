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
        this.title = 'Wilivro';
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__projetos_projetos_component__ = __webpack_require__("../../../../../src/app/projetos/projetos.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__projetos_projetos_component__["a" /* ProjetosComponent */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projetos_projetos_component__ = __webpack_require__("../../../../../src/app/projetos/projetos.component.ts");


var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__index_index_component__["a" /* IndexComponent */] },
    { path: 'projetos', component: __WEBPACK_IMPORTED_MODULE_1__projetos_projetos_component__["a" /* ProjetosComponent */] },
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
exports.push([module.i, "/* CORES */\r\n\r\n.c-w {\r\n  color: var(--branca);\r\n  color: var(--branca);\r\n}\r\n\r\n/*posição do video*/\r\n\r\n#ct-video {\r\n  position: relative;\r\n  left: 0;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  height: 730px;\r\n  z-index: -1;\r\n}\r\n\r\n#ct-video .container {\r\n  height: 100%;\r\n  padding-top: 90px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  color: var(--branca);\r\n  color: var(--branca);\r\n}\r\n\r\n#ct-video .container h1 {\r\n  font-family: GothamXLight;\r\n  font-size: 65px;\r\n  text-align: center;\r\n}\r\n\r\n#ct-video .container div p {\r\n  font-family: GothamLight;\r\n  font-size: 24px;\r\n}\r\n\r\nvideo#bg-vid {\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  width: auto;\r\n  height: auto;\r\n  z-index: -1000;\r\n}\r\n\r\n.shadow {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(230, 190, 0, 0.35);\r\n  top: 0;\r\n  left: 0;\r\n  z-index: -100;\r\n}\r\n\r\n/* Section Sobre */\r\n\r\n#sobre h1 {\r\n  color: var(--cinza-escuro);\r\n  color: var(--cinza-escuro);\r\n}\r\n\r\n#sobre p {\r\n  font-family: OpenSansLight;\r\n  font-size: 22px;\r\n  color: var(--cinza-escuro);\r\n  color: var(--cinza-escuro);\r\n}\r\n\r\n#sobre img {\r\n  width: 115px;\r\n}\r\n\r\n/* section Produtos */\r\n\r\n#produtos .container-fluid {\r\n  background-color: var(--azul);\r\n  background-color: var(--azul);\r\n}\r\n\r\n#produtos h4 {\r\n  color: var(--laranja-claro);\r\n  color: var(--laranja-claro);\r\n  --laranja: var(--laranja);\r\n  --laranja: var(--laranja);\r\n  font-family: GothamBold;\r\n}\r\n\r\n#produtos p {\r\n  font-family: OpenSansLight;\r\n  font-size: 19px;\r\n  font-weight: 100;\r\n}\r\n\r\n#produtos button {\r\n  padding: 15px 50px;\r\n  background-color: var(--laranja);\r\n  background-color: var(--laranja);\r\n  border-bottom: 3px solid var(--laranja-escuro);\r\n  border-bottom: 3px solid var(--laranja-escuro);\r\n  color: var(--cinza);\r\n  color: var(--cinza);\r\n  font-family: OpenSansBold;\r\n  cursor: pointer;\r\n}\r\n\r\n#produtos button:hover {\r\n  background-color: var(--laranja-escuro);\r\n  background-color: var(--laranja-escuro);\r\n  border-bottom: 3px solid var(--laranja);\r\n  border-bottom: 3px solid var(--laranja);\r\n}\r\n\r\n#produtos button.off {\r\n  cursor: not-allowed;\r\n}\r\n\r\n.c-parallax {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  -webkit-transform-style: inherit;\r\n          transform-style: inherit;\r\n}\r\n\r\n/* Section Resultado */\r\n\r\n#resultado {\r\n  background: var(--cinza);\r\n  background: var(--cinza);\r\n  background: url(" + __webpack_require__("../../../../../src/assets/img/criancas.jpg") + ") no-repeat;\r\n  background-size: cover;\r\n  background-position: 50%;\r\n  height: auto;\r\n}\r\n\r\n#resultado div.col-12,\r\n#resultado div.col-sm-4 {\r\n  color: var(--laranja-claro);\r\n  color: var(--laranja-claro);\r\n  height: auto;\r\n  margin-left: -3px;\r\n}\r\n\r\n#resultado span.plus {\r\n  color: var(--laranja);\r\n  color: var(--laranja);\r\n  font-family: OpenSansLight;\r\n}\r\n\r\n#resultado span.cont {\r\n  color: var(--branca);\r\n  color: var(--branca);\r\n  font-family: OpenSansBold;\r\n}\r\n\r\n#resultado div.object {\r\n  font-family: OpenSansLight;\r\n}\r\n\r\n/* Section Clientes */\r\n\r\n#clientes {\r\n  background: var(--cinza);\r\n  background: var(--cinza);\r\n}\r\n\r\n#clientes h1 {\r\n  color: var(--cinza-escuro);\r\n  color: var(--cinza-escuro);\r\n}\r\n\r\n#clientes .owl-item,\r\n#clientes .owl-carousel.owl-loaded {\r\n  height: 150px;\r\n}\r\n\r\n#clientes .owl-item {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-filter: grayscale(100%);\r\n  filter: grayscale(100%);\r\n}\r\n\r\n#clientes .owl-item:hover {\r\n  cursor: pointer;\r\n  -webkit-filter: grayscale(0%);\r\n  filter: grayscale(0%);\r\n}\r\n\r\n#clientes .owl-dots {\r\n  margin-top: -20px;\r\n}\r\n\r\n/* Section Interessado */\r\n\r\n#interessado {\r\n  background: rgb(204, 53, 53);\r\n  background: linear-gradient(to right, rgba(204, 53, 53, 1) 0%, rgba(212, 110, 110, 1) 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cc3535', endColorstr='#d46e6e', GradientType=1);\r\n}\r\n\r\n#interessado p {\r\n  margin: 50px 0;\r\n  font-size: 22px;\r\n  color: var(--branca);\r\n  color: var(--branca);\r\n  font-family: GothamLight;\r\n}\r\n\r\n#interessado .input-group {\r\n  padding-bottom: 10px;\r\n}\r\n\r\n#interessado .input-group-addon .fa {\r\n  font-size: 30px;\r\n}\r\n\r\n#interessado .input-group-addon {\r\n  height: auto;\r\n  background: rgba(255, 255, 255, .75);\r\n  color: #828282;\r\n  border: 1px solid rgba(0, 0, 0, .15) !important;\r\n  border-right: none !important;\r\n}\r\n\r\n#interessado .input-group-addon:nth-of-type(1) {\r\n  width: 56px;\r\n  height: 58px;\r\n}\r\n\r\n#interessado .input-group-addon.bars {\r\n  width: 65px;\r\n}\r\n\r\n#interessado input,\r\n#interessado select {\r\n  height: 58px;\r\n  color: #636c72;\r\n  border: 1px solid rgba(0, 0, 0, .15) !important;\r\n  border-left: none !important;\r\n  font-family: GothamLight;\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n  background: rgba(255, 255, 255, .75);\r\n}\r\n\r\n#interessado textarea {\r\n  color: #828282;\r\n  border: 1px solid rgba(0, 0, 0, .15) !important;\r\n  font-family: GothamLight;\r\n  background: rgba(255, 255, 255, .75);\r\n  height: 126px;\r\n}\r\n\r\n#interessado button {\r\n  background-color: var(--laranja);\r\n  background-color: var(--laranja);\r\n  border-bottom: 3px solid var(--laranja-escuro);\r\n  border-bottom: 3px solid var(--laranja-escuro);\r\n  color: var(--cinza);\r\n  color: var(--cinza);\r\n  cursor: pointer;\r\n  font-family: GothamBold;\r\n  width: 100%;\r\n  padding: 15px 0;\r\n  height: 58px;\r\n  margin-top: 10px;\r\n}\r\n\r\n#interessado button:hover {\r\n  background-color: var(--laranja-escuro);\r\n  background-color: var(--laranja-escuro);\r\n  border-bottom: 3px solid var(--laranja);\r\n  border-bottom: 3px solid var(--laranja);\r\n}\r\n\r\n#interessado button.off {\r\n  cursor: not-allowed;\r\n}\r\n\r\ninput:-webkit-autofill,\r\ninput:-webkit-autofill:hover,\r\ninput:-webkit-autofill:focus,\r\ninput:-webkit-autofill:active {\r\n  transition: background-color 5000s ease-in-out 0s;\r\n}\r\n\r\n/* Section Wilivro mapa */\r\n\r\nagm-map {\r\n  height: 400px;\r\n}\r\n\r\n#wilivro {\r\n  overflow: hidden;\r\n}\r\n\r\n#wilivro .btn {\r\n  z-index: 12;\r\n  height: 150px;\r\n  background: #ebc77b;\r\n  border-radius: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n#wilivro .btn.active {\r\n  background: var(--laranja-claro);\r\n  background: var(--laranja-claro);\r\n}\r\n\r\n#wilivro>.row>.btn:nth-of-type(1) {\r\n  border-right: 2px solid var(--cinza);\r\n  border-right: 2px solid var(--cinza);\r\n}\r\n\r\n#wilivro .btn p {\r\n  font-family: GothamLight;\r\n}\r\n\r\n.title {\r\n  font-family: GothamXLight;\r\n  color: var(--branca);\r\n  color: var(--branca);\r\n}\r\n\r\n/* Section Resultado Todas Resoluções */\r\n\r\n#resultado span.cont {\r\n  color: var(--branca);\r\n  color: var(--branca);\r\n  font-size: 80px;\r\n  height: 80px;\r\n  font-family: OpenSansBold;\r\n}\r\n\r\n/* CSS Smartphones */\r\n\r\n@media (max-width: 992px) {\r\n  #ct-video {\r\n    background: url(" + __webpack_require__("../../../../../src/assets/img/mob.png") + ") no-repeat;\r\n    background-size: auto 100%;\r\n    background-position: center;\r\n  }\r\n  #bg-vid {\r\n    display: none;\r\n  }\r\n  #ct-video .container h1 {\r\n    text-align: center;\r\n    font-family: GothamXLight;\r\n    font-size: 45px;\r\n  }\r\n  #ct-video .container div p {\r\n    font-family: GothamLight;\r\n    font-size: 20px;\r\n  }\r\n  /* Section Produtos */\r\n  #produtos h1 {\r\n    font-size: 33px;\r\n    margin-bottom: 50px;\r\n  }\r\n  #produto1,\r\n  #produto3 {\r\n    color: var(--branca);\r\n    color: var(--branca);\r\n  }\r\n  #produto2 {\r\n    background: var(--branca);\r\n    background: var(--branca);\r\n  }\r\n  .c-parallax {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    -webkit-box-flex: 100%;\r\n        -ms-flex: 100%;\r\n            flex: 100%;\r\n    padding: 10%;\r\n    text-align: center;\r\n  }\r\n  /* Section Resultado */\r\n  #resultados>div {\r\n    margin-top: 40px;\r\n    font-size: 80px;\r\n  }\r\n  #resultado h1 {\r\n    font-size: 30px;\r\n  }\r\n  #resultados {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n  #resultado div.object {\r\n    font-size: 20px;\r\n  }\r\n  /* Section Interessado */\r\n  #interessado h1 {\r\n    font-size: 30px;\r\n  }\r\n  .b-title {\r\n    border-bottom: 2px solid var(--laranja-claro);\r\n    border-bottom: 2px solid var(--laranja-claro);\r\n  }\r\n  #wilivro>.row>.btn:nth-of-type(1) {\r\n    border: none;\r\n    border-bottom: 2px solid var(--cinza);\r\n    border-bottom: 2px solid var(--cinza);\r\n  }\r\n  /* Final CSS Smartphones */\r\n}\r\n\r\n@media (min-width: 993px) {\r\n  #produto1,\r\n  #produto2,\r\n  #produto3 {\r\n    position: relative;\r\n    height: 505px;\r\n    padding: 150px 0;\r\n  }\r\n  #produto1 {\r\n    background: url(" + __webpack_require__("../../../../../src/assets/img/tablet1.png") + ") no-repeat;\r\n    background-size: 50%;\r\n    background-attachment: fixed;\r\n    background-position: 100% 50%;\r\n    color: var(--branca);\r\n    color: var(--branca);\r\n    background-color: var(--azul);\r\n    background-color: var(--azul);\r\n  }\r\n  #produto2 {\r\n    background: url(" + __webpack_require__("../../../../../src/assets/img/tablet2.png") + ") no-repeat;\r\n    background-size: 50%;\r\n    background-attachment: fixed;\r\n    background-position: 100% 50%;\r\n    color: #172a30;\r\n    background-color: var(--branca);\r\n    background-color: var(--branca);\r\n  }\r\n  #produto3 {\r\n    background: url(" + __webpack_require__("../../../../../src/assets/img/tablet3.png") + ") no-repeat;\r\n    background-size: 50%;\r\n    background-attachment: fixed;\r\n    background-position: 100% 50%;\r\n    color: var(--branca);\r\n    color: var(--branca);\r\n    background-color: var(--azul);\r\n    background-color: var(--azul);\r\n  }\r\n  /* Section Resultado */\r\n  #resultado div.col-4 {\r\n    color: var(--laranja-claro);\r\n    color: var(--laranja-claro);\r\n    height: 308px;\r\n    margin-left: -3px;\r\n  }\r\n  #resultado span.plus {\r\n    color: var(--laranja);\r\n    color: var(--laranja);\r\n    font-size: 80px;\r\n    font-family: OpenSansLight;\r\n  }\r\n  #resultado div.object {\r\n    font-family: OpenSansLight;\r\n    font-size: 28px;\r\n  }\r\n  .c-parallax {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-align: baseline;\r\n        -ms-flex-align: baseline;\r\n            align-items: baseline;\r\n  }\r\n  .title {\r\n    border-bottom: 2px solid var(--laranja-claro);\r\n    border-bottom: 2px solid var(--laranja-claro);\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"ct-video\">\r\n  <video autoplay loop id=\"bg-vid\">\r\n    <source src=\"assets/media/home.mp4\" type=\"video/mp4\">\r\n    <source src=\"assets/media/home.webm\" type=\"video/webm\">\r\n  </video>\r\n  <div class=\"shadow\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"d-flex flex-column justify-content-center align-items-center \">\r\n      <h1>TRANSFORME A EDUCAÇÃO</h1>\r\n      <p class=\"col-10 text-center\">\r\n        Conheça as soluções Wilivro e junte-se as organizações que já estão inovando a educação com o uso da tecnologia\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<section id=\"sobre\">\r\n  <div class=\"container-fluid px-0\">\r\n    <div class=\"d-flex flex-column justify-content-center align-items-center mt-4\">\r\n\r\n      <div class=\"col-12 text-center b-title\">\r\n        <h1 class=\"py-5 px-5 title d-inline-table\">SOBRE</h1>\r\n      </div>\r\n\r\n      <img class=\"my-4\" src=\"assets/img/icons/sobre.svg\" alt=\"\">\r\n      <p class=\"col-10 col-sm-10 col-md-8 col-lg-6 text-center mb-5\">\r\n        A tecnologia tem mudado a forma como produzimos, consumimos e nos comportamos. Por que não usá-la também para transformar\r\n        a maneira como aprendemos e ensinamos? Acreditamos que os novos recursos tecnológicos podem ajudar a transformar\r\n        a educação e é por isso que criamos diversas soluções para ajudar os alunos, professores, gestores de escolas e instituições\r\n        no processo de ensino-aprendizagem.\r\n      </p>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section id=\"produtos\">\r\n  <div class=\"container-fluid px-0\">\r\n    <div class=\"col-12 text-center b-title\">\r\n      <h1 class=\"py-5 px-5 my-0 d-inline-table title\">SOLUÇÕES</h1>\r\n    </div>\r\n    <div id=\"produto1\" class=\"d-flex align-items-center\">\r\n      <div class=\"c-parallax col-lg-4 offset-lg-2\">\r\n        <h4>WIQUADRO</h4>\r\n        <p>\r\n          A plataforma que tem tudo o que sua escola precisa para inovar no ensino. O Wiquadro se adequa às necessidades de cada educador,\r\n          possibilitando hospedar conteúdos em qualquer formato (vídeos, textos, jogos), criar exercícios com correção automática\r\n          e emitir relatórios analíticos. O sistema disponibiliza ainda acesso personalizado para pais ou responsáveis e\r\n          gestores de escolas.\r\n        </p>\r\n        <a href=\"https://www.wiquadro.com.br\" target=\"_blank\">\r\n          <button class=\"btn\">SAIBA MAIS</button>\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n    <div id=\"produto2\" class=\"d-flex align-items-center\">\r\n      <div class=\"c-parallax col-lg-4 offset-lg-2\">\r\n        <h4>WICURSOS</h4>\r\n        <p>\r\n          Seu conteúdo ou nosso conteúdo, você escolhe. Desenvolvemos cursos on-line ricos em elementos didáticos interativos que vão\r\n          desde animações, vídeos a jogos sobre os mais variados assuntos.\r\n        </p>\r\n        <button class=\"btn off\">SAIBA MAIS</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div id=\"produto3\" class=\"d-flex align-items-center\">\r\n      <div class=\"c-parallax col-lg-4 offset-lg-2\">\r\n        <h4>WIGAMES</h4>\r\n        <p>\r\n          Acreditamos que é possível aprender se divertindo. Nossos games educativos desafiam e motivam os alunos criando um ambiente\r\n          de integração e aprendizagem. Traga sua ideia e vamos juntos criar poderosas ferramentas para engajar os alunos\r\n          na busca do conhecimento.\r\n        </p>\r\n        <a href=\"https://play.google.com/store/apps/developer?id=wigames\" target=\"_blank\">\r\n          <button class=\"btn\">SAIBA MAIS</button>\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</section>\r\n\r\n<section id=\"resultado\">\r\n  <div class=\"container-fluid px-0\">\r\n\r\n    <div class=\"col-12 text-center b-title\">\r\n      <h1 class=\"py-5 px-5 my-0 d-inline-table title\">RESULTADOS</h1>\r\n    </div>\r\n\r\n    <div id=\"resultados\" class=\"col-12 px-0 pt-4 pb-5\">\r\n      <div class=\"col-12 col-sm-4 px-0 d-inline-flex flex-column justify-content-center align-items-center\">\r\n        <div class=\"d-flex justify-content-center align-items-center\">\r\n          <span class=\"plus\">+</span>\r\n          <span class=\"cont d-flex justify-content-center align-items-center\" data-count-to=\"200000\">200.000</span>\r\n        </div>\r\n        <div class=\"object\">alunos alcançados</div>\r\n      </div>\r\n\r\n      <div class=\"col-12 col-sm-4 px-0 d-inline-flex flex-column justify-content-center align-items-center\">\r\n        <div class=\"d-flex justify-content-center align-items-center\">\r\n          <span class=\"plus\">+</span>\r\n          <span class=\"cont d-flex justify-content-center align-items-center\" data-count-to=\"500\">500</span>\r\n        </div>\r\n        <div class=\"object\">escolas beneficiadas</div>\r\n      </div>\r\n\r\n      <div class=\"col-12 col-sm-4 px-0 d-inline-flex flex-column justify-content-center align-items-center\">\r\n        <div class=\"d-flex justify-content-center align-items-center\">\r\n          <span class=\"plus\">+</span>\r\n          <span class=\"cont d-flex justify-content-center align-items-center\" data-count-to=\"300\">300</span>\r\n        </div>\r\n        <div class=\"object\">municípios beneficiados</div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section id=\"clientes\">\r\n  <div class=\"container-fluid px-0\">\r\n\r\n    <div class=\"col-12 text-center b-title\">\r\n      <h1 class=\"py-5 px-5 my-0 d-inline-table title\">CLIENTES</h1>\r\n    </div>\r\n\r\n    <div class=\"owl-carousel owl-theme\">\r\n      <div *ngFor=\"let image of images\" class=\"item\">\r\n        <a href=\"{{image.href}}\" target=\"_blank\">\r\n          <img class=\"px-3\" src=\"{{image.src}}\" alt=\"\">\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</section>\r\n\r\n<section id=\"interessado\" class=\"pb-5\">\r\n  <div class=\"container-fluid px-0\">\r\n\r\n    <div class=\"col-12 text-center b-title\">\r\n      <h1 class=\"py-5 px-md-5 my-0 d-inline-table title\">INTERESSADO(A)?</h1>\r\n    </div>\r\n    <div class=\"col-12 text-center\">\r\n      <p>Vamos conversar :)</p>\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n      <form class=\"col-12\" id=\"contato\" action=\"http://formspree.io/wilivro@wilivro.com.br\" method=\"post\">\r\n\r\n        <div class=\"row mb-0 pb-0\">\r\n          <div class=\"col-12 col-md-6 px-2\">\r\n            <div class=\"col-12 px-0\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-addon\">\r\n                  <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n                </div>\r\n                <input name=\"nome\" type=\"text\" class=\"form-control\" placeholder=\"Nome\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12 px-0\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-addon\">\r\n                  <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\r\n                </div>\r\n                <input name=\"email\" type=\"text\" class=\"form-control\" placeholder=\"E-mail\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12 px-0\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-addon\">\r\n                  <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\r\n                </div>\r\n                <input name=\"telefone\" type=\"number\" class=\"form-control\" placeholder=\"Telefone\" required>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 col-md-6 px-2\">\r\n            <div class=\"form-group\">\r\n              <textarea name=\"mensagem\" class=\"form-control\" placeholder=\"Digite aqui sua mensagem\" rows=\"5\" required></textarea>\r\n              <button type=\"submit\" class=\"btn\">ENVIAR</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 text-center px-2\">\r\n            <div id=\"msgForm\"></div>\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n</section>\r\n\r\n<section id=\"wilivro\">\r\n  <div class=\"row col-12 mx-0 px-0\">\r\n    <div class=\"btn unit active col-12 col-md-6 d-flex flex-column justify-content-around\" (mouseenter)=\"ngClickRJ($event)\">\r\n      <h1>RJ</h1>\r\n      <p>\r\n        Parque Tecnológico da Região Serrana\r\n        <br/>Av. Afrânio de Melo Franco, 333\r\n        <br/>Quintandinha - Petrópolis - RJ - Brasil\r\n        <br/>+55 24 2248-7384\r\n      </p>\r\n    </div>\r\n    <div class=\"btn unit col-12 col-md-6 d-flex flex-column justify-content-around\" (mouseenter)=\"ngClickRN($event)\">\r\n      <h1>RN</h1>\r\n      <p>\r\n        Rua Coronel José Guimarães, 136\r\n        <br/>Lagoa Nova - Natal - RN - Brasil\r\n        <br/>+55 84 3206-0243\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [styles]=\"styles\" [scrollwheel]=\"scrollwheel\" [zoom]=\"zoom\" [styles]=\"styles\">\r\n    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [iconUrl]=\"iconUrl\"></agm-marker>\r\n  </agm-map>\r\n</section>\r\n"

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
        // Style Google Maps
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
            { src: PATH + "logo_assis.png", href: 'http://www.facbrasil.org.br/' },
            { src: PATH + "logo_ceara.png", href: 'http://www.stds.ce.gov.br/' },
            { src: PATH + "logo_piaui.png", href: 'http://www.seduc.pi.gov.br/' },
            { src: PATH + "logo_pro-cidadania.png", href: 'http://procidadania.org.br/web/' },
            { src: PATH + "logo-ensinart.png", href: 'http://ensinarteditora.com.br/' },
        ];
    }
    IndexComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    IndexComponent.prototype.ngOnInit = function () {
        this.iconUrl = 'assets/img/icons/markerRJ.svg';
        this.setTitle('Wilivro');
        this.resultados();
        this.habilitarFormSubmit();
    };
    IndexComponent.prototype.ngAfterViewInit = function () {
        var qtdClienteView = 5;
        if (isMobile) {
            qtdClienteView = 2;
        }
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            items: qtdClienteView,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        });
    };
    IndexComponent.prototype.ngClickRN = function (el) {
        this.ngToggle(el);
        this.iconUrl = 'assets/img/icons/markerRN.svg';
        this.lat = -5.817215;
        this.lng = -35.213243;
    };
    IndexComponent.prototype.ngClickRJ = function (el) {
        this.ngToggle(el);
        this.iconUrl = 'assets/img/icons/markerRJ.svg';
        this.lat = -22.532491;
        this.lng = -43.209290;
    };
    IndexComponent.prototype.ngToggle = function (el) {
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
                    $contactForm.find('.alert-info').html('<div class="alert alert-danger">Ocorreu um erro ao enviar sua mensagem, tente novamente mais tarde.</div>').removeClass('alert alert-info');
                }
            });
        });
    };
    IndexComponent.prototype.contador = function (ele, count_to, timer, i) {
        if (i > count_to) {
            return;
        }
        ele.text(i.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."));
        i += 1;
        /*console.log(timer);*/
        setTimeout(function () { this.contador(ele, count_to, timer, i); }, timer);
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
                var tempo_intervalo_1 = 5; //ms -> define a velocidade da animação
                var tempo_1 = 2000; //ms -> define o tempo total da animaçao
                $('span.cont').each(function () {
                    var count_to = parseInt($(this).data('countTo'));
                    var intervalos = tempo_1 / tempo_intervalo_1; //quantos passos de animação tem
                    var incremento = count_to / intervalos; //quanto cada contador deve aumentar
                    var valor = 0;
                    var el = $(this);
                    var timer = setInterval(function () {
                        if (valor >= count_to) {
                            valor = count_to;
                            clearInterval(timer);
                        }
                        var texto = valor.toFixed(0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
                        el.text(texto);
                        valor += incremento;
                    }, tempo_intervalo_1);
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
exports.push([module.i, "#menu {\r\n  position: absolute;\r\n  z-index: 1;\r\n  width: 100%;\r\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.65) -10%, rgba(0, 0, 0, 0) 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000', GradientType=0);\r\n}\r\n\r\n#menu nav,\r\n#menu,\r\n#menu nav {\r\n  height: 115px;\r\n}\r\n\r\n#menu ul li a {\r\n  color: #fff;\r\n  font-weight: 600;\r\n  font-size: 13px;\r\n  transition: ease 0.5s all;\r\n}\r\n\r\n#menu ul li a:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n#menu #logo img,\r\n#menu #logo {\r\n  width: 170px;\r\n}\r\n\r\n#menu div#navbar-menu button {\r\n  color: #fff;\r\n  width: 175px;\r\n  border: 1px solid #fff;\r\n  font-weight: 600;\r\n  font-size: 13px;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  font-family: OpenSansBold, Arial, sans-serif;\r\n}\r\n\r\n#menu div#navbar-menu button:hover {\r\n  background-color: rgba(0, 0, 0, .5);\r\n}\r\n\r\n/* CSS Smartphones */\r\n\r\n@media screen and (max-width: 992px) {\r\n  #btn-menu {\r\n    color: #fff;\r\n    font-size: 30px;\r\n  }\r\n  #navbar-menu ul,\r\n  #menu {\r\n    width: 100%;\r\n    background-color: #1c303b;\r\n  }\r\n  #navbar-menu ul {\r\n    margin-top: -15px;\r\n  }\r\n  #navbar-menu ul li {\r\n    text-align: center;\r\n    margin: 5px 0;\r\n  }\r\n  /* Final CSS Smartphones */\r\n}\r\n\r\n@media screen and (min-width: 993px) {\r\n  #navbar-menu,\r\n  #navbar-menu ul {\r\n    height: 100%;\r\n  }\r\n  #navbar-menu ul li {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    margin: 0 20px;\r\n    box-sizing: border-box;\r\n    margin: 5px 10px;\r\n  }\r\n  #navbar-menu ul li:hover:not(.not) {\r\n    border-top: 5px solid #cb613f;\r\n    margin-top: 0;\r\n  }\r\n  #navbar-menu ul li:hover:not(.not) a {\r\n    color: #48ac97;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"menu\" class=\"container-fluid px-0\">\r\n  <nav class=\"navbar navbar-toggleable-md col-lg-10 offset-lg-1 py-0 px-0\">\r\n    <button id=\"btn-menu\" class=\"navbar-toggler navbar-toggler-right p-3 my-3 mt-4\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu\"\r\n      aria-controls=\"navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <i class=\"fa fa-bars color-b\" aria-hidden=\"true\"></i>\r\n    </button>\r\n    <a id=\"logo\" class=\"navbar-brand py-4 px-3 mt-2 ml-2\" routerLink=\"/\">\r\n      <img src=\"assets/img/icons/logo.svg\">\r\n    </a>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbar-menu\">\r\n      <div class=\"mr-auto\"></div>\r\n      <div class=\"my-2 my-lg-0\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link linear\" pageScroll href=\"#sobre\">SOBRE</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link linear\" pageScroll href=\"#produtos\">SOLUÇÕES</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link linear\" pageScroll routerLink=\"/\">PROJETOS</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link linear\" href=\"https://wiquadro.com.br\" target=\"_blank\">WIQUADRO</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link linear\" pageScroll href=\"#interessado\">CONTATO</a>\r\n          </li>\r\n          <li class=\"nav-item not\">\r\n            <a href=\"http://geralearning.wilivro.com.br/\" target=\"_blank\">\r\n              <button class=\"btn-outline-success my-2 my-sm-0 py-3 px-4 d-inline linear\" type=\"submit\">ÁREA DO ALUNO</button>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</div>\r\n"

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

/***/ "../../../../../src/app/projetos/projetos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#projetos {\r\n  padding-top: 115px;\r\n  background: #1c303b;\r\n  background: url(" + __webpack_require__("../../../../../src/assets/img/projetos/topo.jpg") + ") no-repeat;\r\n  background-size: cover;\r\n  background-position: 50%;\r\n  height: 380px;\r\n}\r\n\r\n#projetos p,\r\n#formacaoEmpreendedora p {\r\n  font-size: 19px;\r\n  font-family: GothamLight;\r\n}\r\n\r\n#projetos>div.container {\r\n  margin-top: 115px;\r\n  color: var(--branca);\r\n  color: var(--branca);\r\n}\r\n\r\n.projeto h4 {\r\n  font-size: 19px;\r\n  font-family: GothamBold;\r\n}\r\n\r\n.projeto h5 {\r\n  font-size: 18px;\r\n  font-family: OpenSans;\r\n}\r\n\r\n#formacaoEmpreendedora {\r\n  background: #1c303b;\r\n  background: url(" + __webpack_require__("../../../../../src/assets/img/projetos/formacaoEmpreendedora/bg.jpg") + ") no-repeat;\r\n  background-size: cover;\r\n  background-position: 100% 60%;\r\n  height: 380px;\r\n  color: var(--branca);\r\n  color: var(--branca);\r\n}\r\n\r\n#formacaoEmpreendedora img {\r\n  width: 100px;\r\n  height: 82px;\r\n}\r\n\r\n#formacaoEmpreendedora h1 {\r\n  color: #cb613f;\r\n  padding: 5px;\r\n  border: 1px solid #cb613f;\r\n  border-radius: 2px;\r\n  display: table;\r\n  font-family: GothamBold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projetos/projetos.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"projetos\">\n  <div class=\"container\">\n    <div class=\"d-flex flex-column justify-content-center align-items-center \">\n      <p class=\"col-12 text-center\">\n        Conheça as soluções Wilivro e junte-se as organizações que já estão inovando a educação com o uso da tecnologia\n      </p>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div id=\"formacaoEmpreendedora\" class=\"container-fluid d-flex px-0\">\n    <div class=\"d-flex align-items-center\">\n      <div class=\"col-lg-6 offset-lg-1\">\n        <img src=\"./../assets/img/projetos/formacaoEmpreendedora/icon.svg\">\n        <h1>Formação Empreendedora</h1>\n        <p>Objetiva proporcionar aos alunos do Ensino Médio das escolas públicas, via internet e utilizando a tecnologia Wilivro,\n          inclusão digital, qualificação em empreendedorismo e plano de negócio. Os alunos que apresentam os melhores planos\n          recebem prêmios e financimanto de microcrédito para a montagem do próprio negócio.</p>\n      </div>\n    </div>\n  </div>\n\n\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide d-lg-none\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item justify-content-center align-items-center\" *ngFor=\"let image of projetos.formacaoEmpreendedora;let i=index; let isFirst = first\"\n        [class.active]=\"isFirst\">\n        <div class=\"d-flex justify-content-center align-items-center\">\n          <img src=\"{{image.src}}\" alt=\"First slide\">\n          <div>\n            <h4>{{image.projeto}}</h4>\n            <h5>Participantes: {{image.participantes}}</h5>\n            <h5>Local: {{image.local}}</h5>\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n\n\n\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/projetos/projetos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetosComponent; });
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

var PATH = "assets/img/projetos/";
var ProjetosComponent = (function () {
    function ProjetosComponent() {
        this.projetos = {
            formacaoEmpreendedora: [{
                    src: PATH + "formacaoEmpreendedora/proj/jovem-emp.png",
                    projeto: 'JOVEM EMPREENDEDOR PE',
                    participantes: 380,
                    local: 'Pernambuco'
                }, {
                    src: PATH + "formacaoEmpreendedora/proj/jovem-emp.png",
                    projeto: 'JOVEM EMPREENDEDOR RN',
                    participantes: 380,
                    local: 'Pernambuco'
                }, {
                    src: PATH + "formacaoEmpreendedora/proj/jovem-emp.png",
                    projeto: 'JUVENTUDE EMPREENDEDORA',
                    participantes: 380,
                    local: 'Pernambuco'
                },],
        };
    }
    ProjetosComponent.prototype.ngOnInit = function () {
    };
    ProjetosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-projetos',
            template: __webpack_require__("../../../../../src/app/projetos/projetos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/projetos/projetos.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], ProjetosComponent);
    return ProjetosComponent;
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

/***/ "../../../../../src/assets/img/projetos/formacaoEmpreendedora/bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg.5b4e2451586fc39571f6.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/projetos/topo.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "topo.04e568727ca7a0d31828.jpg";

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
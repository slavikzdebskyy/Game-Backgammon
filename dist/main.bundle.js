webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-table></app-table>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__table_table_component__ = __webpack_require__("./src/app/table/table.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__table_table_component__["a" /* TableComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t\t\n\t<div class=\"out-container\">\n\t\t\t<div class=\"out\">\n\t\t\t\t<div *ngFor=\"let chB of outFeildB\" [class]=\"chB\" (click)=\"turnOutB()\"><div class=\"in-2\"><div class=\"in-1\"></div></div></div>\t\t\n\t\t\t</div>\n\t\t\t<div class=\"out\">\n\t\t\t\t<div *ngFor=\"let chW of outFeildW\" [class]=\"chW\" (click)=\"turnOutW()\"><div class=\"in-2\"><div class=\"in-1\"></div></div></div>\t\t\n\t\t\t</div>\n\t</div>\n\t<!-- \"out-container -->\n\n\n\t\t<div class=\"table\">\t\n\t\t\t<div class=\"game-over\" *ngIf=\"gameOverVisible\">\n\t\t\t\t<div>\t\n\t\t\t\t\t<h1>{{massageGameOver}}</h1>\n\t\t\t\t\t<button (click)=\"continueMatch()\">Continue match</button>\n\t\t\t\t\t<button (click)=\"reset()\">Reset score</button>\n\t\t\t\t</div>\t\t\t\n\t\t\t</div>\t\t\t\n\t\t\t<div class=\"table-new\">\n\t\t\t\t<div class=\"rectangle\" *ngFor=\"let elem of feild; let i = index\">\n\t\t\t\t\t<div *ngFor=\"let el of elem.f\" [class]=\"el\" (click)=\"turn(i)\"><div class=\"in-2\"><div class=\"in-1\"></div></div></div>\n\t\t\t\t</div>\t\t\n\t\t\t</div>\n\t\t\t<!-- class=\"table-new\" -->\n\n\t\t\t<div class=\"ractangle-down\"></div>\n\t\t\t<div class=\"ractangle-down\"></div>\n\t\t\t<div class=\"ractangle-down\"></div>\n\t\t\t<div class=\"ractangle-down\"></div>\n\t\t\t<div class=\"ractangle-down\"></div>\n\t\t\t<div class=\"ractangle-down\"></div>\n\t\t\t\t<div class=\"half-table-vertical\"></div>\n\t\t\t<div class=\"ractangle-down\"></div>\n\t\t\t<div class=\"ractangle-down\"></div>\n\t\t\t<div class=\"ractangle-down\"></div>\n\t\t\t<div class=\"ractangle-down\"></div>\n\t\t\t<div class=\"ractangle-down\"></div>\n\t\t\t<div class=\"ractangle-down\"></div>\n\t\t\t\t<div class=\"half-table-horizintal\">\n\t\t\t\t\t<span>{{messageTurn}}</span>\n\t\t\t\t\t<div></div>\n\t\t\t\t\t<span>Black: <b>  {{score.black}}</b>\t\tWhite: <b>  {{score.white}}</b></span>\n\t\t\t\t</div>\n\t\t\t<div class=\"ractangle-up\"></div>\n\t\t\t<div class=\"ractangle-up\"></div>\n\t\t\t<div class=\"ractangle-up\"></div>\n\t\t\t<div class=\"ractangle-up\"></div>\n\t\t\t<div class=\"ractangle-up\"></div>\n\t\t\t<div class=\"ractangle-up\"></div>\n\t\t\t\t<div class=\"half-table-vertical\"></div>\n\t\t\t<div class=\"ractangle-up\"></div>\n\t\t\t<div class=\"ractangle-up\"></div>\n\t\t\t<div class=\"ractangle-up\"></div>\n\t\t\t<div class=\"ractangle-up\"></div>\n\t\t\t<div class=\"ractangle-up\"></div>\n\t\t\t<div class=\"ractangle-up\"></div>\n\t\t\t<div class=\"table-disable\" *ngIf=\"tableDisable\"></div>\n\t</div>\n\t<!-- class=\"table\" -->\n\n\t<div class=\"control\">\n\t\t<div class=\"kubik-container\">\n\t\t\t<div [class]=\"diceClass1\" (click)=\"changeCubes()\"><div class=\"kubik-active\" *ngIf=\"kub1Disable\"></div>\t</div>\n\t\t\t<div [class]=\"diceClass2\"  (click)=\"changeCubes()\"><div class=\"kubik-active\" *ngIf=\"kub2Disable\"></div>\t</div>\n\t\t\t<div class=\"kubik-change\" *ngIf=\"kubikVisible\" (click)=\"changeKubik()\"></div>\n\t\t</div>\n\n\t\t<div class=\"kubik-container\">\n\t\t\t<button (click)=\"undo()\" *ngIf=\"undoVisible\">Undo</button>\n\t\t\t<button (click)=\"nextTurn()\" *ngIf=\"nextPlayerVisible\">Next Player</button>\t\n\t\t</div>\n\t</div>\n\t<!-- class=\"control\"> -->\n\n\n\n\t\t\n\n\n</div>\n<!-- div class=\"container -->\n"

/***/ }),

/***/ "./src/app/table/table.component.less":
/***/ (function(module, exports) {

module.exports = "body {\n  background: #993333;\n}\n.container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.container .black {\n  background: #0d0d0d;\n}\n.container .white {\n  background: #f2f2f2;\n}\n.container .checker {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  border: 2px solid #604020;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n}\n.container .checker .in-1 {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 1px solid #604020;\n}\n.container .checker .in-2 {\n  width: 39px;\n  height: 39px;\n  border-radius: 50%;\n  border: 1px solid #604020;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.container .table-disable {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 800px;\n  min-height: 600px;\n  background: none;\n  z-index: 5;\n}\n.container .game-over {\n  position: absolute;\n  top: 0;\n  left: -170px;\n  z-index: 6;\n  width: 1200px;\n  min-height: 600px;\n  background: rgba(0, 0, 0, 0.8);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n}\n.container .game-over h1 {\n  width: 100%;\n  color: #fff;\n  margin: 20px 0 50px;\n  font-size: 40px;\n  font-family: sans-serif;\n}\n.container .game-over button {\n  width: 250px;\n  height: 100px;\n  background: none;\n  outline: none;\n  border: 3px solid #604020;\n  border-radius: 20px;\n  font-size: 24px;\n  font-family: sans-serif;\n  color: #fff;\n  cursor: pointer;\n}\n.container .table-new {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  width: 800px;\n  min-height: 600px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.container .table-new .rectangle {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: relative;\n  width: 65px;\n  height: 300px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.container .table-new .rectangle:nth-of-type(7),\n.container .table-new .rectangle:nth-of-type(19) {\n  margin-left: 20px;\n}\n.container .table-new .rectangle:nth-of-type(13),\n.container .table-new .rectangle:nth-of-type(14),\n.container .table-new .rectangle:nth-of-type(15),\n.container .table-new .rectangle:nth-of-type(16),\n.container .table-new .rectangle:nth-of-type(17),\n.container .table-new .rectangle:nth-of-type(18),\n.container .table-new .rectangle:nth-of-type(19),\n.container .table-new .rectangle:nth-of-type(20),\n.container .table-new .rectangle:nth-of-type(21),\n.container .table-new .rectangle:nth-of-type(22),\n.container .table-new .rectangle:nth-of-type(23),\n.container .table-new .rectangle:nth-of-type(24) {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.container .table-new .rectangle:nth-of-type(25) {\n  width: 800px;\n  min-height: 150px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin-top: 10px;\n}\n.container .table-new .half-table {\n  width: 20px;\n}\n.container .table {\n  width: 800px;\n  min-height: 600px;\n  border: 10px solid #604020;\n  position: relative;\n  background: #994d00;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.container .table .half-table-vertical {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: 260px;\n  width: 20px;\n  background: #604020;\n}\n.container .table .half-table-horizintal {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: 80px;\n  width: 800px;\n  position: relative;\n  padding: 20px 0 0;\n}\n.container .table .half-table-horizintal span {\n  margin-left: 150px;\n  font-family: sans-serif;\n  font-size: 22px;\n}\n.container .table .half-table-horizintal span b {\n  color: #fff;\n}\n.container .table .half-table-horizintal span:nth-of-type(2) {\n  margin-left: 200px;\n}\n.container .table .half-table-horizintal div {\n  height: 80px;\n  width: 20px;\n  background: #604020;\n  position: absolute;\n  top: 0;\n  left: 48.8%;\n}\n.container .table .ractangle-up {\n  width: 0;\n  height: 0;\n  border-left: 32px solid transparent;\n  border-right: 33px solid transparent;\n  border-bottom: 260px solid #e60000;\n}\n.container .table .ractangle-up:nth-of-type(2n) {\n  border-bottom: 260px solid #999900;\n}\n.container .table .ractangle-down {\n  width: 0;\n  height: 0;\n  border-left: 32px solid transparent;\n  border-right: 33px solid transparent;\n  border-top: 260px solid #e60000;\n}\n.container .table .ractangle-down:nth-of-type(2n) {\n  border-top: 260px solid #999900;\n}\n.container .kubik-container {\n  width: 200px;\n  height: 200px;\n  border: 10px solid #604020;\n  background: #994d00;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  position: relative;\n}\n.container .kubik-container .kubik {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 30px;\n  font-family: sans-serif;\n  width: 50px;\n  height: 50px;\n  border: 3px solid #604020;\n  margin: 10px;\n  cursor: pointer;\n  position: relative;\n}\n.container .kubik-container .kubik .kubik-active {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.5);\n}\n.container .kubik-container .dice1 {\n  background-image: url('dice1.241f1edde9b0b193c4b1.png');\n  background-size: cover;\n  border: none;\n}\n.container .kubik-container .dice2 {\n  background-image: url('dice2.46e17de172ca4b2ddc27.png');\n  background-size: cover;\n  border: none;\n}\n.container .kubik-container .dice3 {\n  background-image: url('dice3.aa3d53ae5d50f4401633.png');\n  background-size: cover;\n  border: none;\n}\n.container .kubik-container .dice4 {\n  background-image: url('dice4.6c603f8a0b4448362c00.png');\n  background-size: cover;\n  border: none;\n}\n.container .kubik-container .dice5 {\n  background-image: url('dice5.9cb9ba93bb9e53449845.png');\n  background-size: cover;\n  border: none;\n}\n.container .kubik-container .dice6 {\n  background-image: url('dice6.a173a75b1872d1002707.png');\n  background-size: cover;\n  border: none;\n}\n.container .kubik-container .kubik-change {\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.container .kubik-container button {\n  width: 150px;\n  height: 50px;\n  background: none;\n  outline: none;\n  border: 2px solid #604020;\n  border-radius: 20px;\n  font-size: 24px;\n  font-family: sans-serif;\n  color: #fff;\n}\n.container .out-container .out {\n  width: 130px;\n  height: 260px;\n  border: 10px solid #604020;\n  background: #994d00;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n"

/***/ }),

/***/ "./src/app/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TableComponent = /** @class */ (function () {
    function TableComponent() {
        this.feild = [
            { f: ['checker black', 'checker black', 'checker black', 'checker black', 'checker black'] },
            { f: [] },
            { f: [] },
            { f: [] },
            { f: ['checker white', 'checker white', 'checker white'] },
            { f: [] },
            { f: ['checker white', 'checker white', 'checker white', 'checker white', 'checker white'] },
            { f: [] },
            { f: [] },
            { f: [] },
            { f: [] },
            { f: ['checker black', 'checker black'] },
            { f: ['checker white', 'checker white', 'checker white', 'checker white', 'checker white'] },
            { f: [] },
            { f: [] },
            { f: [] },
            { f: ['checker black', 'checker black', 'checker black'] },
            { f: [] },
            { f: ['checker black', 'checker black', 'checker black', 'checker black', 'checker black'] },
            { f: [] },
            { f: [] },
            { f: [] },
            { f: [] },
            { f: ['checker white', 'checker white'] },
            { f: [] }
        ];
        this.restartFeild = JSON.parse(JSON.stringify(this.feild));
        this.backTurnFeild = JSON.parse(JSON.stringify(this.feild));
        this.score = {
            black: 0,
            white: 0
        };
        this.netBlack = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
        this.netWhite = [23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 24];
        this.kub1 = 0;
        this.kub2 = 0;
        this.turnBW = true; // true - black is turn; false - white is turn;
        this.coordinatesB = [];
        this.coordinatesW = [];
        this.kubikVisible = false; //	if true - can't change value cubes
        this.nextPlayerVisible = false; //	visible or hidden button end turn and change player
        this.undoVisible = false; //	undo button
        this.kub1Disable = false; //	opacity cubes if is turn
        this.kub2Disable = false; //	opacity cubes if is turn	
        this.tableDisable = false;
        this.blackIsHome = false;
        this.whiteIsHome = false;
        this.gameOverVisible = false;
        this.outFeildB = [];
        this.outFeildW = [];
        this.outFeildBUndo = [];
        this.outFeildWUndo = [];
        this.diceClass1 = 'kubik';
        this.diceClass2 = 'kubik';
        this.double = 0;
        this.aDoubleUndo = [];
        this.xDoubleUndo = [];
    }
    TableComponent.prototype.ngOnInit = function () { };
    TableComponent.prototype.ngDoCheck = function () {
        this.blackIsHome = this.ifChekersAtHome(this.netBlack, 'checker black');
        this.whiteIsHome = this.ifChekersAtHome(this.netWhite, 'checker white');
        this.diceClass1 = 'kubik ' + 'dice' + this.kub1;
        this.diceClass2 = 'kubik ' + 'dice' + this.kub2;
        if (this.turnBW) {
            this.messageTurn = 'Blacks is going ...';
            if (this.outFeildB.length > 0) {
                this.tableDisable = true;
            }
            else {
                this.tableDisable = false;
            }
        }
        else {
            this.messageTurn = 'White is going ...';
            if (this.outFeildW.length > 0) {
                this.tableDisable = true;
            }
            else {
                this.tableDisable = false;
            }
        }
        if (this.kub1 === this.kub2) {
            if (this.double < 1) {
                this.undoVisible = false;
            }
            if (this.double < 2) {
                this.kub1Disable = false;
                this.kub2Disable = false;
            }
            else {
                this.kub1Disable = true;
                this.kub2Disable = false;
            }
            if (this.double >= 4) {
                this.tableDisable = true;
                this.kub2Disable = true;
                this.nextPlayerVisible = true;
            }
        }
        if (this.kub2Disable) {
            this.tableDisable = true;
        }
        this.ifGameOver();
    }; //	END of ngDoCheck()
    TableComponent.prototype.ifChekersAtHome = function (array, check) {
        var count = 0;
        for (var i = 0; i < 18; i++) {
            if (this.feild[array[i]].f[0] != check) {
                count++;
            }
        }
        if (count === 18) {
            return true;
        }
        else {
            return false;
        }
    }; //	END of ifChekersAtHome ()
    TableComponent.prototype.returnNextCoordinat = function (x, netArray, coordArray) {
        var a;
        var b;
        var countA = 0;
        var countB = 0;
        for (var i = 0; i < netArray.length; i++) {
            if (netArray[i] === x) {
                a = i + this.kub1;
                b = i + this.kub2;
            }
        }
        if (a < 24) {
            coordArray.push(netArray[a]);
        }
        else {
            if (this.turnBW && this.blackIsHome || !this.turnBW && this.whiteIsHome) {
                for (var j = x - 5; j < x; j++) {
                    if (this.feild[j].f.length != 0) {
                        countA++;
                    }
                }
                if (countA === 0 || a === 24) {
                    coordArray.push(netArray[netArray.length - 1]);
                }
                else {
                    coordArray.push(netArray[a - this.kub1]);
                }
            }
            else {
                coordArray.push(netArray[a - this.kub1]);
            }
        }
        if (b < 24) {
            coordArray.push(netArray[b]);
        }
        else {
            if (this.turnBW && this.blackIsHome || !this.turnBW && this.whiteIsHome) {
                for (var k = x - 5; k < x; k++) {
                    if (this.feild[k].f.length != 0) {
                        countB++;
                    }
                }
                if (countB === 0 || b === 24) {
                    coordArray.push(netArray[netArray.length - 1]);
                }
                else {
                    coordArray.push(netArray[a - this.kub1]);
                }
            }
            else {
                coordArray.push(netArray[b - this.kub2]);
            }
        }
    }; //	END of returnBlackCoordinat (x)
    TableComponent.prototype.moveIt = function (a, b, checker) {
        this.feild[a].f.pop(checker);
        this.feild[b].f.push(checker);
    }; //	END of 	moveItBlack ()
    TableComponent.prototype.turn = function (x) {
        var len = this.feild[x].f.length;
        if (this.turnBW) {
            this.coordinatesB = [];
            this.returnNextCoordinat(x, this.netBlack, this.coordinatesB);
            if (this.feild[x].f[0] === 'checker black') {
                if (this.kub1 === this.kub2) {
                    if (this.feild[this.coordinatesB[0]].f[0] === 'checker black' || this.feild[this.coordinatesB[0]].f[0] === undefined || this.coordinatesB[0] > 23 || this.feild[this.coordinatesB[0]].f[0] === 'checker white' && this.feild[this.coordinatesB[0]].f.length === 1) {
                        if (this.feild[this.coordinatesB[0]].f[0] === 'checker white' && this.feild[this.coordinatesB[0]].f.length === 1 && this.coordinatesB[0] < 24) {
                            this.feild[this.coordinatesB[0]].f.pop();
                            this.outFeildW.push('checker white');
                        }
                        if (x != this.coordinatesB[0]) {
                            this.xDoubleUndo.push(x);
                            this.aDoubleUndo.push(this.coordinatesB[0]);
                            this.moveIt(x, this.coordinatesB[0], 'checker black');
                            this.undoVisible = true;
                            this.double++;
                        }
                    }
                }
                else {
                    if (!this.kub1Disable) {
                        if (this.feild[this.coordinatesB[0]].f[0] === 'checker black' || this.feild[this.coordinatesB[0]].f[0] === undefined || this.coordinatesB[0] > 23 || this.feild[this.coordinatesB[0]].f[0] === 'checker white' && this.feild[this.coordinatesB[0]].f.length === 1) {
                            if (this.feild[this.coordinatesB[0]].f[0] === 'checker white' && this.feild[this.coordinatesB[0]].f.length === 1 && this.coordinatesB[0] < 24) {
                                this.feild[this.coordinatesB[0]].f.pop();
                                this.outFeildW.push('checker white');
                            }
                            if (x != this.coordinatesB[0]) {
                                this.moveIt(x, this.coordinatesB[0], 'checker black');
                                this.kub1Disable = true;
                                this.undoVisible = true;
                            }
                        }
                    }
                    else {
                        if (this.feild[this.coordinatesB[1]].f[0] === 'checker black' || this.feild[this.coordinatesB[1]].f[0] === undefined || this.coordinatesB[1] > 23 || this.feild[this.coordinatesB[1]].f[0] === 'checker white' && this.feild[this.coordinatesB[1]].f.length === 1) {
                            if (this.feild[this.coordinatesB[1]].f[0] === 'checker white' && this.feild[this.coordinatesB[1]].f.length === 1 && this.coordinatesB[1] < 24) {
                                this.feild[this.coordinatesB[1]].f.pop();
                                this.outFeildW.push('checker white');
                            }
                            if (x != this.coordinatesB[1]) {
                                this.moveIt(x, this.coordinatesB[1], 'checker black');
                                this.kub2Disable = true;
                                this.tableDisable = true;
                                this.nextPlayerVisible = true;
                            }
                        }
                    }
                }
            }
        }
        else {
            this.coordinatesW = [];
            this.returnNextCoordinat(x, this.netWhite, this.coordinatesW);
            if (this.feild[x].f[0] === 'checker white') {
                if (this.kub1 === this.kub2) {
                    if (this.feild[this.coordinatesW[0]].f[0] === 'checker white' || this.feild[this.coordinatesW[0]].f[0] === undefined || this.coordinatesB[0] > 23 || this.feild[this.coordinatesW[0]].f[0] === 'checker black' && this.feild[this.coordinatesW[0]].f.length === 1) {
                        if (this.feild[this.coordinatesW[0]].f[0] === 'checker black' && this.feild[this.coordinatesW[0]].f.length === 1 && this.coordinatesB[0] < 24) {
                            this.feild[this.coordinatesW[0]].f.pop();
                            this.outFeildB.push('checker black');
                        }
                        if (x != this.coordinatesW[0]) {
                            this.xDoubleUndo.push(x);
                            this.aDoubleUndo.push(this.coordinatesW[0]);
                            this.moveIt(x, this.coordinatesW[0], 'checker white');
                            this.undoVisible = true;
                            this.double++;
                        }
                    }
                }
                else {
                    if (!this.kub1Disable) {
                        if (this.feild[this.coordinatesW[0]].f[0] === 'checker white' || this.feild[this.coordinatesW[0]].f[0] === undefined || this.coordinatesB[0] > 23 || this.feild[this.coordinatesW[0]].f[0] === 'checker black' && this.feild[this.coordinatesW[0]].f.length === 1) {
                            if (this.feild[this.coordinatesW[0]].f[0] === 'checker black' && this.feild[this.coordinatesW[0]].f.length === 1 && this.coordinatesB[0] < 24) {
                                this.feild[this.coordinatesW[0]].f.pop();
                                this.outFeildB.push('checker black');
                            }
                            if (x != this.coordinatesW[0]) {
                                this.moveIt(x, this.coordinatesW[0], 'checker white');
                                this.kub1Disable = true;
                                this.undoVisible = true;
                            }
                        }
                    }
                    else {
                        if (this.feild[this.coordinatesW[1]].f[0] === 'checker white' || this.feild[this.coordinatesW[1]].f[0] === undefined || this.coordinatesB[1] > 23 || this.feild[this.coordinatesW[1]].f[0] === 'checker black' && this.feild[this.coordinatesW[1]].f.length === 1) {
                            if (this.feild[this.coordinatesW[1]].f[0] === 'checker black' && this.feild[this.coordinatesW[1]].f.length === 1 && this.coordinatesB[1] < 24) {
                                this.feild[this.coordinatesW[1]].f.pop();
                                this.outFeildB.push('checker black');
                            }
                            if (x != this.coordinatesW[1]) {
                                this.moveIt(x, this.coordinatesW[1], 'checker white');
                                this.kub2Disable = true;
                                this.tableDisable = true;
                                this.nextPlayerVisible = true;
                            }
                        }
                    }
                }
            }
        }
        if (len === this.feild[x].f.length) {
            this.nextPlayerVisible = true;
        }
    }; //	END of turn()
    TableComponent.prototype.turnOutB = function () {
        var a = 12 - this.kub1;
        var b = 12 - this.kub2;
        var len = this.outFeildB.length;
        if (this.kub1 === this.kub2) {
            if (this.feild[a].f[0] === 'checker black' || this.feild[a].f[0] === undefined || this.feild[a].f[0] === 'checker white' && this.feild[a].f.length === 1) {
                if (this.feild[a].f[0] === 'checker white' && this.feild[a].f.length === 1) {
                    this.feild[a].f.pop();
                    this.outFeildW.push('checker white');
                }
                this.feild[a].f.push('checker black');
                this.outFeildB.pop();
                this.undoVisible = true;
                this.double++;
            }
        }
        else {
            if (!this.kub1Disable) {
                if (this.feild[a].f[0] === 'checker black' || this.feild[a].f[0] === undefined || this.feild[a].f[0] === 'checker white' && this.feild[a].f.length === 1) {
                    if (this.feild[a].f[0] === 'checker white' && this.feild[a].f.length === 1) {
                        this.feild[a].f.pop();
                        this.outFeildW.push('checker white');
                    }
                    this.feild[a].f.push('checker black');
                    this.outFeildB.pop();
                    this.kub1Disable = true;
                    this.undoVisible = true;
                }
            }
            else {
                if (this.feild[b].f[0] === 'checker black' || this.feild[b].f[0] === undefined || this.feild[b].f[0] === 'checker white' && this.feild[b].f.length === 1) {
                    if (this.feild[b].f[0] === 'checker white' && this.feild[b].f.length === 1) {
                        this.feild[b].f.pop();
                        this.outFeildW.push('checker white');
                    }
                    this.feild[b].f.push('checker black');
                    this.outFeildB.pop();
                    this.kub2Disable = true;
                    this.tableDisable = true;
                    this.nextPlayerVisible = true;
                }
            }
        }
        if (len === this.outFeildB.length) {
            this.nextPlayerVisible = true;
        }
    }; //	END of turnOutB ()
    TableComponent.prototype.turnOutW = function () {
        var a = 24 - this.kub1;
        var b = 24 - this.kub2;
        var len = this.outFeildW.length;
        if (this.kub1 === this.kub2) {
            if (this.feild[a].f[0] === 'checker white' || this.feild[a].f[0] === undefined || this.feild[a].f[0] === 'checker black' && this.feild[a].f.length === 1) {
                if (this.feild[a].f[0] === 'checker black' && this.feild[a].f.length === 1) {
                    this.feild[a].f.pop();
                    this.outFeildB.push('checker black');
                }
                this.feild[a].f.push('checker white');
                this.outFeildW.pop();
                this.undoVisible = true;
                this.double++;
            }
        }
        else {
            if (!this.kub1Disable) {
                if (this.feild[a].f[0] === 'checker white' || this.feild[a].f[0] === undefined || this.feild[a].f[0] === 'checker black' && this.feild[a].f.length === 1) {
                    if (this.feild[a].f[0] === 'checker black' && this.feild[a].f.length === 1) {
                        this.feild[a].f.pop();
                        this.outFeildB.push('checker black');
                    }
                    this.feild[a].f.push('checker white');
                    this.outFeildW.pop();
                    this.kub1Disable = true;
                    this.undoVisible = true;
                }
            }
            else {
                if (this.feild[b].f[0] === 'checker white' || this.feild[b].f[0] === undefined || this.feild[b].f[0] === 'checker black' && this.feild[b].f.length === 1) {
                    if (this.feild[b].f[0] === 'checker black' && this.feild[b].f.length === 1) {
                        this.feild[b].f.pop();
                        this.outFeildB.push('checker black');
                    }
                    this.feild[b].f.push('checker white');
                    this.outFeildW.pop();
                    this.kub2Disable = true;
                    this.tableDisable = true;
                    this.nextPlayerVisible = true;
                }
            }
        }
        if (len === this.outFeildW.length) {
            this.nextPlayerVisible = true;
        }
    }; // turnOutW ()
    TableComponent.prototype.changeCubes = function () {
        this.kub1 = Math.floor((Math.random() * 6) + 1);
        this.kub2 = Math.floor((Math.random() * 6) + 1);
        this.kubikVisible = true;
    }; //	END of changeTurn()
    TableComponent.prototype.changeKubik = function () {
        if (!this.kub1Disable) {
            var a = this.kub1;
            this.kub1 = this.kub2;
            this.kub2 = a;
        }
    }; //	END of changeKubik()	
    TableComponent.prototype.undo = function () {
        this.feild = JSON.parse(JSON.stringify(this.backTurnFeild));
        this.outFeildB = JSON.parse(JSON.stringify(this.outFeildBUndo));
        this.outFeildW = JSON.parse(JSON.stringify(this.outFeildWUndo));
        this.nextPlayerVisible = false;
        this.undoVisible = false;
        this.kub1Disable = false;
        this.kub2Disable = false;
        this.tableDisable = false;
        this.double = 0;
    }; //	END of undo()
    TableComponent.prototype.nextTurn = function () {
        this.turnBW = !this.turnBW;
        this.kubikVisible = false;
        this.nextPlayerVisible = false;
        this.undoVisible = false;
        this.kub1Disable = false;
        this.kub2Disable = false;
        this.tableDisable = false;
        this.double = 0;
        this.kub1 = 0;
        this.kub2 = 0;
        this.backTurnFeild = JSON.parse(JSON.stringify(this.feild));
        this.outFeildBUndo = JSON.parse(JSON.stringify(this.outFeildB));
        this.outFeildWUndo = JSON.parse(JSON.stringify(this.outFeildW));
    }; //	END of nextTurn ()
    TableComponent.prototype.ifGameOver = function () {
        var countB = 0;
        var countW = 0;
        for (var i = 0; i < this.netBlack.length - 1; i++) {
            if (this.feild[this.netBlack[i]].f[0] != 'checker black') {
                countB++;
            }
        }
        for (var i = 0; i < this.netWhite.length - 1; i++) {
            if (this.feild[this.netWhite[i]].f[0] != 'checker white') {
                countW++;
            }
        }
        if (countB === 24) {
            this.massageGameOver = 'BLACKS  WIN';
            this.gameOverVisible = true;
            this.turnBW = true;
            this.score.black++;
            if (!this.blackIsHome) {
                this.score.black++;
            }
        }
        if (countW === 24) {
            this.massageGameOver = 'WHITE  WIN';
            this.gameOverVisible = true;
            this.turnBW = false;
            this.score.white++;
            if (!this.whiteIsHome) {
                this.score.white++;
            }
        }
    }; //	END of gameOver () 
    TableComponent.prototype.continueMatch = function () {
        this.feild = JSON.parse(JSON.stringify(this.restartFeild));
        this.kubikVisible = false;
        this.nextPlayerVisible = false;
        this.undoVisible = false;
        this.kub1Disable = false;
        this.kub2Disable = false;
        this.tableDisable = false;
        this.gameOverVisible = false;
        this.double = 0;
        this.kub1 = 0;
        this.kub2 = 0;
        this.outFeildB = [];
        this.outFeildW = [];
    }; //	END of continueMatch ()
    TableComponent.prototype.reset = function () {
        this.feild = JSON.parse(JSON.stringify(this.restartFeild));
        this.turnBW = true;
        this.kubikVisible = false;
        this.nextPlayerVisible = false;
        this.undoVisible = false;
        this.kub1Disable = false;
        this.kub2Disable = false;
        this.tableDisable = false;
        this.gameOverVisible = false;
        this.double = 0;
        this.kub1 = 0;
        this.kub2 = 0;
        this.outFeildB = [];
        this.outFeildW = [];
        this.score.black = 0;
        this.score.white = 0;
    }; //	END of reset ()
    TableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-table',
            template: __webpack_require__("./src/app/table/table.component.html"),
            styles: [__webpack_require__("./src/app/table/table.component.less")]
        })
    ], TableComponent);
    return TableComponent;
}()); // END of class TableComponent



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    local: {
        dice: 'https://github.com/slavikzdebskyy/bg-images/blob/master/dice1.png'
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
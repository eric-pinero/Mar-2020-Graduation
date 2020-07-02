/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/2020-01-09.js":
/*!***************************!*\
  !*** ./src/2020-01-09.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst students = [\n  {\n    \"id\": 4871,\n    \"name\": \"Adrian Kim\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/8405c29ba8716b5b0ac3ae592d38198d?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4860,\n    \"name\": \"Akif Saifi\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/54277d81fedbedc58c4bbb19c56c7359?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4853,\n    \"name\": \"Alex Lee\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/5e2242631ffe4bbe42844b6028f05733?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4907,\n    \"name\": \"Alexander (Alex) Tong\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/7013bb0f66a147db6999e7ee395c8aa1?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4885,\n    \"name\": \"Andrew (Andy) Jia\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/fd64b83381add82418217bed46bece70?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4884,\n    \"name\": \"Carl Godlewski\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/967dd4e03ffaf60e6bba804f80cc549d?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4905,\n    \"name\": \"Catherine Kim\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/c80bf50e480a833470847e877c130b24?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4683,\n    \"name\": \"Chris Simons\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/de1ec45fa3cb3ba126c4d905e0823dc9?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4899,\n    \"name\": \"Clifford (Cliff) Yan\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/171b4920a4709324a15bf04f3e58db45?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4880,\n    \"name\": \"Colton Wilmouth\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/9bb8b1c25b97174b46ed87e6a16b08e4?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4868,\n    \"name\": \"Daniel (Dan) Bourdier\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/249e8c1c06652c0569a868b8af1531ef?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4870,\n    \"name\": \"Daniel Gorter\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/d5eaff2901dcc5b3be203b501ad0c9b2?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4862,\n    \"name\": \"Daniel (Danny) Morgan\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/21a2a735baaae1d822c8fc51b8dc5a09?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4873,\n    \"name\": \"Daniel (Danny) Singer\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/9edce119824a2309683d2c6679f8cec9?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4876,\n    \"name\": \"Douglas (Doug) Crawford\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/9af10e728493d90b1c48c2ec705ed869?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4898,\n    \"name\": \"Elvin Valette\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/85424ff901cb6a16637f7de18d5f0d49?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4902,\n    \"name\": \"Emina Ramovic\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/7ae3f3117c4acf2826bf5bfec26b0640?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4875,\n    \"name\": \"Eric Lee\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/89795707392063d1342432a11ad19721?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4888,\n    \"name\": \"Eric Lo\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/8965e991c93b75081b1404661526c5df?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4865,\n    \"name\": \"Eric Smith\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/fefa0be89f1d5f0a165b93e67ca95f9b?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4883,\n    \"name\": \"Gloria Kang\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/3dffb3160968d95b9f2bb8b7aa65db5b?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4855,\n    \"name\": \"Hira Quddus\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/e6b8a10d8b5c1270ee0f962dde1385f0?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4879,\n    \"name\": \"Isaac Owens\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/c25fea5308654a95ca530e391f40adda?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4861,\n    \"name\": \"Jae-Son Song\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/cc11122c2b4d0ac34ff02e528f74bf67?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4864,\n    \"name\": \"Jesse Lin\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/d6bdbbaf66292d023615608c41e8f0a1?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4897,\n    \"name\": \"Jonathan Romero\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/9180d6a4c7847e7a35bf63f6bfe554d4?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4858,\n    \"name\": \"Jonathan Yaniv\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/c3bb6041bd8f44777fdec4fd608f3549?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4689,\n    \"name\": \"Karl Konetsky\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/6fcff40e623c06e1625a14bf91576b79?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4877,\n    \"name\": \"Keely Lee\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/2b0ddba93988fc23719040d672c3506c?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4881,\n    \"name\": \"Kevin Kusky\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/487c9ebaae6c2246f27667935022f697?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4882,\n    \"name\": \"Louis Velazquez\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/626a06daaa19d96959fd0e018dada494?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4890,\n    \"name\": \"Mari Kasanuki\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/2e3eab40abda5c6aa7d82bf66ec62255?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4892,\n    \"name\": \"Megan Mcnulty\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/52bfd75fd0098c39fffb784eb9b44cc4?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4874,\n    \"name\": \"Nahuel Gorosito\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/8f12d2aced6a4b97168564d641d7c35b?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4889,\n    \"name\": \"Oleksandr (Alex) Melnykov\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/3d4e32413f66846344f515395defab3e?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4856,\n    \"name\": \"Olga Smirnova\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/8276f2fc0b4ceee75e3d6f6bd007d91f?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4895,\n    \"name\": \"Paul Magioncalda\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/07fa20098a8662506b41f76c76f89c4a?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4900,\n    \"name\": \"Rahul Jain\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/d5f246f85d6983a931cb6e24f5672c1b?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4857,\n    \"name\": \"Ricky Zheng\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/53275f2a990fdac85ffc27ce43138ee8?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4887,\n    \"name\": \"Roman Gontcharov\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/315bdcbc0a588053f3ed68a1b48bb208?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4893,\n    \"name\": \"Sinan Yucesan\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/90215f8c776c0d055edc49e721f1c189?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4867,\n    \"name\": \"Tieulam Thai\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/dd964e206ab31fd70aede7a343dfcc3f?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4859,\n    \"name\": \"Tiffany Chin\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/00619cf4ad4bf3f37e19b3f5530fbb73?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4903,\n    \"name\": \"William Suh\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/a78f98506adad1b0d896a0fe308c9545?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4886,\n    \"name\": \"Zarif Rahat\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/e354acf7013e252ea5bdd86a45ba188a?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4866,\n    \"name\": \"Zohaib Khaliq\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/1feb8521a1bfebbbed31c5949d555b47?secure=true&size=300\",\n    \"occup\": \"student\"\n  }\n]\n/* harmony default export */ __webpack_exports__[\"default\"] = (students);\n\n\n//# sourceURL=webpack:///./src/2020-01-09.js?");

/***/ }),

/***/ "./src/ceremony.js":
/*!*************************!*\
  !*** ./src/ceremony.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Ceremony {\n    constructor(ctx, graduates, currentStudent = 0) {\n        this.ctx = ctx;\n        this.graduates = graduates;\n        this.currentStudent = currentStudent;\n        this.megamanSpriteSheet = new Image();\n        this.stage = new Image();\n        this.audienceChairs = new Image();\n        this.diploma = new Image();\n        this.aalogo = new Image();\n\n        this.megamanSpriteSheet.src = \"./dist/assets/megaman_sprite_sheet.png\";\n        this.stage.src = './dist/assets/pixel_art_stage.png';\n        this.audienceChairs.src = \"./dist/assets/theatre_chairs.png\";\n        this.diploma.src = \"./dist/assets/diploma.png\";\n        this.aalogo.src = \"./dist/assets/logo.png\";\n    }\n\n    constructStage() {\n        let waitingSprite = [100, 100];\n        let spriteSize = [50, 50]\n\n        this.interval = setInterval(() => {\n            this.ctx.drawImage(this.stage, 20, 50, 850, 300);\n            this.ctx.drawImage(this.audienceChairs, 20, 349, 850, 70)\n            this.ctx.drawImage(this.audienceChairs, 20, 349, 850, 130)\n            this.ctx.drawImage(this.megamanSpriteSheet,\n                waitingSprite[0], waitingSprite[1],\n                spriteSize[0], spriteSize[1],\n                80, 245,\n                // spriteSize[0], spriteSize[1])\n                80, 80)\n                // clearInterval(this.interval)\n        },100)\n    }\n\n    nextStudentMoves(button) {\n        button.disabled = true\n        this.graduates[this.currentStudent].moveAcrossScreen(this, button)\n        this.currentStudent += 1\n    }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ceremony);\n\n//# sourceURL=webpack:///./src/ceremony.js?");

/***/ }),

/***/ "./src/graduate.js":
/*!*************************!*\
  !*** ./src/graduate.js ***!
  \*************************/
/*! exports provided: Graduate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Graduate\", function() { return Graduate; });\nclass Graduate {\n    constructor(ctx, name, img_url) {\n        this.ctx = ctx\n        this.name = name\n        this.initials = name.split(\" \")[0][1] + name.split(\" \")[1][1]\n        this.img_url = new Image()\n        this.img_url.src = img_url\n    }\n\n    drawGraduate(ceremony,i,startingPosition, jumpHeight){\n        let spriteSize = [50, 50]\n        let runningSprites = [[150, 0], [200, 0], [250, 0]];\n        let dashSprites = [[350, 250], [400, 250], [450, 250]];\n        let jumpSprite = [300, 150]\n\n        this.ctx.clearRect(0, 0, 1000, 1000)\n\n        this.ctx.drawImage(ceremony.stage, 20, 50, 850, 300);\n        this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 70)\n        this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 130)\n\n        if (startingPosition[0] >= 350 && startingPosition[0] <= 490) {\n            if (startingPosition[0] <= 420) {\n                jumpHeight[0] = jumpHeight[0] + 11;\n            } else {\n                jumpHeight[0] = jumpHeight[0] - 11;\n            }\n\n            this.ctx.drawImage(ceremony.megamanSpriteSheet,\n                // runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],\n                jumpSprite[0], jumpSprite[1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1] - jumpHeight,\n                80, 80)\n        } else if (startingPosition[0] > 490) { // after landing from diploma catch\n            this.ctx.drawImage(ceremony.megamanSpriteSheet,\n                dashSprites[i % dashSprites.length][0], dashSprites[i % runningSprites.length][1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1] - 40,\n                130, 130)\n        } else {\n            this.ctx.drawImage(ceremony.megamanSpriteSheet,\n                runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1],\n                80, 80)\n        }\n\n        let photoHeight = 170;\n        let photoWidth = 150;\n\n        this.ctx.fillText(this.initials, 375, 55);\n\n        if (startingPosition[0] < 440) {\n            this.ctx.drawImage(ceremony.diploma, 440, 235, 20, 20); //draw diploma\n        } else if (startingPosition[0] === 440) {\n            ceremony.sound.play();\n        } else {\n            this.ctx.drawImage(ceremony.aalogo, 375, 55, 150, 150);\n        }\n    }\n\n    moveAcrossScreen(ceremony,button) {\n        clearInterval(ceremony.interval);\n        let startingPosition = [80, 245]\n        let jumpSprite = [300, 100] //might get to use this later\n        let studentName = document.querySelector(\"#student\")\n        studentName.innerHTML = this.name\n        let i = 0;\n        let jumpHeight = [0];\n\n        let interval = setInterval(() => {\n            startingPosition[0] += 20\n            i++\n\n            this.drawGraduate(ceremony,i, startingPosition, jumpHeight)\n\n            if (startingPosition[0] >= 740) {\n                clearInterval(interval)\n                this.ctx.clearRect(0, 0, 1000, 1000)\n                ceremony.constructStage()\n                button.disabled = false\n                studentName.innerHTML  = \"\"\n            }\n        }, 100)\n    }\n\n    jumpAndGrabDiploma(ceremony, i, startingPosition) {\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/graduate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graduate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graduate */ \"./src/graduate.js\");\n/* harmony import */ var _ceremony__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ceremony */ \"./src/ceremony.js\");\n/* harmony import */ var _2020_01_09__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./2020-01-09 */ \"./src/2020-01-09.js\");\n\n //there is no reason that these two imports are different. I was messing around with how you can import files\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let canvas = document.getElementById(\"canvas\")\n    let nextStudentButton = document.getElementById(\"next-student\")\n    let ctx = canvas.getContext(\"2d\")\n    let ol1 = document.getElementById(\"ol1\")\n    let ol2 = document.getElementById(\"ol2\")\n    let punch = document.getElementById(\"punch\");\n    let submitButton = document.querySelector(\"#current-student-button\")\n\n    let graduates = [] \n    _2020_01_09__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forEach((student) => {\n        let graduate = new _graduate__WEBPACK_IMPORTED_MODULE_0__[\"Graduate\"](ctx,student.name,student.imageUrl)\n        graduates.push(graduate)\n    })\n\n    let mid = Math.floor(graduates.length/2)\n    ol2.start = mid + 1\n\n    for (let i = 0; i < mid;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol1.appendChild(listItem)\n    }\n\n    for (let i = mid; i < graduates.length;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol2.appendChild(listItem)\n    }\n\n    let ceremony = new _ceremony__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, graduates)\n    ceremony.sound = punch; // give sound to ceremony instance\n\n    submitButton.addEventListener(\"click\", () => {\n        let input = document.querySelector(\"input\");\n        ceremony.currentStudent = parseInt(input.value) - 1\n    })\n\n    ceremony.constructStage()\n\n\n    nextStudentButton.addEventListener(\"click\", (e) => {\n        ceremony.nextStudentMoves(e.target)\n    })\n\n\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
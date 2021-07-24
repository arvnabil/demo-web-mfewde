(window.webpackJsonp=window.webpackJsonp||[]).push([[3],[,,,,,,,function(n,r,e){"use strict";var t=e(8),a=e.n(t);function i(n,r,e,t,a,i,o){try{var s=n[i](o),c=s.value}catch(n){return void e(n)}s.done?r(c):Promise.resolve(c).then(t,a)}var o=function(){var n,r=(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!("serviceWorker"in navigator)){n.next=4;break}return n.next=3,a.a.register();case 3:return n.abrupt("return");case 4:console.log("Service worker not supported in this browser");case 5:case"end":return n.stop()}}),n)})),function(){var r=this,e=arguments;return new Promise((function(t,a){var o=n.apply(r,e);function s(n){i(o,t,a,s,c,"next",n)}function c(n){i(o,t,a,s,c,"throw",n)}s(void 0)}))});return function(){return r.apply(this,arguments)}}();r.a=o},,function(n,r,e){"use strict";var t={init:function(n){var r=this,e=n.button,t=n.drawer,a=n.content;e.addEventListener("click",(function(n){r._toggleDrawer(n,t)})),a.addEventListener("click",(function(n){r._closeDrawer(n,t)}))},_toggleDrawer:function(n,r){n.stopPropagation(),r.classList.toggle("open")},_closeDrawer:function(n,r){n.stopPropagation(),r.classList.remove("open")}},a={parseActiveUrlWithCombiner:function(){var n=window.location.hash.slice(1).toLowerCase(),r=this._urlSplitter(n);return this._urlCombiner(r)},parseActiveUrlWithoutCombiner:function(){var n=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(n)},_urlSplitter:function(n){var r=n.split("/");return{resource:r[1]||null,id:r[2]||null,verb:r[3]||null}},_urlCombiner:function(n){return(n.resource?"/".concat(n.resource):"/")+(n.id?"/:id":"")+(n.verb?"/".concat(n.verb):"")}},i=e(1),o=e(0);var s=function(n){return'\n  <h2 class="restaurant_title">'.concat(n.name,'</h2>\n  <img class="restaurant_poster lazyload"\n    data-src="',"".concat(o.a.BASE_IMAGE_URL+n.pictureId),'" \n    alt="').concat(n.name,'" />\n  <div class="restaurant_info">\n  <h3>Informasi Restoran</h3>\n    <h4>Tempat</h4>\n    <p>').concat(n.city,"</p>\n    <h4>Alamat</h4>\n    <p>").concat(n.address,"</p>\n    <h4>Kategori</h4>\n    <p>").concat(n.categories.map((function(n){return'<span class="category">'.concat(n.name,"</span>")})).join(" "),"</p>\n    <h4>Rating</h4>\n    <p>⭐️").concat(n.rating,'</p>\n  </div>\n  <div class="menu grid-2">\n  <div class="restaurant_overview">\n    <h3>Tentang Restoran</h3>\n    <p>').concat(n.description,'</p>\n  </div>\n  <h3>Menu</h3> \n  <br/>\n    <div class="menu-food">\n    <h4>Makanan</h4>\n    <ul>\n        ').concat(n.menus.foods.map((function(n){return" <li>".concat(n.name,"</li>")})).join(""),'\n    </ul>\n    </div>\n    <div class="menu-drink">\n    <h4>Minuman</h4>\n    <ul>\n        ').concat(n.menus.drinks.map((function(n){return"<li>".concat(n.name,"</li>")})).join(""),"\n    </ul>\n  </div>\n  <h3>Customer Review</h3>\n  <br>\n    ").concat(n.customerReviews.map((function(n){return'\n      <div class="customer-review">\n        <div class="customer-review_header">\n          <div class="customer-review_header_date">\n              <p><span class="customer-review_header_date_time">'.concat(n.date,'</span></p>\n          </div>\n          <div class="title">').concat(n.name,'</div>\n        </div>\n        <div class="customer-review_content">\n        <p>').concat(n.review,"</p>\n        </div>\n      </div>\n    ")})).join(""),'\n    <div id="post-review"></div>\n  </div>\n')},c=function(n){return'\n  <div class="restaurant-item">\n    <div class="restaurant-item_header">\n        <img class="restaurant-item_header_poster lazyload"\n        data-src="'.concat("".concat(o.a.BASE_IMAGE_URL+n.pictureId),'" \n        alt="',n.name,'" />\n        <div class="restaurant-item_header_rating">\n            <p>⭐️<span class="restaurant-item_header_rating_score">').concat(n.rating,'</span></p>\n        </div>\n    </div>\n    <div class="restaurant-item_content">\n        <h3 class="card_title"><a href="',"/#/detail/".concat(n.id),'">').concat(n.name,"</a></h3>\n        <p>").concat((r=n.description,e=200,r.length>e-3?"".concat(r.substring(0,e).trimEnd(),"..."):r),"</p>\n    </div>\n  </div>\n  ");var r,e};function u(n,r,e,t,a,i,o){try{var s=n[i](o),c=s.value}catch(n){return void e(n)}s.done?r(c):Promise.resolve(c).then(t,a)}function d(n){return function(){var r=this,e=arguments;return new Promise((function(t,a){var i=n.apply(r,e);function o(n){u(i,t,a,o,s,"next",n)}function s(n){u(i,t,a,o,s,"throw",n)}o(void 0)}))}}var p={render:function(){return d(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n          <div class="hero">\n              <hero-custom class="hero_inner">\n              </hero-custom>\n          </div>\n          <about-resto></about-resto>\n          <div class="content">\n            <h2 class="content__heading">Daftar Restoran Terlaris</h2>\n            <div id="restaurants" class="restaurants">\n    \n            </div>\n          </div>\n        ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return d(regeneratorRuntime.mark((function n(){var r,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.listRestaurant();case 2:r=n.sent,e=document.querySelector("#restaurants"),r.forEach((function(n){e.innerHTML+=c(n)}));case 5:case"end":return n.stop()}}),n)})))()}},l=e(2);function m(n,r,e,t,a,i,o){try{var s=n[i](o),c=s.value}catch(n){return void e(n)}s.done?r(c):Promise.resolve(c).then(t,a)}function f(n){return function(){var r=this,e=arguments;return new Promise((function(t,a){var i=n.apply(r,e);function o(n){m(i,t,a,o,s,"next",n)}function s(n){m(i,t,a,o,s,"throw",n)}o(void 0)}))}}var h={init:function(n){var r=this;return f(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.likeButtonContainer,a=n.restaurant,r._likeButtonContainer=t,r._restaurant=a,e.next=5,r._renderButton();case 5:case"end":return e.stop()}}),e)})))()},_renderButton:function(){var n=this;return f(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=n._restaurant.id,r.next=3,n._isRestaurantExist(e);case 3:if(!r.sent){r.next=7;break}n._renderLiked(),r.next=8;break;case 7:n._renderLike();case 8:case"end":return r.stop()}}),r)})))()},_isRestaurantExist:function(n){return f(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l.a.getRestaurant(n);case 2:return e=r.sent,r.abrupt("return",!!e);case 4:case"end":return r.stop()}}),r)})))()},_renderLike:function(){var n=this;this._likeButtonContainer.innerHTML='\n  <button aria-label="like this resto" id="likeButton" class="like">\n     <i class="fa fa-heart-o" aria-hidden="true"></i>\n  </button>\n',document.querySelector("#likeButton").addEventListener("click",f(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l.a.putRestaurant(n._restaurant);case 2:n._renderButton();case 3:case"end":return r.stop()}}),r)}))))},_renderLiked:function(){var n=this;this._likeButtonContainer.innerHTML='\n  <button aria-label="unlike this resto" id="likeButton" class="like">\n    <i class="fa fa-heart" aria-hidden="true"></i>\n  </button>\n',document.querySelector("#likeButton").addEventListener("click",f(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l.a.deleteRestaurant(n._restaurant.id);case 2:n._renderButton();case 3:case"end":return r.stop()}}),r)}))))}},g=function(n,r,e){var t={id:n.id,name:r,review:e};i.a.postRestaurant(t);var a=document.querySelector("#post-review"),o=(new Date).toLocaleDateString("id-ID",{year:"numeric",month:"long",day:"numeric"}),s='\n    <div class="customer-review">\n    <div class="customer-review_header">\n        <div class="customer-review_header_date">\n            <p><span class="customer-review_header_date_time">'.concat(o,'</span></p>\n        </div>\n        <div class="title">').concat(r,'</div>\n    </div>\n    <div class="customer-review_content">\n    <p>').concat(e,"</p>\n    </div>\n    </div>\n    ");a.innerHTML+=s};function v(n,r,e,t,a,i,o){try{var s=n[i](o),c=s.value}catch(n){return void e(n)}s.done?r(c):Promise.resolve(c).then(t,a)}function x(n){return function(){var r=this,e=arguments;return new Promise((function(t,a){var i=n.apply(r,e);function o(n){v(i,t,a,o,s,"next",n)}function s(n){v(i,t,a,o,s,"throw",n)}o(void 0)}))}}function b(n,r,e,t,a,i,o){try{var s=n[i](o),c=s.value}catch(n){return void e(n)}s.done?r(c):Promise.resolve(c).then(t,a)}function w(n){return function(){var r=this,e=arguments;return new Promise((function(t,a){var i=n.apply(r,e);function o(n){b(i,t,a,o,s,"next",n)}function s(n){b(i,t,a,o,s,"throw",n)}o(void 0)}))}}var _={"/":p,"/detail/:id":{render:function(){return x(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <div id="restaurant" class="restaurant"></div>\n      <div id="likeButtonContainer"></div>\n      <div class="form-review">\n          <form>\n            <h3>Tambah Review</h3>\n            <div class="mb-3">\n              <label for="inputName" class="form-label">Name</label>\n              <input name="inputName" type="text" class="form-control" id="inputName">\n            </div>\n            <div class="mb-3">\n              <label for="inputReview" class="form-label">Review</label>\n              <input name="inputReview" type="text" class="form-control" id="inputReview">\n            </div>\n            <button id="submit-review" type="submit" class="btn">Submit</button>\n          </form>\n      </div>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return x(regeneratorRuntime.mark((function n(){var r,e,t,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=a.parseActiveUrlWithoutCombiner(),n.next=3,i.a.detailRestaurant(r.id);case 3:e=n.sent,document.querySelector("#restaurant").innerHTML=s(e),h.init({likeButtonContainer:document.querySelector("#likeButtonContainer"),restaurant:{id:e.id,name:e.name,description:e.description,pictureId:e.pictureId,rating:e.rating}}),t=document.querySelector("#submit-review"),o=document.querySelector("#inputName"),c=document.querySelector("#inputReview"),t.addEventListener("click",(function(n){n.preventDefault(),""===o.value||""===c.value?(alert("Inputan review tidak boleh ada yang kosong"),o.value="",c.value=""):(g(r,o.value,c.value),o.value="",c.value="")}));case 11:case"end":return n.stop()}}),n)})))()}},"/favorites":{render:function(){return w(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n          <br>\n          <div class="content">\n            <h2 class="content__heading">Favorite Restoran Terlaris</h2>\n            <div id="restaurants" class="restaurants">\n            </div>\n          </div>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){var n=this;return w(regeneratorRuntime.mark((function r(){var e,t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l.a.getAllRestaurant();case 2:(e=r.sent).length?e.forEach((function(n){t=c(n)})):t=n._getEmptyFavoriteTemplate(),document.getElementById("restaurants").innerHTML=t;case 5:case"end":return r.stop()}}),r)})))()},_getEmptyFavoriteTemplate:function(){return'<div class="favorite-item__not__found favorites__not__found">You dont have any Favorite Cafe or Resto</div>'}}};function k(n,r,e,t,a,i,o){try{var s=n[i](o),c=s.value}catch(n){return void e(n)}s.done?r(c):Promise.resolve(c).then(t,a)}function y(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var R=function(){function n(r){var e=r.button,t=r.drawer,a=r.content;!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),this._button=e,this._drawer=t,this._content=a,this._initialAppShell()}var r,e,i,o,s;return r=n,(e=[{key:"_initialAppShell",value:function(){t.init({button:this._button,drawer:this._drawer,content:this._content})}},{key:"renderPage",value:(o=regeneratorRuntime.mark((function n(){var r,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=a.parseActiveUrlWithCombiner(),e=_[r],n.next=4,e.render();case 4:return this._content.innerHTML=n.sent,n.next=7,e.afterRender();case 7:case"end":return n.stop()}}),n,this)})),s=function(){var n=this,r=arguments;return new Promise((function(e,t){var a=o.apply(n,r);function i(n){k(a,e,t,i,s,"next",n)}function s(n){k(a,e,t,i,s,"throw",n)}i(void 0)}))},function(){return s.apply(this,arguments)})}])&&y(r.prototype,e),i&&y(r,i),n}();r.a=R},function(n,r,e){"use strict";function t(n,r,e,t,a,i,o){try{var s=n[i](o),c=s.value}catch(n){return void e(n)}s.done?r(c):Promise.resolve(c).then(t,a)}function a(n){return function(){var r=this,e=arguments;return new Promise((function(a,i){var o=n.apply(r,e);function s(n){t(o,a,i,s,c,"next",n)}function c(n){t(o,a,i,s,c,"throw",n)}s(void 0)}))}}var i={sendNotification:function(n){var r=n.title,e=n.options;if(this._checkAvailability())return this._checkPermission()?void this._showNotification({title:r,options:e}):(console.log("User did not yet granted permission"),void this._requestPermission());console.log("Notification not supported in this browser")},_checkAvailability:function(){return!!("Notification"in window)},_checkPermission:function(){return"granted"===Notification.permission},_requestPermission:function(){return a(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Notification.requestPermission();case 2:"denied"===(r=n.sent)&&console.log("Notification Denied"),"default"===r&&console.log("Permission closed");case 5:case"end":return n.stop()}}),n)})))()},_showNotification:function(n){return a(regeneratorRuntime.mark((function r(){var e,t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=n.title,t=n.options,r.next=3,navigator.serviceWorker.ready;case 3:r.sent.showNotification(e,t);case 5:case"end":return r.stop()}}),r)})))()}},o={init:function(n){new WebSocket(n).onmessage=this._onMessageHandler},_onMessageHandler:function(n){var r=JSON.parse(n.data);i.sendNotification({title:"".concat(r.title," is on cinema!"),options:{icon:"icons/icon-192x192.png",body:r.overview,vibrate:[200,100,200]}})}};r.a=o},,,,function(n,r,e){var t=e(3),a=e(15);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1};t(a,i);n.exports=a.locals||{}},function(n,r,e){(r=e(4)(!1)).push([n.i,'/* Link Color theme : https://colorhunt.co/palette/281238 */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  scroll-behavior: smooth;\r\n}\r\nbody {\r\n  font-family: "Montserrat", sans-serif;\r\n  overflow-x: hidden;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  padding: 15px 0;\r\n}\r\n\r\np.copyright {\r\n  color: #fff;\r\n  padding: 15px 0;\r\n}\r\na {\r\n  padding: 14px 0;\r\n}\r\n\r\n.btn {\r\n  padding: 10px;\r\n  font-weight: 700;\r\n  color: #f5e6ca;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  background-color: #fb9300;\r\n  border: 1px solid transparent;\r\n  margin: 1.3em 0;\r\n  font-size: 18px;\r\n  border-radius: 0.276em;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: #f54748;\r\n}\r\n\r\nimg {\r\n  display: block;\r\n}\r\n\r\n/*\r\n  AppBar\r\n*/\r\n#hamburgerButton {\r\n  color: #f5e6ca;\r\n  padding: 14px;\r\n}\r\n.app-bar {\r\n  padding: 8px 16px;\r\n  background-color: #fb9300;\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto;\r\n  gap: 10px;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 99;\r\n  border-bottom: 2px solid rgba(221, 221, 221, 0.5);\r\n}\r\n\r\n.app-bar .app-bar_menu {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 15px;\r\n}\r\n\r\n.app-bar .app-bar_menu button {\r\n  background-color: transparent;\r\n  border: none;\r\n  font-size: 18px;\r\n  padding: 8px;\r\n  cursor: pointer;\r\n}\r\n\r\n.app-bar .app-bar_brand {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.app-bar .app-bar_brand h1 {\r\n  color: #f5e6ca;\r\n  text-transform: capitalize;\r\n  font-weight: 100;\r\n  font-size: 20px;\r\n  user-select: none;\r\n}\r\n\r\n.app-bar .app-bar_navigation {\r\n  position: absolute;\r\n  top: 50px;\r\n  left: -180px;\r\n  width: 150px;\r\n  transition: all 0.3s;\r\n  padding: 10px 0;\r\n  background-color: #fb9300;\r\n  overflow: hidden;\r\n}\r\n\r\n.app-bar .app-bar_navigation.open {\r\n  left: 0;\r\n}\r\n\r\n.app-bar .app-bar_navigation ul li a {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  color: #f5e6ca;\r\n  padding: 8px;\r\n  margin-left: 10px;\r\n  font-size: 20px;\r\n  margin-bottom: 5px;\r\n  width: 100%;\r\n  padding: 10px 0px;\r\n}\r\n.app-bar .app-bar_navigation ul li a:hover {\r\n  color: #fff;\r\n}\r\n/* Skip link */\r\n.skip-link {\r\n  position: absolute;\r\n  top: -40px;\r\n  left: 0;\r\n  background-color: #f54748;\r\n  color: #f5e6ca;\r\n  padding: 8px;\r\n  z-index: 100;\r\n}\r\n\r\n.skip-link:focus {\r\n  top: 0;\r\n}\r\n\r\n/* Hero  */\r\n.hero {\r\n  display: flex;\r\n  align-items: center;\r\n  min-height: 610px;\r\n  width: 100%;\r\n  height: 270px;\r\n  object-fit: cover;\r\n  object-position: center;\r\n  text-align: center;\r\n  background-image: url("./images/hero-image_2.jpg");\r\n  background-position: center;\r\n  background-color: #8888;\r\n}\r\n\r\n.hero_inner {\r\n  margin: 0 auto;\r\n  max-width: 800px;\r\n}\r\n\r\n.hero_title {\r\n  color: #f5e6ca;\r\n  text-shadow: 2px 2px #fb9300;\r\n  font-weight: 500;\r\n  font-size: 36px;\r\n}\r\n\r\n.hero_tagline {\r\n  color: #f5e6ca;\r\n  text-shadow: 2px 2px #fb9300;\r\n  margin-top: 16px;\r\n  font-size: 18px;\r\n  font-weight: 300;\r\n  margin-bottom: 23px;\r\n}\r\n/*\r\n * content\r\n */\r\n\r\n.content {\r\n  margin: 0 auto;\r\n}\r\n.content__heading {\r\n  padding: 0 32px;\r\n  width: 100%;\r\n}\r\n\r\n/*\r\n * headline\r\n */\r\n\r\n.headline {\r\n  margin: 50px 32px 32px 32px;\r\n}\r\n\r\n.headline_figure {\r\n  width: 100%;\r\n}\r\n\r\n.headline_figure img {\r\n  width: 100%;\r\n  border-radius: 10px;\r\n}\r\n\r\n.headline_figure figcaption {\r\n  text-align: center;\r\n  color: #6666;\r\n  font-size: 13px;\r\n  font-weight: 400;\r\n  margin-top: 8px;\r\n}\r\n\r\n.headline_content {\r\n  width: 100%;\r\n  padding: 16px 0;\r\n}\r\n\r\n.headline_title {\r\n  font-size: 24px;\r\n  font-weight: 500;\r\n}\r\n\r\n.headline_description {\r\n  font-size: 12px;\r\n  margin-top: 12px;\r\n}\r\n\r\n/*\r\n * latest\r\n */\r\n\r\n.latest {\r\n  width: 100%;\r\n  margin: 60px auto;\r\n  text-align: center;\r\n}\r\n/*\r\n  Restaurants\r\n*/\r\n\r\n.category {\r\n  background-color: #fb9300;\r\n  font-size: 14px;\r\n  padding: 2px 5px;\r\n  border-radius: 5px;\r\n  color: #fff;\r\n}\r\n.category:hover {\r\n  background-color: #f54748;\r\n}\r\n.restaurants {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  gap: 16px;\r\n  margin: 32px;\r\n}\r\n\r\n/* \r\n  Customer Review \r\n*/\r\n.customer-review {\r\n  width: 100%;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  border-radius: 8px;\r\n  border: #8888 1px solid;\r\n  overflow: hidden;\r\n}\r\n\r\n.customer-review_header {\r\n  position: relative;\r\n  height: 60px;\r\n}\r\n.customer-review_header .title {\r\n  font-weight: bold;\r\n  font-size: 1.37em;\r\n  padding: 0.3em;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 0 0 10px 10px;\r\n  background-color: #fb9300;\r\n}\r\n\r\n.customer-review .customer-review_header .customer-review_header_date {\r\n  position: relative;\r\n  font-size: 12px;\r\n  top: 0;\r\n  padding: 4px 8px;\r\n  width: 100%;\r\n  text-align: center;\r\n  right: 0;\r\n  display: inline-block;\r\n  background-color: #f54748;\r\n  color: white;\r\n}\r\n\r\n.customer-review\r\n  .customer-review_header\r\n  .customer-review_header_date\r\n  .customer-review_header_date_time {\r\n  margin-left: 10px;\r\n}\r\n\r\n.customer-review .customer-review_content {\r\n  padding: 16px;\r\n}\r\n\r\n.customer-review .customer-review_content h3 {\r\n  margin: 8px 0 8px 0;\r\n}\r\n\r\n.customer-review .customer-review_content h3 a {\r\n  color: #fb9300;\r\n  text-decoration: none;\r\n}\r\n\r\n.customer-review .customer-review_content h3 a:hover {\r\n  color: #f54748;\r\n}\r\n\r\n.customer-review .customer-review_content p {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 4; /* number of lines to show */\r\n  -webkit-box-orient: vertical;\r\n}\r\n\r\n/*\r\n  Restaurant Item\r\n*/\r\n\r\n.restaurant-item {\r\n  width: 100%;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n}\r\n\r\n.restaurant-item_header {\r\n  position: relative;\r\n}\r\n\r\n.restaurant-item .restaurant-item_header .restaurant-item_header_poster {\r\n  width: 100%;\r\n}\r\n\r\n.restaurant-item .restaurant-item_header .restaurant-item_header_rating {\r\n  position: absolute;\r\n  top: 0;\r\n  padding: 8px;\r\n  width: 58px;\r\n  left: 0;\r\n  display: inline-block;\r\n  background-color: #f54748;\r\n  border-radius: 0 0 10px 0;\r\n  color: white;\r\n}\r\n\r\n.restaurant-item\r\n  .restaurant-item_header\r\n  .restaurant-item_header_rating\r\n  .restaurant-item_header_rating_score {\r\n  margin-left: 10px;\r\n}\r\n\r\n.restaurant-item .restaurant-item_content {\r\n  padding: 16px;\r\n}\r\n\r\n.restaurant-item .restaurant-item_content h3 {\r\n  margin: 8px 0 8px 0;\r\n}\r\n\r\n.restaurant-item .restaurant-item_content h3 a {\r\n  color: #fb9300;\r\n  text-decoration: none;\r\n}\r\n\r\n.restaurant-item .restaurant-item_content h3 a:hover {\r\n  color: #f54748;\r\n}\r\n\r\n.restaurant-item .restaurant-item_content p {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 4; /* number of lines to show */\r\n  -webkit-box-orient: vertical;\r\n}\r\n\r\n/*\r\n  Restaurant\r\n*/\r\n\r\n.restaurant {\r\n  margin: 0 auto;\r\n  padding: 32px;\r\n  width: 100%;\r\n  max-width: fit-content;\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  gap: 18px 16px;\r\n}\r\n\r\n.restaurant .restaurant_poster {\r\n  width: 100%;\r\n  max-width: 400px;\r\n  border-radius: 8px;\r\n}\r\n\r\n.restaurant .restaurant_info h4 {\r\n  margin: 8px 0;\r\n}\r\n.menu h4 {\r\n  font-weight: bold;\r\n  font-size: 1.37em;\r\n  padding: 1em;\r\n  color: #fff;\r\n  text-align: center;\r\n  margin-bottom: 5px;\r\n  border-radius: 0 0 10px 10px;\r\n  background-color: #fb9300;\r\n}\r\n\r\n.menu-food {\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  align-content: center;\r\n}\r\n\r\n.menu-food li {\r\n  padding: 0.5em 0;\r\n  display: block;\r\n  text-decoration: none;\r\n  padding: 1em;\r\n  font-weight: 600;\r\n  color: #fff;\r\n  border-radius: 0 0 10px 10px;\r\n  background-color: #fb9300;\r\n  border: 1px solid #f54748;\r\n  border-width: 0 0 0.5px;\r\n}\r\n.menu-food li:hover {\r\n  background-color: #f54748;\r\n  border: 0.5px solid #fb9300;\r\n}\r\n\r\n.menu-drink {\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  align-content: center;\r\n}\r\n\r\n.menu-drink li {\r\n  padding: 0.5em 0;\r\n  display: block;\r\n  text-decoration: none;\r\n  padding: 1em;\r\n  font-weight: 600;\r\n  color: #fff;\r\n  border-radius: 0 0 10px 10px;\r\n  background-color: #fb9300;\r\n  border: 0.5px solid #f54748;\r\n  border-width: 0 0 0.5px;\r\n}\r\n.menu-drink li:hover {\r\n  background-color: #f54748;\r\n  border: 0.5px solid #fb9300;\r\n}\r\n\r\n/*\r\n * footer\r\n */\r\n\r\nfooter {\r\n  bottom: 0;\r\n  background-color: #fb9300;\r\n  padding: 2em;\r\n  text-align: center;\r\n}\r\n\r\nfooter ul {\r\n  margin: 0 auto;\r\n  display: inline-block;\r\n}\r\n\r\nfooter li {\r\n  display: inline-block;\r\n  margin: 0 1em;\r\n  font-size: 14px;\r\n}\r\n\r\nfooter a {\r\n  display: inline-block;\r\n  padding: 1.3em;\r\n  text-decoration: none;\r\n  color: #f5e6ca;\r\n}\r\n\r\n.fa-heart-o {\r\n  width: 44px;\r\n  height: 44px;\r\n  padding-top: 24px;\r\n}\r\n',""]),n.exports=r},function(n,r,e){var t=e(3),a=e(17);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1};t(a,i);n.exports=a.locals||{}},function(n,r,e){(r=e(4)(!1)).push([n.i,'.grid-2 {\r\n  display: grid;\r\n  grid-gap: 1em;\r\n}\r\n@media screen and (min-width: 455px) {\r\n  .headline_content {\r\n    padding: 16px 16px;\r\n  }\r\n\r\n  .headline_title {\r\n    font-size: 28px;\r\n  }\r\n\r\n  .headline_description {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 650px) {\r\n  .app-bar {\r\n    grid-template-columns: 1fr auto;\r\n    padding: 8px 32px;\r\n  }\r\n\r\n  .app-bar .app-bar_brand h1 {\r\n    font-size: 1.5em;\r\n  }\r\n\r\n  .app-bar .app-bar_menu {\r\n    display: none;\r\n  }\r\n\r\n  .app-bar .app-bar_navigation {\r\n    position: static;\r\n    width: 100%;\r\n  }\r\n\r\n  .app-bar .app-bar_navigation ul li {\r\n    display: inline-block;\r\n  }\r\n\r\n  .app-bar .app-bar_navigation ul li a {\r\n    display: inline-block;\r\n    width: 120px;\r\n    text-align: center;\r\n    margin: 0;\r\n  }\r\n  .headline_content {\r\n    margin: 0 auto;\r\n    max-width: 650px;\r\n  }\r\n\r\n  .restaurants {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  .restaurant-item .restaurant-item_header .restaurant-item_header_poster {\r\n    max-height: 200px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .hero {\r\n    min-height: 500px;\r\n    background: url("./images/hero-image_2-small.jpg");\r\n    background-size: cover;\r\n    background-position: center;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n  .app-bar .app-bar_brand h1 {\r\n    font-size: 2em;\r\n  }\r\n  .restaurant-item .restaurant-item_header .restaurant-item_header_poster {\r\n    max-height: 200px;\r\n  }\r\n  .restaurant {\r\n    max-width: 720px;\r\n    grid-template-columns: auto 1fr;\r\n  }\r\n  .restaurant .restaurant_poster {\r\n    width: 100%;\r\n    max-width: 400px;\r\n    border-radius: 8px;\r\n  }\r\n  .restaurant .restaurant_title {\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n  }\r\n\r\n  .restaurant .restaurant_overview {\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n  }\r\n  .menu {\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n    grid-row-start: 3;\r\n    grid-row-end: 4;\r\n  }\r\n  .grid-2 {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-gap: 1.245em;\r\n  }\r\n\r\n  .form-review {\r\n    max-width: 720px;\r\n    margin: 50px auto;\r\n  }\r\n}\r\n@media screen and (min-width: 850px) {\r\n  .restaurants {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n\r\n  .restaurant-item .restaurant-item_header .restaurant-item_header_poster {\r\n    max-height: 140px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 900px) {\r\n  .headline {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  .headline_content {\r\n    padding: 16px 32px;\r\n  }\r\n  .restaurant {\r\n    max-width: 850px;\r\n  }\r\n  .restaurant .restaurant_poster {\r\n    max-width: 400px;\r\n  }\r\n\r\n  .form-review {\r\n    max-width: 850px;\r\n    margin: 50px auto;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 600px) and (max-width: 992px) {\r\n  .hero {\r\n    background: url("./images/hero-image_2-large.jpg");\r\n    background-position: center;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  .headline {\r\n    max-width: 1136px;\r\n    margin: 50px auto;\r\n  }\r\n  .form-review {\r\n    max-width: 1136px;\r\n    margin: 50px auto;\r\n  }\r\n  .content {\r\n    max-width: 1200px;\r\n    margin: 50px auto;\r\n  }\r\n  .restaurants {\r\n    grid-template-columns: repeat(4, 1fr);\r\n  }\r\n\r\n  .restaurant-item .restaurant-item_header .restaurant-item_header_poster {\r\n    max-height: 160px;\r\n  }\r\n  .restaurant {\r\n    max-width: 1136px;\r\n  }\r\n  .restaurant .restaurant_poster {\r\n    max-width: 600px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1600px) {\r\n  .headline {\r\n    max-width: 1200px;\r\n    margin: 50px auto;\r\n  }\r\n  .form-review {\r\n    max-width: 1200px;\r\n    margin: 50px auto;\r\n  }\r\n  .content {\r\n    max-width: 1200px;\r\n    margin: 50px auto;\r\n  }\r\n  .restaurants {\r\n    grid-template-columns: repeat(5, 1fr);\r\n  }\r\n  .restaurant-item .restaurant-item_header .restaurant-item_header_poster {\r\n    max-height: 120px;\r\n  }\r\n}\r\n',""]),n.exports=r},function(n,r,e){var t=e(3),a=e(19);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1};t(a,i);n.exports=a.locals||{}},function(n,r,e){(r=e(4)(!1)).push([n.i,"/*\r\n   Like\r\n*/\r\n.like {\r\n    --card-shadow-color: 4, 9, 20; \r\n    box-shadow: 0px 0.46rem 2.18rem rgba(var(--card-shadow-color), 0.03),\r\n    0px 0.93rem 1.4rem rgba(var(--card-shadow-color), 0.03),\r\n    0px 0.25rem 0.53rem rgba(var(--card-shadow-color), 0.05),\r\n    0px 0.12rem 0.18rem rgba(var(--card-shadow-color), 0.03);\r\n    width: 100px;\r\n    height: 100px;\r\n    margin: 50px auto;\r\n    border: 1px solid rgba(var(--card-shadow-color), 0.1);\r\n    font-size: 18px;\r\n    position: fixed;\r\n    bottom: 16px;\r\n    right: 16px;\r\n    background-color: #fb9300;\r\n    color: #f54748;\r\n    border: 0;\r\n    border-radius: 50%;\r\n    width: 55px;\r\n    height: 55px;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}",""]),n.exports=r},function(n,r,e){var t=e(3),a=e(21);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1};t(a,i);n.exports=a.locals||{}},function(n,r,e){(r=e(4)(!1)).push([n.i,"form {\r\n    margin: 2em 0;\r\n    padding: 1.5em;\r\n    border: 2px solid #fb9300;\r\n    border-radius: 0.5em;\r\n}\r\nform:hover {\r\n    margin: 2em 0;\r\n    padding: 1.5em;\r\n    border: 2px solid #f54748;\r\n    border-radius: 0.5em;\r\n}\r\n\r\n.form-control {\r\n    display: block;\r\n    width: 100%;\r\n    min-height: 1em;\r\n    padding: 0.3em;\r\n    font-size: 1em;\r\n    font-weight: normal;\r\n    color: #000;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 2px solid #000;\r\n    appearance: none;\r\n    border-radius: 0.5em;\r\n    padding: 12px 0px;\r\n}\r\n\r\n.form-label {\r\n    padding-bottom: 8px;\r\n    font-weight: bold;\r\n    font-style: normal;\r\n    font-size: small;\r\n    color: #000;\r\n}\r\n\r\n.mb-3 {\r\n    margin-bottom: 1.3em;\r\n    margin-top: 0.5em;\r\n}\r\n  \r\n.form-review{\r\n    margin: 0 auto;\r\n    padding: 32px;\r\n}\r\n\r\n#submit-review {\r\n    padding: 12px;\r\n}",""]),n.exports=r}]]);
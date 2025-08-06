
(function () {
    "use strict";
    'use strict';

    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



    // include 'raText' in your app declaration
    var app = angular.module('viewCustom', ['raText']);


    // attach ra-text elements to prmMainMenuAfter directive
    // could probably be a different directive if needed
   app.component('prmMainMenuAfter', {
      template: '<ra-text></ra-text>'
    });





/*************begin raText ************/

angular.module('raText', []).component('raText', {
  template: `
    <div ng-if="$ctrl.showModal" class="ra-modal-overlay">
      <div class="ra-modal">
        <h2>About the Primo Research Assistant</h2>
        <p>This AI-powered tool can help you generate starting places for your research. 
        Please be aware that it does not have access to all library materials and is also prone to other pitfalls of generative AI. 
        It is not a substitute for librarian expertise.
        </p>
        <button ng-click="$ctrl.closeModal()">Got it!</button>
      </div>
    </div>
  `,
  controller: ['$location', '$timeout', function($location, $timeout) {
    var ctrl = this;

    ctrl.$onInit = function() {
      //Hide by default
      ctrl.showModal = false;

      //Display if URL includes researchAssistant
       if ($location.path().includes('researchAssistant')) {
         ctrl.showModal = true;
       }
    };
    //user clicks button to close
    ctrl.closeModal = function() {
      ctrl.showModal = false;
    };
  }]
});





})();

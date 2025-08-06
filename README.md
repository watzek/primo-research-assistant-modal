# primo-research-assistant-popup
Creates a popup window/modal with custom text when users navigate to the Primo Research Assistant.

![Research Assistant Modal](screenshot.png "Research Assistant Modal")


A concern with Primo Research Assistant (Primo's AI chatbot) is that it only indexes CDI content. This may not be clear to users. 

This Primo VE customization creates a modal/popup when users visit the Research Assistant. The text of the modal can be customized within the `template` portion of the Angular module in custom.js.

To use:

- Download and unzip your Primo VE view's customization package from Alma.
- In a code editor, paste the contents of this customization's [css/custom1.css](css/custom1.css) into your package's custom1.css file.
- In your package's js/custom.js, include the contents of this customization's [js/custom.js](js/custom.js). In step 1, include 'raModal' as part of your `app` declaration. You should be able to copy/paste steps 2 and 3 into your file's anonymous parent function (`(function () {...........}`).
- Edit the text within the template section as needed.
- Zip your customization package, and deploy to your view.

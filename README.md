# forma11y known as VisionImpairedFriendlyMedicalForms
Decrease barriers for blind and vision impaired people in medical practices. 

## Requirments
- [Node](https://nodejs.org/en/)
- [Ionic - Angular](https://ionicframework.com/docs/)
- [NVM](https://github.com/nvm-sh/nvm)
  - optional, but highly recommend to have this installed
  - is really good for managing node versions
  - no need to use `sudo`

## Get started
1. clone the project
```
git clone git@github.com:HealthHackAu2020/forma11y.git
```
2. change directory into forma11y
```
cd forma11y
```
3. run npm ci (a better way of npm install see this link [article](https://medium.com/better-programming/npm-ci-vs-npm-install-which-should-you-use-in-your-node-js-projects-51e07cb71e26))
```
npm ci
```
4. serve the project using npx (see article about npx [article](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b))
``` 
npx ionic serve
```
### Helpful VSCODE extenstions
- [Ionic Snippets](https://marketplace.visualstudio.com/items?itemName=fivethree.vscode-ionic-snippets)
- [Ionic Blog 2019 ~ 10 Awesome VS Code Extensions](https://ionicframework.com/blog/10-awesome-vs-code-extensions/)


### Project Thoughts
## Must have
- Web forms
- Form Validation
- 0 Errors on HTML Codesniffer / pa11y plugin / Netlify a11y plugin


## Plan
Use current Ionic Angular to leverage:
- components;
- typescript;
- Future proof for H74 eventually (todo :: add hl7 typescript link here);

## Resources
- [Notes](https://docs.google.com/document/d/1VDXm7wYrZo-NQRr53VmZmT3MpEQXoVJKYoRbQAu1Iec/edit)
- [a11yproject](https://www.a11yproject.com/)
- [HTML Codesniffer Bookmarklet](https://marketplace.squiz.net/extensions/html-codesniffer)
- [Lighthouse in Chrome Dev Tools](https://developers.google.com/web/tools/lighthouse)
- [Spectrum Google Chrome Extension](https://chrome.google.com/webstore/detail/spectrum/ofclemegkcmilinpcimpjkfhjfgmhieb?hl=en)
- [Pa11y](https://github.com/pa11y/pa11y)
- [Netlfiy a11y plugin](https://docs.netlify.com/configure-builds/build-plugins/#ui-installation)
- [Do’s and Don’ts](https://github.com/UKHomeOffice/posters/blob/master/accessibility/dos-donts/posters_en-UK/accessibility-posters-set.pdf)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Accessible Color Generator](https://learnui.design/tools/accessible-color-generator.html)
- [Article a11y Dyslexia](https://uxdesign.cc/web-accessibility-for-people-with-dyslexia-emerging-research-1129129596d3)

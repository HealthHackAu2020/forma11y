# forma11y known as VisionImpairedFriendlyMedicalForms
Decrease barriers for blind and vision impaired people in medical practices. 

## Requirments
- [Node](https://nodejs.org/en/)
- [Ionic - Angular](https://ionicframework.com/docs/)
- 

## Get started
1. clone the project
```
git clone git@github.com:HealthHackAu2020/forma11y.git
```
2. cd into forma11y
```
cd forma11y
```
1. run npm install [npm ci vs npm install](https://medium.com/better-programming/npm-ci-vs-npm-install-which-should-you-use-in-your-node-js-projects-51e07cb71e26)
```
npm ci

```
4a. serve the project [npx vs npm](https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/)
``` 
npx ionic serve
```
4b. serve the project: show iOS and Android (npx ionic serve --l)
```
npx ionic serve --l
```
5. Ensure that you can do a prod build locally
```
npx ionic build --prod
```

## Deployment
[Forma11y github page](https://healthhackau2020.github.io/forma11y/)
- Deployed via Github pages for now (all in one place)
```
npm run gh-pages
```
What this script does:
- does prod build
- uses gh-pages branch
- uses the _www_ directory

## Helpful commands

- Ionic Repair Fixes
  - package lock files
  - node_modules
``` 
npx ionic repair
```

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
- [Bootstrap template for inspiration](https://labinator.com/wordpress-marketplace/lab-demo/)

function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,o){for(var i=0;i<o.length;i++){var t=o[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,o,i){return o&&_defineProperties(e.prototype,o),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"4fRq":function(e,o){var i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(i){var t=new Uint8Array(16);e.exports=function(){return i(t),t}}else{var n=new Array(16);e.exports=function(){for(var e,o=0;o<16;o++)0==(3&o)&&(e=4294967296*Math.random()),n[o]=e>>>((3&o)<<3)&255;return n}}},I2ZF:function(e,o){for(var i=[],t=0;t<256;++t)i[t]=(t+256).toString(16).substr(1);e.exports=function(e,o){var t=o||0;return[i[e[t++]],i[e[t++]],i[e[t++]],i[e[t++]],"-",i[e[t++]],i[e[t++]],"-",i[e[t++]],i[e[t++]],"-",i[e[t++]],i[e[t++]],"-",i[e[t++]],i[e[t++]],i[e[t++]],i[e[t++]],i[e[t++]],i[e[t++]]].join("")}},"KtM+":function(e,o,i){"use strict";i.r(o),i.d(o,"NewPatientRegistrationPageModule",(function(){return C}));var t,n,b,r,a=i("ofXK"),c=i("3Pt+"),l=i("TEn/"),s=i("tyNb"),m=i("mrSG"),f=i("oxX3"),d=i("xk4V"),u=i.n(d),z=i("fXoL"),p=i("8Xxu"),M=i("Qeml"),h=i("g7Db"),L=((t=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||t)},t.\u0275cmp=z.Db({type:t,selectors:[["hidden-submit-button"]],decls:3,vars:0,consts:[[1,"hidden"],["type","submit"]],template:function(e,o){1&e&&(z.Mb(0,"div",0),z.Mb(1,"button",1),z.ic(2," Submit "),z.Lb(),z.Lb())},styles:[".hidden[_ngcontent-%COMP%]{display:none}"]}),t),g=i("5cRx"),S=[{path:"",component:(n=function(){function e(o,i,t,n){_classCallCheck(this,e),this.darkModeService=o,this.fontSizeService=i,this.changeDetectorRef=t,this.formBuilder=n,this.title="New Patient Registration",this.profileForm=this.formBuilder.group({title:new c.b(""),surname:new c.b(""),givenNames:new c.b(""),dob:new c.b(""),gender:new c.b(""),maritalStatus:new c.b(""),occupation:new c.b("")}),this.medicareCardForm=this.formBuilder.group({cardNumber:new c.b("",[f.a.isRequired,f.a.isValidMedicareCardNumber]),cardRef:new c.b("",[f.a.isRequired,f.a.isWholeNumber,f.a.isGreaterThan(0)]),expiryDate:new c.b("",[f.a.isRequired])}),this.healthcareCardForm=this.formBuilder.group({cardNumber:new c.b(""),type:new c.b(""),expiryDate:new c.b("")}),this.contactDetailsForm=this.formBuilder.group({residentialAddress:new c.b(""),residentialPostcode:new c.b(""),postalAddress:new c.b(""),postalPostcode:new c.b(""),mobile:new c.b(""),phone:new c.b(""),work:new c.b(""),email:new c.b("")}),this.nextOfKinForm=this.formBuilder.group({name:new c.b(""),relationship:new c.b(""),mobile:new c.b(""),phone:new c.b(""),work:new c.b("")}),this.emergencyContactForm=this.formBuilder.group({name:new c.b(""),relationship:new c.b(""),mobile:new c.b(""),phone:new c.b(""),work:new c.b("")}),this.advancedHealthCareDirectiveForm=this.formBuilder.group({hasAdvancedHealthCareDirective:new c.b("")})}return _createClass(e,[{key:"ngOnInit",value:function(){this.getDefaults()}},{key:"ngAfterViewChecked",value:function(){this.getDefaults()}},{key:"getDefaults",value:function(){this.isDarkMode=this.darkModeService.get(),this.fontSize=this.fontSizeService.get(),this.changeDetectorRef.detectChanges()}},{key:"onNext",value:function(){this.buildForm()}},{key:"buildForm",value:function(){return Object(m.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u()(),e.next=3,this.profileForm.value;case 3:return e.t1=e.sent,e.next=6,this.medicareCardForm.value;case 6:return e.t2=e.sent,e.next=9,this.healthcareCardForm.value;case 9:return e.t3=e.sent,e.next=12,this.contactDetailsForm.value;case 12:return e.t4=e.sent,e.next=15,this.nextOfKinForm.value;case 15:return e.t5=e.sent,e.next=18,this.emergencyContactForm.value;case 18:return e.t6=e.sent,e.next=21,this.advancedHealthCareDirectiveForm.value;case 21:e.t7=e.sent,o={id:e.t0,formType:"new-patient",patient:e.t1,medicare:e.t2,healthcareCard:e.t3,contact:e.t4,nextOfKin:e.t5,emergencyContact:e.t6,hasAdvancedHhealthDirective:e.t7},console.dir(o),console.log(JSON.stringify(o));case 24:case"end":return e.stop()}}),e,this)})))}},{key:"clearForms",value:function(){this.profileForm.reset(),this.medicareCardForm.reset(),this.healthcareCardForm.reset(),this.contactDetailsForm.reset(),this.nextOfKinForm.reset(),this.emergencyContactForm.reset(),this.advancedHealthCareDirectiveForm.reset()}}]),e}(),n.\u0275fac=function(e){return new(e||n)(z.Jb(p.a),z.Jb(M.a),z.Jb(z.h),z.Jb(c.a))},n.\u0275cmp=z.Db({type:n,selectors:[["app-new-patient-registration"]],decls:256,vars:158,consts:[["slot","start"],["slot","end"],["size","12","size-md","8","offset-md","2"],[3,"formGroup","ngSubmit"],["position","stacked"],["placeholder","Select a title","interface","action-sheet","formControlName","title"],["value","Ms"],["value","Miss"],["value","Mrs"],["value","Mr"],["value","Dr"],["value","Rev"],["placeholder","Surname","type","text","formControlName","surname"],["placeholder","Given names","type","text","formControlName","givenNames"],["placeholder","Date of birth","type","date","formControlName","dob"],["formControlName","gender"],["fixed",""],["size","12","size-md","6"],["slot","end","value","male"],["slot","end","value","female"],["placeholder","Select an option","interface","action-sheet","formControlName","maritalStatus"],["value","Single"],["value","Married"],["value","Defacto"],["value","Separated"],["value","Divorced"],["value","Widowed"],["placeholder","Occupation","type","text","formControlName","occupation"],[3,"formGroup"],["size","12","size-md","7"],["position","stacked","aria-label","Medicare Card number"],["placeholder","XXXXXXXXX","type","text","pattern","[0-9]*","maxlength","10","formControlName","cardNumber"],[3,"control","fieldName"],["size","12","size-md","5"],["position","stacked","aria-label","Medicare Reference number"],["placeholder","X","type","text","pattern","[0-9]*","maxlength","1","formControlName","cardRef"],["size","12"],["placeholder","Expiry date","type","date","displayFormat","MM/YYYY","min","2020","max","2050","formControlName","expiryDate"],["placeholder","xxxx","type","text","formControlName","cardNumber"],["placeholder","","type","text","formControlName","type"],["placeholder","Expiry date","type","date","formControlName","expiryDate"],["placeholder","Home Address","type","text","formControlName","residentialAddress"],["placeholder","Postcode","type","text","pattern","[0-9]*","formControlName","residentialPostcode"],["placeholder","Postal Address","type","text","formControlName","postalAddress"],["placeholder","Postcode","type","text","pattern","[0-9]*","formControlName","postalPostcode"],["placeholder","Telephone number","type","tel","formControlName","phone"],["placeholder","Work number","type","tel","formControlName","work"],["placeholder","Mobile number","type","tel","formControlName","mobile"],["placeholder","Email","type","email","formControlName","email"],["placeholder","Name","type","text","formControlName","name"],["placeholder","Relationship","type","text","formControlName","relationship"],["placeholder","Telephone number","type","number","formControlName","phone"],["formControlName","hasAdvancedHealthCareDirective"],["size","6"],["slot","end","value","yes","checked",""],["slot","end","value","no"],["size","12","size-md","8","offset-md","2",1,"footer-buttons"],["color","primary","type","submit",3,"click"],["slot","end","name","arrow-forward-outline"],["color","primary","fill","outline","type","button",1,"hidden",3,"click"],["slot","start","name","arrow-back-outline"]],template:function(e,o){1&e&&(z.Mb(0,"ion-header"),z.Mb(1,"ion-toolbar"),z.Mb(2,"ion-buttons",0),z.Kb(3,"ion-menu-button"),z.Lb(),z.Mb(4,"ion-title"),z.ic(5),z.Lb(),z.Mb(6,"ion-buttons",1),z.Kb(7,"accessibility-button"),z.Lb(),z.Lb(),z.Lb(),z.Mb(8,"ion-content"),z.Mb(9,"ion-grid"),z.Mb(10,"ion-row"),z.Mb(11,"ion-col",2),z.Mb(12,"form",3),z.Ub("ngSubmit",(function(){return o.onNext()})),z.Mb(13,"ion-card"),z.Mb(14,"ion-card-header"),z.Mb(15,"ion-card-title"),z.ic(16,"Section A: Personal details"),z.Lb(),z.Lb(),z.Mb(17,"ion-card-content"),z.Mb(18,"ion-item"),z.Mb(19,"ion-label",4),z.ic(20,"Title"),z.Lb(),z.Mb(21,"ion-select",5),z.Mb(22,"ion-select-option",6),z.ic(23,"Ms"),z.Lb(),z.Mb(24,"ion-select-option",7),z.ic(25,"Miss"),z.Lb(),z.Mb(26,"ion-select-option",8),z.ic(27,"Mrs"),z.Lb(),z.Mb(28,"ion-select-option",9),z.ic(29,"Mr"),z.Lb(),z.Mb(30,"ion-select-option",10),z.ic(31,"Dr"),z.Lb(),z.Mb(32,"ion-select-option",11),z.ic(33,"Rev"),z.Lb(),z.Lb(),z.Lb(),z.Mb(34,"ion-item"),z.Mb(35,"ion-label",4),z.ic(36,"Surname"),z.Lb(),z.Kb(37,"ion-input",12),z.Lb(),z.Mb(38,"ion-item"),z.Mb(39,"ion-label",4),z.ic(40,"Given names"),z.Lb(),z.Kb(41,"ion-input",13),z.Lb(),z.Mb(42,"ion-item"),z.Mb(43,"ion-label",4),z.ic(44,"Date of birth"),z.Lb(),z.Kb(45,"ion-input",14),z.Lb(),z.Mb(46,"ion-radio-group",15),z.Mb(47,"ion-list-header"),z.ic(48,"Gender"),z.Lb(),z.Mb(49,"ion-grid",16),z.Mb(50,"ion-row"),z.Mb(51,"ion-col",17),z.Mb(52,"ion-item"),z.Mb(53,"ion-label"),z.ic(54,"Male"),z.Lb(),z.Kb(55,"ion-radio",18),z.Lb(),z.Lb(),z.Mb(56,"ion-col",17),z.Mb(57,"ion-item"),z.Mb(58,"ion-label"),z.ic(59,"Female"),z.Lb(),z.Kb(60,"ion-radio",19),z.Lb(),z.Lb(),z.Lb(),z.Lb(),z.Lb(),z.Mb(61,"ion-item"),z.Mb(62,"ion-label",4),z.ic(63,"Marital status"),z.Lb(),z.Mb(64,"ion-select",20),z.Mb(65,"ion-select-option",21),z.ic(66,"Single"),z.Lb(),z.Mb(67,"ion-select-option",22),z.ic(68,"Married"),z.Lb(),z.Mb(69,"ion-select-option",23),z.ic(70,"Defacto"),z.Lb(),z.Mb(71,"ion-select-option",24),z.ic(72,"Separated"),z.Lb(),z.Mb(73,"ion-select-option",25),z.ic(74,"Divorced"),z.Lb(),z.Mb(75,"ion-select-option",26),z.ic(76,"Widowed"),z.Lb(),z.Lb(),z.Lb(),z.Mb(77,"ion-item"),z.Mb(78,"ion-label",4),z.ic(79,"Occupation"),z.Lb(),z.Kb(80,"ion-input",27),z.Lb(),z.Lb(),z.Lb(),z.Kb(81,"hidden-submit-button"),z.Lb(),z.Mb(82,"form",28),z.Mb(83,"ion-card"),z.Mb(84,"ion-card-header"),z.Mb(85,"ion-card-title"),z.ic(86,"Medicare card"),z.Lb(),z.Lb(),z.Mb(87,"ion-card-content"),z.Mb(88,"ion-grid"),z.Mb(89,"ion-row"),z.Mb(90,"ion-col",29),z.Mb(91,"ion-item"),z.Mb(92,"ion-label",30),z.ic(93,"Card number"),z.Lb(),z.Kb(94,"ion-input",31),z.Lb(),z.Kb(95,"validation-error",32),z.Lb(),z.Mb(96,"ion-col",33),z.Mb(97,"ion-item"),z.Mb(98,"ion-label",34),z.ic(99,"Reference number"),z.Lb(),z.Kb(100,"ion-input",35),z.Lb(),z.Kb(101,"validation-error",32),z.Lb(),z.Mb(102,"ion-col",36),z.Mb(103,"ion-item"),z.Mb(104,"ion-label",4),z.ic(105,"Expiry date"),z.Lb(),z.Kb(106,"ion-datetime",37),z.Lb(),z.Kb(107,"validation-error",32),z.Lb(),z.Lb(),z.Lb(),z.Lb(),z.Lb(),z.Kb(108,"hidden-submit-button"),z.Lb(),z.Mb(109,"form",28),z.Mb(110,"ion-card"),z.Mb(111,"ion-card-header"),z.Mb(112,"ion-card-title"),z.ic(113,"Pension, Health Care Card, or Veterans Affairs number (if applicable)"),z.Lb(),z.Lb(),z.Mb(114,"ion-card-content"),z.Mb(115,"ion-grid"),z.Mb(116,"ion-row"),z.Mb(117,"ion-col",36),z.Mb(118,"ion-item"),z.Mb(119,"ion-label",4),z.ic(120,"Card Number"),z.Lb(),z.Kb(121,"ion-input",38),z.Lb(),z.Lb(),z.Mb(122,"ion-col",36),z.Mb(123,"ion-item"),z.Mb(124,"ion-label",4),z.ic(125,"Type of Veterans Affairs card"),z.Lb(),z.Kb(126,"ion-input",39),z.Lb(),z.Lb(),z.Mb(127,"ion-col",36),z.Mb(128,"ion-item"),z.Mb(129,"ion-label",4),z.ic(130,"Expiry date"),z.Lb(),z.Kb(131,"ion-input",40),z.Lb(),z.Lb(),z.Lb(),z.Lb(),z.Lb(),z.Lb(),z.Kb(132,"hidden-submit-button"),z.Lb(),z.Mb(133,"form",28),z.Mb(134,"ion-card"),z.Mb(135,"ion-card-header"),z.Mb(136,"ion-card-title"),z.ic(137,"Contact Details"),z.Lb(),z.Lb(),z.Mb(138,"ion-card-content"),z.Mb(139,"ion-item"),z.Mb(140,"ion-label",4),z.ic(141,"Home Address"),z.Lb(),z.Kb(142,"ion-input",41),z.Lb(),z.Mb(143,"ion-item"),z.Mb(144,"ion-label",4),z.ic(145,"Postcode"),z.Lb(),z.Kb(146,"ion-input",42),z.Lb(),z.Mb(147,"ion-item"),z.Mb(148,"ion-label",4),z.ic(149,"Postal Address"),z.Lb(),z.Kb(150,"ion-input",43),z.Lb(),z.Mb(151,"ion-item"),z.Mb(152,"ion-label",4),z.ic(153,"Postcode"),z.Lb(),z.Kb(154,"ion-input",44),z.Lb(),z.Mb(155,"ion-item"),z.Mb(156,"ion-label",4),z.ic(157,"Telephone number"),z.Lb(),z.Kb(158,"ion-input",45),z.Lb(),z.Mb(159,"ion-item"),z.Mb(160,"ion-label",4),z.ic(161,"Work number"),z.Lb(),z.Kb(162,"ion-input",46),z.Lb(),z.Mb(163,"ion-item"),z.Mb(164,"ion-label",4),z.ic(165,"Mobile number"),z.Lb(),z.Kb(166,"ion-input",47),z.Lb(),z.Mb(167,"ion-item"),z.Mb(168,"ion-label",4),z.ic(169,"Email"),z.Lb(),z.Kb(170,"ion-input",48),z.Lb(),z.Lb(),z.Lb(),z.Kb(171,"hidden-submit-button"),z.Lb(),z.Mb(172,"form",28),z.Mb(173,"ion-card"),z.Mb(174,"ion-card-header"),z.Mb(175,"ion-card-title"),z.ic(176,"Next of Kin"),z.Lb(),z.Lb(),z.Mb(177,"ion-card-content"),z.Mb(178,"ion-item"),z.Mb(179,"ion-label",4),z.ic(180,"Name "),z.Lb(),z.Kb(181,"ion-input",49),z.Lb(),z.Mb(182,"ion-item"),z.Mb(183,"ion-label",4),z.ic(184,"Relationship to you "),z.Lb(),z.Kb(185,"ion-input",50),z.Lb(),z.Mb(186,"ion-item"),z.Mb(187,"ion-label",4),z.ic(188,"Telephone number "),z.Lb(),z.Kb(189,"ion-input",51),z.Lb(),z.Mb(190,"ion-item"),z.Mb(191,"ion-label",4),z.ic(192,"Work number "),z.Lb(),z.Kb(193,"ion-input",46),z.Lb(),z.Mb(194,"ion-item"),z.Mb(195,"ion-label",4),z.ic(196,"Mobile number "),z.Lb(),z.Kb(197,"ion-input",47),z.Lb(),z.Lb(),z.Lb(),z.Kb(198,"hidden-submit-button"),z.Lb(),z.Mb(199,"form",28),z.Mb(200,"ion-card"),z.Mb(201,"ion-card-header"),z.Mb(202,"ion-card-title"),z.ic(203,"Who can we contact in an emergency?"),z.Lb(),z.Lb(),z.Mb(204,"ion-card-content"),z.Mb(205,"ion-item"),z.Mb(206,"ion-label",4),z.ic(207,"Name "),z.Lb(),z.Kb(208,"ion-input",49),z.Lb(),z.Mb(209,"ion-item"),z.Mb(210,"ion-label",4),z.ic(211,"Relationship to you "),z.Lb(),z.Kb(212,"ion-input",50),z.Lb(),z.Mb(213,"ion-item"),z.Mb(214,"ion-label",4),z.ic(215,"Telephone number "),z.Lb(),z.Kb(216,"ion-input",45),z.Lb(),z.Mb(217,"ion-item"),z.Mb(218,"ion-label",4),z.ic(219,"Work number "),z.Lb(),z.Kb(220,"ion-input",46),z.Lb(),z.Mb(221,"ion-item"),z.Mb(222,"ion-label",4),z.ic(223,"Mobile number "),z.Lb(),z.Kb(224,"ion-input",47),z.Lb(),z.Lb(),z.Lb(),z.Kb(225,"hidden-submit-button"),z.Lb(),z.Mb(226,"form",28),z.Mb(227,"ion-card"),z.Mb(228,"ion-radio-group",52),z.Mb(229,"ion-list-header"),z.ic(230,"Do you have an advance care directive for end of life care? "),z.Lb(),z.Mb(231,"ion-card-content"),z.Mb(232,"ion-grid"),z.Mb(233,"ion-row"),z.Mb(234,"ion-col",53),z.Mb(235,"ion-item"),z.Mb(236,"ion-label"),z.ic(237,"Yes"),z.Lb(),z.Kb(238,"ion-radio",54),z.Lb(),z.Lb(),z.Mb(239,"ion-col",53),z.Mb(240,"ion-item"),z.Mb(241,"ion-label"),z.ic(242,"No"),z.Lb(),z.Kb(243,"ion-radio",55),z.Lb(),z.Lb(),z.Lb(),z.Lb(),z.Lb(),z.Lb(),z.Lb(),z.Kb(244,"hidden-submit-button"),z.Lb(),z.Lb(),z.Lb(),z.Lb(),z.Lb(),z.Mb(245,"ion-footer"),z.Mb(246,"ion-toolbar"),z.Mb(247,"ion-grid"),z.Mb(248,"ion-row"),z.Mb(249,"ion-col",56),z.Mb(250,"ion-button",57),z.Ub("click",(function(){return o.onNext()})),z.Kb(251,"ion-icon",58),z.ic(252," Next "),z.Lb(),z.Mb(253,"ion-button",59),z.Ub("click",(function(){return o.onNext()})),z.Kb(254,"ion-icon",60),z.ic(255," Back "),z.Lb(),z.Lb(),z.Lb(),z.Lb(),z.Lb(),z.Lb()),2&e&&(z.zb(5),z.kc(" ",o.title," "),z.zb(7),z.ac("formGroup",o.profileForm),z.zb(3),z.gc("font-size",o.fontSize,"em"),z.zb(4),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(14),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(6),z.gc("font-size",o.fontSize,"em"),z.zb(5),z.gc("font-size",o.fontSize,"em"),z.zb(4),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(14),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.ac("formGroup",o.medicareCardForm),z.zb(3),z.gc("font-size",o.fontSize,"em"),z.zb(7),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(1),z.ac("control",o.medicareCardForm.controls.cardNumber)("fieldName","Card number"),z.zb(3),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(1),z.ac("control",o.medicareCardForm.controls.cardRef)("fieldName","Reference number"),z.zb(3),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(1),z.ac("control",o.medicareCardForm.controls.expiryDate)("fieldName","Expiry date"),z.zb(2),z.ac("formGroup",o.healthcareCardForm),z.zb(3),z.gc("font-size",o.fontSize,"em"),z.zb(7),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(3),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(3),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.ac("formGroup",o.contactDetailsForm),z.zb(3),z.gc("font-size",o.fontSize,"em"),z.zb(4),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.ac("formGroup",o.nextOfKinForm),z.zb(3),z.gc("font-size",o.fontSize,"em"),z.zb(4),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.ac("formGroup",o.emergencyContactForm),z.zb(3),z.gc("font-size",o.fontSize,"em"),z.zb(4),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.gc("font-size",o.fontSize,"em"),z.zb(2),z.ac("formGroup",o.advancedHealthCareDirectiveForm),z.zb(3),z.gc("font-size",o.fontSize,"em"),z.zb(7),z.gc("font-size",o.fontSize,"em"),z.zb(5),z.gc("font-size",o.fontSize,"em"))},directives:[l.o,l.K,l.d,l.w,l.I,h.a,l.k,l.n,l.C,l.j,c.n,c.j,c.d,l.e,l.g,l.h,l.f,l.r,l.s,l.E,l.S,c.i,c.c,l.F,l.q,l.T,l.z,l.u,l.y,l.Q,L,c.l,c.f,g.a,l.l,l.O,l.m,l.c,l.p],styles:[".footer-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:row-reverse;justify-content:space-between}"]}),n)}],y=((b=function e(){_classCallCheck(this,e)}).\u0275mod=z.Hb({type:b}),b.\u0275inj=z.Gb({factory:function(e){return new(e||b)},imports:[[s.i.forChild(S)],s.i]}),b),v=i("j1ZV"),C=((r=function e(){_classCallCheck(this,e)}).\u0275mod=z.Hb({type:r}),r.\u0275inj=z.Gb({factory:function(e){return new(e||r)},imports:[[a.b,c.e,l.L,y,c.m,v.a]]}),r)},xk4V:function(e,o,i){var t=i("4fRq"),n=i("I2ZF");e.exports=function(e,o,i){var b=o&&i||0;"string"==typeof e&&(o="binary"===e?new Array(16):null,e=null);var r=(e=e||{}).random||(e.rng||t)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,o)for(var a=0;a<16;++a)o[b+a]=r[a];return o||n(r)}}}]);
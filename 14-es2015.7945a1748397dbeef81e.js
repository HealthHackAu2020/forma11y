(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"BJ+2":function(e,i,o){"use strict";o.r(i),o.d(i,"FormPageModule",(function(){return L}));var n=o("ofXK"),t=o("3Pt+"),b=o("TEn/"),l=o("tyNb"),a=o("oxX3"),c=o("fXoL"),r=o("8Xxu"),s=o("Qeml"),p=o("g7Db"),u=o("5cRx");const m=[{path:"",component:(()=>{class e{constructor(e,i,o,n){this.formBuilder=e,this.darkModeService=i,this.fontSizeService=o,this.changeDetectorRef=n,this.title="Form Elements",this.dummyForm=this.formBuilder.group({input1:["",a.a.isRequired],input2:["",a.a.isRequired],email:["",[a.a.isRequired,a.a.isEmailValid]]})}ngOnInit(){this.getDefaults()}ngAfterViewChecked(){this.getDefaults()}getDefaults(){this.isDarkMode=this.darkModeService.get(),this.fontSize=this.fontSizeService.get(),this.changeDetectorRef.detectChanges()}}return e.\u0275fac=function(i){return new(i||e)(c.Jb(t.a),c.Jb(r.a),c.Jb(s.a),c.Jb(c.h))},e.\u0275cmp=c.Db({type:e,selectors:[["app-form"]],decls:132,vars:18,consts:[["slot","start"],["slot","end"],[3,"formGroup"],["size","12","size-md","8","offset-md","2"],["position","stacked"],["placeholder","Placeholder","type","text","formControlName","input1"],[3,"control","fieldName"],["placeholder","Placeholder","type","text","formControlName","input2"],["placeholder","Email","type","email","formControlName","email"],["placeholder","Placeholder","type","text"],["placeholder","Placeholder","type","number","value","444"],["placeholder","Placeholder","type","email"],["placeholder","Placeholder","type","password"],["placeholder","Placeholder","type","tel"],["placeholder","Placeholder"],["name","information-circle"],["slot","end","value","biff","checked",""],["slot","end","value","griff"],["slot","end","value","buford"],["interface","alert","multiple","true","placeholder","Select Multiple"],["value","bacon"],["value","olives"],["value","xcheese"],["value","peppers"],["value","mushrooms"],["value","onions"],["value","pepperoni"],["value","pineapple"],["value","sausage"],["value","Spinach"],["interface","popover","placeholder","Select One"],["value","brown"],["value","blonde"],["value","black"],["value","red"],["interface","action-sheet","placeholder","Select One"],["value","purple"],["value","yellow"],["value","orange"],["value","green"]],template:function(e,i){1&e&&(c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar"),c.Mb(2,"ion-buttons",0),c.Kb(3,"ion-menu-button"),c.Lb(),c.Mb(4,"ion-title"),c.ic(5),c.Lb(),c.Mb(6,"ion-buttons",1),c.Kb(7,"accessibility-button"),c.Lb(),c.Lb(),c.Lb(),c.Mb(8,"ion-content"),c.Mb(9,"form",2),c.Mb(10,"ion-row"),c.Mb(11,"ion-col",3),c.Mb(12,"p"),c.ic(13,"Test - em"),c.Lb(),c.Mb(14,"ion-item"),c.Mb(15,"ion-label",4),c.ic(16,"Input 1"),c.Lb(),c.Kb(17,"ion-input",5),c.Lb(),c.Kb(18,"validation-error",6),c.Lb(),c.Mb(19,"ion-col",3),c.Mb(20,"ion-item"),c.Mb(21,"ion-label",4),c.ic(22,"Input 2"),c.Lb(),c.Kb(23,"ion-input",7),c.Lb(),c.Kb(24,"validation-error",6),c.Lb(),c.Mb(25,"ion-col",3),c.Mb(26,"ion-item"),c.Mb(27,"ion-label",4),c.ic(28,"Email"),c.Lb(),c.Kb(29,"ion-input",8),c.Lb(),c.Kb(30,"validation-error",6),c.Lb(),c.Lb(),c.Lb(),c.Mb(31,"form"),c.Mb(32,"ion-row"),c.Mb(33,"ion-col",3),c.Mb(34,"ion-item"),c.Mb(35,"ion-label",4),c.ic(36,"Input Text"),c.Lb(),c.Kb(37,"ion-input",9),c.Lb(),c.Mb(38,"ion-item"),c.Mb(39,"ion-label",4),c.ic(40,"Input Number"),c.Lb(),c.Kb(41,"ion-input",10),c.Lb(),c.Mb(42,"ion-item"),c.Mb(43,"ion-label",4),c.ic(44,"Input Email"),c.Lb(),c.Kb(45,"ion-input",11),c.Lb(),c.Mb(46,"ion-item"),c.Mb(47,"ion-label",4),c.ic(48,"Input Password"),c.Lb(),c.Kb(49,"ion-input",12),c.Lb(),c.Mb(50,"ion-item"),c.Mb(51,"ion-label",4),c.ic(52,"Input Tel"),c.Lb(),c.Kb(53,"ion-input",13),c.Lb(),c.Mb(54,"ion-item"),c.Mb(55,"ion-label",4),c.ic(56,"Textarea Label"),c.Lb(),c.Kb(57,"ion-textarea",14),c.Lb(),c.Kb(58,"ion-searchbar"),c.Mb(59,"ion-item"),c.Mb(60,"ion-label"),c.ic(61,"Checkbox Label\xa0"),c.Kb(62,"ion-icon",15),c.Lb(),c.Kb(63,"ion-checkbox",1),c.Lb(),c.Mb(64,"ion-radio-group"),c.Mb(65,"ion-list-header"),c.Mb(66,"ion-label"),c.ic(67,"Radio"),c.Lb(),c.Lb(),c.Mb(68,"ion-item"),c.Mb(69,"ion-label"),c.ic(70,"Earth"),c.Lb(),c.Kb(71,"ion-radio",16),c.Lb(),c.Mb(72,"ion-item"),c.Mb(73,"ion-label"),c.ic(74,"Wind"),c.Lb(),c.Kb(75,"ion-radio",17),c.Lb(),c.Mb(76,"ion-item"),c.Mb(77,"ion-label"),c.ic(78,"Fire"),c.Lb(),c.Kb(79,"ion-radio",18),c.Lb(),c.Lb(),c.Mb(80,"ion-list-header"),c.ic(81,"Selects"),c.Lb(),c.Mb(82,"ion-item"),c.Mb(83,"ion-label"),c.ic(84,"Alert"),c.Lb(),c.Mb(85,"ion-select",19),c.Mb(86,"ion-select-option",20),c.ic(87,"Bacon"),c.Lb(),c.Mb(88,"ion-select-option",21),c.ic(89,"Black Olives"),c.Lb(),c.Mb(90,"ion-select-option",22),c.ic(91,"Extra Cheese"),c.Lb(),c.Mb(92,"ion-select-option",23),c.ic(93,"Green Peppers"),c.Lb(),c.Mb(94,"ion-select-option",24),c.ic(95,"Mushrooms"),c.Lb(),c.Mb(96,"ion-select-option",25),c.ic(97,"Onions"),c.Lb(),c.Mb(98,"ion-select-option",26),c.ic(99,"Pepperoni"),c.Lb(),c.Mb(100,"ion-select-option",27),c.ic(101,"Pineapple"),c.Lb(),c.Mb(102,"ion-select-option",28),c.ic(103,"Sausage"),c.Lb(),c.Mb(104,"ion-select-option",29),c.ic(105,"Spinach"),c.Lb(),c.Lb(),c.Lb(),c.Mb(106,"ion-item"),c.Mb(107,"ion-label"),c.ic(108,"Popover"),c.Lb(),c.Mb(109,"ion-select",30),c.Mb(110,"ion-select-option",31),c.ic(111,"Brown"),c.Lb(),c.Mb(112,"ion-select-option",32),c.ic(113,"Blonde"),c.Lb(),c.Mb(114,"ion-select-option",33),c.ic(115,"Black"),c.Lb(),c.Mb(116,"ion-select-option",34),c.ic(117,"Red"),c.Lb(),c.Lb(),c.Lb(),c.Mb(118,"ion-item"),c.Mb(119,"ion-label"),c.ic(120,"Action Sheet"),c.Lb(),c.Mb(121,"ion-select",35),c.Mb(122,"ion-select-option",34),c.ic(123,"Red"),c.Lb(),c.Mb(124,"ion-select-option",36),c.ic(125,"Purple"),c.Lb(),c.Mb(126,"ion-select-option",37),c.ic(127,"Yellow"),c.Lb(),c.Mb(128,"ion-select-option",38),c.ic(129,"Orange"),c.Lb(),c.Mb(130,"ion-select-option",39),c.ic(131,"Green"),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()),2&e&&(c.zb(5),c.kc(" ",i.title," "),c.zb(4),c.ac("formGroup",i.dummyForm),c.zb(3),c.gc("font-size",i.fontSize,"em"),c.zb(3),c.gc("font-size",i.fontSize,"em"),c.zb(2),c.gc("font-size",i.fontSize,"em"),c.zb(1),c.ac("control",i.dummyForm.controls.input1)("fieldName","Input 1"),c.zb(3),c.gc("font-size",i.fontSize,"em"),c.zb(2),c.gc("font-size",i.fontSize,"em"),c.zb(1),c.ac("control",i.dummyForm.controls.input2)("fieldName","Input 2"),c.zb(6),c.ac("control",i.dummyForm.controls.email)("fieldName","Email"))},directives:[b.o,b.K,b.d,b.w,b.I,p.a,b.k,t.n,t.j,t.d,b.C,b.j,b.r,b.s,b.q,b.T,t.i,t.c,u.a,t.k,b.O,b.H,b.D,b.p,b.i,b.a,b.z,b.S,b.u,b.y,b.Q,b.E,b.F],styles:[""]}),e})()}];let d=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(i){return new(i||e)},imports:[[l.i.forChild(m)],l.i]}),e})();var M=o("j1ZV");let L=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(i){return new(i||e)},imports:[[n.b,t.e,b.L,d,t.m,M.a]]}),e})()}}]);
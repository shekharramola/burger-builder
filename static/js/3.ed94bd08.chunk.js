(this["webpackJsonpburger-builder-app"]=this["webpackJsonpburger-builder-app"]||[]).push([[3],{101:function(e,t,n){e.exports={CheckoutSummary:"_-_-src-components-Order-CheckoutSummary-CheckoutSummary__CheckoutSummary--j0r17"}},102:function(e,t,n){e.exports={ContactData:"_-_-src-containers-Checkout-ContactData-ContactData__ContactData--315az"}},103:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(4),o=n(6),i=n(5),c=n(7),l=n(0),u=n.n(l),s=n(57),d=n(25),p=n(101),h=n.n(p),m=function(e){return u.a.createElement("div",{className:h.a.CheckoutSummary},u.a.createElement("h1",null,"Hope, it tastes well!"),u.a.createElement("div",{style:{width:"100%",margin:"auto"}},u.a.createElement(s.a,{ingredients:e.ingredients})),u.a.createElement(d.a,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEl"),u.a.createElement(d.a,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))},g=n(21),f=n(15),v=n(102),y=n.n(v),b=n(18),O=n(26),C=n(56),k=n(8),j=n(9),E=n(33);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(n,!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your name"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"text",placeholder:"Your email"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Your street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"zip"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"country"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"cheapest",validation:{},valid:!0}},loading:!1,formIsValid:!1},n.orderHandler=function(e){e.preventDefault(),console.log(n.props),n.setState({loading:!0});var t={};for(var r in console.log(n.state.orderForm),n.state.orderForm)console.log(r),console.log(n.state.orderForm[r].elementType),t[r]=n.state.orderForm[r].value;console.log(t);var a={ingredients:n.props.ings,price:n.props.price,orderData:t,userId:n.props.userId};n.props.onOrderBuger(a,n.props.token)},n.inputChangedHandler=function(e,t){var r=T({},n.state.orderForm),a=T({},r[t]);a.value=e.target.value,a.valid=n.checkValidity(a.value,a.validation),a.touched=!0,r[t]=a;var o=!0;for(var i in r)o=r[i].valid&&o;console.log(o),n.setState({orderForm:r,formIsValid:o})},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"checkValidity",value:function(e,t){console.log(e),console.log(t);var n=!0;return t&&t.required&&(n=""!==e.trim()&&n),t&&t.minLength&&(n=e&&e.length>=t.minLength&&n),t&&t.maxLength&&(n=e&&e.length<=t.maxLength&&n),n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var r=u.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return u.a.createElement(C.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})})),u.a.createElement(d.a,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.props.loading&&(r=u.a.createElement(O.a,null)),u.a.createElement("div",{className:y.a.ContactData},u.a.createElement("h4",null,"Enter your contact data"),r)}}]),t}(l.Component),P=Object(k.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBuger:function(t,n){return e(j.g(t,n))}}}))(Object(E.a)(w,b.a)),S=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).cancelHandler=function(){n.props.history.goBack()},n.continueHandler=function(){n.props.history.replace("/checkout/contact-data")},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitPurchase()}},{key:"render",value:function(){var e=u.a.createElement(g.a,{to:"/"});if(this.props.ings){console.log(this.props);var t=this.props.purchased?u.a.createElement(g.a,{to:"/"}):null;e=u.a.createElement("div",null,t,u.a.createElement(m,{checkoutCancelled:this.cancelHandler,checkoutContinued:this.continueHandler,ingredients:this.props.ings}),u.a.createElement(g.b,{path:this.props.match.path+"/contact-data",component:P}))}return e}}]),t}(l.Component);t.default=Object(k.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,purchased:e.order.purchased}}),(function(e){return{onInitPurchase:function(){return e(j.h())}}}))(S)}}]);
//# sourceMappingURL=3.ed94bd08.chunk.js.map
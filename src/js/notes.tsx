
// import ManualForm from './forms';

// let AutoForm = Forms.AutoForm;


// console.log(AutoForm);
// const HelloWorld = () => <h1>Hello, world 2!</h1>

// ReactDOM.render(<HelloWorld />, document.getElementById('content'));

// let AutoForm = Form.AutoForm;
// let autoForm = <AutoForm />;

// ReactDOM.render(autoForm);

// module/file import
// import 'underscore';
// 
// named import
// import { sumTwo, sumThree } from 'math/addition';
// 
// Alias/rename import
// import {
//     sumTwo as addTwoNumbers,
//     sumThree as sumThreeNumbers
// } from 'math/addition';

// namespace import
// import * as util from 'math/addition';


// http://exploringjs.com/es6/ch_modules.html
// typescript has "interface", similar to a class
// public in constructor also enables creation of public properties of the same name.
// public/private/protected modifiers; public by default
// get/set function support
// static properties for classes
// abstract classes
// function overloading, constructor overloading
// interfaces 
// classes and interfaces play nicely together


// https://basarat.gitbooks.io/typescript/content/docs/styleguide/styleguide.html
// console.log(Forms);

// const HelloWorld = _ => <h1>Hello, world 2!</h1>
//<HelloWorld />



// class Student {
//   public fullName: string;
//   constructor(public firstName, public middleInitial, public lastName) {
//     this.fullName = firstName + " " + middleInitial + " " + lastName;
//   }
// }


// let passcode = "secret passcode";

// class Employee {
//   private _fullName: string;

//   get fullName(): string {
//     return this._fullName;
//   }

//   set fullName(newName: string) {
//     if (passcode && passcode == "secret passcode") {
//       this._fullName = newName;
//     } else {
//       console.log("Error: Unauthorized update of employee!");
//     }
//   }
// }



// var input = React.createElement("input", {
//   onChange: function(syntheticEvent) {
//     console.log(syntheticEvent);
//     //console.log(syntheticEvent.target.value)
//   }
// });


// class DemoProps {
//   public name:string;
//   public age:number;
// }


// class Demo extends React.Component<DemoProps, any> {
//   private foo:number;
//   constructor(props:DemoProps) {
//     console.log(Forms.age + Forms.name);
//     super(props);
//     this.foo = 42;
//   }
//   render() {
//     return <div>Hello world!</div>
//   }
// }


// interface Props {
//   foo: string;
// }

// class MyComponent extends React.Component<Props, {}> {
//   render() {
//     return <span>{this.props.foo}</span>
//   }
// }

// <HelloWorld />
// <MyComponent foo="bar" />

// ReactDOM.render(<MyComponent foo="damn" />, document.getElementById('content'));
// ReactDOM.render(input, document.getElementById('content'));


// console.log(typeof HelloWorld);
// ReactDOM.render(<HelloWorld />, document.getElementById('content'));
// 
// 
// 
// if you use "export default {x,y}" then you need to import X from 'path';
// if you use "export {x,y}" then you need to import * as X from 'path';
// 
// 
// 
// 
// THIS IS A GREAT TIME TO GET STARTED WITH react and es6 classes and typescript.
//
// 
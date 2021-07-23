(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{18:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var a,r,c=n(1),i=n.n(c),o=n(9),l=n.n(o),s=(n(18),n(12)),u=n(4),d=n(5),b=n(7),h=n(6),p=n(10),m=n(2),j=n(3),f=j.a.form(a||(a=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  border: 2px solid black;\n  width: 400px;\n  padding: 20px;\n  margin-bottom: 20px;\n"]))),x=n(0),g={input:{display:"block",marginBottom:"10px",marginTop:"5px"},label:{marginBottom:"10px"},button:{width:"100px",fontSize:"12px",backgroundColor:"white",borderRadius:"5px",border:"1px solid gray",cursor:"pointer"}},O=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(p.a)({},a,r))},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(x.jsxs)(f,{onSubmit:this.handleSubmit,children:[Object(x.jsxs)("label",{style:g.label,children:["Name",Object(x.jsx)("input",{style:g.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:this.handleChange})]}),Object(x.jsxs)("label",{style:g.label,children:["Number",Object(x.jsx)("input",{style:g.input,type:"tel",name:"number",required:!0,value:n,onChange:this.handleChange})]}),Object(x.jsx)("button",{type:"submit",style:g.button,children:"Add Contact"})]})}}]),n}(c.Component),v=j.a.li(r||(r=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 5px;\n"]))),y={button:{width:"50px",fontSize:"12px",backgroundColor:"white",borderRadius:"5px",border:"1px solid gray",cursor:"pointer",marginLeft:"30px"}};function C(t){var e=t.name,n=t.number,a=t.onDelBtnClick;return Object(x.jsxs)(v,{children:[e,": ",n,Object(x.jsx)("button",{type:"submit",name:e,onClick:a,style:y.button,children:"Delete"})]})}C.defaultProps={name:null,number:null,onDelBtnClick:function(){return null}};var k,S=C,w=j.a.ul(k||(k=Object(m.a)(["\n  padding: 0;\n  list-style: none;\n  width: 400px;\n  margin: 0px;\n"])));var F,A=function(t){var e=t.children;return Object(x.jsx)(w,{children:e})},B=j.a.div(F||(F=Object(m.a)(["\n  margin-bottom: 20px;\n"]))),D={input:{display:"block",marginTop:"5px"}};function z(t){var e=t.filter,n=t.handleFilterChange;return Object(x.jsx)(B,{children:Object(x.jsxs)("label",{children:["Find contacts by name",Object(x.jsx)("input",{style:D.input,type:"text",name:"filter",value:e,onChange:n})]})})}z.defaultProps={filter:null,handleFilterChange:null};var N=z,J=n(26),I=function(t){Object(b.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.addContact=function(e){var n=e.name,a=e.number;t.state.contacts.find((function(t){return t.name===n}))?alert("".concat(n," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[{id:Object(J.a)(),name:n,number:a}])}}))},t.handleFilterChange=function(e){var n=e.target.value;t.setState({filter:n})},t.getFilteredNames=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(r)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this,e=this.state.filter,n=this.getFilteredNames();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h2",{children:"Phonebook"}),Object(x.jsx)(O,{onSubmit:this.addContact}),Object(x.jsx)("h2",{children:"Contacts"}),Object(x.jsx)(N,{filter:e,handleFilterChange:this.handleFilterChange}),Object(x.jsx)(A,{children:n.map((function(e){var n=e.id,a=e.name,r=e.number;return Object(x.jsx)(S,{name:a,number:r,onDelBtnClick:function(){return t.deleteContact(n)}},n)}))})]})}}]),n}(c.Component);n(23);l.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(I,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.622d7e95.chunk.js.map
import React from "react";
class UserClass extends React.Component{
    constructor(props){
        console.log("constructor");
        super(props);
        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default",
            }
        };
        
    }
    async componentDidMount(){
        console.log(this.props.name+"Child Component Did Mount");
        const data=await fetch("https://api.github.com/users/akshaymarch7")
        const json=await data.json();
        console.log(json.name);
    
        this.setState({
            userInfo:json,
        })
    }
    componentDidUpdate(){
        console.log("updated component")
    }
    // It will called when component go means when we move in another page
    componentWillUnmount(){
        console.log("Mounting done");
    }
    render(){
        console.log("render");
        const{name,location,avatar_url}=this.state?.userInfo;
        return(
        <div className="user-card">
            <h2>Name:{this.state.userInfo.name}</h2>
            <img src={avatar_url}></img>
            <h3>Location:{location}</h3>
            <h4>Contact:@akshaymarch7</h4>
        </div>
        );
    }
}
export default UserClass;

// whenever a new instance of class is created then constructor is called
// loading a class components in our webpage means creating an instance of class
// Never update state variable directly

// parent constructor
// parent Render
// Akshay saini child constructor
// Akshay saini child render
// EloneMusk child constructor
// EloneMusk child Render
// Akshy saini child componentdidMount
// EloneMusk child componentdid Mount
// parent component DidMount


// constructor(dummy)
// render(dummy)
    // <HTML Dummy>
// Component Did Mount
    //   <API Call>
    // this.setState
// UPDATE
//    render(Api data)
//    HTML(new Api data)
//    componentDidUpdate


 
// import React from "react";
// class UserClass extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             count:0,
//             count1:1,
//         }
//         console.log(this.props.name+"Child Constructor");
//     }
//     componentDidMount(){
//         console.log(this.props.name+"Child Component Did Mount");
//     }
//     render(){
//         const{name,location}=this.props;
//         const{count,count1}=this.state;
//         console.log(this.props.name+"child Render")
//         return(
//         <div className="user-card">
//             <h1>Count:{count}</h1>
//             <button onClick={()=>{
//                  this.setState({
//                       count:this.state.count+1,
//                       count1:this.state.count1+1
//                  }
//                  );
//             }}>Count Increase</button>
//             <h2>Count1:{count1}</h2>
//             <h2>Name:{name}</h2>
//             <h3>Location:{location}</h3>
//             <h4>Contact:@akshaymarch7</h4>
//         </div>
//         );
//     }
// }
// export default UserClass;
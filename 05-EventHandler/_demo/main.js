// // <App /> เป็น Function Component => Render UI
// // handleClick เป็น Function JS => Do logic / sideEffect

// function App() {
    
//     // 1. Define function fot button
//     const handleClick = () => console.log("clicked")

//     // 2. Binding FN ()
//     // 2.1 Naming Binding(Don't call FN()) : จะมีแค่ sideEffect แต่ไม่เกิดอะไรขึ้น
//     // 2.2 Binding FN with UI
//     // 2.3 FN() Literal : same as 2.2 แต่แค่เอาก้อน FN() มาใส่
//     return (
//         <div> 
//             <button onMouseEnter={handleClick()}>Click Me 1</button>
//             <button onMouseEnter={handleClick}>Click Me 2</button>
//             <button onMouseEnter={() => console.log("CLICKED")}>Click Me 3</button>
//         </div>
//     )
// }

// // ReactDOM
// const domRoot = document.getElementById('root');
// const root = ReactDOM.createRoot(domRoot);
// root.render(<App />);

//////////////////////////////////////////////////////////////////
//                         Event Object
//////////////////////////////////////////////////////////////////

function App(){

    // 1. Define FN() : Logic
    
    ////////////////// type : Text
    // const handleChange = (event) => {
    //     console.log(event); // event = {target : {value : "input text"}}
    //     console.log(event.target.value)
    // }

    // Binding FN() to Tag : UI
    // return(
    //     <input onChange={handleChange}/>
    // )
    // return <input onChange={(e) => console.log(e.target.value)} />
    
    
    ////////////////// type : checkbox
    // const handleCheck = (event) => {
    //     console.log("check"); // 'check'
    //     console.log(event.target.checked); // ถ้าติ๊ก = true ถ้าไม่ติ้ก = false
    // }

    // return (
    //     <div>
    //         <input type="checkbox" onChange={handleCheck} id='extra-sugar'/>
    //         <label htmlFor='extra-sugar'> Extra Sugar </label>
    //     </div>
    // )

    /////////////////// type : select
    // const handleSelect = (event) => {
    //     console.log('select...');
    //     console.log(event)
    // }

    // // Select
    // return (
    //     <>
    //     <label htmlFor='gender'>Please choose your gender</label>
    //     <select onChange={handleSelect} id='gender'>
    //         <option value='male'>male</option>
    //         <option value='female'>female</option>
    //         <option value='lgbtq'>LGBTQ</option>
    //         <option value='not-specific'>not-specific</option>
    //     </select>
    //     </>
    // )


    ///////////////////// Wrapper Function ///////////////////////
    // #1
    // const handleEvent = (event,a,b,c) => {
    //     console.log(event.target.value)
    //     console.log(a, b, c);
    // }
    // // #2
    // const handleEvent_2 = (a,b,c) => {
    //     console.log(a, b, c);
    // }
    
    // // Problem : Can't custom parameter
    // // return <input type='text' onChange={handleEvent} />;

    // // #1
    // return <input type='text' onChange={(e) => handleEvent(e, 5, 6, 7)} />;
    // // #2
    // return <input type='text' onChange={() => handleEvent_2('Hi', 9, true)} />;
    
////////////////////////////// Example 2 /////////////////////////

    function Logic(x) {
        console.log("Logic");
        console.log(x * 2)
    }
    function Wrapper (event) {
        console.log('Wrapper');
        Logic(5)
    }
    return <input onChange={(event) => Logic(5)} />
    
}

// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
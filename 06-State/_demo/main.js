// React : render Obj ไม่ได้ => ต้อง dot เพื่อเข้าหา value
// state : สามารถเก็บได้ทุกอย่างที่เป็น value <Any data type>
// return : [state,FnSetState] = 1 array, 2 element
// JS variable ไม่สามารถทำให้ V-DOM update ได้
// ห้าม direct modify state
// state : read only
// setState == ตัว trigger == ReRender => return newJSX with current state

// #1 FN() : Component
function Counter() {

    // #2 Handle Logic #1

    // const [state,setState] = React.useState(10);

    // // let n = 10;
    // // console.log('n', n) // 10 10 10 10 display: เปลี่ยน แต่ค่าเท่าเดิม
    // console.log('state', state) // 10 11 12 13

    // function handleIncrease() {
    //     // n = n +1
    //     // ห้าม direct modify state
    //     setState(state+1);
    // }

    // function handleDecrease() {
    //     setState(state-1);
    // }

    // function handleReset() {
    //     setState(0)
    // }

    // // #3 Return of #1 => UI
    // return (
    //     <div className='container'>
    //         <button onClick={handleIncrease}>Increase</button>
    //         <span>{state}</span>
    //         <button onClick={handleDecrease}>Decrease</button>
    //         <button onClick={handleReset}>Reset</button>
           
    //     </div>
    // )

}

/////////////////////////////////////////////////////////
//                  Condition Rendering
/////////////////////////////////////////////////////////

function App() {
    const [isDark, setIsDark] = React.useState(false);

    function handleToggle() {
        setIsDark(!isDark);
    }
    console.log(isDark ? 'Dark' : 'Light');

    return (
        <div>
             {/* HardCode */}
            {/* <h3> Light-Mode </h3>
            <h3> Dark-Mode </h3> */}

            {/* Condition Render Tag */}
            {/* {isDark ? <h3>Dark</h3> : <h3>Light</h3>} */}

            {/* Condition Render String */}
            {/* <h3>{isDark ? 'Dark' : 'Light'} </h3> */}

            {/* {isDark ? <h3 className='dark'>Dark</h3> : <h3 className='light'>Light</h3>} */}

            <h3 className={`${isDark ? 'dark' : 'light'}`}> {isDark ? 'Dark' : 'Light'}</h3>
            <button onClick={handleToggle}> Toggle mode </button>
        </div>
    )
}






// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);

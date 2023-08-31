// -   จงสร้าง tag `<button>Button</button>`
// -   เมื่อผู้ใช้กดปุ่มให้ console.log("clicked")
// -   เมื่อผู้ใช้กดปุ่มให้ alert("Hi") เพิ่มด้วย

function App() {
    const handleClick = () => {
        alert("Hi")
        console.log("clicked")
    }
    

    return(
        <button onClick={handleClick} >Button</button>
    )
}



// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);

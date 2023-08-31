// -   จงสร้าง Button มีข้อความว่า “Click to hide me”
// -   เมื่อผู้ใช้ click button ให้ซ่อน button
function App () {
    const [isHide, setIsHide] = React.useState(false)

    function handleToggle () {
        setIsHide(!isHide)
    }

    return (
        <div>
            <p onClick={handleToggle}>{isHide ? <button></button> : <button>Click to hide me</button>}</p>
        </div>
    )
}


// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);

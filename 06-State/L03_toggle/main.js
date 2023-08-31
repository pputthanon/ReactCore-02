// สร้าง Button มีข้อความว่า “Hide”
// เมื่อผู้ใช้ click button ให้ซ่อนข้อความและเปลี่ยนข้อความบน Button เป็น “Show”
// เมื่อclick button อีกครั้งให้แสดงข้อความและเปลี่ยนข้อความบน Button เป็น Hide

function App() {
    const [isHide, setIsHide] = React.useState(false)

    function handleToggle () {
        setIsHide(!isHide)
    }



    return(
        <div>
            {isHide ?  '' : <button onClick={handleToggle}>Hide</button>}
            {!isHide ? <h3>This is Bee</h3> :<button onClick={handleToggle}>Show</button>}
        </div>
    )
}

// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);

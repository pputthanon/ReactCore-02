// -   จงสร้าง tag `<input>`
// -   เมื่อผู้ใช้พิมพ์ค่าลงใน `<input>` ให้ console.log(ค่าที่ผู้ใช้พิมพ์)

// Hint : onChange

function App() {
    const handleChange = (event) => {
        console.log(event.target.value)
    }

    return (
        <input onChange={handleChange} />
    )

}

// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);

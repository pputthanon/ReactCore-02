// -   จงสร้าง tag `<select>` ซึ่งมีข้อมูลชื่อประเทศในรายการให้เลือก (ให้ลองใส่มา 5 ประเทศ)
// -   เมื่อผู้ใช้เลือกประเทศ ให้ console.log ค่าประเทศที่ถูกเลือก

// Hint : onChange

function App() {
    const handleChange = (event) => {
        console.log(event.target.value)
    }

    return (
        <select onChange={handleChange}>
            <option value='thailand'>Thailand</option>
            <option value='japan'>Japan</option>
            <option value='korea'>Korea</option>
            <option value='canada'>Canada</option>
            <option value='australia'>Australia</option>
        </select>
    )

}


// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);

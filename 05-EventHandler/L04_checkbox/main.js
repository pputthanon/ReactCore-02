// -   สร้าง checkbox ขึ้นมา 3 อัน
// -   ให้แต่ละอันมี name คือ phoneBrand
// -   เมื่อผู้ใช้ tick หรือ untick checkbox ให้ console.log
//     -   ค่า name ของ checkbox
//     -   ค่า value ของ checkbox
//     -   checkbox นั้นถูก tick หรือ untick


function App() {
    const handleChange = (event) => {
        console.log(event.target.id)
        console.log(event.target.value)
        console.log(event.target.checked)
    }

    return (
        <div>
            <input type='checkbox' onChange={handleChange} id='iphone'/>
            <label htmlFor='iphone'>Iphone</label>
            <input type='checkbox' onChange={handleChange} id='samsung'/>
            <label htmlFor='samsung'>Samsung</label>
            <input type='checkbox' onChange={handleChange} id='huawei'/>
            <label htmlFor='huawei'>Huawei</label>
        </div>
    )
}



// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);

import React from 'react'

const Navbar = ({setSearch}) => {
    return (
        <>
            <div className="nav mt-3">
                <button type="button" className="btn btn-outline-primary mx-3"onClick={()=>setSearch("nature")}>Nature</button>
                <button type="button" className="btn btn-outline-secondary mx-3"onClick={()=>setSearch("travel")}>Travel</button>
                <button type="button" className="btn btn-outline-success mx-3"onClick={()=>setSearch("city")}>City</button>
                <button type="button" className="btn btn-outline-danger mx-3"onClick={()=>setSearch("car")}>Car</button>
                <button type="button" className="btn btn-outline-warning mx-3"onClick={()=>setSearch("fashion")}>Fashion</button>
                <button type="button" className="btn btn-outline-info mx-3"onClick={()=>setSearch("animals")}>Animals</button>
                <button type="button" className="btn btn-outline-light mx-3"onClick={()=>setSearch("technology")}>Technology</button>
                <button type="button" className="btn btn-outline-primary mx-3"onClick={()=>setSearch("bussnes")}>Bussnes</button>
                <button type="button" className="btn btn-outline-secondary mx-3"onClick={()=>setSearch("tokyo")}>Tokyo</button>
                <button type="button" className="btn btn-outline-success mx-3"onClick={()=>setSearch("dubai")}>Dubai</button>
                

            </div>
            <br></br>
            <input type='text' className='searchbox' placeholder='Search image' onChange={(e) => setSearch(e.target.value)}/>
            <br></br>
        </>
    )
}

export default Navbar
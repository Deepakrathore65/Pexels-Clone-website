import React from 'react'

const Home = ({ images }) => {
    return (
        <>
            <div className="container-fluid text-center" id='top'>
                <div className="flex">
                    {images.map((image) => (
                        <div key={image.id} className='items'>
                            <img src={image.src.medium} alt='...' />
                        </div>
                    ))}

                </div>
                {images.length !=0 && <a href='#top' className="btn btn-warning my-5">Back to Top</a>}
                
            </div>
        </>
    )
}

export default Home
import React from 'react'
import "../cssComponent/Home.css"

const Home = () => {
    return (
        <div className='main'>
            <div className="text">
               <h1 className='h1'>Web Design &</h1> <br />
              <h1 className='h2'>  Development</h1>

              <br />
              <h1 className='h3'>Course</h1>
              <p className='paratext'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis cum tempora commodi accusantium ducimus soluta? Dolor nisi hic aliquid rerum omnis fuga explicabo, velit corrupti, illo dolores cum dolorem id!</p>
             <a href="#"> <button className='btn2'>Join</button></a>


            </div>
            <div className="form">
                <form  >
                  <h2 className='login '>Login Here</h2>
                  <br />
                  <input className='gmail' type="gmail"  placeholder='Enter Email Here' /><br />
                  <input className='password' type="password" placeholder='Enter Password Here' /><br />
                  <button  className='btn3' type='submit'>Login</button>

                  <br />
                  <p className='sign'>Don't have an account <br /> <span> <a href="#">Sign Up</a> </span>here</p>
                </form>
            
            </div>



        </div>
    )
}

export default Home
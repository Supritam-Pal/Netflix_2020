import React from 'react';
import Netflix from './Netflix'
//import Card from './Card';
//import Sdata from './Sdata';
import Amazon from './Amazon';


const favSeries = 'netfli';
// const FavS = () =>{
// if(favSeries === 'netflix'){
//   return <Netflix/>;

// }else{
//        return <Amazon/>;
// } 
// };


const Cap =() =>(
<>
<h1 className='heading_style'>List of top 5 Netflix Series in 2020</h1>
{/* <FavS/> */}
{favSeries === 'netflix'?  <Netflix/> :  <Amazon/>}
</>
)
export default Cap;
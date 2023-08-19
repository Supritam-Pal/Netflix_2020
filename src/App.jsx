import React from 'react';
import Card from './Card';
import Sdata from './Sdata';




const App =() =>(
<>
<h1 className='heading_style'>List of top 5 Netflix Series in 2020</h1>
{Sdata.map((val,i) =>{
    console.log(i)
    return(
    <Card 
    key={val.id}
    imgsrc={val.imgsrc}
     title={val.title}
    sname = {val.sname}
    link={val.link}
/>
);

})};

</>
)
export default App;



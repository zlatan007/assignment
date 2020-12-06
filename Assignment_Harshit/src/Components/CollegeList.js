import React from 'react';
import data from '../Data/colleges';
import CustomCard from '../Components/Card';
const CollegeList=()=>{
    return(
        <div>
            <h5 className={'mx-3 mt-5'}>Colleges in North india</h5>
        <div className={'row'}>
            
            {data.colleges?.map((data,index)=>{
               return(
                   <div className={'col-md-6'} key={index}>
                       
                   <CustomCard data={data}/>
                   </div>
               )
            })}
            
        </div>
        </div>
    )
}
export default CollegeList;
import React from 'react';
import { Card,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomCard=({data})=>{
  
    return (
        <Card  className={'mx-3 my-5'} style={{position:'relative'}}>
        <Card.Img variant="top" src={data.image==='college.png'?"img/college_01.jpg":"img/college_02.jpg"} />
        <div style={{position:'absolute',top:190}}>
        {data.tags.map((tag,index)=>{
            return (
            <span style={{backgroundColor:'white',borderRadius:10,padding:10,marginLeft:10}}>{tag}</span>

            )
        })}
        </div>
        <div style={{position:'absolute',top:30,right:10,backgroundColor:'yellow',paddingLeft:10,borderRadius:10,paddingRight:10}}>
      
            <span style={{color:'white',fontWeight:'bold'}}>
            <span style={{fontSize:30}}>{data.rating}</span>/5<br/>
            <span>{data.rating_remarks}</span>
            
            </span>
           </div>
           <div style={{position:'absolute',top:190,right:10,color:'white'}}>
            {data.ranking}
        </div>

       {data.promoted && <div style={{position:'absolute',top:-20,right:0,backgroundColor:'blue',color:'white',padding:10}}>PROMOTED</div>}
 
        <Card.Body style={{paddingLeft:0,paddingRight:0}}>
         
          <Card.Text>
              <div className={'row ml-4 mr-2'}>
                  <span>
                   <span style={{fontWeight:'bold',fontSize:18}}>{data?.college_name} </span><br/>
                  <span style={{fontWeight:'bold',fontSize:14}}>{data.nearest_place[0]}</span> | <span style={{color:'	#808080',fontSize:14}}>{data.nearest_place[1]}</span>
                  </span>
                  <span style={{marginLeft:'auto'}}>
                    <strike style={{color:'#808080',fontSize:14}}>{data.original_fees}</strike><br/>
                      <span style={{color:'red',fontWeight:'bold',fontSize:24}}>₹ {data.discounted_fees}<br/></span>
                    
                    <span style={{color:'#808080',fontSize:14}}>{data.fees_cycle}</span>
                  </span>
                  

              </div>
              <div className={'row mx-4'}>
                  <span style={{color:'#3090C7',fontSize:14}}>{'93% match :  '}</span>
                  <span style={{color:'#808080',fontSize:14}}>
                  {`${data.famous_nearest_places}`}
                  </span>
                  

              </div>
              <div className={'row'} style={{marginLeft:0,marginRight:4,marginTop:10}}>
                  <span style={{backgroundColor:'#3090C7',borderTopRightRadius:20,borderBottomRightRadius:20,height:35}}>
                  <p style={{    paddingTop: 7,fontSize:14,color:'#fff',paddingRight:15,paddingLeft:10}}>{data.offertext}</p>
                  </span>
                  <span style={{marginLeft:'auto' }} >
                     {data.amenties.map((amentie,index)=>{
                         return (
                             <span style={{fontSize:14,color:'#3090C7'}} key={index}>
                                 {`${amentie} `}
                             </span>
                         )
                     })}
                  </span>

              </div>
             
          </Card.Text>
          
        </Card.Body>
      </Card>
    )
}
export default CustomCard;
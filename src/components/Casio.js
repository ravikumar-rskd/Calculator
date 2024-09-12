import { Button, Grid,  Typography } from "@mui/material";
import React, {  useState } from "react";
import {evaluate} from 'mathjs';



const Casio = () => {
  const NUMBERS = [{ id: 7, num: '7' }, { id: 8, num: '8' }, { id: 9, num: '9' },{ id: 13, num: '*' },
  { id: 4, num: '4' }, { id: 5, num: '5' }, { id: 6, num: '6' },{ id: 14, num: '/' },
  { id: 1, num: '1' }, { id: 2, num: '2' }, { id: 3, num: '3' },{ id: 15, num: '-' },
  { id: 0, num: '0' }, { id: 11, num: '.' },
  ];
  const CLEAR=[{id:1,val:'%'},{id:2,val:'^'},{id:3,val:'C'},{id:4,val:'AC'},];
  const [input,setInput]=useState('');
  const [result,setResult]=useState('');
 
  const handleButtons=(n)=>{
    if(n==='='){
      calculateResult();
    }
    else if(n==='AC'){
      setInput('');
      setResult('');
    }
    else if(n==='C'){
      setInput(input.substring(0,input.length-1));
      setResult(input.substring(0,input.length-1));
    }
    else{
      setResult('');
      setInput((prev)=>prev+n);
    }
      
    };
    
  //   // Handle calculation
  const calculateResult = () => {
    try {
      const calculatedResult = evaluate(input); // Evaluate the expression
      setResult(calculatedResult.toString());
      setInput('');
    } catch (error) {
      setResult('Error'); // Handle errors in the expression
    }
  };
  return (
    <Grid container sx={{ display: "flex", padding: 2, margin: 2, width: 400, borderRadius: 2, backgroundColor: 'black' }}>
      <Typography variant="h5" sx={{ color: 'silver', fontWeight: 'bold' }}>
        RASIO
      </Typography>
      <Grid item sx={{ display: "flex", backgroundColor:"white" }}>
      <div>
      <input type="text" style={{width:360,height:80,fontSize:30,color:"black"}} value={result || input } placeholder="0" onChange={(e) => setResult(e.target.value)} readOnly/>
      </div>
      </Grid>
      <Grid padding={1} >
      <div className="buttons" style={{paddingTop:5}}>
      {CLEAR.map((clr)=>(
          <Button  key={clr.id} onClick={()=>handleButtons(clr.val)} sx={{fontSize:20}}>{clr.val}</Button>
      ))}
      <div className="buttons-numbers" style={{paddingTop:1}}>
        {NUMBERS.map((no)=>(
          <Button  key={no.id} onClick={()=>handleButtons(no.num)} sx={{fontSize:20}}>{no.num}</Button>
        ))}
        <Button className="special-buttons" onClick={()=>handleButtons('=')} >=</Button>
        <Button className="special-buttons" onClick={()=>handleButtons('+')} >+</Button>
      </div>
      </div>
      </Grid>
      
    </Grid>
  )
};
export default Casio;
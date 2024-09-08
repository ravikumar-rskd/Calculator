import { Button, Grid2, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import {evaluate} from 'mathjs';


const Casio = () => {
  const NUMBERS = [{ id: 7, num: '7' }, { id: 8, num: '8' }, { id: 9, num: '9' },
  { id: 4, num: '4' }, { id: 5, num: '5' }, { id: 6, num: '6' },
  { id: 1, num: '1' }, { id: 2, num: '2' }, { id: 3, num: '3' },
  { id: 0, num: '0' }, { id: 11, num: '.' },
  ];
  // const OPERATORS=[{id:1,op:'*'},{id:2,op:'/'},{id:3,op:'-'},{id:4,op:'+'},];
  const [input,setInput]=useState('');
  const [result,setResult]=useState('');
  const handleButtons=(n)=>{
      setInput((prev)=>prev+n);
    };
    // Handle calculation
  const calculateResult = () => {
    try {
      const calculatedResult = evaluate(input); // Evaluate the expression
      setResult(calculatedResult.toString());
      setInput('')
    } catch (error) {
      setResult('Error'); // Handle errors in the expression
    }
  };
  return (
    <Grid2 container sx={{ display: "flex", padding: 2, margin: 2, width: 400, height: 450, borderRadius: 2, backgroundColor: 'black' }}>
      <Typography variant="h5" sx={{ color: 'silver', fontWeight: 'bold' }}>
        CASIO
      </Typography>
      <Grid2 item spacing={2} sx={{ display: "flex", padding: 1, width: 400, height: 90, backgroundColor: '#e0e0e0', justifyContent: 'space-between', alignItems: 'flex-end', flexDirection: "column" }}>
        {/* <Typography variant="h6">
          +
        </Typography>
        <Typography variant="h4">
          {input}
        </Typography> */}
        <TextField
        fullWidth
        variant='standard'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="0"
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        fullWidth
        variant='standard'
        value={result}
        placeholder="Result"
        InputProps={{
          readOnly: true,
        }}
      />
      </Grid2>
      <Grid2 item sx={{ display: "flex", width: 300, flexWrap: 'wrap', justifyContent: 'space-around' }} >
        {NUMBERS.map((no) => (
          <Button onClick={()=>handleButtons(no.num)} className="numerics" variant="contained" key={no.id} sx={{ borderRadius: 2, border: 'solid', fontSize: 30, backgroundColor: "black" }}>{no.num}</Button>
        ))}
        <Button variant="contained" onClick={()=>calculateResult()} key={'='} sx={{ borderRadius: 2, border: 'solid', fontSize: 30, width: 90, height: 60, backgroundColor: "red" }}>=</Button>
      </Grid2>
      <Grid2 item sx={{ display: "flex", width: 20, flexWrap: 'wrap', justifyContent: 'space-around' }} >
        {["/", "*", "-"].map((op) => (
          <Button key={op} onClick={()=>handleButtons(op)} variant="contained" sx={{ borderRadius: 2, border: 'solid', fontSize: 30, height: 60 }}>{op}</Button>
        ))}
        <Button variant="contained" onClick={()=>handleButtons('+')} key={'+'} sx={{ borderRadius: 2, border: 'solid', fontSize: 40, height: 80 }}>+</Button>
      </Grid2>
    </Grid2>
  )
};
export default Casio;
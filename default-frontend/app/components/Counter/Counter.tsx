import React from "react";
import {Fab, Stack, Typography} from "@mui/material";
import {Add, Remove} from "@mui/icons-material";

export default function Counter({label, value, setValue} : {label: string,value: number, setValue: React.Dispatch<React.SetStateAction<number>>}) {
   return (
       <Stack direction="row" sx={{alignItems: "center"}}>
           <Typography variant="subtitle1" sx={{marginRight: "20px", minWidth: "80px"}}>{label}</Typography>
           <Fab disabled={value == 0} size="small" color="primary" aria-label="sub" onClick={() => {setValue(value-1)}}>
               <Remove/>
           </Fab>
           <Typography variant="body1" sx={{marginX: "10px"}}>{value}</Typography>
           <Fab size="small" color="primary" aria-label="add" onClick={() => {setValue(value+1)}}>
               <Add/>
           </Fab>
       </Stack>
   )
}
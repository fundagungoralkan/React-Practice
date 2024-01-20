import React from "react";
import countries from "./countries.json";

const Ulkeler = () => {

const stil ={
    textAlign:"center",
    backgroundColor:"pink",
};


    return (
         
       <table>

        <thead>

        <tr>
    <th>Sira No</th>
    <th>Ulke Adi</th>
    <th>Ulke Kodu</th>
       </tr>
        </thead>

        <tbody>
   {countries.map((country,index) =>(
    <tr  key={index}
    style={
        index%2===0 ? stil:{...stil,backgroundColor:"whitesmoke"}
    }
    
    >
     <td>{index+1}</td>
     <td>{country.name}</td>
     <td>{country.code}</td>

    </tr>


   ))}
     )


        </tbody>



       </table>

        )
    };
    
    export default Ulkeler;
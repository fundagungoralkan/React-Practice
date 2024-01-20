import React from "react";


const Kisi = ({ student, index }) => {
    // 1.yol  console.log(props.students);
    // 2.yol  const {students} =props;
   //  2.yol   console.log(students);
   

   console.log(student, index);
   const { isim, kurs, yas, img } = student;

    return (

        <div>
      <h3>{isim}</h3>
      <img src={img} alt="" width={"150"} height={"150"} />
      <h4>{yas}</h4>
      <h4>{kurs}</h4>
    </div>


)
};

    export default Kisi;
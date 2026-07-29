"use client";

import { useEffect, useState } from "react";


type ChecklistItem = {

  item:string;

  category?:string;

  priority?:string;

  why?:string;

};




type Analysis = {

  inspectionChecklist?:ChecklistItem[];

};







export default function InspectionChecklist(){


  const [items,setItems] =
    useState<ChecklistItem[]>([]);



  const [checked,setChecked] =
    useState<number[]>([]);







  useEffect(()=>{


    const saved =
      localStorage.getItem("analysis");


    const savedChecks =
      localStorage.getItem("inspectionChecked");



    if(saved){


      try{


        const data:Analysis =
          JSON.parse(saved);



        const sorted =
          (data.inspectionChecklist || [])
          .sort((a,b)=>{


            const priority:any={


              "wysoka":1,

              "średnia":2,

              "srednia":2,

              "niska":3


            };



            return (

              priority[
                a.priority?.toLowerCase() || ""
              ] || 4

            )
            -
            (

              priority[
                b.priority?.toLowerCase() || ""
              ] || 4

            );


          });




        setItems(sorted);



      }catch{


        setItems([]);


      }


    }





    if(savedChecks){


      try{


        setChecked(
          JSON.parse(savedChecks)
        );


      }catch{


        setChecked([]);


      }


    }



  },[]);









  function toggleCheck(index:number){


    let updated:number[];



    if(checked.includes(index)){


      updated =
        checked.filter(
          item=>item!==index
        );


    }else{


      updated=[
        ...checked,
        index
      ];


    }



    setChecked(updated);



    localStorage.setItem(
      "inspectionChecked",
      JSON.stringify(updated)
    );


  }









  function priorityStyle(priority?:string){


    const value =
      priority?.toLowerCase() || "";



    if(value.includes("wysok")){


      return {

        text:"text-red-400",

        icon:"🔴"

      };


    }



    if(
      value.includes("śred") ||
      value.includes("sred")
    ){


      return {

        text:"text-yellow-400",

        icon:"🟡"

      };


    }



    return {

      text:"text-green-400",

      icon:"🟢"

    };


  }









  const progress =
    items.length
    ?
    Math.round(
      checked.length / items.length * 100
    )
    :
    0;









  return (


<section className="px-6 py-12">


<div className="max-w-5xl mx-auto">





<div className="flex justify-between items-center mb-8">


<h2 className="text-3xl font-bold">

🔍 Kontrola auta na miejscu

</h2>



<div className="text-orange-400 font-bold">

{progress}% sprawdzone

</div>


</div>







<div className="h-3 bg-zinc-900 rounded-full overflow-hidden mb-8">


<div

className="h-full bg-orange-500 transition-all"

style={{
width:`${progress}%`
}}

/>


</div>








{items.length===0 ? (


<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-gray-400">

AI nie przygotowało jeszcze checklisty oględzin.

</div>



):(



<div className="space-y-5">



{items.map((item,index)=>{


const priority =
priorityStyle(item.priority);



return (



<div

key={index}

className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500 transition"

>



<div className="flex gap-4 items-start">





<button

onClick={()=>toggleCheck(index)}

className="text-3xl"

>

{
checked.includes(index)
?
"☑️"
:
"⬜"
}

</button>







<div className="flex-1">





<div className="flex justify-between gap-4">


<h3 className="text-xl font-bold">

{index+1}. {item.item}

</h3>



{item.priority && (


<span className={`font-bold text-sm whitespace-nowrap ${priority.text}`}>

{priority.icon} {item.priority}

</span>


)}


</div>








{item.category && (


<p className="text-orange-400 text-sm mt-3">

📂 {item.category}

</p>


)}







{item.why && (


<p className="text-gray-400 mt-3 leading-relaxed">

💡 {item.why}

</p>


)}





</div>






</div>



</div>



);


})}



</div>


)}








<div className="mt-8 bg-black border border-orange-500/30 rounded-2xl p-6">


<h3 className="text-xl font-bold">

🚗 AMBSAI - procedura oględzin

</h3>



<p className="text-gray-400 mt-3 leading-relaxed">


Najpierw sprawdź elementy krytyczne:
silnik, skrzynię, ślady wypadkowe i dokumenty.
Dopiero później oceniaj wygląd oraz wyposażenie.


</p>


</div>








</div>


</section>


);


}
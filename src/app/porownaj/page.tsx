"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";


type Car = {
  id:string;
  brand:string;
  model:string;

  generation?:string;
  production_years?:string;

  engine?:string;
  engine_code?:string;
  fuel_type?:string;
  engine_capacity?:string;

  power_hp?:number;
  power_kw?:number;
  torque_nm?:number;

  gearbox?:string;
  drivetrain?:string;

  weight_kg?:number;

  acceleration_0_100?:string;
  top_speed_kmh?:number;

  fuel_consumption?:string;
  fuel_tank_l?:number;

  segment?:string;
  body_type?:string;
  trunk_liters?:number;

  reliability_score?:number;
  maintenance_level?:string;
  maintenance_cost?:string;

  common_failures?:string[];
  pros?:string[];
  cons?:string[];
};



export default function ComparePage(){

const [cars,setCars]=useState<Car[]>([]);

const [car1,setCar1]=useState<Car|null>(null);
const [car2,setCar2]=useState<Car|null>(null);



useEffect(()=>{

async function loadCars(){

const {data,error}=await supabase
.from("car_database")
.select("*")
.order("brand");


if(error){

console.error(error);
return;

}

setCars(data || []);

}

loadCars();

},[]);




function selectCar(id:string,number:number){

const car=cars.find(
item=>item.id===id
);

if(!car)return;


if(number===1){

setCar1(car);

}else{

setCar2(car);

}

}




return (

<main className="min-h-screen bg-black text-white px-6 py-20">

<div className="max-w-6xl mx-auto">


<h1 className="text-5xl font-bold text-center">
🚗 AMBSAI Compare
</h1>


<p className="text-gray-400 text-center mt-5">
Porównanie samochodów według danych technicznych, kosztów i ryzyka zakupu.
</p>



<div className="grid md:grid-cols-2 gap-8 mt-12">


<SelectCard
title="Auto 1"
cars={cars}
select={(id:string)=>selectCar(id,1)}
/>


<SelectCard
title="Auto 2"
cars={cars}
select={(id:string)=>selectCar(id,2)}
/>


</div>





{car1 && car2 && (

<div className="mt-12 bg-zinc-900 border border-orange-500/30 rounded-3xl p-8">


<h2 className="text-3xl font-bold text-orange-400 mb-10">
⚔️ Porównanie
</h2>



<div className="grid md:grid-cols-3 gap-5 text-center">


<CarHeader car={car1}/>

<div className="text-gray-500 font-bold">
Parametr
</div>

<CarHeader car={car2}/>



<Section title="📌 Dane podstawowe"/>

<CompareRow title="Generacja" left={car1.generation} right={car2.generation}/>

<CompareRow title="Lata produkcji" left={car1.production_years} right={car2.production_years}/>

<CompareRow title="Segment" left={car1.segment} right={car2.segment}/>

<CompareRow title="Nadwozie" left={car1.body_type} right={car2.body_type}/>




<Section title="⚙️ Silnik"/>

<CompareRow title="Silnik" left={car1.engine} right={car2.engine}/>

<CompareRow title="Kod silnika" left={car1.engine_code} right={car2.engine_code}/>

<CompareRow title="Paliwo" left={car1.fuel_type} right={car2.fuel_type}/>

<CompareRow title="Pojemność" left={car1.engine_capacity} right={car2.engine_capacity}/>

<CompareRow 
title="Moc"
left={(car1.power_hp ?? "-") + " KM"}
right={(car2.power_hp ?? "-") + " KM"}
/>

<CompareRow 
title="Moment obrotowy"
left={(car1.torque_nm ?? "-") + " Nm"}
right={(car2.torque_nm ?? "-") + " Nm"}
/>

<CompareRow title="Skrzynia" left={car1.gearbox} right={car2.gearbox}/>

<CompareRow title="Napęd" left={car1.drivetrain} right={car2.drivetrain}/>





<Section title="🏁 Osiągi"/>


<CompareRow 
title="Masa pojazdu"
left={(car1.weight_kg ?? "-") + " kg"}
right={(car2.weight_kg ?? "-") + " kg"}
/>


<CompareRow title="0-100 km/h" left={car1.acceleration_0_100} right={car2.acceleration_0_100}/>


<CompareRow 
title="Prędkość maksymalna"
left={(car1.top_speed_kmh ?? "-") + " km/h"}
right={(car2.top_speed_kmh ?? "-") + " km/h"}
/>





<Section title="💰 Eksploatacja"/>


<CompareRow title="Spalanie" left={car1.fuel_consumption} right={car2.fuel_consumption}/>


<CompareRow 
title="Zbiornik paliwa"
left={(car1.fuel_tank_l ?? "-") + " l"}
right={(car2.fuel_tank_l ?? "-") + " l"}
/>


<CompareRow 
title="Bagażnik"
left={(car1.trunk_liters ?? "-") + " l"}
right={(car2.trunk_liters ?? "-") + " l"}
/>


<CompareRow 
title="Koszt utrzymania"
left={car1.maintenance_cost}
right={car2.maintenance_cost}
/>




<Section title="🛠 Niezawodność"/>


<CompareRow 
title="Ocena AMBSAI"
left={(car1.reliability_score ?? "-") + "/10"}
right={(car2.reliability_score ?? "-") + "/10"}
/>



</div>

</div>

)}


</div>

</main>

);

}






function SelectCard({
title,
cars,
select
}:{
title:string;
cars:Car[];
select:(id:string)=>void;
}){


return (

<div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">


<h2 className="text-2xl font-bold mb-5">
{title}
</h2>


<select
className="w-full bg-black border border-zinc-700 rounded-xl p-4"
onChange={(e)=>select(e.target.value)}
>


<option value="">
Wybierz auto
</option>


{cars.map((car)=>(

<option key={car.id} value={car.id}>

{car.brand} {car.model} {car.engine}

</option>

))}


</select>


</div>

);

}





function CarHeader({car}:{car:Car}){

return (

<div>

<h3 className="font-bold text-xl">

{car.brand} {car.model}

</h3>

</div>

);

}





function Section({title}:{title:string}){

return (

<div className="col-span-3 text-orange-400 font-bold text-xl mt-8">

{title}

</div>

);

}





function CompareRow({
title,
left,
right
}:{
title:string;
left?:string;
right?:string;
}){


return (

<>

<div className="font-bold">
{left || "-"}
</div>


<div className="text-gray-400">
{title}
</div>


<div className="font-bold">
{right || "-"}
</div>


</>

);

}
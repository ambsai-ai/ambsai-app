"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";


type Car = {
  id: string;
  brand: string;
  model: string;
  generation?: string;
  engine?: string;
  power_hp?: number;
  torque_nm?: number;
  weight_kg?: number;
  acceleration_0_100?: string;
  fuel_consumption?: string;
  drivetrain?: string;
  reliability_score?: number;
  maintenance_cost?: string;
};



export default function ComparePage() {


  const [cars,setCars] = useState<Car[]>([]);


  const [car1,setCar1] = useState<Car | null>(null);

  const [car2,setCar2] = useState<Car | null>(null);





  useEffect(()=>{


    async function loadCars(){


      const {data,error} =
        await supabase
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






  function selectCar(
    id:string,
    number:number
  ){


    const car =
      cars.find(
        item=>item.id===id
      );


    if(!car) return;


    if(number===1){

      setCar1(car);

    } else {

      setCar2(car);

    }


  }







  return (


    <main className="min-h-screen bg-black text-white px-6 py-20">


      <div className="max-w-6xl mx-auto">



        <h1 className="text-5xl font-bold text-center">

          🚗 AMBSAI Compare

        </h1>


        <p className="text-gray-400 text-center mt-5 text-lg">

          Porównaj samochody na podstawie danych technicznych i kosztów.

        </p>






        <div className="grid md:grid-cols-2 gap-8 mt-12">



          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">


            <h2 className="text-2xl font-bold mb-5">

              Auto 1

            </h2>



            <select

              className="w-full bg-black border border-zinc-700 rounded-xl p-4"

              onChange={(e)=>
                selectCar(
                  e.target.value,
                  1
                )
              }

            >

              <option>
                Wybierz auto
              </option>


              {cars.map(car=>(

                <option
                  key={car.id}
                  value={car.id}
                >

                  {car.brand} {car.model} {car.engine}

                </option>

              ))}


            </select>



          </div>








          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">


            <h2 className="text-2xl font-bold mb-5">

              Auto 2

            </h2>



            <select

              className="w-full bg-black border border-zinc-700 rounded-xl p-4"

              onChange={(e)=>
                selectCar(
                  e.target.value,
                  2
                )
              }

            >

              <option>
                Wybierz auto
              </option>


              {cars.map(car=>(

                <option
                  key={car.id}
                  value={car.id}
                >

                  {car.brand} {car.model} {car.engine}

                </option>

              ))}


            </select>



          </div>




        </div>







        {car1 && car2 && (


          <div className="mt-12 bg-zinc-900 border border-orange-500/30 rounded-3xl p-8">


            <h2 className="text-3xl font-bold mb-8 text-orange-400">

              ⚔️ Porównanie

            </h2>




            <div className="grid md:grid-cols-3 gap-6 text-center">



              <div>

                <h3 className="font-bold text-xl">

                  {car1.brand} {car1.model}

                </h3>

              </div>



              <div className="text-gray-400">

                Parametr

              </div>



              <div>

                <h3 className="font-bold text-xl">

                  {car2.brand} {car2.model}

                </h3>

              </div>







              <CompareRow
                title="Moc"
                left={`${car1.power_hp || "-"} KM`}
                right={`${car2.power_hp || "-"} KM`}
              />



              <CompareRow
                title="Moment"
                left={`${car1.torque_nm || "-"} Nm`}
                right={`${car2.torque_nm || "-"} Nm`}
              />



              <CompareRow
                title="Masa"
                left={`${car1.weight_kg || "-"} kg`}
                right={`${car2.weight_kg || "-"} kg`}
              />



              <CompareRow
                title="0-100 km/h"
                left={car1.acceleration_0_100 || "-"}
                right={car2.acceleration_0_100 || "-"}
              />



              <CompareRow
                title="Spalanie"
                left={car1.fuel_consumption || "-"}
                right={car2.fuel_consumption || "-"}
              />



              <CompareRow
                title="Niezawodność"
                left={`${car1.reliability_score || "-"}/10`}
                right={`${car2.reliability_score || "-"}/10`}
              />




            </div>



          </div>


        )}




      </div>


    </main>


  );

}





function CompareRow({

title,
left,
right

}:{

title:string;
left:string;
right:string;

}){


return (

<>

<div className="mt-6 font-bold">

{left}

</div>


<div className="mt-6 text-gray-400">

{title}

</div>


<div className="mt-6 font-bold">

{right}

</div>


</>

);


}
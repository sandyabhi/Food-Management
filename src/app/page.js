"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="z-10 relative h-screen bg-slate-400">
      <img
        src="https://images.unsplash.com/photo-1464036388609-747537735eab?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-4xl text-center text-white font-semibold font-sans">
          <p className="mb-4">From Farm to Table, Every Grain Counts</p>
          <p className="mb-4">“HARVEST HUB”</p>
          <p className="mb-8">Revolutionizing Crop Storage and Management.</p>
          <Button
            onClick={() => {
              router.push("/rooms");
            }}
            className="px-5 py-4 bg-teal-500 rounded-lg border-white border-2 text-white font-semibold text-2xl"
          >
            Discover
          </Button>
        </div>
      </div>
    </div>
  );
}

// import Card from "@/components/Card/Card";
// import { Button } from "@/components/ui/button";
// import { sortRoomsByDistance } from "@/lib/utils";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// // import Card from "@/components/Card/Card";

// export default function Home() {
//   const router = useRouter();
//   const { data, status } = useSession();

//   // const [roomData, setRoomData] = useState([]);
//   const [rooms, setRooms] = useState([]);
//   const [sortedRooms, setSortedRooms] = useState([]);
//   const [filteredRooms, setFilteredRooms] = useState([]);

//   const [latitude, setLatitude] = useState(null);
//   const [longitude, setLongitude] = useState(null);
//   const [error, setError] = useState(null);

//   const [selectedOption, setSelectedOption] = useState("");
//   const [selectedRoomOption, setSelectedRoomOption] = useState("");

//   useEffect(() => {
//     // Check for Geolocation support
//     if (!navigator.geolocation) {
//       setError("Geolocation is not supported by your browser");
//       return;
//     }

//     // Request user's location
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setLatitude(position.coords.latitude);
//         setLongitude(position.coords.longitude);
//       },
//       (error) => {
//         setError(`Geolocation error: ${error.message}`);
//       }
//     );

//     const getData = async () => {
//       try {
//         const res = await fetch("http://localhost:3000/api/rooms");
//         if (!res.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const data = await res.json();
//         setRooms(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     getData();
//   }, []);

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const handleRoomOptionChange = (event) => {
//     setSelectedRoomOption(event.target.value);
//     console.log(selectedRoomOption);
//   };

//   const [isChecked, setIsChecked] = useState(false);

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//     console.log(isChecked);
//   };

//   const handleApplyFilter = () => {
//     if (selectedOption !== "" && isChecked) {
//       let data = rooms.filter((room) => room.crop === selectedOption);

//       if (selectedRoomOption == "Empty") {
//         data = data.filter((room) => room.status == "Empty");
//       } else if (selectedRoomOption == "Occupied") {
//         data = data.filter((room) => room.status != "Empty");
//       }

//       setFilteredRooms(sortRoomsByDistance(data, latitude, longitude));
//     } else if (selectedOption !== "") {
//       // console.log(filteredRooms);
//       // console.log(rooms);
//       let data = rooms.filter((room) => room.crop === selectedOption);

//       if (selectedRoomOption == "Empty") {
//         data = data.filter((room) => room.status == "Empty");
//       } else if (selectedRoomOption == "Occupied") {
//         data = data.filter((room) => room.status != "Empty");
//       }

//       setFilteredRooms(data);
//     } else if (isChecked) {
//       let data = rooms;
//       if (selectedRoomOption == "Empty") {
//         data = data.filter((room) => room.status == "Empty");
//       } else if (selectedRoomOption == "Occupied") {
//         data = data.filter((room) => room.status != "Empty");
//       }

//       setFilteredRooms(sortRoomsByDistance(data, latitude, longitude));

//       // console.log(filteredRooms);
//     } else {
//       // console.log("=");

//       setFilteredRooms(rooms);
//     }
//   };

//   const cropFilter = () => {
//     roomData.filter((room) => room.crop === selectedOption);
//   };

//   // if (status === "loading") {
//   //   return <div>Loading...</div>;
//   // }

//   // if (status === "unauthenticated") {
//   //   router.push("/login");
//   // }

//   return (
//     <main className="bg-[#DDE6ED] text-black font-mono text-base font-bold flex min-h-screen flex-col items-center py-24 px-4">
//       <div className="bg-[#576CBC] p-4 md:px-8 md:py-6 rounded-3xl bg-gradient-to-br from-[#576CBC] to-[#19376D]">
//         <div className="flex flex-wrap gap-4 md:gap-8 justify-center items-center">
//           <div className="w-full md:w-auto">
//             <select
//               id="option"
//               value={selectedOption}
//               onChange={handleOptionChange}
//               className="w-full md:w-auto p-2 md:py-3 md:px-4 rounded-lg bg-white text-black shadow-md focus:outline-none"
//             >
//               <option value="">Select Crop</option>
//               <option value="Rice">Rice</option>
//               <option value="Wheat">Wheat</option>
//               <option value="Onion">Onion</option>
//               <option value="Potato">Potato</option>
//               <option value="Tomato">Tomato</option>
//               <option value="Apple">Apple</option>
//             </select>
//           </div>
//           <div className="w-full md:w-auto">
//             <select
//               value={selectedRoomOption}
//               onChange={handleRoomOptionChange}
//               className="w-full md:w-auto p-2 md:py-3 md:px-4 rounded-lg bg-white text-black shadow-md focus:outline-none"
//             >
//               <option value="">Select Room</option>
//               <option value="Empty">Empty Room</option>
//               <option value="Occupied">Occupied Room</option>
//             </select>
//           </div>
//           <div className="gap-5 flex items-center">
//             <label className="cursor-pointer">
//               Shortest Route
//               <input
//                 type="checkbox"
//                 checked={isChecked}
//                 onChange={handleCheckboxChange}
//                 className="mx-2"
//               />
//             </label>
//           </div>
//           <div>
//             <Button
//               className="font-semibold"
//               variant="outline"
//               onClick={handleApplyFilter}
//             >
//               Apply Filter
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Cards */}
//       <div className="p-4 md:p-10 flex flex-wrap justify-center gap-4 md:gap-10 mt-4">
//         {filteredRooms?.map((room) => (
//           <Card
//             key={room.id}
//             id={room.id}
//             title={room.title}
//             location={room.location}
//             capacity={room.capacity}
//             lat={room.latitude}
//             lon={room.longitude}
//             humidity={room.humidity}
//             temperature={room.temperature}
//             crop={room.crop}
//             status={room.status}
//           />
//         ))}
//       </div>

//       {/* Geolocation */}
//       <div className="mt-4">
//         <h1 className="text-xl md:text-2xl">Geolocation</h1>
//         {error && <p>{error}</p>}
//         {latitude && longitude && (
//           <p>
//             Latitude: {latitude}, Longitude: {longitude}
//           </p>
//         )}
//       </div>
//     </main>
//   );
// }

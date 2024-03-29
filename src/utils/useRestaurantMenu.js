import { useEffect, useState } from "react";

const useRestaurantMenu=(resId)=>{

    const [resInfo,setResInfo]= useState([]);
     useEffect(()=>{
      fetchData();
     },[]);

     const fetchData= async()=>{
          const data=await 
    fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6369411&lng=77.2056647&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"||[]
    );

    const json=await data.json();
    setResInfo(json.data);
     };

    return resInfo;
};
export default useRestaurantMenu;
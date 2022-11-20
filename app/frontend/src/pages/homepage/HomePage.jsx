import React ,{useEffect, useState} from "react";
import MealPlanCard from "../../components/MealPlanCard/MealPlanCard.jsx";


const HomePage = () => {
  const [userMealPlans, setUserMealPlans] = useState([
    {
      title: "Regular Meal Plan",
      short_description:
        "Ensure that every customer have a healthy life.",
    },
    {
      title: "Less Calorie Meal",
      short_description:
        "less calorie in their meal.",
    },
    {
      title: "High Calorie Meal Plan",
      short_description:
        "high calorie rich meal.",
    },
  ])

  useEffect(()=>{
    async function fetchData(){
      const response = fetch('/api/get/plans',{
        method : "GET"
      })
      const data = await response.json()
      if(data.status){
        console.log(data.data)
      }
      else{
        console.log(data.error)
      }
    }

    fetchData()
  },[])
  return (
    <div style={{width:"90%"}}>
      <div className="row text-center mb-3">
        <h3>Subscribed Meal Plans</h3>
      </div>
      <div className="row d-flex justify-content-center meal-plan-list">
        {userMealPlans.map(v=>{v["isSubscribed"] = true; return <MealPlanCard plan={v}></MealPlanCard>})}
      </div>
    </div>
  );
};

export default HomePage;

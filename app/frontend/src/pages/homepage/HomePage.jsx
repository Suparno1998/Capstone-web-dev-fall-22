import React ,{useEffect, useState} from "react";
import FullPageSpinner from "../../components/FullPageSpinner.jsx";
import MealPlanCard from "../../components/MealPlanCard/MealPlanCard.jsx";


const HomePage = () => {
  const [userMealPlans, setUserMealPlans] = useState([])
  const [isLoading, setisLoading] = useState(false)

  useEffect(()=>{
    async function fetchData(){
      setisLoading(true)
      const response = await fetch('/api/get/plans',{
        method : "GET"
      })
      const data = await response.json()
      if(data.status){
        console.log(data.data)
        setUserMealPlans(data.data)
      }
      else{
        console.log(data.error)
      }
      setisLoading(false)
    }

    fetchData()
  },[])
  return (
    <div style={{width:"90%"}}>
      <div className="row text-center mb-3">
        <h3>Subscribed Meal Plans</h3>
      </div>
      {isLoading ? <FullPageSpinner variant="success"/> : <div className="row d-flex justify-content-start meal-plan-list px-3">
        {userMealPlans.map(v=>{v.meal_plan.isSubscribed = true; return <MealPlanCard plan={v.meal_plan}></MealPlanCard>})}
      </div>}
    </div>
  );
};

export default HomePage;

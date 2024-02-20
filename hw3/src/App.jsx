import Header from "./components/Header";
import PlanList from "./components/PlanList";
import PlanForm from "./components/PlanForm";
import { useEffect, useState } from "react";

const App = () => {
  const [Plans, setPlanList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlans();
  }, []);
  const fetchPlans = async () => {
    try {
      const response = await fetch(
        "https://plan-service.onrender.com/api/plans"
      );
      if (!response.ok) {
        throw new Error("Error fetching plans");
      }
      const responseData = await response.json();
      setPlanList(responseData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  if (loading)
    return (
      <div className="container">
        <div className="loading">Loading...</div>
      </div>
    );
  const deletePlan = async (id) => {
    if (window.confirm("Are you sure you want to delete this plan?")) {
      console.log("Delete plan with id: ", id);
      try {
        const response = await fetch(
          `https://plan-service.onrender.com/api/plans/${id}`,
          {
            method: "DELETE",
          }
        );
        if (!response.ok) {
          throw new Error("Error deleting plan");
        }
        const updatedPlans = Plans.filter((plan) => plan.id !== id);
        setPlanList(updatedPlans);
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <PlanForm />
        <div className="plans">
          <PlanList plans={Plans} deletePlan={deletePlan} />
        </div>
      </div>
    </>
  );
};
export default App;

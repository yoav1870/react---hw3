import Header from "./components/Header";
import PlanList from "./components/PlanList";
import PlanForm from "./components/PlanForm";
import SearchPlan from "./components/SearchPlan";
import Container from "./components/Container";
import { useEffect, useState } from "react";

const App = () => {
  const [Plans, setPlanList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [AllPlans, setAllPlans] = useState([]); // keeps all plans for search

  useEffect(() => {
    getAllPlans();
  }, []);
  const getAllPlans = async () => {
    try {
      const response = await fetch(
        "https://plan-service.onrender.com/api/plans"
      );
      if (!response.ok) {
        throw new Error("Error fetching plans");
      }
      const responseData = await response.json();
      setPlanList(responseData);
      setAllPlans(responseData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  if (loading)
    return (
      <Container>
        <div className="loading">Loading...</div>
      </Container>
    );
  const deletePlan = async (id) => {
    if (window.confirm("Are you sure you want to delete this plan?")) {
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

  const SearchById = async (id) => {
    try {
      const response = await fetch(
        `https://plan-service.onrender.com/api/plans/${id}`
      );
      if (!response.ok) {
        throw new Error("Error fetching plan");
      }
      const responseData = await response.json();
      setPlanList(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  const createPlan = async (plan) => {
    const maxId = AllPlans.reduce(
      (max, plan) => (plan.id > max ? plan.id : max),
      0
    );
    plan.id = maxId + 1;

    try {
      const formData = new URLSearchParams();
      for (const key in plan) {
        formData.append(key, plan[key]);
      }

      const response = await fetch(
        "https://plan-service.onrender.com/api/plans",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        }
      );

      if (!response.ok) {
        throw new Error("Error creating plan");
      }

      const responseData = await response.json();
      setPlanList((prevPlans) => [...prevPlans, responseData]);
      setAllPlans((prevPlans) => [...prevPlans, responseData]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header getAllPlans={getAllPlans} />
      <Container>
        <PlanForm createPlan={createPlan} />
        <SearchPlan SearchById={SearchById} plans={AllPlans} />
        <Container>
          <PlanList plans={Plans} deletePlan={deletePlan} />
        </Container>
      </Container>
    </>
  );
};
export default App;

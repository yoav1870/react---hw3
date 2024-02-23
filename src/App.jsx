import Header from "./components/Header";
import PlanList from "./components/PlanList";
import PlanForm from "./components/PlanForm";
import SearchPlan from "./components/SearchPlan";
import Container from "./components/Container";
import Alert from "@mui/material/Alert";
import { useEffect, useState } from "react";

const App = () => {
  const [Plans, setPlanList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleError = (message) => {
    setError(message);
    setTimeout(() => {
      setError(null);
    }, 5000);
  };
  const handleSuccess = (message) => {
    setSuccess(message);
    setTimeout(() => {
      setSuccess(null);
    }, 5000);
  };

  useEffect(() => {
    getAllPlans();
  }, []);
  const getAllPlans = async () => {
    try {
      const response = await fetch(
        "https://plan-service.onrender.com/api/plans"
      );
      const responseData = await response.json();
      if (response.status === 200) {
        setPlanList(responseData);
        setLoading(false);
      } else throw new Error(responseData);
    } catch (error) {
      handleError(
        "There was a problem with the server to load the data. Please try again later."
      );
      setLoading(false);
    }
  };
  if (loading)
    return (
      <Container>
        <div className="loading">Loading...</div>
      </Container>
    );
  const SearchById = async (id) => {
    try {
      const response = await fetch(
        `https://plan-service.onrender.com/api/plans/${id}`
      );
      const responseData = await response.json();
      if (response.status === 200) {
        setPlanList(responseData);
      } else throw new Error(responseData);
    } catch (error) {
      handleError(error.message);
      console.error(error);
    }
  };
  const deletePlan = async (id) => {
    if (window.confirm("Are you sure you want to delete this plan?")) {
      try {
        const response = await fetch(
          `https://plan-service.onrender.com/api/plans/${id}`,
          {
            method: "DELETE",
          }
        );
        const responseData = await response.json();
        if (response.status !== 200) {
          throw new Error(responseData);
        }
        const updatedPlans = Plans.filter((plan) => plan.id !== id);
        setPlanList(updatedPlans);
        handleSuccess(responseData);
      } catch (error) {
        handleError(error.message);
        console.error(error);
      }
    }
  };

  const createPlan = async (planData) => {
    try {
      const maxId = Plans.reduce(
        (max, plan) => (plan.id > max ? plan.id : max),
        0
      );
      const plan = {
        id: maxId + 1,
        planName: planData.planName,
        description: planData.description,
        locations: [
          {
            id: planData.locationId,
            name: planData.locationName,
            description: planData.locationDescription,
            maxCapacity: planData.maxCapacity,
            safetyInstructions: planData.safetyInstructions,
            OtherThings: planData.OtherThings,
          },
        ],
      };

      const formData = new URLSearchParams();
      formData.append("id", plan.id);
      formData.append("planName", plan.planName);
      formData.append("description", plan.description);
      formData.append("locations[0][id]", plan.locations[0].id);
      formData.append("locations[0][name]", plan.locations[0].name);
      formData.append(
        "locations[0][description]",
        plan.locations[0].description
      );
      formData.append(
        "locations[0][maxCapacity]",
        plan.locations[0].maxCapacity
      );
      formData.append(
        "locations[0][safetyInstructions]",
        plan.locations[0].safetyInstructions
      );
      formData.append(
        "locations[0][OtherThings]",
        plan.locations[0].OtherThings
      );

      console.log(formData.toString());

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

      const responseData = await response.json();
      if (responseData === "created") {
        setPlanList((prevPlans) => {
          handleSuccess("Plan created successfully");
          return [...prevPlans, plan];
        });
      }
      if (response.status !== 200) {
        throw new Error(responseData);
      }
    } catch (error) {
      handleError(error.message);
      console.error(error);
    }
  };
  const updatePlan = async (planData) => {
    try {
      const plan = {
        id: planData.id,
        planName: planData.planName,
        description: planData.description,
        locations: [
          {
            id: planData.locationId,
            name: planData.locationName,
            description: planData.locationDescription,
            maxCapacity: planData.maxCapacity,
            safetyInstructions: planData.safetyInstructions,
            OtherThings: planData.OtherThings,
          },
        ],
      };

      const formData = new URLSearchParams();
      formData.append("id", plan.id);
      formData.append("planName", plan.planName);
      formData.append("description", plan.description);
      formData.append("locations[0][id]", plan.locations[0].id);
      formData.append("locations[0][name]", plan.locations[0].name);
      formData.append(
        "locations[0][description]",
        plan.locations[0].description
      );
      formData.append(
        "locations[0][maxCapacity]",
        plan.locations[0].maxCapacity
      );
      formData.append(
        "locations[0][safetyInstructions]",
        plan.locations[0].safetyInstructions
      );
      formData.append(
        "locations[0][OtherThings]",
        plan.locations[0].OtherThings
      );

      const response = await fetch(
        `https://plan-service.onrender.com/api/plans/${plan.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData,
        }
      );
      const responseData = await response.json();
      if (response.status !== 200) {
        throw new Error(responseData);
      }
      const updatedPlans = Plans.map((p) => (p.id === plan.id ? plan : p));
      setPlanList(updatedPlans);
      handleSuccess(responseData);
    } catch (error) {
      handleError(error.message);
      console.error(error);
    }
  };

  return (
    <>
      {error && (
        <Alert className="Alert" severity="error">
          {error}
        </Alert>
      )}
      {success && (
        <Alert className="Alert" severity="success">
          {success}
        </Alert>
      )}
      <Header getAllPlans={getAllPlans} />
      <Container>
        <PlanForm createPlan={createPlan} />
        <SearchPlan SearchById={SearchById} />
        <Container>
          <PlanList
            plans={Plans}
            deletePlan={deletePlan}
            updatePlan={updatePlan}
          />
        </Container>
      </Container>
    </>
  );
};
export default App;

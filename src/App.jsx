import Header from "./components/Header";
import PlanList from "./components/PlanList";
import PlanForm from "./components/PlanForm";
import SearchPlan from "./components/SearchPlan";
import Container from "./components/Container";
import Alert from "@mui/material/Alert";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import {
  getData,
  searchData,
  deleteData,
  createData,
  updateData,
} from "./service/planService";

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
      const data = await getData();
      setPlanList(data);
      setLoading(false);
    } catch (error) {
      handleError(error.message);
      setLoading(false);
    }
  };

  const SearchById = async (id) => {
    try {
      const data = await searchData(id);
      setPlanList(data);
    } catch (error) {
      handleError(error.message);
    }
  };

  const deletePlan = async (id) => {
    try {
      const msg = await deleteData(id);
      handleSuccess(msg);
      getAllPlans();
    } catch (error) {
      handleError(error.message);
    }
  };

  const createPlan = async (planData) => {
    try {
      const maxId = Plans.reduce(
        (max, plan) => (plan.id > max ? plan.id : max),
        0
      );
      planData.id = maxId + 1;
      await createData(planData);
      handleSuccess("Plan created successfully");
      getAllPlans();
    } catch (error) {
      handleError(error.message);
    }
  };

  const updatePlan = async (planData) => {
    try {
      const msg = await updateData(planData);
      handleSuccess(msg);
      getAllPlans();
    } catch (error) {
      handleError(error.message);
    }
  };

  return (
    <>
      {loading && (
        <Container>
          <Loading></Loading>
        </Container>
      )}
      {!loading && (
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
      )}
    </>
  );
};
export default App;

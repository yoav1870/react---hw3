const getData = async () => {
  try {
    const response = await fetch("https://plan-service.onrender.com/api/plans");
    const responseData = await response.json();
    if (response.status === 200) {
      return responseData;
    } else {
      throw new Error(responseData);
    }
  } catch (error) {
    throw new Error(
      "There was a problem with the server to load the data. Please try again later."
    );
  }
};

const searchData = async (id) => {
  try {
    const response = await fetch(
      `https://plan-service.onrender.com/api/plans/${id}`
    );
    const responseData = await response.json();
    if (response.status === 200) {
      return responseData;
    } else {
      throw new Error(responseData);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteData = async (id) => {
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
      return responseData;
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

const createData = async (planData) => {
  try {
    if (planData.OtherThings === "") {
      planData.OtherThings = "No other things";
    }
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
    formData.append("locations[0][description]", plan.locations[0].description);
    formData.append("locations[0][maxCapacity]", plan.locations[0].maxCapacity);
    formData.append(
      "locations[0][safetyInstructions]",
      plan.locations[0].safetyInstructions
    );
    formData.append("locations[0][OtherThings]", plan.locations[0].OtherThings);

    const response = await fetch(
      "https://plan-service.onrender.com/api/plans",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      }
    );
    const responseData = await response.json();
    if (response.status !== 201) {
      throw new Error(responseData);
    }
    return responseData;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateData = async (planData) => {
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
    formData.append("locations[0][description]", plan.locations[0].description);
    formData.append("locations[0][maxCapacity]", plan.locations[0].maxCapacity);
    formData.append(
      "locations[0][safetyInstructions]",
      plan.locations[0].safetyInstructions
    );
    formData.append("locations[0][OtherThings]", plan.locations[0].OtherThings);

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
    return responseData;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getData, searchData, deleteData, createData, updateData };

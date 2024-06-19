import axios from "axios";
// src/api.js or wherever configure Axios
const baseUrl =
  import.meta.env.VITE_APP_ENV === "production"
    ? "/api"
    : "http://localhost:4000/api";

// Function to register a new user by making a POST request to the server
const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      `${baseUrl}/users/register-user`,
      userData
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// Function to log in a user by making a POST request to the server
const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${baseUrl}/users/login-user`, userData);
    return response.data;
  } catch (error) {
    //return { success: false, error: error.response.data }; // Return an object with a success field set to false and the error data
    return error.response.data;
  }
};

const loginAdmin = async (userData) => {
  try {
    const response = await axios.post(`${baseUrl}/admin/login-admin`, userData);
    return response.data;
  } catch (error) {
    // Check if error.response exists before trying to access .data
    if (error.response) {
      return error.response.data;
    } else {
      // Handle cases where error.response is undefined
      console.error("Error in loginAdmin:", error);
      return { success: false, error: "An unexpected error occurred" };
    }
  }
};

// Function to validate a user's token by making a GET request to the server
const validateUser = async (userToken) => {
  try {
    const response = await axios.get(`${baseUrl}/users/validate`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    const data = response.data;
    // console.log("from validateUser", data);
    return data;
    // return response.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

const uploadTest = async (testData) => {
  try {
    // Axios will automatically set the Content-Type to multipart/form-data
    // and include the boundary parameter which is necessary for file uploads
    const response = await axios.post(`${baseUrl}/tests/upload-test`, testData);
    return response.data; // Return the data directly if successful
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code that falls out of the range of 2xx
      throw new Error(error.response.data.message || "Error uploading file.");
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error("No response received from server. Please try again.");
    } else {
      // Something happened in setting up the request that triggered an Error
      throw error; // Re-throw the error to be caught by the calling function
    }
  }
};

const getTestBySub = async (sub) => {
  try {
    const response = await axios.get(`${baseUrl}/tests/get-test-topic/${sub}`);
    return response.data;
  } catch (error) {
    //console.log(error);
    return error.response.data;
  }
};

const getTestKey = async (keyID) => {
  try {
    const response = await axios.get(`${baseUrl}/testKey/get-key-id/${keyID}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

const addCompletedTest = async (userID, testScoreData) => {
  try {
    const response = await axios.put(
      `${baseUrl}/test-complete/add-completed-test/${userID}`,
      testScoreData
    );
    return response.data;
    console.log("Test successfully added:", response.data);
  } catch (error) {
    console.error("Error adding test:", error);
  }
};

const getCompletedTest = async (id) => {
  try {
    const response = await axios.get(
      `${baseUrl}/test-complete/get-completed-test/${id}`
    );
    return response;
  } catch (error) {
    console.error("Error getting test:", error);
  }
};

const getAllTests = async () => {
  try {
    const response = await axios.get(`${baseUrl}/admin/get-all-tests`);
    return response.data; // Return only the data part of the response
  } catch (error) {
    console.error("Error retrieving tests:", error);
    return { error: "Error retrieving tests" }; // Return an error object
  }
};

const getAllUsers = async () => {
  try {
    const response = await axios.get(`${baseUrl}/admin/get-all-users`);
    return response.data; // Return only the data part of the response
  } catch (error) {
    console.error("Error retrieving users:", error);
    return { error: "Error retrieving users" }; // Return an error object
  }
};

const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(
      `${baseUrl}/admin/delete-user/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting users:", error);
    return { error: "Error deleting users" }; // Return an error object
  }
};

const deleteTest = async (testId) => {
  try {
    const response = await axios.delete(
      `${baseUrl}/admin/delete-test/${testId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting test:", error);
    return { error: "Error deleting test" }; // Return an error object
  }
};

const registerAdmin = async (adminData) => {
  try {
    const response = await axios.post(
      `${baseUrl}/admin/register-admin`,
      adminData
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const editTest = async (testId, testData) => {
  try {
    const response = await axios.put(
      `${baseUrl}/admin/edit-test/${testId}`,
      testData
    );
    return response.data;
  } catch (error) {
    // Check if error.response exists before trying to access .data
    if (error.response) {
      return error.response.data;
    } else {
      // Handle cases where error.response is undefined
      console.error("Error in editTest:", error);
      return { success: false, error: "An unexpected error occurred" };
    }
  }
};

const getTestByGradeAndSubject = async (grade, subject) => {
  try {
    const response = await axios.get(`${baseUrl}/admin/getTestByGradSub/`, {
      params: {
        grade: grade,
        subject: subject,
      },
    });
    return response.data; // Return only the data part of the response
  } catch (error) {
    console.error("Error retrieving tests:", error);
    return { error: "Error retrieving tests" }; // Return an error object
  }
};

const updateUser = async (userId, userData) => {
  try {
    const response = await axios.put(
      `${baseUrl}/users/update-user/${userId}`,
      userData
    );
    return response.data;
  } catch (error) {
    // Check if error.response exists before trying to access .data
    if (error.response) {
      return error.response.data;
    } else {
      // Handle cases where error.response is undefined
      console.error("Error in updating user:", error);
      return { success: false, error: "An unexpected error occurred" };
    }
  }
};

const deleteCompletedTest = async (userId, testId) => {
  try {
    const response = await axios.delete(
      `${baseUrl}/test-complete/delete-completed-test/${userId}/${testId}`
    );
    return response.data; // Return the response data
  } catch (error) {
    // Handle errors
    if (error.response) {
      // If the error has a response (like a server-side error)
      console.error("Error in deleteCompletedTest:", error.response.data);
      return error.response.data;
    } else if (error.request) {
      // The request was made but no response was received
      console.error(
        "No response received in deleteCompletedTest:",
        error.request
      );
      return { success: false, error: "No response from server" };
    } else {
      // Something happened in setting up the request
      console.error("Error setting up delete request:", error);
      return { success: false, error: "Error setting up request" };
    }
  }
};

export {
  registerUser,
  loginUser,
  validateUser,
  uploadTest,
  getTestBySub,
  getTestKey,
  addCompletedTest,
  getCompletedTest,
  loginAdmin,
  getAllTests,
  getAllUsers,
  deleteUser,
  deleteTest,
  registerAdmin,
  editTest,
  getTestByGradeAndSubject,
  updateUser,
  deleteCompletedTest,
};

import axios from "axios";

export const getOrdersAll = async (user) => {
  const response = await axios
    .get("https://backendyogy.onrender.com/api/v1/orders/all", {
      headers: {
        Authorization: `Bearer ${user.access_token}`,
      },
    })
    .then(({ data }) => {
      let res = data;
      return res;
    })
    .catch(function (error) {
      console.log(error);
    });
  return response;
};

export const getCurrentMember = async (user) => {
  const response = await axios
    .get("https://backendyogy.onrender.com/api/v1/user/", {
      headers: {
        Authorization: `Bearer ${user.access_token}`,
      },
    })
    .then(({ data }) => {
      const res = data;
      return res;
    })
    .catch(function (error) {
      console.log(error);
    });
  return response;
};

export const getSortedOrders = async (query, user) => {
  const response = await axios
    .get(
      `https://backendyogy.onrender.com/api/v1/orders/sorted?mode=${query}`,
      {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
      }
    )
    .then(({ data }) => {
      const res = data;
      return res;
    })
    .catch(function (error) {
      console.log(error);
    });
  return response;
};

export const getOrderById = async (user, id) => {
  const response = await axios
    .get(`https://backendyogy.onrender.com/api/v1/orders/${id}`, {
      headers: {
        Authorization: `Bearer ${user.access_token}`,
      },
    })
    .then(({ data }) => {
      let res = data;
      return res;
    })
    .catch(function (error) {
      console.log(error);
    });
  return response;
};

export const getProjectsAll = async (user) => {
  const response = await axios
    .get("https://backendyogy.onrender.com/api/v1/projects/get/all", {
      headers: {
        Authorization: `Bearer ${user.access_token}`,
      },
    })
    .then(({ data }) => {
      const res = data;
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};

export const getProjectById = async (user, id) => {
  const response = await axios
    .get(`https://backendyogy.onrender.com/api/v1/projects/get/${id}`, {
      headers: {
        Authorization: `Bearer ${user.access_token}`,
      },
    })
    .then(({ data }) => {
      let res = data;
      return res;
    })
    .catch(function (error) {
      console.log(error);
    });
  return response;
};

import axios, { AxiosResponse } from "axios";

const baseUrl = "http://localhost:8081/questions";
export const getQuestions = async () => {
  try {
    const res: AxiosResponse = await axios.get(baseUrl);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
    return "error";
  }
};

export const addQuestions = async (question: string) => {
  try {
    const res: AxiosResponse = await axios.post(baseUrl, { question });
    return res.data;
  } catch (error) {
    console.log(error);
    return "error";
  }
};

export const deleteQuestions = async () => {
  try {
    const res: AxiosResponse = await axios.delete(baseUrl);
    return res.data;
  } catch (error) {
    console.log(error);
    return "error";
  }
};

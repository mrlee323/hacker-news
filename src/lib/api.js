import axios from 'axios';

export const getItem = (id) =>
  axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);

export const getUser = (id) =>
  axios.get(`https://hacker-news.firebaseio.com/v0/user/${id}.json`);

export const getPost = () =>
  axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json`);

export const getNew = () =>
  axios.get(`https://hacker-news.firebaseio.com/v0/newstories.json`);

export const getAsk = () =>
  axios.get(`https://hacker-news.firebaseio.com/v0/askstories.json`);

export const getShow = () =>
  axios.get(`https://hacker-news.firebaseio.com/v0/showstories.json`);

export const getJob = () =>
  axios.get(`https://hacker-news.firebaseio.com/v0/jobstories.json`);

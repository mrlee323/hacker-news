const Time = () => {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();

  return [hour, min];
};

export const AgoHour = (time) => {
  const today = parseInt(Date.now() / 1000);
  const date = Math.round((today - time) / (60 * 60));
  return date;
};

export const AgoMin = (time) => {
  const today = parseInt(Date.now() / 1000);
  const date = Math.round((today - time) / 60);
  return date;
};

export const AgoDay = (time) => {
  const today = parseInt(Date.now() / 1000);
  const date = Math.round((today - time) / (60 * 60 * 24));
  return date;
};

export default Time;

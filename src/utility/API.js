const APIKEY = process.env.REACT_APP_SERVER_KEY;
// const APIKEY = "?api_key=aia-makhruka";
// const APIKEY = process.env.REACT_APP_SERVER_KEY || "?api_key=aia-makhruka";
// const { REACT_APP_SERVER_URL: serverUrl } = process.env;

const APIURL = process.env.REACT_APP_SERVER_URL;
// console.log(APIURL)

// const APIURL =process.env.REACT_APP_SERVER_URL || "https://project-2-api.herokuapp.com";
// const APIURL = "https://project-2-api.herokuapp.com";

export const GetVideosURL = APIURL + "/videos" + APIKEY;

export const GetVideoIdURL = (id) => {
  return `${APIURL}/videos/${id}${APIKEY}`;
};

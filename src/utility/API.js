
const APIKEY= "?api_key=aia-makhruka"
const APIURL= "https://project-2-api.herokuapp.com"

export const GetVideosURL= APIURL +"/videos"+ APIKEY ;

export const GetVideoIdURL= (id)=>  {return`${APIURL}/videos/${id}${APIKEY}`} ;
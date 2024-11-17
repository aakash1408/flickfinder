export const LOGO = "https://r2.erweima.ai/i/2YQT53cZR2qH6NH4lG8CBg.png"
export const BACKGROUND_IMAGE = 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdmllJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D'

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
  };

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY
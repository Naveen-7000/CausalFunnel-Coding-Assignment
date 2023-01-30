export const data = async()=>{
   return await fetch("https://api.github.com/repos/facebook/react/issues") .then((response) => response.json());
}
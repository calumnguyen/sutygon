import React ,{useEffect}from 'react'
import loadjs from 'loadjs';

function PageLoader() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'assets/js/main.js';
    script.type = 'type/javascript';
    script.async = true;
    document.body.appendChild(script);
  });
 
  return (

    <div className="page-loader" id="page-loader">
      <img src="assets/img/loader.gif" width="30%" id="loaderSizing" alt={"Loader"}/>
    </div>

  )
}


export default PageLoader
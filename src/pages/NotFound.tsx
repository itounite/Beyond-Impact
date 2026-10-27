import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const TARGET = "https://beyondimpact.vc/about";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("404 redirect → beyondimpact.vc/about for path:", location.pathname);
    window.location.replace(TARGET);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Beyond Impact — About</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={TARGET} />
        <meta httpEquiv="refresh" content={`0; url=${TARGET}`} />
      </Helmet>
      <div style={{ padding: 40, fontFamily: "system-ui" }}>
        Redirecting to <a href={TARGET}>beyondimpact.vc/about</a>…
      </div>
    </>
  );
};

export default NotFound;

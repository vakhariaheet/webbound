import Script from "next/script";
import MicrosoftClarity from "./Clarity";

const Metrics = () => {
    return ( 
        <>
            <MicrosoftClarity />
            <Script defer src="https://cloud.umami.is/script.js" data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}></Script>
        </>
     );
}
 
export default Metrics;
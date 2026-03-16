/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react
  
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function Calendar() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"corte-clasico"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <button className="bg-gray-300" data-cal-namespace="corte-clasico"
    data-cal-link="multipurpose-ki7ln0/corte-clasico"
    
    data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
  >Abrir modal</button>;
};
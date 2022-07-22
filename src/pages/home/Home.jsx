import Chart from "../../componenets/chart/Chart";
import {userData} from "../../dummyData";
import FeaturedInfo from "../../componenets/featuredInfo/FeaturedInfo";
import "./home.css"
import WidgetSm from "../../componenets/widgetSm/wWdgetSm";
import WidgetLg from "../../componenets/widgetLg/WidgetLg";
import { useEffect, useState } from "react";
import { useMemo } from "react";
import { userRequest } from "../../requestMethods";

export default function Home() {
  const [userStats, setUserStats] = useState();

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(()=>{

    const getStats = async ()=>{

       try{

        const res  = await userRequest.get("/user/stats");
        res.data.map((item)=>
          setUserStats((prev)=>[
            ...prev,
            {name:MONTHS[item._id-1], "Active User" : item.total},
          ])
        );

       } catch{}

    }

          getStats();
  },[MONTHS])



    return (
      <div className="home">
        <FeaturedInfo />
        <Chart data={userStats} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">
          <WidgetSm/>
          <WidgetLg/>
        </div>
      </div>
    );
  }

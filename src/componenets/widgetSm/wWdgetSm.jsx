import "./widgetSm.css";

import VisibilityIcon from '@material-ui/icons/Visibility';
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function WidgetSm() {

  const [users, setUsers] = useState([])

  useEffect(()=>{

   
    const getUsers = async ()=>{
       try{
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
       } catch{}
     
    } ;
     getUsers()
  },[])

      return (
      <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
        {users.map((user)=>(

          <li className="widgetSmListItem" key={user._id}>
            <img
              src={user.img || "https://img.icons8.com/fluency/344/user-male-circle.png"}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
         
        </ul>
      </div>
    );
  }
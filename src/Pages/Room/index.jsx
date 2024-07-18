import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage =()=>{

    const { roomId }= useParams()


    const myMeeting = async(element)=>{ const appID =1013567594 ;
        const serverSecret = "40fae0b9abd0315cb6854e5efc76e88b";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,  Date.now().toString() , "Debkanta Biswas");
        const zc = ZegoUIKitPrebuilt.create(kitToken)
        zc.joinRoom({
            container : element, 
            sharedLinks : [
                {
                    name :'Copy Link',
                    url : `http://localhost:3000/room/${roomId}`
                }
            ],
            scenario: {
                mode : ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: false,
        })

    }
   


    return(
        <div>
            <div ref={myMeeting}/>
        </div>
    )
}




export default RoomPage
import React from 'react'
import BtnUpDownJoint from "./BtnUpDownJoint"

function JointController(props){



    return (
        <>
            <div className="flex justify-center items-center  max-md:my-6">
                <div className="grid grid-cols-3 ">
                    <BtnUpDownJoint buttonText="-"
                                    name={props.name}
                                    joint_1={props.joint_1_minus}
                                    joint_2={props.joint_2_minus}
                                    joint_3={props.joint_3_minus}
                                    joint_4={props.joint_4_minus}
                                    joint_5={props.joint_5_minus}
                                    joint_6={props.joint_6_minus}
                                    hand={props.hand_minus}
                                    joint_abs={props.joint_abs}
                                    positionJoints={props.positionJoints}
                                    setPositionJoints={props.setPositionJoints}
                                    stepJoint={props.stepJoint}
                                    stepHand={props.stepHand}
                                    isFetchingData={props.isFetchingData}
                                    setIsFetchingData={props.setIsFetchingData}
                     />
                    <div className="text-center font-bold place-self-center">
                        {props.name}
                    </div>
                    <BtnUpDownJoint buttonText="+"
                                    name={props.name}
                                    joint_1={props.joint_1_plus}
                                    joint_2={props.joint_2_plus}
                                    joint_3={props.joint_3_plus}
                                    joint_4={props.joint_4_plus}
                                    joint_5={props.joint_5_plus}
                                    joint_6={props.joint_6_plus}
                                    hand={props.hand_plus}
                                    joint_abs={props.joint_abs}
                                    positionJoints={props.positionJoints}
                                    setPositionJoints={props.setPositionJoints}
                                    stepJoint={props.stepJoint}
                                    stepHand={props.stepHand}
                                    isFetchingData={props.isFetchingData}
                                    setIsFetchingData={props.setIsFetchingData}
                    />
                </div>
            </div>
        </>
    )
}

export default JointController

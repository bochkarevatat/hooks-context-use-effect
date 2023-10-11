/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";


const Details = ( detail ) => {
 
	return (
		<div className="details">
       
			<img className="avatar" src={detail.avatar} alt="avatar" />
			<div className="name">{detail.name}</div>
			<div className="city">City: {detail.details.city}</div>
			<div className="company">Company: {detail.details.company}</div>
			<div className="position">Position: {detail.details.position}</div>
		</div>
	)
}

export default Details;
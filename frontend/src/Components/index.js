import React from 'react'
import {Link} from 'react-router-dom'
export default function HomePage () {
    return (
	<div>
		<Link to='/mainpage'><div>mainpage</div></Link>
		<Link to='/Dashboard'><div>Dashboard</div></Link>
		<Link to='/transictions'><div>transictions</div></Link>
		<Link to='/Awards'><div>Awards</div></Link>
		<Link to='/settings'><div>settings</div></Link>
	</div>
	)
}
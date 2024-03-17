import React from 'react'
import './settings.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Settings () {
	return (
		<div className='settings_settings'>
			<div className='Rectangle230'/>
			<Link to='/awards'>
				<span className='_'>الشارات</span>
			</Link>
			<div className='AwardFill'>
				<img className='Vector' src = {ImgAsset.settings_Vector} />
				<img className='Vector_1' src = {ImgAsset.settings_Vector_1} />
			</div>
			<div className='Group25'>
				<div className='settingssolid1'>
					<img className='Vector_2' src = {ImgAsset.settings_Vector_2} />
				</div>
				<div className='transfer1'>
					<div className='_17transfer'>
						<div className='Glyph'>
							<img className='Vector_3' src = {ImgAsset.settings_Vector_3} />
							<img className='Vector_4' src = {ImgAsset.settings_Vector_4} />
							<img className='Vector_5' src = {ImgAsset.settings_Vector_5} />
							<img className='Vector_6' src = {ImgAsset.settings_Vector_6} />
							<img className='Vector_7' src = {ImgAsset.settings_Vector_7} />
						</div>
					</div>
				</div>
				<Link to='/transictions'>
					<span className='__1'>العمليات</span>
				</Link>
				<span className='__2'>الاعدادات</span>
				<div className='Group24'>
					<div className='home2'>
						<img className='Vector_8' src = {ImgAsset.settings_Vector_8} />
					</div>
					<Link to='/dashboard'>
						<span className='__3'>لوحة المعلومات</span>
					</Link>
					<div className='Rectangle17'/>
				</div>
			</div>
			<div className='Rectangle231'/>
			<img className='whitelogo2' src = {ImgAsset.Awards_whitelogo2} />
			<span className='__4'>مدينتي</span>
			<span className='__5'>لوحة المعلومات</span>
			<span className='__6'>أهلا بعودتك  براء الشغري</span>
			<span className='__7'>أعد التدوير</span>
			<span className='__8'>اطلب شاحنة تدوير</span>
			<img className='cloud' src = {ImgAsset.Dashboard_cloud} />
			<img className='cloud_1' src = {ImgAsset.Dashboard_cloud} />
			<Link to='/mainpage'>
				<div className='PersonCircle'>
					<img className='Vector_9' src = {ImgAsset.settings_Vector_9} />
					<img className='Vector_10' src = {ImgAsset.settings_Vector_10} />
				</div>
			</Link>
			<div className='SidebarMenu'>
				<div className='Rectangle55'/>
			</div>
			<div className='Rectangle174'/>
			<div className='Group368'>
				<div className='Rectangle198'/>
				<div className='Group206'>
					<div className='MaskGroup'>
						<div className='Ellipse28'/>
						<img className='image1' src = {ImgAsset.settings_image1} />
						<img className='pexelschristinamorillo11816901' src = {ImgAsset.settings_pexelschristinamorillo11816901} />
					</div>
					<div className='Group194'>
						<div className='Ellipse29'/>
						<div className='pencilalt1'>
							<img className='Vector_11' src = {ImgAsset.settings_Vector_11} />
						</div>
					</div>
				</div>
				<div className='Group309'>
					<span className='EditProfile'>Edit Profile</span>
					<div className='Rectangle199'/>
					<div className='Rectangle201'/>
				</div>
				<div className='Group196'>
					<span className='YourName'>Your Name</span>
					<div className='Group195'>
						<div className='Rectangle151'/>
						<span className='CharleneReed'>Charlene Reed </span>
					</div>
				</div>
				<div className='Group208'>
					<span className='Email'>Email</span>
					<div className='Group195_1'>
						<div className='Rectangle151_1'/>
						<span className='charlenereedgmailcom'>charlenereed@gmail.com </span>
					</div>
				</div>
				<div className='Group207'>
					<span className='UserName'>User Name</span>
					<div className='Group195_2'>
						<div className='Rectangle151_2'/>
						<span className='CharleneReed_1'>Charlene Reed </span>
					</div>
				</div>
				<div className='Group209'>
					<div className='Group195_3'>
						<div className='Rectangle151_3'/>
						<span className='__9'>**********</span>
					</div>
				</div>
				<div className='Group210'>
					<span className='PresentAddress'>Present Address</span>
					<div className='Group195_4'>
						<div className='Rectangle151_4'/>
						<span className='SanJoseCaliforniaUSA'>San Jose, California, USA</span>
					</div>
				</div>
				<div className='Group211'>
					<span className='City'>City</span>
					<div className='Group195_5'>
						<div className='Rectangle151_5'/>
						<span className='SanJose'>San Jose</span>
					</div>
				</div>
				<div className='Group213'>
					<span className='Country'>Country</span>
					<div className='Group195_6'>
						<div className='Rectangle151_6'/>
						<span className='USA'>USA</span>
					</div>
				</div>
				<div className='Group212'>
					<span className='PermanentAddress'>Permanent Address</span>
					<div className='Group195_7'>
						<div className='Rectangle151_7'/>
						<span className='SanJoseCaliforniaUSA_1'>San Jose, California, USA</span>
					</div>
				</div>
				<div className='Group214'>
					<span className='PostalCode'>Postal Code</span>
					<div className='Group195_8'>
						<div className='Rectangle151_8'/>
						<span className='_45962'>45962</span>
					</div>
				</div>
				<div className='Group202'>
					<span className='DateofBirth'>Date of Birth</span>
					<div className='Rectangle151_9'/>
					<span className='_25January1990'>25 January 1990</span>
					<img className='Vector4' src = {ImgAsset.settings_Vector4} />
				</div>
				<div className='Group268'>
					<div className='Rectangle204'/>
					<span className='Save'>Save</span>
				</div>
			</div>
		</div>
	)
}
import React from 'react'
import './transictions.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Transictions () {
	return (
		<div className='transictions_transictions'>
			<div className='Rectangle230'/>
			<Link to='/awards'>
				<span className='_'>الشارات</span>
			</Link>
			<div className='AwardFill'>
				<img className='Vector' src = {ImgAsset.transictions_Vector} />
				<img className='Vector_1' src = {ImgAsset.transictions_Vector_1} />
			</div>
			<div className='Rectangle231'/>
			<img className='whitelogo2' src = {ImgAsset.Awards_whitelogo2} />
			<span className='__1'>مدينتي</span>
			<span className='__2'>لوحة المعلومات</span>
			<span className='__3'>أهلا بعودتك  براء الشغري</span>
			<span className='__4'>أعد التدوير</span>
			<span className='__5'>اطلب شاحنة تدوير</span>
			<Link to='/mainpage'>
				<div className='PersonCircle'>
					<img className='Vector_2' src = {ImgAsset.transictions_Vector_2} />
					<img className='Vector_3' src = {ImgAsset.transictions_Vector_3} />
				</div>
			</Link>
			<div className='SidebarMenu'>
				<div className='Rectangle55'/>
			</div>
			<span className='__6'>آخر العمليات</span>
			<span className='AllTransactions'>All Transactions</span>
			<span className='Income'>Income</span>
			<span className='Expense'>Expense</span>
			<div className='Rectangle202'/>
			<div className='Rectangle203'/>
			<div className='Group473'>
				<div className='Rectangle157'/>
				<div className='Group100'>
					<span className='Description'>Description</span>
					<span className='Date'>Date</span>
					<span className='TransactionID'>Transaction ID</span>
					<span className='Amount'>Amount</span>
				</div>
				<div className='Group73'>
					<div className='Ellipse21'/>
					<img className='Arrow1' src = {ImgAsset.transictions_Arrow1} />
				</div>
				<span className='__7'>شراء من المتجر</span>
				<span className='_12548796'>#12548796</span>
				<span className='_28Jan1230AM'>28 Jan, 12.30 AM</span>
				<span className='_2500'>-2,500</span>
				<span className='_12548796_1'>#12548796</span>
				<div className='Group73_1'>
					<div className='Ellipse21_1'/>
					<img className='Arrow1_1' src = {ImgAsset.transictions_Arrow1_1} />
				</div>
				<span className='__8'>شاحنة إعادة التدوير</span>
				<span className='_25Jan1040PM'>25 Jan, 10.40 PM</span>
				<span className='_750'>+750</span>
				<span className='_12548796_2'>#12548796</span>
				<div className='Group73_2'>
					<div className='Ellipse21_2'/>
					<img className='Arrow1_2' src = {ImgAsset.transictions_Arrow1_2} />
				</div>
				<span className='__9'>شراء من المتجر</span>
				<span className='_20Jan1040PM'>20 Jan, 10.40 PM</span>
				<span className='_150'>-150</span>
				<span className='_12548796_3'>#12548796</span>
				<div className='Group73_3'>
					<div className='Ellipse21_3'/>
					<img className='Arrow1_3' src = {ImgAsset.transictions_Arrow1_3} />
				</div>
				<span className='__10'>شراء من المتجر</span>
				<span className='_15Jan0329PM'>15 Jan, 03.29 PM</span>
				<span className='_1050'>-1050</span>
				<span className='_12548796_4'>#12548796</span>
				<div className='Group73_4'>
					<div className='Ellipse21_4'/>
					<img className='Arrow1_4' src = {ImgAsset.transictions_Arrow1_4} />
				</div>
				<span className='__11'>خزانة إعادة التدوير</span>
				<span className='_14Jan1040PM'>14 Jan, 10.40 PM</span>
				<span className='_840'>+840</span>
				<div className='Rectangle224'/>
				<div className='Rectangle161'/>
				<div className='Rectangle225'/>
				<div className='Rectangle226'/>
				<div className='Rectangle227'/>
			</div>
			<div className='MyCards'>
				<div className='Rectangle22'/>
				<span className='__12'>نقاطي :</span>
				<span className='_5756'>5,756</span>
				<img className='Asset11' src = {ImgAsset.transictions_Asset11} />
			</div>
			<img className='cloud' src = {ImgAsset.Dashboard_cloud} />
			<img className='cloud_1' src = {ImgAsset.Dashboard_cloud} />
			<img className='cloud_2' src = {ImgAsset.Dashboard_cloud} />
			<div className='Group25'>
				<div className='settingssolid1'>
					<img className='Vector_4' src = {ImgAsset.transictions_Vector_4} />
				</div>
				<div className='transfer1'>
					<div className='_17transfer'>
						<div className='Glyph'>
							<img className='Vector_5' src = {ImgAsset.transictions_Vector_5} />
							<img className='Vector_6' src = {ImgAsset.transictions_Vector_6} />
							<img className='Vector_7' src = {ImgAsset.transictions_Vector_7} />
							<img className='Vector_8' src = {ImgAsset.transictions_Vector_8} />
							<img className='Vector_9' src = {ImgAsset.transictions_Vector_9} />
						</div>
					</div>
				</div>
				<span className='__13'>العمليات</span>
				<Link to='/settings'>
					<span className='__14'>الاعدادات</span>
				</Link>
				<div className='Group24'>
					<div className='home2'>
						<img className='Vector_10' src = {ImgAsset.transictions_Vector_10} />
					</div>
					<Link to='/dashboard'>
						<span className='__15'>لوحة المعلومات</span>
					</Link>
					<div className='Rectangle17'/>
				</div>
			</div>
		</div>
	)
}
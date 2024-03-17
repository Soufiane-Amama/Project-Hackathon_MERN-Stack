import React from 'react'
import './mainpage.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Mainpage () {
	return (
		<div className='mainpage_mainpage'>
			<img className='whitelogo1' src = {ImgAsset.mainpage_whitelogo1} />
			<img className='_50974871' src = {ImgAsset.mainpage__50974871} />
			<span className='_'>مدينتي</span>
			<span className='__1'>كيف تكون سبب في نظافة مدينتك ؟</span>
			<span className='__2'>فوائد التطوع ؟</span>
			<span className='__3'>كن جزءًا من البيئة اليوم </span>
			<span className='__4'>كن متطوعًا معنا من خلال اعادة التدوير و المحافظة على ترتيب المواد القابلة للاستخدام مرة أخرى</span>
			<span className='__5'>مدينة جميلة وخالية من الأمراض <br/>مدينة مليئة بالسعادة <br/>عند جمعك للنقاط يمكنك الحصول على الكثير من الخصومات والهدايا المجانية !!</span>
			<span className='__6'>أعد التدوير</span>
			<span className='__7'>اطلب شاحنة تدوير</span>
			<div className='Rectangle2'/>
			<span className='__8'>قم باعادة تدوير بيئتك  وحافظ على جمال مدينتك </span>
			<div className='Rectangle3'/>
			<span className='DonthaveanaccountSignupfofree'>Don’t have an account? Sign up fo free!</span>
			<Link to='/dashboard'>
				<div className='SigninButton'>
					<div className='Rectangle4'/>
					<span className='Signin'>Sign in</span>
				</div>
			</Link>
			<div className='SigninButton_1'>
				<div className='Rectangle4_1'/>
				<span className='__9'>تطوع الآن !</span>
			</div>
			<div className='SigninButtonGoogle'>
				<div className='Rectangle4_2'/>
				<img className='freeicongoogle3002211' src = {ImgAsset.mainpage_freeicongoogle3002211} />
				<span className='SigninwithGoogle'>Sign in with Google</span>
			</div>
			<div className='EmailForm'>
				<div className='Rectangle3_1'/>
				<span className='Enteryouremail'>Enter your email</span>
				<span className='Email'>Email</span>
			</div>
			<div className='PasswordForm'>
				<div className='Rectangle3_2'/>
				<span className='__10'>**********</span>
			</div>
			<div className='RememberForgot'>
				<span className='Forgotpassword'>Forgot password</span>
				<span className='Rememberme'>Remember me</span>
				<div className='Rectangle4_3'/>
			</div>
			<div className='StarFill'>
				<img className='Vector' src = {ImgAsset.mainpage_Vector} />
			</div>
			<div className='StarFill_1'>
				<img className='Vector_1' src = {ImgAsset.mainpage_Vector_1} />
			</div>
			<img className='cloud' src = {ImgAsset.Dashboard_cloud} />
			<img className='cloud_1' src = {ImgAsset.Dashboard_cloud} />
		</div>
	)
}
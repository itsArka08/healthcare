import React from 'react'
import { Link } from 'react-router-dom'
import FeaturedDoctors from '../components/core/FeaturedDoctors'
import AllDepartment from '../components/core/AllDepartment'

const Home = () => {
	return (
		<div>
			<section class="banner">
				<div class="container">
					<div class="row">
						<div class="col-lg-6 col-md-12 col-xl-7">
							<div class="block">
								<div class="divider mb-3"></div>
								<span class="text-uppercase text-sm letter-spacing ">Total Health care solution</span>
								<h1 class="mb-3 mt-3">We care about your health</h1>

								<p class="mb-4 pr-5">Committed to success</p>
								{/* <img src="images/newlogo.png" alt="Banner Image"/> */}
								<div class="btn-container ">
									<Link to="/appoinmentform" class="btn btn-main">Make appoinment <i class="icofont-simple-right ml-2  "></i></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="features">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="feature-block d-lg-flex">
								<div class="feature-item mb-5 mb-lg-0">
									<div class="feature-icon mb-4">
										<i class="icofont-surgeon-alt"></i>
									</div>
									<span>24 Hours Service</span>
									<h4 class="mb-3">Online Appoinment</h4>
									<p class="mb-4">Get ALl time support for emergency.We have introduced the principle of family medicine.</p>
									<Link to="/appoinmentform" class="btn btn-main ">Make a appoinment</Link>
								</div>

								<div class="feature-item mb-5 mb-lg-0">
									<div class="feature-icon mb-4">
										<i class="icofont-ui-clock"></i>
									</div>
									<span>Timing schedule</span>
									<h4 class="mb-3">Working Hours</h4>
									<ul class="w-hours list-unstyled">
										<li class="d-flex justify-content-between">Sun - Wed : <span>8:00 - 17:00</span></li>
										<li class="d-flex justify-content-between">Thu - Fri : <span>9:00 - 17:00</span></li>
										<li class="d-flex justify-content-between">Sat - sun : <span>10:00 - 17:00</span></li>
									</ul>
								</div>

								<div class="feature-item mb-5 mb-lg-0">
									<div class="feature-icon mb-4">
										<i class="icofont-support"></i>
									</div>
									<span>Emegency Cases</span>
									<h4 class="mb-3">1-800-700-6200</h4>
									<p>Get ALl time support for emergency.We have introduced the principle of family medicine.Get Conneted with us for any urgency .</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


			<FeaturedDoctors />


			<AllDepartment />
		</div>
	)
}

export default Home

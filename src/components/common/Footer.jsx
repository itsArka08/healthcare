import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetAllDep } from '../../Redux/AllDepOnlySlice';
import { Link } from 'react-router-dom';

const Footer = () => {


	const dispatch = useDispatch();

	const { all_dep_data } = useSelector((state) => state?.AllDep);
	// console.log(all_dep_data);


	useEffect(() => {
		dispatch(GetAllDep());

	}, [dispatch]);



	return (
		<div>
			<footer class="footer section gray-bg">
				<div class="container">
					<div class="row">
						<div class="col-lg-4 mr-auto col-sm-6">
							<div class="widget mb-5 mb-lg-0">
								<div class="logo mb-4">
									<img src="/images/logo2.png" alt="" class="img-fluid" />
								</div>
								<p>Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad eos obcaecati tenetur veritatis eveniet distinctio possimus.</p>

								<ul class="list-inline footer-socials mt-4">
									<li class="list-inline-item">
										<a href="https://www.facebook.com" target='blank'><i class="icofont-facebook"></i></a>
									</li>
									<li class="list-inline-item">
										<a href="https://twitter.com"><i class="icofont-twitter"></i></a>
									</li>
									<li class="list-inline-item">
										<a href="https://www.pinterest.com"><i class="icofont-linkedin"></i></a>
									</li>
								</ul>
							</div>
						</div>

						<div class="col-lg-2 col-md-6 col-sm-6">
							<div class="widget mb-5 mb-lg-0">
								<h4 class="text-capitalize mb-3">Department</h4>
								<div class="divider mb-4"></div>

								<ul class="list-unstyled footer-menu lh-35">

									{all_dep_data?.data?.map((item, index) => {
										return (
											<>

												<li><Link to={`/all-doctors/${item?._id}`}>{item?.departmentName}</Link></li>

											</>
										);
									})}

								</ul>
							</div>
						</div>

						<div class="col-lg-2 col-md-6 col-sm-6">
							<div class="widget mb-5 mb-lg-0">
								<h4 class="text-capitalize mb-3">Support</h4>
								<div class="divider mb-4"></div>

								<ul class="list-unstyled footer-menu lh-35">
									<li><a href="#!">Terms & Conditions</a></li>
									<li><a href="#!">Privacy Policy</a></li>
									<li><a href="#!">Company Support </a></li>
									<li><a href="#!">FAQuestions</a></li>
									<li><a href="#!">Company Licence</a></li>
								</ul>
							</div>
						</div>

						<div class="col-lg-3 col-md-6 col-sm-6">
							<div class="widget widget-contact mb-5 mb-lg-0">
								<h4 class="text-capitalize mb-3">Get in Touch</h4>
								<div class="divider mb-4"></div>

								<div class="footer-contact-block mb-4">
									<div class="icon d-flex align-items-center">
										<i class="icofont-email mr-3"></i>
										<span class="h6 mb-0">Support Available for 24x7</span>
									</div>
									<h4 class="mt-2"><Link to="mailto:support008@email.com">Support@email.com</Link></h4>
								</div>

								<div class="footer-contact-block">
									<div class="icon d-flex align-items-center">
										<i class="icofont-support mr-3"></i>
										<span class="h6 mb-0">Mon to Fri : 08:30 - 18:00</span>
									</div>
									<h4 class="mt-2"><a href="tel:+23-345-67890">+7912457890</a></h4>
								</div>
							</div>
						</div>
					</div>

					<div class="footer-btm py-4 mt-5">
						<div class="row align-items-center justify-content-between">
							<div class="col-lg-6">
								<div class="copyright">
									Copyright &copy; 2024, Designed &amp; Developed by <Link to="https://www.instagram.com" target='blank'>Arka Chakraborty</Link>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="subscribe-form text-lg-right mt-5 mt-lg-0">
									<form action="#" class="subscribe">
										<input type="text" class="form-control" placeholder="arka@gmail.com" required />
										<button type="submit" class="btn btn-main-2 ">Subscribe</button>
									</form>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-lg-4">
								<a class="backtop scroll-top-to" href="#top">
									<i class="icofont-long-arrow-up"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer

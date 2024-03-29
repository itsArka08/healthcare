import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { logout } from "../../Redux/LoginSlice";
import { toast } from "react-toastify";



const Navbar = () => {

	const { Logouttoggle } = useSelector((state) => state?.userlogin)
	const name = localStorage.getItem("name");

	const navigate = useNavigate()
	const dispatch = useDispatch()


	const handleLogout = () => {
		window.location.reload();
		dispatch(logout());

		navigate("/login");
		toast("Logout Successful", {
			position: toast.POSITION.TOP_CENTER,
		});
	};




	return (
		<div>
			<header>
				
				<nav class="navbar navbar-expand-lg navigation" id="navbar">
					<div class="container">
						<Link class="navbar-brand" to="/">
							<img src="/images/logo2.png" alt="" class="img-fluid" style={{ height: '90px' }} />
						</Link>

						<button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain"
							aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
							<span class="icofont-navigation-menu"></span>
						</button>

						<div class="collapse navbar-collapse justify-content-end" id="navbarmain">
							<ul class="navbar-nav">
								<li class="nav-item"><Link class="nav-link" to='/'>Home</Link></li>
								<li class="nav-item"><Link class="nav-link" to='/about'>About</Link></li>
								<li class="nav-item"><Link class="nav-link" to='/services'>Services</Link></li>
								<li class="nav-item"><Link class="nav-link" to='/departments'>Department</Link></li>
								<li class="nav-item"><Link class="nav-link" to='/doctor'>Doctors</Link></li>
								<li class="nav-item"><Link class="nav-link" to="/blog">Blog</Link></li>
								<li class="nav-item"><Link class="nav-link" to="/contact">Contact</Link></li>

								{Logouttoggle ? <>
									<li className="nav-item active">
										<Link className="nav-link" ><strong>{name}</strong></Link>
									</li>

									<li className="nav-item">
										<Link className="nav-link" to={'/dashboard'} >Dashboard</Link>
									</li>

									<li className="nav-item">
										<Link className="nav-link" to={'/login'} onClick={handleLogout} >Logout</Link>
									</li>
								</>
									: <>
										<li className="nav-item active">
											<Link className="nav-link" to={'/login'} >Login</Link>
										</li>
									</>}
							</ul>
						</div>
					</div>
				</nav>


			</header>
		</div>
	)
}

export default Navbar

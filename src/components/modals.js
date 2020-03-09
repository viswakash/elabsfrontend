import React from 'react';
import { Link } from 'react-router-dom';
import './modals.css';
import network from '../documents/networking.pdf';
import java from '../documents/java.pdf';
import iot from '../documents/iot.pdf';
import android from '../documents/android.pdf';
import embedded from '../documents/embedded.pdf';
import ar from '../documents/ar.pdf';
import ml from '../documents/ml.pdf';
import web from '../documents/web.pdf';

function modals() {
  return (
    // <div>
    //   <div className='container-fluid'>
     
    //     <div className='row'>
    //       <div className='col-xl-3 col-md-3 col-sm-6 col-6 text-center course-box'>
    //         <h4>
    //           <a href={ar} target='_blank'>
    //             AR / VR
    //           </a>
    //         </h4>
    //       </div>
    //       <div className='col-xl-3 col-md-3 col-sm-6 col-6 text-center course-box'>
    //         <h4>
    //           <a href={web} target='_blank'>
    //             WEB TECHNOLOGY
    //           </a>
    //         </h4>
    //       </div>
    //       <div className='col-xl-3 col-md-3 col-sm-6 col-6 text-center course-box'>
    //         <h4>
    //           <a href={java} target='_blank'>
    //             JAVA
    //           </a>
    //         </h4>
    //       </div>
    //       <div className='col-xl-3 col-md-3 col-sm-6 col-6 text-center course-box'>
    //         <h4>
    //           <a href={android} target='_blank'>
    //             ANDROID
    //           </a>
    //         </h4>
    //       </div>
    //       <div className='col-xl-3 col-md-3 col-sm-6 col-6 text-center course-box'>
    //         <h4>
    //           <a href={ml} target='_blank'>
    //             MACHINE LEARNING
    //           </a>
    //         </h4>
    //       </div>
    //       <div className='col-xl-3 col-md-3 col-sm-6 col-6 text-center course-box'>
    //         <h4>
    //           <a href={network} target='_blank'>
    //             NETWORKING
    //           </a>
    //         </h4>
    //       </div>
    //       <div className='col-xl-3 col-md-3 col-sm-6 col-6 text-center course-box'>
    //         <h4>
    //           <a href={iot} target='_blank'>
    //             IOT
    //           </a>
    //         </h4>
    //       </div>
    //       <div className='col-xl-3 col-md-3 col-sm-6 col-6 text-center course-box'>
    //         <h4>
    //           <a href={embedded} target='_blank'>
    //             EMBEDDED SYSTEMS
    //           </a>
    //         </h4>
    //       </div>
    //     </div>
    //   </div>
      
    // </div>

	<section className = "courses">
		<div className="container">
			<div className = "row">
				<div className ="col-12">
					<h3 className ="course-title">Courses We Offer</h3>
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-sm-4 col-md-3">
				<div className="container">
					<div className="card">
					<img className="card-img-top" src="https://images.unsplash.com/photo-1553835973-dec43bfddbeb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"></img>
					<div className="card-body">
						<h5 className="card-title">Android</h5>
						<p className="card-text">Develop and design your needs</p>
						<Link to="/courses/" className="btn">See Details</Link>
					</div>
					</div>
				</div>
				</div>
				<div className="col-12 col-sm-4 col-md-3">
				<div className="container">
					<div className="card">
					<img className="card-img-top" src="https://images.unsplash.com/photo-1553835973-dec43bfddbeb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"></img>
					<div className="card-body">
						<h5 className="card-title">AR/VR</h5>
						<p className="card-text">Develop and design your needs</p>
						<Link to="/courses/" className="btn">See Details</Link>
					</div>
					</div>
				</div>
				</div>
				<div className="col-12 col-sm-4 col-md-3">
				<div className="container">
					<div className="card">
					<img className="card-img-top" src="https://images.unsplash.com/photo-1553835973-dec43bfddbeb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"></img>
					<div className="card-body">
						<h5 className="card-title">Embedded</h5>
						<p className="card-text">Fusion of both software and hardware</p>
						<Link to="/courses/" className="btn">See Details</Link>
					</div>
					</div>
				</div>
				</div>

				<div className="col-12 col-sm-4 col-md-3">
				<div className="container">
					<div className="card">
					<img className="card-img-top" src="https://images.unsplash.com/photo-1553835973-dec43bfddbeb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"></img>
					<div className="card-body">
						<h5 className="card-title">IoT</h5>
						<p className="card-text">Where devices talk to each other</p>
						<Link to="/courses/" className="btn">See Details</Link>
					</div>
					</div>
				</div>
				</div>
			</div>

			<div className="row">
				<div className="col-12 col-sm-4 col-md-3">
				<div className="container">
					<div className="card">
					<img className="card-img-top" src="https://images.unsplash.com/photo-1553835973-dec43bfddbeb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"></img>
					<div className="card-body">
						<h5 className="card-title">Java</h5>
						<p className="card-text">Hey, my name is Java and I am not Javascript!</p>
						<Link to="/courses/" className="btn">See Details</Link>
					</div>
					</div>
				</div>
				</div>
				<div className="col-12 col-sm-4 col-md-3">
				<div className="container">
					<div className="card">
					<img className="card-img-top" src="https://images.unsplash.com/photo-1553835973-dec43bfddbeb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"></img>
					<div className="card-body">
						<h5 className="card-title">Machine Learning</h5>
						<p className="card-text">Making use of the data generated by nature</p>
						<Link to="/courses/" className="btn">
						See Details
						</Link>
					</div>
					</div>
				</div>
				</div>
				<div className="col-12 col-sm-4 col-md-3">
				<div className="container">
					<div className="card">
					<img className="card-img-top" src="https://images.unsplash.com/photo-1553835973-dec43bfddbeb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"></img>
					<div className="card-body">
						<h5 className="card-title">Networking</h5>
						<p className="card-text">I am the reason behind whatever you google!</p>
						<Link to="/courses/" className="btn">See Details</Link>
					</div>
					</div>
				</div>
				</div>

				<div className="col-12 col-sm-4 col-md-3">
				<div className="container">
					<div className="card">
					<img className="card-img-top" src="https://images.unsplash.com/photo-1553835973-dec43bfddbeb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"></img>
					<div className="card-body">
						<h5 className="card-title">Web</h5>
						<p className="card-text">Want to develop facebook? Then join me!</p>
						<Link to="/courses/" className="btn">See Details</Link>
					</div>
					</div>
				</div>
				</div>
			</div>
		</div>
	</section>
	
  );
}

export default modals;

import React, { Component } from 'react';
import axios from 'axios';
import './register.css'
// import {RadioGroup, RadioButton} from 'react-radio-buttons;'
import { FaRegUser, FaGenderless, FaMercury, FaAt, FaWhatsapp, FaCodeBranch, FaBook, FaBookOpen  } from "react-icons/fa";
import { TiSortNumerically } from "react-icons/ti";
import { ImBooks } from "react-icons/im";

export default class JoinUs extends Component {
                 constructor(props) {
                   super(props);

                   this.onChangeName = this.onChangeName.bind(this);
                   this.onChangeRoll = this.onChangeRoll.bind(this);
                   this.onChangeEmail = this.onChangeEmail.bind(this);
                   this.onChangeBranch = this.onChangeBranch.bind(this);
                   this.onChangeYear = this.onChangeYear.bind(this);
                   this.onChangeCourse = this.onChangeCourse.bind(this);
                   this.onChangeContact = this.onChangeContact.bind(this);
                   this.onChangeGender = this.onChangeGender.bind(this);
                   this.focusMe=this.focusMe.bind(this)
                   this.defocusMe=this.defocusMe.bind(this)
                   this.inpRef=React.createRef()

                   this.onSubmit = this.onSubmit.bind(this);

                   this.state = {
                     name: '',
                     roll: '',
                     email: '',
                     branch: '',
                     year: '',
                     course: '',
                     contact: '',
                     courses: [],
                     gender: ''
                   };
                 }

                 componentDidMount() {
                   this.getCounts();
                 }

                 // async getCountofSeats(){
                 //     const count =
                 //       await axios.get("#")
                 //     console.log(count.data)
                 // }

                 async getCounts() {
                   try {
                     // return await axios.get('https://elabs-api.herokuapp.com/api/course')
                     const response = await axios.get(
                       'https://elabs-api.herokuapp.com/api/course'
                     );
                     for (var i = 0; i < response.data.data.length; i++) {
                       this.state.courses.push(response.data.data[i]);
                     }
                   } catch (error) {
                     console.error(error);
                   }
                 }

                 async getCountofSeats() {
                   // const counts = await this.getcounts()
                   // if (counts.data.course === "Web Development") {
                   //     let web_seats = counts.data[2].course_seat
                   //     console.log(web_seats)
                   // }
                   // if (counts.data.course === "Android Development") {
                   //     let android_seats = counts.data.seats
                   // }
                   // if (counts.data.course === "IOT") {
                   //     const iot_seats = counts.data.seats
                   // }
                   // if (counts.data.course === "Embedded Systems") {
                   //     const emb_seats = counts.data.seats
                   // }
                   // if (counts.data.course === "AR/VR") {
                   //     const arvr_seats = counts.data.seats
                   // }
                   // if (counts.data.course === "Networking") {
                   //     const net_seats = counts.data.seats
                   // }
                   // if (counts.data.course === "Java") {
                   //     const java_seats = counts.data.seats
                   // }
                 }

                 onChangeCourse(e) {
                   this.setState({
                     course: e.target.value
                   });
                 }

                 onChangeName(e) {
                   this.setState({
                     name: e.target.value
                   });
                 }
                 onChangeRoll(e) {
                   this.setState({
                     roll: e.target.value
                   });
                 }
                 onChangeEmail(e) {
                   this.setState({
                     email: e.target.value
                   });
                 }
                 onChangeBranch(e) {
                   this.setState({
                     branch: e.target.value
                   });
                 }
                 onChangeYear(e) {
                   this.setState({
                     year: e.target.value
                   });
                 }
                 onChangeContact(e) {
                   this.setState({
                     contact: e.target.value
                   });
                 }
                 onChangeGender(e) {
                   this.setState({
                     gender: e.target.value
                   });
                 }

                 onFinish(e) {
                   for (var i = 0; i < this.state.courses.length; i++) {
                     if (this.state.courses[i].course_name === e) {
                       return this.state.courses[i].course_name > 0
                         ? true
                         : false;
                     }
                   }
                 }
                 focusMe(cont){
                   document.querySelector(`.${cont}`).style.borderColor='#0787e8'
                }
                 defocusMe(obj){
                  document.querySelector(`.${obj}`).style.borderColor='#535353'
                }
                 onSubmit(e) {
                   e.preventDefault();

                   const Params = {
                     name: this.state.name,
                     roll: this.state.roll,
                     email: this.state.email,
                     contact: this.state.contact,
                     branch: this.state.branch,
                     year: this.state.year,
                     course: this.state.course,
                     gender: this.state.gender
                   };
                   
                   axios({
                     method: 'POST',
                     url: 'https://elabs-api.herokuapp.com/api/register',
                     data: Params
                   }).then(response => {
                     if (response.data.success) {
                       alert("Your Form Has Been Successfully Submitted");
                    //    this.props.onSubmit(response.data.success);
                       this.setState({
                         name: '',
                         roll: '',
                         email: '',
                         branch: '',
                         year: '',
                         course: '',
                         contact: '',
                         gender: ''
                       });
                     } else {
                       alert(response.data.message);
                    //    this.props.onSubmit(response.data.message);
                     }
                   });
                 }
               

                 render() {
                   return (
                     <center>
                       <div className='col-md-4'>
                         <div style={{ marginTop: 50 }}>
                           <h2>
                             Registration Form
                           </h2>
                           <br />
                           <form onSubmit={this.onSubmit} className='form'>
                             <div className='input-field name'>
                               <span><FaRegUser/></span>
                               <input
                                 type='text'
                                 className='input'
                                 placeholder='Enter Your Name'
                                 value={this.state.name}
                                 onChange={this.onChangeName}
                                 onClick={()=>{this.focusMe('name')}}
                                 onBlur={()=>{this.defocusMe('name')}}
                                 required
                               />
                             </div>
                             <div className='input-field gender'>
                             <span><FaMercury/></span>
                               <select
                                 required
                                 className='input'
                                 value={this.state.gender}
                                 onChange={this.onChangeGender}
                                 onClick={()=>{this.focusMe('gender')}}
                                 onBlur={()=>{this.defocusMe('gender')}}
                               >
                                 <option
                                   disabled={this.state.gender !== ''}
                                   selected=''
                                 >
                                   Gender
                                 </option>
                                 <option value='Male'>Male</option>
                                 <option value='Female'>Female</option>
                               </select>
                             </div>
                             <div className='input-field roll'>
                             <span><TiSortNumerically/></span>
                               <input
                                 type='text'
                                 maxLength='7'
                                 pattern='[0-9]{7}'
                                 title  ='Enter the KIIT roll number'
                                 placeholder='College Roll Number'
                                 className='input'
                                 value={this.state.roll}
                                 onChange={this.onChangeRoll}
                                 onClick={()=>{this.focusMe('roll')}}
                                 onBlur={()=>{this.defocusMe('roll')}}
                                 required
                               />
                             </div>
                             <div className='input-field email'>
                             <span><FaAt/></span>
                               <input
                                 type='email'
                                 placeholder='E-Mail Address (Use KIIT Mail)'
                                 pattern='[0-9]{7}@kiit.ac.in'
                                 title='Enter the KIIT email'
                                 className='input'
                                 value={this.state.email}
                                 onChange={this.onChangeEmail}
                                 onClick={()=>{this.focusMe('email')}}
                                 onBlur={()=>{this.defocusMe('email')}}
                                
                                 required
                               />
                             </div>
                             <div className='input-field wapp'>
                             <span><FaWhatsapp/></span>
                               <input
                                 type='text'
                                 maxLength='10'
                                 pattern='[0-9]{10}'
                                 className='input'
                                 placeholder='Whatsapp No.'
                                 value={this.state.contact}
                                 onChange={this.onChangeContact}
                                 onClick={()=>{this.focusMe('wapp')}}
                                 onBlur={()=>{this.defocusMe('wapp')}}
                                 required
                               />
                             </div>
                             <div className='input-field branch'>
                             <span><FaCodeBranch/></span>
                               <select
                                 required
                                 className='input'
                                 value={this.state.branch}
                                 onChange={this.onChangeBranch}
                                 onClick={()=>{this.focusMe('branch')}}
                                 onBlur={()=>{this.defocusMe('branch')}}
                               >
                                 <option
                                   disabled={this.state.branch !== ''}
                                   selected=''
                                 >
                                   Branch
                                 </option>
                                 <option value='ETC'>ETC</option>
                                 <option value='EEE'>EEE</option>
                                 <option value='EE'>EE</option>
                                 <option value='ECS'>ECS</option>
                                 <option value='EI'>EI</option>
                                 <option value='MECHANICAL'>MECHANICAL </option>
                                 <option value='CS'>CS </option>
                                 <option value='IT'>IT </option>
                                 <option value='CSSE'>CSSE </option>
                                 <option value='CSCE'>CSCE </option>
                               </select>
                             </div>
                             <div className='input-field year'>
                             <span><FaBookOpen/></span>
                               <select
                                 required
                                 className='input'
                                 value={this.state.year}
                                 onChange={this.onChangeYear}
                                 placeholder='Year of College'
                                 onClick={()=>{this.focusMe('year')}}
                                 onBlur={()=>{this.defocusMe('year')}}
                               >
                                 <option
                                   disabled={this.state.year !== ''}
                                   selected=''
                                 >
                                   Year of College
                                 </option>
                                 <option value='1st yr'>1st Year</option>
                                 <option value='2nd yr'>2nd Year</option>
                                 <option value='3rd yr'>3rd Year</option>
                               </select>
                             </div>

                             <div className='input-field course'>
                             <span><ImBooks/></span>
                               <select
                                 required
                                 className='input selectpicker'
                                 value={this.state.course}
                                 onChange={this.onChangeCourse}
                                 placeholder='The Course You Are Interested'
                                 onClick={()=>{this.focusMe('course')}}
                                 onBlur={()=>{this.defocusMe('course')}}
                               >
                                 <option
                                   disabled={this.state.course !== ''}
                                   selected
                                 >
                                   The Course You Are Interested
                                 </option>
                                 <option
                                   value='Java'
                                   disabled={this.onFinish('Java')}
                                 >
                                   Java
                                 </option>
                                 <option value='AR/VR'>AR/VR</option>
                                 <option value='IOT'>IOT</option>
                                 <option value='Networking'>Networking</option>
                                 <option value='Android Development'>
                                   Android Dev
                                 </option>
                                 <option value='Web Development'>
                                   Web Development{' '}
                                 </option>
                                 <option value='Embedded Systems'>
                                   Embedded Systems
                                 </option>
                                 <option value='Machine Learning'>
                                   Machine Learning
                                 </option>
                               </select>
                             </div>

                             <label style={{ fontFamily: 'acme' }}>
                               <strong>Seats Left: </strong>

                               {(() => {
                                 switch (this.state.course) {
                                   case 'Java':
                                     for (
                                       var i = 0;
                                       i < this.state.courses.length;
                                       i++
                                     ) {
                                       if (
                                         this.state.courses[i].course_name ===
                                         'Java'
                                       ) {
                                         return this.state.courses[i]
                                           .course_seat;
                                       }
                                     }
                                     break;
                                   case 'AR/VR':
                                     for (
                                       i = 0;
                                       i < this.state.courses.length;
                                       i++
                                     ) {
                                       if (
                                         this.state.courses[i].course_name ===
                                         'AR/VR'
                                       ) {
                                         return this.state.courses[i]
                                           .course_seat;
                                       }
                                     }
                                     break;
                                   case 'IOT':
                                     for (
                                       i = 0;
                                       i < this.state.courses.length;
                                       i++
                                     ) {
                                       if (
                                         this.state.courses[i].course_name ===
                                         'IOT'
                                       ) {
                                         return this.state.courses[i]
                                           .course_seat;
                                       }
                                     }
                                     break;
                                   case 'Networking':
                                     for (
                                       i = 0;
                                       i < this.state.courses.length;
                                       i++
                                     ) {
                                       if (
                                         this.state.courses[i].course_name ===
                                         'Networking'
                                       ) {
                                         return this.state.courses[i]
                                           .course_seat;
                                       }
                                     }
                                     break;
                                   case 'Android Development':
                                     for (
                                       i = 0;
                                       i < this.state.courses.length;
                                       i++
                                     ) {
                                       if (
                                         this.state.courses[i].course_name ===
                                         'Android Development'
                                       ) {
                                         return this.state.courses[i]
                                           .course_seat;
                                       }
                                     }
                                     break;
                                   case 'Web Development':
                                     for (
                                       i = 0;
                                       i < this.state.courses.length;
                                       i++
                                     ) {
                                       if (
                                         this.state.courses[i].course_name ===
                                         'Web Development'
                                       ) {
                                         return this.state.courses[i]
                                           .course_seat;
                                       }
                                     }
                                     break;
                                   case 'Embedded Systems':
                                     for (
                                       i = 0;
                                       i < this.state.courses.length;
                                       i++
                                     ) {
                                       if (
                                         this.state.courses[i].course_name ===
                                         'Embedded Systems'
                                       ) {
                                         return this.state.courses[i]
                                           .course_seat;
                                       }
                                     }
                                     break;
                                   case 'Machine Learning':
                                     for (
                                       i = 0;
                                       i < this.state.courses.length;
                                       i++
                                     ) {
                                       if (
                                         this.state.courses[i].course_name ===
                                         'Machine Learning'
                                       ) {
                                         return this.state.courses[i]
                                           .course_seat;
                                       }
                                     }
                                     break;
                                   default:
                                     return 'Course not selected';
                                 }
                               })()}
                             </label>

                             <br />
                             <div class='form-group'>
                               <button
                                 class='btn btn-default text-white btn-lg'
                                 style={{ fontFamily: 'Acme' }}
                               >
                                 Send <i class='fa fa-paper-plane-o ml-1'></i>
                               </button>
                             </div>
                           </form>
                         </div>
                       </div>
                     </center>
                   );
                 }
               }

import React, { Component } from 'react';
import axios from 'axios';
import { MDBContainer, MDBAlert } from 'mdbreact';

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
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            roll: '',
            email:'',        
            branch: '',
            year:'',
            course:'',
            contact:'',
        }
    }

    componentWillMount() {
        this.getCountofSeats()
      }

    // async getCountofSeats(){
    //     const count =
    //       await axios.get("#")
    //     console.log(count.data)
    // }

    async getcounts() {
        try {
            return await axios.get('https://elabs-api.herokuapp.com/api/course')
        } catch (error) {
            console.error(error)
        }
    }
      
    
    async getCountofSeats() {
        const counts = await this.getcounts()
        
        if (counts.data.course === "Web Development") {
          
            let web_seats = counts.data[2].course_seat
            console.log(web_seats)
        }
        if (counts.data.course === "Android Development") {
            let android_seats = counts.data.seats
        }
       
        if (counts.data.course === "IOT") {
            const iot_seats = counts.data.seats
        }
        if (counts.data.course === "Embedded Systems") {
            const emb_seats = counts.data.seats
        }

        if (counts.data.course === "AR/VR") {
            const arvr_seats = counts.data.seats
        }

        if (counts.data.course === "Networking") {
            const net_seats = counts.data.seats
        }

        if (counts.data.course === "Java") {
            const java_seats = counts.data.seats
        }

    }

    onChangeCourse(e) {
        this.setState({
             course: e.target.value
            });
      };

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

    onSubmit(e) {
        e.preventDefault();
        //  console.log(this.state);
        console.log(`Form submitted:`);
        console.log(`Name: ${this.state.name}`);
        console.log(`Roll Number: ${this.state.roll}`);
        console.log(`Email: ${this.state.email}`);
        console.log(`Branch: ${this.state.branch}`);
        console.log(`Year: ${this.state.year}`);
        console.log(`Course: ${this.state.course}`);
        console.log(`Contact: ${this.state.contact}`);
     
        const Params = {

            name: this.state.name,
            roll: this.state.roll,
            email: this.state.email,
            contact: this.state.contact,
            branch: this.state.branch,
            year: this.state.year,
            course: this.state.course  
            
        };

        console.log(Params);

        axios({
            method: "POST", 
            url:"https://elabs-api.herokuapp.com/api/register", 
            data:  Params
            }).then((response)=>{
            if (response.data.success){               
                alert("Your Form Has Been Successfully Submitted"); 
            }else {
                alert("There was some issue in sending your form. Try Again later."); 
            }
            })

        this.setState({
            name: '',
            roll: '',
            email:'',        
            branch: '',
            year:'',
            course:'',
            contact:'',
        })
    }

    render() {
        return (
            <center>
                 <div className="col-md-6">
            <div style={{marginTop: 50}}>
                <h2 style={{fontFamily: 'Acme'}}>Registration Form</h2>
                <br/>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group md-form"> 
                        <input  type="text"
                                className="form-control"
                                placeholder="Enter Your Name"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                required/>
                    </div>
                    <div className="form-group md-form">
                        <input 
                                type="text" maxlength="7"  pattern="[0-9]{7}" 
                                placeholder="College Roll Number"
                                className="form-control"
                                value={this.state.roll}
                                onChange={this.onChangeRoll}
                                required/>
                    </div>
                    <div className="form-group md-form">
                        <input 
                                type="email" 
                                placeholder="E-Mail Address"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                required/>
                    </div>
                    <div className="form-group md-form">
                        <input 
                                type="text" maxlength="10"  pattern="[0-9]{10}"  
                                className="form-control"
                                placeholder="Whatsapp No."
                                value={this.state.contact}
                                onChange={this.onChangeContact}
                                required/>
                    </div>
                    <div className="form-group">                      
                            <select required className="form-control" value={this.state.branch}  onChange={this.onChangeBranch}>
                                <option disabled="" selected="">Branch</option>
                                    <option value='ETC'>ETC</option>
                                    <option value='EEE'>EEE</option>
                                    <option value='EE'>EE</option>
                                    <option value='ECS'>ECS</option>
                                    <option value='EI'>EI</option>
                                    <option value='MECHANICAL'>MECHANICAL </option>
                                    <option value='CS'>CS </option>
                                    <option value='IT'>IT </option>
                                    <option value='CSSE'>CSSE </option>
                                    <option value='CSCE'>CSCE  </option>
                            </select>
                    </div>
                    <div className="form-group">
                                <select required className="form-control" value={this.state.year}  onChange={this.onChangeYear}  placeholder="Year of College">
                                <option disabled="" selected="">Year of College</option>
                                    <option value='1st yr'>1st Year</option>
                                    <option value='2nd yr'>2nd Year</option>
                                </select>
                    </div>
                    
                    <div className="form-group">
                                <select required className="form-control selectpicker" value={this.state.course}  onChange={this.onChangeCourse}  placeholder="The Course You Are Interested">
                                <option disabled="" selected="">The Course You Are Interested</option>
                                    <option value='Web Development'>Web Development </option>
                                    <option value='Android Development'>Android Development</option>                                   
                                    <option value='AR VR'>AR/VR</option>
                                    <option value='Java'>Java</option> 
                                    <option value='Networking'>Networking</option>
                                    <option value='IOT'>IOT</option>
                                    <option value='Embedded Systems'>Embedded Systems</option>
                                </select>
                    </div>
                   
                    
                        {/* <label style={{fontFamily:"acme"}}><strong>Seats Left:  </strong>
                       
                    {(() => {
                    switch (this.state.course) {
                        case "Web Development":   return this.getCountofSeats.counts.web_seats;
                        case "Android Development":   return this.getCountofSeats.android_seats;
                        
                        case "AR/VR":   return this.getCountofSeats.arvr_seats;
                        case "Java":   return this.getCountofSeats.java_seats;
                        case "Networking":   return this.getCountofSeats.net_seats;
                        case "IOT":   return this.getCountofSeats.iot_seats;
                        case "Embedded Systems":   return this.getCountofSeats;
                        default: return 0;
                    }
                    })()}
                        
                        </label> */}

                      <br/>
                    <div class="form-group">
                                    <button class="btn btn-default text-white btn-lg" style={{fontFamily: 'Acme'}}>Send <i class="fa fa-paper-plane-o ml-1"></i></button>
                                </div>
                </form>
            </div>

           

</div>
            
            </center>
        )
    }
}
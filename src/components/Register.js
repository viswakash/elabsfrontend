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
        this.onChangeReason = this.onChangeReason.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            roll: '',
            email:'',        
            branch: '',
            year:null,
            course:null,
            contact:'',
            reason_of_join:''
        }
    }

    componentWillMount() {
        // this.getCountofSeats()
      }

    // async getCountofSeats(){
    //     const count =
    //       await axios.get("#")
    //     console.log(count.data)
    // }

    async getcounts() {
        try {
            return await axios.get('#')
        } catch (error) {
            console.error(error)
        }
    }
      
    
    async getCountofSeats() {
        const counts = await this.getcounts()
        
        if (counts.data.course === "Web Development") {
          
            const web_seats = counts.data.seats
        }
        if (counts.data.course === "Android Development") {
            const android_seats = counts.data.seats
        }
        if (counts.data.course === "Machine Learning") {
            const ml_seats = counts.data.seats
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

    AlertSuccess(e) {
        return (
          <MDBContainer>
            <MDBAlert color="success" dismiss>
              <strong>{e.target.value}</strong>
            </MDBAlert>
          </MDBContainer>
        );
      };

    AlertWarning(e) {
        return (
            <MDBContainer>
                <MDBAlert color="warning" dismiss>
                    <strong>{e.target.value}</strong>
                </MDBAlert>
            </MDBContainer>
        );
    };

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
    onChangeReason(e) {
        this.setState({
            reason_of_join: e.target.value
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
        console.log(`Reason: ${this.state.reason_of_join}`);
     
        const newTodo = {

            name: this.state.name,
            roll: this.state.roll,
            branch: this.state.branch,
            year: this.state.year,
            course: this.state.course,
            contact: this.state.contact,
            email: this.state.email,
            reason_of_join: this.state.reason_of_join,

        };

        axios({
            method: "POST", 
            url:"#", 
            data:  newTodo
            }).then((response)=>{
            if (response.data.status === 'success'){               
                this.AlertSuccess("Your Form Has Been Successfully Submitted");
                // alert("Your Form Has Been Successfully Submitted"); 
                this.resetForm()
            }else if(response.data.status === 'fail'){
                this.AlertWarning("There was some issue in sending your form. Try Again later.")
            }
            })

        this.setState({
            name: '',
            roll: '',
            email:'',        
            branch: '',
            year:null,
            course:null,
            contact:'',
            reason_of_join:''
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
                        {/* <label>Full Name: </label> */}
                        <input  type="text"
                                className="form-control"
                                placeholder="Enter Your Name"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                required/>
                    </div>
                    <div className="form-group md-form">
                        {/* <label>Roll Number: </label> */}
                        <input 
                                type="number" 
                                placeholder="College Roll Number"
                                className="form-control"
                                value={this.state.roll}
                                onChange={this.onChangeRoll}
                                required/>
                    </div>
                    <div className="form-group md-form">
                        {/* <label>Email: </label> */}
                        <input 
                                type="email" 
                                placeholder="E-Mail Address"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                required/>
                    </div>
                    <div className="form-group md-form">
                        {/* <label>Branch: </label> */}
                        <input 
                                type="text" 
                                placeholder="Branch"
                                className="form-control"
                                value={this.state.branch}
                                onChange={this.onChangeBranch}
                                required/>
                    </div>
                    <div className="form-group md-form">
                        {/* <label>Year: </label> */}
                                <select className="form-control" value={this.state.year}  onChange={this.onChangeYear}  placeholder="Year of College">
                                    <option value='1st yr'>1st Year</option>
                                    <option value='2nd yr'>2nd Year</option>
                                </select>
                    </div>
                    
                    <div className="form-group md-form">
                        {/* <label>Course: </label> */}
                                <select className="form-control mdb-select md-form" value={this.state.course}  onChange={this.onChangeCourse}  placeholder="The Course You Are Interested">
                                    <option value='Web Development'>Web Development </option>
                                    <option value='Android Development'>Android Development</option>
                                    <option value='Machine Learning'>Machine Learning</option>
                                    <option value='AR/VR'>AR/VR</option>
                                    <option value='Java'>Java</option> 
                                    <option value='Networking'>Networking</option>
                                    <option value='IOT'>IOT</option>
                                    <option value='Embedded Systems'>Embedded Systems</option>
                                </select>
                    </div>
                   
                    
                        <label style={{fontFamily:"acme"}}><strong>Seats Left:  </strong>
                       
                    {(() => {
                    switch (this.state.course) {
                        case "Web Development":   return this.getCountofSeats.counts.web_seats;
                        case "Android Development":   return this.getCountofSeats.android_seats;
                        case "Machine Learning":   return this.getCountofSeats.ml_seats;
                        case "AR/VR":   return this.getCountofSeats.arvr_seats;
                        case "Java":   return this.getCountofSeats.java_seats;
                        case "Networking":   return this.getCountofSeats.net_seats;
                        case "IOT":   return this.getCountofSeats.iot_seats;
                        case "Embedded Systems":   return this.getCountofSeats;
                        default: return 0;
                    }
                    })()}
                        
                        </label>

                    
                    <div className="form-group md-form">
                        {/* <label>Contact: </label> */}
                        <input 
                                type="number" 
                                className="form-control"
                                placeholder="Mobile No."
                                value={this.state.contact}
                                onChange={this.onChangeContact}
                                required/>
                    </div>

                    {/* <div className="form-group">
                        {/* <label>CV Link: </label> 
                        <input 
                                type="text" 
                                className="form-control"
                                placeholder="Enter Your CV Link (Google Drive)"
                                value={this.state.cvlink}
                                onChange={this.onChangeCvlink}
                                />
                    </div> */}
                    <div className="form-group md-form">
                        {/* <label>Reason Of Join: </label> */}
                            <textarea cols="40" rows="5" placeholder=" Why Do You Want To Join?" className="form-control md-textarea" value={this.state.reason_of_join} onChange={this.onChangeReason}></textarea>
                    </div>
                    <br/>
                    <div class="form-group">
                                    <button class="btn btn-default text-white btn-lg" style={{fontFamily: 'Acme'}}>Send <i class="fa fa-paper-plane-o ml-1"></i></button>
                                </div>
                    {/* <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                        
                    </div> */}
                </form>
            </div>

           

</div>
            
            </center>
        )
    }
}
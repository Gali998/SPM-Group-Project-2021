import React, { Component, Fragment } from "react";
import Navbar from "../partials/Navbar";
import Sidebar from "../partials/Sidebar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList} from "@fortawesome/free-solid-svg-icons/faList";
import ReactDatatable from '@ashvin27/react-datatable';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import axios from "axios";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import CarAddModal from "../partials/CarAddModal";
import CarUpdateModal from "../partials/CarUpdateModal";
import { toast, ToastContainer} from "react-toastify";

class Car extends Component {

    constructor(props) {
        super(props);

        this.columns = [
            {
                key: "_id",
                text: "Id",
                className: "id",
                align: "left",
                sortable: true,
            },
            {
                key: "carName",
                text: "Car Name",
                className: "carName",
                align: "left",
                sortable: true,
            },
            {
                key: "description",
                text: "Description",
                className: "description",
                align: "left",
                sortable: true,
            },
            {
                key: "carCount",
                text: "Number of car count",
                className: "carCount",
                align: "left",
                sortable: true,
            },
            {
                key: "action",
                text: "Action",
                className: "action",
                width: 100,
                align: "left",
                sortable: false,
                cell: record => {
                    return (
                        <Fragment>
                            <button
                                data-toggle="modal"
                                data-target="#update-user-modal"
                                className="btn btn-primary btn-sm"
                                onClick={() => this.editRecord(record)}
                                style={{marginRight: '5px'}}>
                                <i className="fa fa-edit"></i>
                            </button>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => this.deleteRecord(record)}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </Fragment>
                    );
                }
            }
        ];

        this.config = {
            page_size: 10,
            length_menu: [ 10, 20, 50 ],
            filename: "Cars",
            no_data_text: 'No Car found!',
            button: {
                excel: true,
                print: true,
                csv: true
            },
            language: {
                length_menu: "Show _MENU_ result per page",
                filter: "Filter in records...",
                info: "Showing _START_ to _END_ of _TOTAL_ records",
                pagination: {
                    first: "First",
                    previous: "Previous",
                    next: "Next",
                    last: "Last"
                }
            },
            show_length_menu: true,
            show_filter: true,
            show_pagination: true,
            show_info: true,
        };

        this.state = {
            records: []
        };

        this.state = {
            currentRecord: {
                id: '',
                carName: '',
                description: '',
                carCount: '',
                // fileName: '',
            }
        };

        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData()
    };

    componentWillReceiveProps(nextProps) {
        this.getData()
    }

    getData() {
        axios
            .get("/api/cars/car-data")
            .then(res => {
                this.setState({ records: res.data})
            })
            .catch()
    }

    editRecord(record) {
        this.setState({ currentRecord: record});
    }

    deleteRecord(record) {
        axios
            .post("/api/cars/user-delete", {_id: record._id})
            .then(res => {
                if (res.status === 200) {
                   toast(res.data.message, {
                       position: toast.POSITION.TOP_CENTER,
                   })
                }
            })
            .catch();
        this.getData();
    }

    pageChange(pageData) {
        console.log("OnPageChange", pageData);
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="d-flex" id="wrapper">
                    <Sidebar/>
                    <CarAddModal/>
                    <CarUpdateModal record={this.state.currentRecord}/>
                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                            <button className="btn btn-link mt-3" id="menu-toggle"><FontAwesomeIcon icon={faList}/></button>
                            <button className="btn btn-outline-primary float-right mt-3 mr-2" data-toggle="modal" data-target="#add-user-modal"><FontAwesomeIcon icon={faPlus}/> Add Car</button>
                            <h1 className="mt-2 text-primary">Car List</h1>
                            <ReactDatatable
                                config={this.config}
                                records={this.state.records}
                                columns={this.columns}
                                onPageChange={this.pageChange.bind(this)}
                            />
                        </div>
                    </div>
                    <ToastContainer/>
                </div>
            </div>
        );
    }

}

Car.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    records: state.records
});

export default connect(
    mapStateToProps
)(Car);

// import React, { Component } from 'react';
// import {
//   Button, TextField, Dialog, DialogActions, LinearProgress,
//   DialogTitle, DialogContent, TableBody, Table,
//   TableContainer, TableHead, TableRow, TableCell
// } from '@material-ui/core';
// import { Pagination } from '@material-ui/lab';
// import swal from 'sweetalert';
// const axios = require('axios');

// export default class Car extends Component {
//   constructor() {
//     super();
//     this.state = {
//       token: '',
//       openCarModal: false,
//       openCarUpdateModal: false,
//       id: '',
//       name: '',
//       description: '',
//       file: '',
//       fileName: '',
//       page: 1,
//       search: '',
//       cars: [],
//       pages: 0,
//       loading: false
//     };
//   }

//   componentDidMount = () => {
//     let token = localStorage.getItem('token');
//     if (!token) {
//       this.props.history.push('/login');
//     } else {
//       this.setState({ token: token }, () => {
//         this.getCar();
//       });
//     }
//   }

//   getCar = () => {
    
//     this.setState({ loading: true });

//     let data = '?';
//     data = `${data}page=${this.state.page}`;
//     if (this.state.search) {
//       data = `${data}&search=${this.state.search}`;
//     }
//     axios.get(`http://localhost:1234/cars/get-car${data}`, {
//       headers: {
//         'token': this.state.token
//       }
//     }).then((res) => {
//       this.setState({ loading: false, cars: res.data.cars, pages: res.data.pages });
//     }).catch((err) => {
//       swal({
//         text: err.response.data.errorMessage,
//         icon: "error",
//         type: "error"
//       });
//       this.setState({ loading: false, cars: [], pages: 0 },()=>{});
//     });
//   }

//   deleteCar = (id) => {
//     axios.post('http://localhost:1234/cars/delete-car', {
//       id: id
//     }, {
//       headers: {
//         'Content-Type': 'application/json',
//         'token': this.state.token
//       }
//     }).then((res) => {

//       swal({
//         text: res.data.title,
//         icon: "success",
//         type: "success"
//       });

//       this.setState({ page: 1 }, () => {
//         this.pageChange(null, 1);
//       });
//     }).catch((err) => {
//       swal({
//         text: err.response.data.errorMessage,
//         icon: "error",
//         type: "error"
//       });
//     });
//   }

//   pageChange = (e, page) => {
//     this.setState({ page: page }, () => {
//       this.getCar();
//     });
//   }

//   logOut = () => {
//     localStorage.setItem('token', null);
//     this.props.history.push('/');
//   }

//   onChange = (e) => {
//     if (e.target.files && e.target.files[0] && e.target.files[0].name) {
//       this.setState({ fileName: e.target.files[0].name }, () => { });
//     }
//     this.setState({ [e.target.name]: e.target.value }, () => { });
//     if (e.target.name == 'search') {
//       this.setState({ page: 1 }, () => {
//         this.getCar();
//       });
//     }
//   };

//   addCar = () => {
//     const fileInput = document.querySelector("#fileInput");
//     const file = new FormData();
//     file.append('file', fileInput.files[0]);
//     file.append('name', this.state.name);
//     file.append('description', this.state.description);

//     axios.post('http://localhost:1234/cars/add-add', file, {
//       headers: {
//         'content-type': 'multipart/form-data',
//         'token': this.state.token
//       }
//     }).then((res) => {

//       swal({
//         text: res.data.title,
//         icon: "success",
//         type: "success"
//       });

//       this.handleCarClose();
//       this.setState({ name: '', description: '',  file: null, page: 1 }, () => {
//         this.getCar();
//       });
//     }).catch((err) => {
//       swal({
//         text: err.response.data.errorMessage,
//         icon: "error",
//         type: "error"
//       });
//       this.handleCarClose();
//     });

//   }

//   updateCar = () => {
//     const fileInput = document.querySelector("#fileInput");
//     const file = new FormData();
//     file.append('id', this.state.id);
//     file.append('file', fileInput.files[0]);
//     file.append('name', this.state.name);
//     file.append('description', this.state.description);

//     axios.post('http://localhost:1234/cars/update-car', file, {
//       headers: {
//         'content-type': 'multipart/form-data',
//         'token': this.state.token
//       }
//     }).then((res) => {

//       swal({
//         text: res.data.title,
//         icon: "success",
//         type: "success"
//       });

//       this.handleCarEditClose();
//       this.setState({ name: '', description: '', file: null }, () => {
//         this.getCar();
//       });
//     }).catch((err) => {
//       swal({
//         text: err.response.data.errorMessage,
//         icon: "error",
//         type: "error"
//       });
//       this.handleCarEditClose();
//     });

//   }

//   handleCarOpen = () => {
//     this.setState({
//       openCarModel: true,
//       id: '',
//       name: '',
//       description: '',
//       fileName: ''
//     });
//   };

//   handleCarClose = () => {
//     this.setState({ openCarModel: false });
//   };

//   handleCarEditOpen = (data) => {
//     this.setState({
//       openCarEditModal: true,
//       id: data._id,
//       name: data.name,
//       description: data.description,
//       fileName: data.image
//     });
//   };

//   handleCarEditClose = () => {
//     this.setState({ openCarEditModal: false });
//   };

//   render() {
//     return (
//       <div>
//         {this.state.loading && <LinearProgress size={40} />}
//         <div>
//           <h2>Car List</h2>
//           <Button
//             className="button_style"
//             variant="contained"
//             color="primary"
//             size="small"
//             onClick={this.handleCarOpen}
//           >
//             Add Car
//           </Button>
//           <Button
//             className="button_style"
//             variant="contained"
//             size="small"
//             onClick={this.logOut}
//           >
//             Log Out
//           </Button>
//         </div>

//         {/* Edit Car */}
//         <Dialog
//           open={this.state.openCarEditModal}
//           onClose={this.handleCarClose}
//           aria-labelledby="alert-dialog-title"
//           aria-descriptionribedby="alert-dialog-description"
//         >
//           <DialogTitle id="alert-dialog-title">Edit Car</DialogTitle>
//           <DialogContent>
//             <TextField
//               id="standard-basic"
//               type="text"
//               autoComplete="off"
//               name="name"
//               value={this.state.name}
//               onChange={this.onChange}
//               placeholder="Car Name"
//               required
//             /><br />
//             <TextField
//               id="standard-basic"
//               type="text"
//               autoComplete="off"
//               name="description"
//               value={this.state.description}
//               onChange={this.onChange}
//               placeholder="description"
//               required
//             /><br /><br /><br />
//             <Button
//               variant="contained"
//               component="label"
//             > Upload
//             <input
//                 id="standard-basic"
//                 type="file"
//                 accept="image/*"
//                 name="file"
//                 value={this.state.file}
//                 onChange={this.onChange}
//                 id="fileInput"
//                 placeholder="File"
//                 hidden
//               />
//             </Button>&nbsp;
//             {this.state.fileName}
//           </DialogContent>

//           <DialogActions>
//             <Button onClick={this.handleCarEditClose} color="primary">
//               Cancel
//             </Button>
//             <Button
//               disabled={this.state.name == '' || this.state.description == ''}
//               onClick={(e) => this.updateCar()} color="primary" autoFocus>
//               Edit Car
//             </Button>
//           </DialogActions>
//         </Dialog>

//         {/* Add Car */}
//         <Dialog
//           open={this.state.openCarModel}
//           onClose={this.handleCarClose}
//           aria-labelledby="alert-dialog-title"
//           aria-descriptionribedby="alert-dialog-description"
//         >
//           <DialogTitle id="alert-dialog-title">Add Car</DialogTitle>
//           <DialogContent>
//             <TextField
//               id="standard-basic"
//               type="text"
//               autoComplete="off"
//               name="name"
//               value={this.state.name}
//               onChange={this.onChange}
//               placeholder="Car Name"
//               required
//             /><br />
//             <TextField
//               id="standard-basic"
//               type="text"
//               autoComplete="off"
//               name="description"
//               value={this.state.description}
//               onChange={this.onChange}
//               placeholder="Description"
//               required
//             /><br /><br /><br />
//             <Button
//               variant="contained"
//               component="label"
//             > Upload
//             <input
//                 id="standard-basic"
//                 type="file"
//                 accept="image/*"
//                 // inputProps={{
//                 //   accept: "image/*"
//                 // }}
//                 name="file"
//                 value={this.state.file}
//                 onChange={this.onChange}
//                 id="fileInput"
//                 placeholder="File"
//                 hidden
//                 required
//               />
//             </Button>&nbsp;
//             {this.state.fileName}
//           </DialogContent>

//           <DialogActions>
//             <Button onClick={this.handleCarClose} color="primary">
//               Cancel
//             </Button>
//             <Button
//               disabled={this.state.name == '' || this.state.description == '' || this.state.file == null}
//               onClick={(e) => this.addCar()} color="primary" autoFocus>
//               Add Car
//             </Button>
//           </DialogActions>
//         </Dialog>

//         <br />

//         <TableContainer>
//           <TextField
//             id="standard-basic"
//             type="search"
//             autoComplete="off"
//             name="search"
//             value={this.state.search}
//             onChange={this.onChange}
//             placeholder="Search by Car name"
//             required
//           />
//           <Table aria-label="simple table">
//             <TableHead>
//               <TableRow>
//                 <TableCell align="center">Name</TableCell>
//                 <TableCell align="center">Image</TableCell>
//                 <TableCell align="center">Description</TableCell>
//                 <TableCell align="center">Action</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {this.state.cars.map((row) => (
//                 <TableRow key={row.name}>
//                   <TableCell align="center" component="th" scope="row">
//                     {row.name}
//                   </TableCell>
//                   <TableCell align="center"><img src={`http://localhost:1234/cars/${row.image}`} width="70" height="70" /></TableCell>
//                   <TableCell align="center">{row.description}</TableCell>
//                   <TableCell align="center">
//                     <Button
//                       className="button_style"
//                       variant="outlined"
//                       color="primary"
//                       size="small"
//                       onClick={(e) => this.handleCarEditOpen(row)}
//                     >
//                       Car Update
//                   </Button>
//                     <Button
//                       className="button_style"
//                       variant="outlined"
//                       color="secondary"
//                       size="small"
//                       onClick={(e) => this.deleteCar(row._id)}
//                     >
//                       Car Delete
//                   </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//           <br />
//           <Pagination count={this.state.pages} page={this.state.page} onChange={this.pageChange} color="primary" />
//         </TableContainer>

//       </div>
//     );
//   }
// }
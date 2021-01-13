import { Fragment, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import logoDana from '../images/svg/logoDana.svg';

// Import Components
import Separator from '../components/Separator';
import NotFound from '../views/error/NotFound';

const Layout = props => {
    console.log(props.leftCard);
    return (
        <div style={{ backgroundColor: "#F6F6F6" }} className="py-5">
            <Container>
                <Row>
                    { props.children }
                </Row>
            </Container>
        </div>
    )
}

const Order = () => {
    let seatSelected = [];
    const { method } = useParams();

    console.log(seatSelected);

    if( method === 'booking' ) {
        return (
            <Fragment>
                <Helmet>
                    <title>Booking Your Seat - Tickitz</title>
                </Helmet>
                <div className="bg-primary py-4" id="choose-movie">
                    <Container>
                        <Row>
                            <Col xs={12} className="d-flex justify-content-between align-items-center">
                                <span className="text-white">Black Widow</span>
                                <button className="btn rounded-pill">Change movie</button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Layout>
                    <Col md={8}>
                        <h4 className="font-weight-bold mb-4">Choose Your Seat</h4>
                        <Card style={{ borderRadius: "1rem" }} className="border-0">
                            <Card.Body style={{ padding: "7rem" }}>
                                <div className="text-center">
                                    <small>Screen</small>
                                    <div className="screen__order rounded-pill mt-2"></div>
                                </div>
                                <Row>
                                    <Col>
                                        <Row className="position-absolute">
                                            <div className="col-auto position-relative d-flex flex-column seat-alphabet">
                                                <span>A</span>
                                                <span>B</span>
                                                <span>C</span>
                                                <span>D</span>
                                                <span>E</span>
                                                <span>F</span>
                                                <span>G</span>
                                            </div>
                                        </Row>
                                        <div className="seats">
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="A1" />
                                                <div className="checkmark"></div> 
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="A2" />
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="A3" />
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="A4" disabled/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="A5" />
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="A6" disabled/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="A7" />
                                                <div className="checkmark"></div>
                                            </label>
                                            <br/>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="B1" />
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="B2" disabled/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="B3" disabled/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="B4" />
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="B5" />
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="B6" />
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="B7" />
                                                <div className="checkmark"></div>
                                            </label>
                                            <br/>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="C1" />
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="C2" />
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="C3"/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="C4" checked/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="C5" checked/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="C6" checked/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="C7" />
                                                <div className="checkmark"></div>
                                            </label>
                                            <br/>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' }  value="D1" />
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' }  value="D2" disabled/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' }  value="D3" />
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="D4" />
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="D5" />
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="D6" />
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="D7" />
                                                <div className="checkmark"></div>
                                            </label>
                                            <br/>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="E1"/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="E2" />
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="E3" />
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="E4" disabled/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="E5" />
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="E6"/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="E7"/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <br/>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="F1"/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="F2"/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="F3"/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="F4"/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="F5"/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="F6"/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="F7"/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <br/>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="G1"/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="G2"/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="G3" disabled/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="G4"/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="G5"/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="G6" />
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } value="G7"/>
                                                <div className="checkmark"></div>
                                            </label>
                                        </div>
                                    </Col>
                                    <Col className="d-flex justify-content-end">
                                        <div className="seats">
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' }/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' }/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' }/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' }/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } disabled />
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' }/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' }/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <br/>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' }/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' }/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' }/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' }/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' }/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' }/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' }/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <br/>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' }/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } disabled />
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' }/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' }/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' } disabled />
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' }/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' }/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <br/>
                                            <label>
                                                <input type="checkbox" name="" id="" onChange={e => e.target.checked ? seatSelected.push(e.target.value) : '' }/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" disabled />
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id=""/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id=""/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" disabled />
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id=""/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id=""/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <br/>
                                            <label>
                                                <input type="checkbox" name="" id=""/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id=""/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id=""/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id=""/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id=""/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id=""/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id=""/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <br/>
                                            <label>
                                                <input type="checkbox" name="" id=""/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id=""/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id=""/>
                                                <div className="checkmark love-nest"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id=""/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id="" disabled />
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id=""/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <br/>
                                            <label>
                                                <input type="checkbox" name="" id=""/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id=""/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id=""/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id=""/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id=""/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id=""/>
                                                <div className="checkmark"></div>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="" id=""/>
                                                <div className="checkmark"></div>
                                            </label>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="py-2 d-none d-md-flex">
                                    <Col className="seat-numbers">
                                        <span>1</span>
                                        <span>2</span>
                                        <span>3</span>
                                        <span>4</span>
                                        <span>5</span>
                                        <span>6</span>
                                        <span>7</span>
                                    </Col>
                                    <Col className="d-flex justify-content-end seat-numbers">
                                        <span>8</span>
                                        <span>9</span>
                                        <span>10</span>
                                        <span>11</span>
                                        <span>12</span>
                                        <span>13</span>
                                        <span>14</span>
                                    </Col>
                                </Row>
                                <div className="py-4">
                                    <h5>Seating key</h5>
                                    <div className="seats d-flex align-items-center flex-wrap">
                                        <label className="mr-3">
                                            <input type="checkbox" name="" id="" disabled/>
                                            <div style={{ backgroundColor: "#D6D8E7" }} className="checkmark"></div>
                                        </label>
                                        <small className="text-muted mr-3">Available</small>
                                        <label className="mr-3">
                                            <input type="checkbox" name="" id="" disabled/>
                                            <div style={{ backgroundColor: "#5F2EEA" }} className="checkmark"></div>
                                        </label>
                                        <small className="text-muted mr-5 mr-md-3">Selected</small>
                                        <label className="mr-3">
                                            <input type="checkbox" name="" id="" disabled/>
                                            <div style={{ backgroundColor: "#F589D7" }} className="checkmark"></div>
                                        </label>
                                        <small className="text-muted mr-3">Love nest</small>
                                        <label className="mr-3">
                                            <input type="checkbox" name="" id="" disabled/>
                                            <div className="checkmark"></div>
                                        </label>
                                        <small className="text-muted mr-3">Sold</small>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <div className="row mt-4 d-none d-md-flex">
                            <div className="col">
                                <button style={{ fontSize: "15px" }} className="btn btn-outline-primary rounded-3 py-3 w-100">Choose your movie</button>
                            </div>
                            <div className="col">
                                <Link to="/ticket/payment" style={{ fontSize: "15px" }} className="btn btn-primary rounded-3 py-3 w-100">Checkout now</Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className="mt-4 mt-md-0">
                        <h4 className="font-weight-bold mb-4">Order Info</h4>
                        <Card style={{ borderRadius: "1rem" }} className="border-0">
                            <Card.Header style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }} className="bg-white py-4">
                                <div className="text-center mb-4">
                                    <svg width="134" height="36" viewBox="0 0 134 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.92188 45C12.6953 45 16.2578 43.125 18.9531 41.25C20.5 40.1484 21.9531 38.9062 23.3359 37.4766L20.3125 34.3359C17.875 36.7031 13.0469 40.0312 9.29688 40.0312C8.10156 40.0312 7.30469 39.6094 6.34375 37.8984C11.8047 36.3984 15.8359 32.25 15.8359 28.3828C15.8359 24.8438 13.1641 22.5234 9.67188 22.5234C3.25 22.5234 0.109375 29.9297 0.109375 35.2266C0.109375 40.4062 3.03906 45 8.92188 45ZM5.80469 33.9844C5.80469 31.8984 6.17969 27 10.1875 27C10.9375 27 11.5234 28.0078 11.5234 29.4141C11.5234 31.3828 8.03125 33.9844 5.80469 33.9844ZM27.1875 25.875C31.5469 20.5781 36.4688 13.6406 36.4688 7.71094C36.4688 3.46875 35.7422 0 30.9844 0C24.6328 0 20.9062 16.8516 19.4062 26.0391C18.6562 30.6328 18.2578 34.4062 18 37.1484C17.8594 38.7422 17.7656 40.1719 17.7188 41.4375C18.8438 42.1172 20.0156 42.7031 21.2578 43.2188C23.3906 44.1328 26.1094 45 28.7578 45H29.3438C29.9297 44.7656 30.4922 44.5312 31.0078 44.2734C31.9219 43.8281 32.9297 43.2891 33.4688 42.75C37.875 41.7422 41.1328 40.3594 44.5781 37.2422L42.7734 33.375C40.2891 35.8594 37.9922 36.9141 35.7188 38.25C37.5703 35.3906 37.9688 32.9531 37.9688 29.7891C37.9688 25.9922 35.7891 22.5 32.1328 22.5C30.7031 22.5 29.3203 23.9531 27.5625 26.1328L27.1875 25.875ZM29.6719 27.8438C32.1328 27.8438 32.7188 29.2266 32.7188 30.7734C32.7188 34.3594 31.3594 40.5 28.125 40.5C27.2109 40.5 26.1797 40.3125 25.2656 40.125C24.75 40.0078 24.2344 39.8906 23.7188 39.7266C23.7656 39.1875 23.8125 38.6016 23.8828 37.9688C24 36.8672 24.1875 35.4375 24.4688 33.75C25.1484 29.5781 27.4922 27.8438 29.6719 27.8438ZM31.9688 6.375C31.5 13.0312 27.0234 19.1016 24.4688 24.0234C25.2188 19.8984 28.1953 4.5 30.7734 4.5C31.8281 4.5 31.9688 6.11719 31.9688 6.375ZM42.7812 38.1562C42.9688 41.1328 43.0156 45.2578 46.6484 45.2578C48.8281 45.2578 51.7578 40.7578 53.5859 36.9844C53.6562 39.3281 55.6719 41.6016 59.0234 41.6016C61.0156 41.6016 63.3125 40.7578 65.375 39.4453V33.9375C64.6953 34.3828 64.0391 34.8047 63.4062 35.1562C62.3047 35.7891 60.9688 36.3516 60.0312 36.3516C57.5 36.3516 56.8672 34.8281 56.8672 33.3281C56.8672 32.6016 56.9844 31.9219 57.1484 31.3828C57.2188 31.0781 57.3125 30.7969 57.4297 30.5156C58.8125 27.4453 59.7969 26.1797 59.7969 24.4688C59.7969 23.3203 58.6016 22.5 56.7969 22.5C55.4375 22.5 54.2656 23.2969 54.0781 24.1641L47.9141 38.8594L47.5859 38.8828L48.5 24.0469C48.4766 23.2266 47.8672 22.5 46.8125 22.5C46.6484 22.5 46.5312 22.5234 46.3672 22.5469L43.5547 22.9922C42.5469 23.1562 42.3594 25.0078 42.3594 28.2188C42.3594 30.7031 42.5469 32.7188 42.7344 37.4062L42.7812 38.1562ZM77.2656 40.5234C77.2656 38.0859 75.9062 36.7266 73.3047 36.7266C70.2812 36.7266 69.0156 38.9297 69.0156 41.2031C69.0156 43.875 70.5625 45 72.8594 45C77.1953 45 77.2656 40.9219 77.2656 40.5234ZM95.7656 35.25C93.7031 36.9375 90.1875 40.5 87.9609 40.5C87 40.5 86.7656 39.6094 86.7656 38.2031C86.7656 33.8672 89.9062 25.9219 89.9062 23.8359C89.9062 23.0156 89.5312 22.5 88.2188 22.5C86.8125 22.5 84.3984 23.1562 83.9531 24.7734C82.8281 29.4609 80.7656 36.3281 80.7656 40.2891C80.7656 43.125 81.8672 45 85.125 45C88.7344 45 93.5156 42.0703 95.7656 40.0078V35.25ZM85.2891 15.9141C85.2891 18.0703 86.5781 19.4766 89.3203 19.4766C92.5078 19.4766 93.8672 17.3906 93.8672 15.2812C93.8672 12.9375 92.0625 12 89.8828 12C86.4141 12 85.2891 14.4844 85.2891 15.9141ZM104.938 27.2812C105.031 27.1875 105.008 33.9141 105.289 35.1797C104.938 36.0938 104.539 36.8906 104.094 37.6172C103.344 38.8594 102.266 40.0547 101.141 40.0547C98.9609 40.0547 98.5156 38.6719 98.5156 37.4297C98.5156 34.2891 100.789 29.2969 104.938 27.2812ZM120.359 34.9922C119.422 35.7891 118.531 36.4922 117.664 37.125C116.141 38.2031 114.406 39.2578 113.234 39.2578C111.992 39.2578 111.594 37.6172 111.594 35.8359C111.594 34.4297 111.992 32.625 112.297 31.7812C115.555 23.9062 119.422 17.4375 120.242 8.57812C120.289 7.99219 120.312 7.42969 120.312 6.89062C120.312 3.30469 119.234 0 116.281 0C110.328 0 105.125 11.7656 104.844 23.7891C97.7188 24.4453 92.8906 31.2891 92.8906 37.2656C92.8906 41.1797 94.8125 45 98.8438 45C101.703 45 104.633 43.0781 106.953 40.8281C108.453 44.4609 111.312 44.9766 112.18 44.9766C113.727 44.9766 115.953 43.8281 117.781 42.7031C118.859 42.0234 119.961 41.2734 121.062 40.4062L120.359 34.9922ZM115.953 10.2891C115.648 13.5938 114.289 17.8125 113.023 21.2812C112.273 23.2969 111.453 25.3125 110.562 27.3516V27.1172C110.562 26.1797 110.562 23.5078 110.82 20.4141C111.008 18.1406 112.227 5.4375 115.227 5.4375C115.789 5.4375 116.094 6 116.094 7.6875C116.094 8.32031 116.047 9.1875 115.953 10.2891Z" fill="black"/>
                                    </svg>                                    
                                    <h4 className="mt-2">Ebv.id</h4>                                 
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <small className="text-muted">Movie selected</small>
                                    <small className="font-weight-bold">The Witches</small>
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <small className="text-muted">Tuesday, 07 July 2020</small>
                                    <small className="font-weight-bold">02:00pm</small>
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <small className="text-muted">One ticket price</small>
                                    <small className="font-weight-bold">$10</small>
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <small className="text-muted">Seat choosed</small>
                                    <small className="font-weight-bold">C4, C5, C6</small>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div className="d-flex justify-content-between">
                                    <span className="font-weight-bold">Total Payment</span>
                                    <span className="text-primary font-weight-bold">$30</span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Layout>
            </Fragment>
        )
    } else if( method === 'payment' ) {
        return (
            <Fragment>
                <Helmet>
                    <title>Pick Payment Method - Tickitz</title>
                </Helmet>
                <Layout>
                    <Col md={8}>
                        <h4 className="font-weight-bold mb-4">Payment Info</h4>
                        <Card style={{ borderRadius: "1rem" }} className="border-0">
                            <Card.Body className="p-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="text-muted">Date & Time</span>
                                    <span>Tuesday, 07 July 2020 at 02:00pm</span>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="text-muted">Movie Title</span>
                                    <span>The Witches</span>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="text-muted">Cinema name</span>
                                    <span>Ebv.id Cinema</span>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="text-muted">Number of tickets</span>
                                    <span>3 pieces</span>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <span className="text-muted">Total payment</span>
                                    <span className="font-weight-bold">$30,00</span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mt-4 mt-md-0">
                        <h4 className="font-weight-bold mb-4">Personal Info</h4>
                        <Card style={{ borderRadius: "1rem" }} className="border-0">
                            <Card.Body className="p-4">
                                <form>
                                    <div className="mb-3">
                                        <label for="fullname" className="form-label text-muted">Full Name</label>
                                        <input type="text" name="fullname" id="fullname" value="Jonas El Rodriguez" className="form-control rounded-3 px-4 py-2"/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="email" className="form-label text-muted">Email</label>
                                        <input type="email" name="email" id="email" value="Jjonasrodri123@gmail.com" className="form-control rounded-3 px-4 py-2"/>
                                    </div>
                                    <label for="phone" className="form-label text-muted">Phone Number</label>
                                    <div className="input-group mb-4">
                                        <span className="input-group-text bg-white rounded-start">+62</span>
                                        <input type="tel" name="phone" id="phone" value="81445687121" className="form-control rounded-end px-3 py-2"/>
                                    </div>
                                    <div style={{backgroundColor: "#FFE3BD", borderRadius: "0.5rem"}} className="alert">
                                        <svg style={{ zIndex: "10" }} width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.9206 21.7188L16.1172 1.83884C15.9022 1.44264 15.5842 1.11183 15.1968 0.88131C14.8094 0.650792 14.3669 0.529114 13.9161 0.529114C13.4653 0.529114 13.0229 0.650792 12.6355 0.88131C12.2481 1.11183 11.9301 1.44264 11.715 1.83884L0.919451 21.7188C0.705969 22.1011 0.596427 22.5326 0.601747 22.9704C0.607068 23.4082 0.727066 23.837 0.949775 24.2139C1.17248 24.5909 1.49012 24.9029 1.87101 25.1188C2.25191 25.3347 2.68274 25.4469 3.12056 25.4444H24.7194C25.1528 25.444 25.5786 25.3311 25.9553 25.1168C26.332 24.9025 26.6466 24.5941 26.8684 24.2218C27.0902 23.8495 27.2116 23.426 27.2208 22.9928C27.2299 22.5595 27.1265 22.1313 26.9206 21.75V21.7188ZM12.9206 6.77773C12.9206 6.48894 13.0353 6.21197 13.2395 6.00777C13.4437 5.80356 13.7207 5.68884 14.0094 5.68884C14.2982 5.68884 14.5752 5.80356 14.7794 6.00777C14.9836 6.21197 15.0983 6.48894 15.0983 6.77773V16.1111C15.0983 16.3999 14.9836 16.6768 14.7794 16.881C14.5752 17.0852 14.2982 17.2 14.0094 17.2C13.7207 17.2 13.4437 17.0852 13.2395 16.881C13.0353 16.6768 12.9206 16.3999 12.9206 16.1111V6.77773ZM14.0094 22.2166C13.7326 22.2166 13.4619 22.1345 13.2317 21.9807C13.0014 21.8268 12.822 21.6082 12.716 21.3524C12.6101 21.0966 12.5823 20.8151 12.6364 20.5435C12.6904 20.2719 12.8237 20.0225 13.0195 19.8267C13.2153 19.6309 13.4648 19.4975 13.7363 19.4435C14.0079 19.3895 14.2894 19.4172 14.5452 19.5232C14.801 19.6291 15.0197 19.8086 15.1735 20.0388C15.3273 20.269 15.4094 20.5397 15.4094 20.8166C15.4094 21.0005 15.3732 21.1825 15.3029 21.3524C15.2325 21.5222 15.1294 21.6766 14.9994 21.8066C14.8694 21.9366 14.7151 22.0397 14.5452 22.1101C14.3753 22.1804 14.1933 22.2166 14.0094 22.2166Z" fill="#F4B740"/>
                                        </svg>
                                        <small className="ml-3">Fill your data correctly.</small>
                                    </div>
                                </form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <div style={{ marginTop: "-2rem" }} className="col-md-8">
                    <h4 className="font-weight-bold mb-4">Choose a Payment Method</h4>
                    <div style={{ borderRadius: "1rem" }} className="card border-0">
                        <div className="card-body p-4">

                            <div className="d-flex flex-wrap align-items-center text-center mb-4">
                                <button className="btn btn-payment-method">
                                    <svg width="74" height="30" viewBox="0 0 74 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M34.9772 14.6459V23.405H32.2461V1.77382H39.4894C40.354 1.75546 41.2135 1.91149 42.0185 2.2329C42.8235 2.55432 43.5579 3.03474 44.1795 3.64647C44.8073 4.22105 45.307 4.92571 45.6449 5.7131C45.9829 6.50049 46.1512 7.35237 46.1387 8.21147C46.1567 9.07521 45.9909 9.9327 45.6527 10.7252C45.3146 11.5176 44.812 12.2263 44.1795 12.8026C42.9131 14.0315 41.3495 14.6453 39.4894 14.6441H34.9772V14.6459ZM34.9772 4.43706V11.9879H39.5571C40.0592 12.0031 40.5588 11.9114 41.0241 11.7188C41.4894 11.5262 41.9101 11.2369 42.2592 10.8694C42.6065 10.5258 42.8825 10.1149 43.071 9.66088C43.2595 9.20688 43.3567 8.71903 43.3567 8.22617C43.3567 7.73332 43.2595 7.24547 43.071 6.79146C42.8825 6.33746 42.6065 5.92652 42.2592 5.58294C41.9145 5.20769 41.4953 4.9113 41.0294 4.71339C40.5636 4.51548 40.0617 4.42059 39.5571 4.435H34.9772V4.43676V4.43706ZM52.4319 8.12176C54.4504 8.12176 56.044 8.67059 57.2121 9.76823C58.3802 10.8662 58.9638 12.3712 58.9627 14.2835V23.405H56.3504V21.3512H56.2319C55.1008 23.0424 53.5968 23.8882 51.7197 23.8882C50.1171 23.8882 48.7764 23.405 47.6976 22.4385C47.1799 21.9949 46.766 21.4394 46.4861 20.8123C46.2062 20.1853 46.0672 19.5027 46.0795 18.8141C46.0795 17.2826 46.6483 16.0647 47.7858 15.1603C48.9235 14.2559 50.4423 13.8024 52.342 13.8003C53.9636 13.8003 55.2991 14.1021 56.3487 14.7062V14.0709C56.3518 13.6015 56.2521 13.1373 56.0571 12.712C55.862 12.2867 55.5763 11.9108 55.2208 11.6118C54.4985 10.9487 53.5572 10.5869 52.5845 10.5985C51.0591 10.5985 49.852 11.2532 48.9632 12.5626L46.5579 11.0215C47.8809 9.08823 49.8387 8.12176 52.4319 8.12176ZM48.8987 18.8747C48.8969 19.2283 48.9782 19.5771 49.1357 19.8923C49.2932 20.2074 49.5225 20.4797 49.8043 20.6865C50.4084 21.17 51.1582 21.4261 51.9266 21.4115C53.079 21.4095 54.1836 20.9429 54.9985 20.1138C55.9033 19.2474 56.3553 18.2306 56.3553 17.0638C55.5041 16.3735 54.3166 16.0285 52.7932 16.0285C51.6838 16.0285 50.7588 16.3006 50.0182 16.8447C49.2701 17.3971 48.8987 18.0682 48.8987 18.8744V18.8747ZM73.9578 8.605L64.8387 29.9291H62.0195L65.4036 22.4679L59.407 8.605H62.3757L66.7096 19.2368H66.7691L70.9842 8.605H73.9578Z" fill="#5F6368"/>
                                        <path d="M23.9413 12.7577C23.9425 11.9106 23.8719 11.0656 23.7312 10.2309H12.2129V15.0171H18.8099C18.6749 15.7815 18.3891 16.5102 17.9699 17.1592C17.5506 17.8083 17.0066 18.3642 16.3705 18.7935V21.9H20.3075C22.6128 19.7374 23.941 16.5391 23.941 12.7577H23.9413Z" fill="#4285F4"/>
                                        <path d="M12.2126 24.9015C15.5085 24.9015 18.2838 23.8003 20.3075 21.9018L16.3705 18.795C15.2744 19.5509 13.8631 19.9827 12.2126 19.9827C9.02713 19.9827 6.32324 17.7974 5.35604 14.8532H1.30078V18.0547C2.31731 20.1128 3.87603 21.843 5.80293 23.052C7.72983 24.2611 9.94907 24.9014 12.2129 24.9015H12.2126Z" fill="#34A853"/>
                                        <path d="M5.35663 14.8529C4.84547 13.31 4.84547 11.6391 5.35663 10.0962V6.89471H1.3005C0.44536 8.62611 0 10.537 0 12.4747C0 14.4124 0.44536 16.3233 1.3005 18.0547L5.35605 14.8529H5.35663Z" fill="#FBBC04"/>
                                        <path d="M12.2132 4.96675C13.9549 4.93783 15.6379 5.60745 16.8983 6.83087L20.3844 3.28381C18.1739 1.17124 15.2454 0.0114596 12.2129 0.0476355C9.94904 0.0477696 7.72978 0.688123 5.80288 1.8972C3.87597 3.10629 2.31727 4.83651 1.30078 6.89469L5.35633 10.0962C6.32353 7.15205 9.02742 4.96675 12.2129 4.96675H12.2132Z" fill="#EA4335"/>
                                    </svg>
                                </button>
                                <button className="btn btn-payment-method">
                                    <svg width="80" height="26" viewBox="0 0 80 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M41.3741 8.27865C41.3284 11.8861 44.5813 13.899 47.0316 15.096C49.5491 16.3239 50.3947 17.1114 50.3847 18.2097C50.3659 19.8903 48.3766 20.6321 46.515 20.6609C43.2672 20.7113 41.3787 19.7819 39.8775 19.079L38.7075 24.5669C40.2137 25.2626 43.0028 25.8694 45.895 25.896C52.6841 25.896 57.1256 22.5367 57.1497 17.3282C57.1763 10.7179 48.0284 10.3521 48.0909 7.39746C48.1125 6.50156 48.9653 5.54552 50.8341 5.30243C51.7591 5.17964 54.3125 5.08566 57.2075 6.422L58.3438 1.11236C56.7869 0.544117 54.7859 -3.8147e-06 52.2947 -3.8147e-06C45.9047 -3.8147e-06 41.4103 3.40506 41.3741 8.27865ZM69.2619 0.457346C68.0222 0.457346 66.9775 1.18221 66.5112 2.29457L56.8134 25.506H63.5975L64.9475 21.7661H73.2375L74.0206 25.506H80L74.7822 0.457346H69.2619ZM70.2109 7.22392L72.1687 16.63H66.8069L70.2109 7.22392ZM33.1488 0.457659L27.8012 25.5057H34.2659L39.6109 0.457031H33.1488V0.457659ZM23.5853 0.457031L16.8566 17.5065L14.1347 3.01004C13.8153 1.39178 12.5541 0.457346 11.1534 0.457346H0.154062L0 1.18472C2.25812 1.6759 4.82375 2.46812 6.37813 3.31578C7.32937 3.83359 7.60063 4.28624 7.91313 5.5167L13.0684 25.506H19.9L30.3737 0.457346H23.5853" fill="url(#paint0_linear)"/>
                                        <defs>
                                        <linearGradient id="paint0_linear" x1="36.7792" y1="26.4155" x2="37.5306" y2="-0.18" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#222357"/>
                                        <stop offset="1" stop-color="#254AA5"/>
                                        </linearGradient>
                                        </defs>
                                    </svg>                                        
                                </button>
                                <button className="btn btn-payment-method">
                                    <svg width="106" height="35" viewBox="0 0 106 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0)">
                                        <path d="M57.5988 30.2568C57.4896 32.3116 56.5752 33.7174 54.8221 34.5705C54.3125 34.817 53.8379 34.6215 53.6063 34.0995C53.4273 33.6955 53.6326 33.2376 54.1116 33.0232C55.3536 32.4691 55.8982 31.333 55.8749 30.2626C55.8457 28.9603 55.0682 27.9672 53.8437 27.5399C52.6643 27.1301 51.4325 27.5282 50.5618 28.603C49.8934 29.4284 49.8366 30.8547 50.4234 31.8099C50.7481 32.3407 51.1777 32.7403 51.7426 33.0072C52.2755 33.258 52.4633 33.7218 52.2479 34.1811C52.028 34.6493 51.5067 34.7995 50.984 34.534C49.5804 33.8253 48.6602 32.7228 48.3791 31.158C47.9351 28.6847 49.477 26.4666 51.6989 25.8511C54.3256 25.1234 56.8475 26.7859 57.4357 29.1907C57.5275 29.5699 57.5551 29.9666 57.5988 30.2568Z" fill="#00AA11"/>
                                        <path d="M64.3047 27.7456C64.3193 27.5487 64.3295 27.3926 64.3426 27.2133C64.7968 27.2133 65.2337 27.2133 65.6981 27.2133C65.7083 27.3124 65.7273 27.4072 65.7273 27.502C65.7287 29.1062 65.736 30.7118 65.7244 32.3174C65.7156 33.3076 65.3341 34.1229 64.4503 34.6216C63.3437 35.2487 61.6169 35.0518 60.6282 34.2191C60.535 34.1404 60.4462 34.0572 60.337 33.9595C60.6311 33.6693 60.9194 33.3849 61.2368 33.0729C61.7304 33.4695 62.2837 33.6693 62.9302 33.6504C63.9276 33.6197 64.4197 33.0729 64.2901 32.0083C63.4544 32.6631 62.5342 32.6879 61.5979 32.3743C61.0403 32.1876 60.6005 31.8143 60.2875 31.2922C59.6279 30.1912 59.7983 28.7941 60.7112 27.941C61.6897 27.0266 63.169 26.9333 64.3047 27.7456ZM64.2479 29.8791C64.2479 28.9487 63.7441 28.4412 62.8268 28.4499C61.9634 28.4572 61.3824 29.0245 61.3504 29.812C61.3096 30.8401 61.9765 31.3024 62.8589 31.2908C63.766 31.2776 64.2479 30.7979 64.2479 29.8791Z" fill="black"/>
                                        <path d="M87.3005 27.1972C86.4647 27.9861 85.7032 28.7066 84.9301 29.4372C85.7163 30.4843 86.4851 31.508 87.3063 32.6018C86.7443 32.6018 86.2798 32.6163 85.8168 32.5916C85.7091 32.5857 85.5809 32.4705 85.5081 32.3728C85.0801 31.8011 84.668 31.2178 84.2487 30.6403C84.1788 30.5426 84.103 30.4493 83.9778 30.283C83.6764 30.6286 83.292 30.8999 83.161 31.2645C83.0241 31.6451 83.1304 32.1132 83.1304 32.6032C82.88 32.6032 82.663 32.6032 82.4461 32.6032C82.2393 32.6032 82.0311 32.6032 81.7909 32.6032C81.7807 32.4413 81.7676 32.3116 81.7676 32.1803C81.7661 30.1561 81.7763 28.1305 81.7559 26.1049C81.753 25.7155 81.8724 25.6032 82.2393 25.6426C82.5174 25.6732 82.7999 25.6484 83.126 25.6484C83.126 26.8793 83.126 28.0664 83.126 29.3541C83.5497 28.9705 83.9036 28.657 84.2501 28.3361C84.6039 28.0109 84.9475 27.6755 85.3028 27.3532C85.38 27.2832 85.4863 27.2059 85.5824 27.203C86.1182 27.1899 86.6555 27.1972 87.3005 27.1972Z" fill="black"/>
                                        <path d="M76.8376 30.3589C76.9221 30.9305 77.4681 31.368 78.0971 31.4176C78.6285 31.4599 79.1265 31.3826 79.5604 31.037C79.6303 30.9816 79.7788 30.9378 79.8385 30.9743C80.1297 31.1537 80.402 31.3607 80.7078 31.5766C79.7657 32.5172 78.6926 32.7753 77.4608 32.4705C76.4576 32.2226 75.731 31.6582 75.4951 30.6287C74.9841 28.3872 76.708 26.9055 78.6999 27.2439C79.856 27.4393 80.5753 28.1189 80.8461 29.2505C80.9276 29.5889 80.9043 29.952 80.932 30.3589C80.2084 30.3589 79.5342 30.3589 78.8601 30.3589C78.1961 30.3589 77.5307 30.3589 76.8376 30.3589ZM79.5124 29.3264C79.4192 28.6541 78.8848 28.3332 77.9864 28.3755C77.3429 28.4047 76.906 28.7722 76.874 29.3264C77.7476 29.3264 78.6184 29.3264 79.5124 29.3264Z" fill="black"/>
                                        <path d="M69.4024 27.1199C70.9953 27.1841 72.1791 28.1772 72.2985 29.7245C72.3786 30.7803 71.9155 31.6276 70.9895 32.1964C69.928 32.8483 68.2449 32.6733 67.3465 31.8041C65.9982 30.4989 66.4102 28.1976 68.1371 27.4758C68.5375 27.3081 68.9787 27.2366 69.4024 27.1199ZM70.8512 29.9024C70.8483 29.0245 70.2891 28.4441 69.4432 28.4499C68.4938 28.4572 67.9973 29.0697 67.9653 29.9053C67.9347 30.7089 68.622 31.3535 69.4272 31.3476C70.2877 31.3403 70.8541 30.7658 70.8512 29.9024Z" fill="black"/>
                                        <path d="M73.1336 27.2001C73.6213 27.2001 74.0509 27.2001 74.5401 27.2001C74.5401 27.3211 74.5401 27.4378 74.5401 27.5545C74.5401 29.5072 74.5401 31.4599 74.5387 33.4126C74.5387 34.397 73.965 34.9701 72.9807 34.973C72.6021 34.9745 72.2221 34.9745 71.8027 34.9745C71.8027 34.7426 71.8027 34.5486 71.8027 34.3547C71.8027 34.1593 71.8027 33.9624 71.8027 33.6984C72.0561 33.6984 72.2861 33.7072 72.5147 33.6955C73.0346 33.6707 73.1336 33.5643 73.1336 33.0509C73.1336 31.247 73.1336 29.443 73.1336 27.6391C73.1336 27.5049 73.1336 27.3722 73.1336 27.2001Z" fill="black"/>
                                        <path d="M51.2246 30.2772C51.1183 29.4868 52.1186 28.5359 52.9675 28.5914C53.9081 28.6541 54.6856 29.3876 54.6798 30.3282C54.674 31.2645 53.8615 32.0914 52.9267 32.0666C51.9905 32.0418 51.1693 31.2995 51.2246 30.2772Z" fill="#00AA11"/>
                                        <path d="M18.6914 27.8549H20.1431C20.9337 27.8549 21.4011 28.3012 21.4011 29.0172C21.4011 29.7449 20.9395 30.1708 20.1431 30.1708H19.1326V31.6247H18.6914V27.8549ZM20.1169 29.7508C20.692 29.7508 20.9556 29.5189 20.9556 29.0172C20.9556 28.517 20.6804 28.2749 20.1169 28.2749H19.1326V29.7508H20.1169Z" fill="black"/>
                                        <path d="M22.9612 28.6891C23.7678 28.6891 24.3065 29.2972 24.3065 30.197C24.3065 31.0968 23.7678 31.7049 22.9612 31.7049C22.1603 31.7049 21.623 31.0968 21.623 30.197C21.623 29.2972 22.1603 28.6891 22.9612 28.6891ZM22.9612 29.0828C22.3977 29.0828 22.0424 29.513 22.0424 30.197C22.0424 30.881 22.3977 31.3112 22.9612 31.3112C23.5261 31.3112 23.8872 30.881 23.8872 30.197C23.8872 29.513 23.5261 29.0828 22.9612 29.0828Z" fill="black"/>
                                        <path d="M24.5781 28.7693H24.9916L25.5071 30.9889H25.5187L26.2817 28.7693H26.6632L27.4276 30.9889H27.4378L27.9547 28.7693H28.3682L27.6853 31.6247H27.2878L26.4812 29.2928H26.4695L25.6585 31.6247H25.2596L24.5781 28.7693Z" fill="black"/>
                                        <path d="M29.9583 28.6891C30.7228 28.6891 31.2324 29.2651 31.2324 30.1051V30.321H29.0658C29.0774 30.8708 29.4269 31.3228 29.9481 31.3228C30.3515 31.3228 30.5772 31.177 30.8189 30.7512L31.1683 30.9612C30.9266 31.4512 30.5131 31.7049 29.9583 31.7049C29.1677 31.7049 28.6406 31.0968 28.6406 30.197C28.6406 29.2972 29.1852 28.6891 29.9583 28.6891ZM30.8087 29.9812C30.8028 29.7172 30.7169 29.5028 30.5611 29.3293C30.4053 29.1572 30.2059 29.0712 29.9583 29.0712C29.4749 29.0712 29.0876 29.5028 29.0774 29.9812H30.8087Z" fill="black"/>
                                        <path d="M31.832 28.7693H32.2295V29.007H32.2397C32.3475 28.8291 32.5571 28.7212 32.8309 28.7212C32.9168 28.7212 33.0144 28.7372 33.1163 28.7649L33.0245 29.201C32.9226 29.1689 32.8265 29.1528 32.745 29.1528C32.4072 29.1528 32.2499 29.3789 32.2499 29.9112V31.6247H31.832V28.7693Z" fill="black"/>
                                        <path d="M34.6263 28.6891C35.3893 28.6891 35.9003 29.2651 35.9003 30.1051V30.321H33.7338C33.7439 30.8708 34.0934 31.3228 34.6147 31.3228C35.018 31.3228 35.2451 31.177 35.4868 30.7512L35.8363 30.9612C35.5946 31.4512 35.1796 31.7049 34.6263 31.7049C33.8357 31.7049 33.3086 31.0968 33.3086 30.197C33.3086 29.2972 33.8517 28.6891 34.6263 28.6891ZM35.4752 29.9812C35.4708 29.7172 35.3849 29.5028 35.2291 29.3293C35.0719 29.1572 34.8738 29.0712 34.6263 29.0712C34.1429 29.0712 33.7556 29.5028 33.7439 29.9812H35.4752Z" fill="black"/>
                                        <path d="M37.6685 28.6891C38.0136 28.6891 38.3194 28.8349 38.5072 29.0711H38.5189V27.693H38.9382V31.6247H38.5349V31.3389H38.5232C38.3354 31.5707 38.018 31.7049 37.6685 31.7049C36.9274 31.7049 36.3887 31.0851 36.3887 30.197C36.3887 29.3089 36.9274 28.6891 37.6685 28.6891ZM38.5189 29.917C38.5189 29.4532 38.1417 29.0828 37.6685 29.0828C37.1575 29.0828 36.808 29.5232 36.808 30.197C36.808 30.8707 37.1575 31.3111 37.6962 31.3111C38.1476 31.3111 38.5189 30.9349 38.5189 30.4711V29.917Z" fill="black"/>
                                        <path d="M41.5034 31.3389V31.6247H41.1016V27.693H41.5194V29.0711H41.5311C41.7189 28.8349 42.0261 28.6891 42.3698 28.6891C43.1124 28.6891 43.6496 29.3089 43.6496 30.197C43.6496 31.0851 43.1124 31.7049 42.3698 31.7049C42.0203 31.7049 41.7029 31.5707 41.5151 31.3389H41.5034ZM42.3698 29.0828C41.8966 29.0828 41.5194 29.4532 41.5194 29.917V30.4711C41.5194 30.9349 41.8907 31.3111 42.3421 31.3111C42.8808 31.3111 43.2303 30.8707 43.2303 30.197C43.2303 29.5232 42.8808 29.0828 42.3698 29.0828Z" fill="black"/>
                                        <path d="M44.8855 31.3812L43.7891 28.7693H44.2361L45.101 30.897H45.1112L45.9833 28.7693H46.4289L44.7195 32.8351H44.2841L44.8855 31.3812Z" fill="black"/>
                                        <path d="M11.5654 0.00949097C17.9516 0.00949097 23.1293 5.01449 23.1293 11.1876C23.1293 17.3607 17.9516 22.3657 11.5654 22.3657C5.17769 22.3657 0 17.3607 0 11.1876C0 5.01449 5.17769 0.00949097 11.5654 0.00949097Z" fill="#00AED6"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.311 10.8434C18.2222 9.4201 16.97 8.32927 15.4965 8.39343H8.19152C7.92506 8.39343 7.70957 8.18489 7.70957 7.92677C7.70957 7.6701 7.92506 7.46156 8.19152 7.46156H15.5926C15.5504 6.4976 14.8689 5.66927 13.9065 5.4126C11.7486 5.03927 9.53982 5.03927 7.38196 5.4126C6.15597 5.70427 5.23866 6.6901 5.06976 7.89906C4.73196 10.0924 4.73196 12.3207 5.06976 14.5126C5.32748 15.793 6.37874 16.7832 7.70957 17.0005C10.3843 17.3257 13.0911 17.3257 15.7659 17.0005C16.9584 16.7672 17.8597 15.8207 18.0023 14.6526C18.247 13.397 18.3503 12.1195 18.311 10.8434ZM15.9013 12.4082V12.818C15.9013 13.0747 15.6858 13.2832 15.4193 13.2832C15.1529 13.2832 14.9374 13.0747 14.9374 12.818V12.4082C14.7816 12.277 14.6942 12.0859 14.6971 11.8861C14.6971 11.4997 15.0204 11.1876 15.4193 11.1876C15.8183 11.1876 16.1415 11.4997 16.1415 11.8861C16.1401 12.0845 16.0527 12.2741 15.9013 12.4082Z" fill="white"/>
                                        <path d="M56.0688 9.93052C56.0848 7.97052 54.4541 6.36927 52.4258 6.35323C50.3975 6.33865 48.742 7.91365 48.726 9.87365C48.71 11.8336 50.3408 13.4364 52.369 13.4509C52.388 13.4509 52.4069 13.4509 52.4258 13.4509C54.3492 13.5516 55.9931 12.1239 56.0965 10.2645C56.1023 10.1536 56.1023 10.0414 56.098 9.93052H56.0688ZM45.1602 9.93052C45.1602 6.20448 48.2047 3.36365 52.4258 3.36365C56.6469 3.36365 59.6929 6.22198 59.6929 9.93052C59.6929 13.6376 56.676 16.5061 52.4258 16.5061C48.1756 16.5061 45.1602 13.6464 45.1602 9.93052Z" fill="black"/>
                                        <path d="M39.377 10.6101C39.377 12.1472 37.7578 13.4043 35.7063 13.4043C33.8207 13.5895 32.1375 12.2609 31.9468 10.438C31.9278 10.2543 31.9249 10.0691 31.938 9.88386C31.938 7.8524 33.48 6.45532 35.8504 6.45532C37.7782 6.45532 39.377 7.73136 39.377 9.17511V10.6101ZM39.5211 3.35345V4.8249C38.349 3.79532 36.7954 3.26886 35.2141 3.36365C31.475 3.39574 28.4726 6.35324 28.5061 9.96699C28.5411 13.5807 31.6002 16.4843 35.3394 16.4507C36.8784 16.5178 38.3767 15.9607 39.4731 14.9137V16.1707C39.4731 17.8755 37.9515 19.1239 35.9465 19.1239C34.4162 19.2303 32.9078 18.7184 31.7837 17.7078L29.4409 19.888C31.1969 21.5534 33.5834 22.4489 36.0426 22.3657C40.1487 22.3657 42.9618 19.7014 42.9618 16.1532V3.35345H39.5211Z" fill="black"/>
                                        <path d="M61.8145 3.73553H65.2638V4.83512H65.3119C66.4432 3.83761 67.9371 3.31553 69.466 3.38116C73.2211 3.51824 76.1507 6.57199 76.0094 10.2003C75.8755 13.6391 73.0231 16.3953 69.466 16.5251C68.0056 16.5572 66.5801 16.0935 65.4371 15.2112V21.4339H61.8436L61.8145 3.73553ZM68.9069 6.45532C66.979 6.45532 65.4094 7.75032 65.4094 9.15762V10.7312C65.4094 12.2303 66.9601 13.4699 68.9258 13.4699C70.9308 13.5691 72.6387 12.0801 72.7421 10.1435C72.8455 8.20678 71.305 6.55595 69.3 6.45532C69.1762 6.44949 69.051 6.44949 68.9258 6.45532H68.9069Z" fill="black"/>
                                        <path d="M82.9096 8.72887C85.2713 8.42116 85.9746 8.09449 85.9746 7.46157C85.9746 6.64199 85.0792 6.14761 83.6901 6.14761C82.1947 6.02949 80.8333 6.98324 80.481 8.39345L77.0898 7.71241C77.5718 5.17928 80.2698 3.37241 83.594 3.37241C87.3535 3.37241 89.6846 5.2347 89.6846 8.25345V16.162H86.4566V14.7839H86.4085C85.3136 15.9753 83.7076 16.6082 82.0622 16.4974C79.2186 16.4974 77.2427 14.9968 77.2427 12.7714C77.2427 10.5445 78.8618 9.26845 82.9096 8.72887ZM86.2644 10.0414H86.2163C85.8975 10.4891 85.2524 10.7501 83.4688 11.0476C81.359 11.4297 80.5785 11.8307 80.5785 12.557C80.5785 13.2832 81.2046 13.6376 82.5631 13.6376C84.6351 13.6376 86.2353 12.7057 86.2353 11.523L86.2644 10.0414Z" fill="black"/>
                                        <path d="M96.1906 15.4635L90.2441 3.73553H94.206L98.1082 11.8585H98.1665L102.021 3.73553H106.001L97.0963 21.4339H93.1358L96.1906 15.4635Z" fill="black"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0">
                                        <rect width="106" height="35" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                                <button className="btn btn-payment-method">
                                    <svg width="31" height="37" viewBox="0 0 31 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.2974 2.88C24.61 0.934191 21.5599 0.0999756 17.6579 0.0999756H6.33324C5.94717 0.09999 5.57378 0.239343 5.28018 0.492981C4.98658 0.746618 4.79204 1.0979 4.73153 1.48368L0.0161428 31.7412C-0.0775838 32.3379 0.379061 32.8782 0.976779 32.8782H7.96825L9.72411 21.6102L9.66961 21.9631C9.79471 21.1666 10.468 20.5791 11.2653 20.5791H14.5876C21.1143 20.5791 26.2248 17.897 27.7177 10.1381C27.762 9.90865 27.8004 9.6853 27.8336 9.4671C27.6451 9.36615 27.6451 9.36615 27.8336 9.4671C28.2781 6.59936 27.8305 4.6473 26.2974 2.88Z" fill="#27346A"/>
                                        <path d="M12.3993 8.43404C12.5904 8.34196 12.7995 8.29424 13.0112 8.29437H21.8896C22.9409 8.29437 23.9215 8.3636 24.8176 8.50951C25.0683 8.54996 25.3178 8.59826 25.5656 8.65433C25.9168 8.73274 26.264 8.8287 26.6058 8.94187C27.0463 9.09073 27.4566 9.26409 27.8337 9.4671C28.2781 6.59825 27.8305 4.6473 26.2974 2.88C24.6091 0.934191 21.5599 0.0999756 17.6579 0.0999756H6.33227C5.53487 0.0999756 4.8565 0.68732 4.73153 1.48368L0.0161434 31.7401C-0.0775831 32.3378 0.379061 32.8773 0.975811 32.8773H7.96825L11.6111 9.50484C11.6469 9.2751 11.7374 9.05762 11.8747 8.87109C12.012 8.68456 12.192 8.53458 12.3993 8.43404Z" fill="#27346A"/>
                                        <path d="M27.7176 10.1381C26.2247 17.8959 21.1143 20.5791 14.5875 20.5791H11.2642C10.4669 20.5791 9.79352 21.1666 9.66964 21.9631L7.48523 35.9734C7.40361 36.4956 7.80274 36.9688 8.3249 36.9688H14.2185C14.5561 36.9687 14.8826 36.8467 15.1393 36.6248C15.396 36.4029 15.566 36.0957 15.6187 35.7583L15.6761 35.4545L16.7869 28.3318L16.8585 27.9382C16.9112 27.6008 17.0812 27.2936 17.3379 27.0717C17.5945 26.8498 17.921 26.7278 18.2586 26.7277H19.1406C24.8498 26.7277 29.3203 24.381 30.6266 17.5941C31.1719 14.7579 30.8897 12.3899 29.4473 10.7266C29.0098 10.2228 28.4664 9.80672 27.8335 9.4671C27.7992 9.68641 27.762 9.90865 27.7176 10.1381Z" fill="#2790C3"/>
                                        <path d="M26.2725 8.83688C26.0397 8.76811 25.8048 8.70723 25.568 8.65433C25.32 8.59918 25.0706 8.55121 24.82 8.5105C23.9229 8.3636 22.943 8.29425 21.8907 8.29425H13.0135C12.8016 8.29377 12.5924 8.3419 12.4016 8.43503C12.1941 8.53525 12.0138 8.68515 11.8764 8.87173C11.7391 9.05831 11.6487 9.27596 11.6132 9.50582L9.72637 21.6102L9.67188 21.9631C9.796 21.1666 10.4693 20.5791 11.2667 20.5791H14.59C21.1167 20.5791 26.2271 17.897 27.7199 10.1381C27.7644 9.90865 27.8017 9.68629 27.8359 9.46711C27.4579 9.2652 27.0487 9.09073 26.608 8.94286C26.4969 8.90556 26.385 8.87023 26.2726 8.83688" fill="#1F264F"/>
                                    </svg>
                                </button>
                                <button className="btn btn-payment-method">
                                    <img src={logoDana} width="90" alt="dana-payment-method"/>           
                                </button>
                                <button className="btn btn-payment-method">
                                    <svg width="85" height="28" viewBox="0 0 85 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0931 0.957825C14.0653 0.957825 14.0375 0.957825 14.0097 0.957825C10.2764 0.957825 6.68428 1.83045 3.20336 3.59088C1.79062 6.97174 0.99392 10.4086 0.952232 13.9155C0.896649 17.3943 1.60881 20.9572 3.18831 24.5912C6.82324 26.1824 10.4582 26.9991 14.0931 27.0422C17.728 26.9991 21.363 26.1824 24.9967 24.5912C26.5774 20.9572 27.2896 17.3943 27.234 13.9155C27.1923 10.4086 26.3956 6.97174 24.9828 3.59088C21.5019 1.83045 17.9098 0.957825 14.1765 0.957825C14.1487 0.957825 14.1209 0.957825 14.0931 0.957825Z" fill="#FEFEFE"/>
                                        <path d="M2.61669 2.81738C6.27942 0.929795 10.0811 0 14.0102 0C14.0379 0 14.0657 0 14.0935 0C14.1213 0 14.1491 0 14.1769 0C18.106 0 21.9076 0.929795 25.5704 2.81738L25.795 3.05654C27.29 6.60539 28.1434 10.2254 28.1851 13.9014C28.1851 13.9714 28.1851 14.0274 28.1851 14.0986V14.3517C28.1712 17.8866 27.4162 21.4926 25.795 25.1546L25.5426 25.3938C21.727 27.0982 17.9103 27.9568 14.0935 28C10.2768 27.9568 6.46006 27.0982 2.64449 25.3938L2.39204 25.1546C0.770858 21.4926 0.015849 17.8866 0.00195312 14.3517V14.0986C0.00195312 14.0274 0.00195312 13.9714 0.00195312 13.9014C0.0436408 10.2254 0.897079 6.60539 2.39204 3.05654L2.61669 2.81738ZM14.0935 0.957793C14.0657 0.957793 14.0379 0.957793 14.0102 0.957793C10.2768 0.957793 6.68471 1.83042 3.2038 3.59085C1.79105 6.97171 0.99435 10.4086 0.952663 13.9154C0.897079 17.3943 1.60924 20.9571 3.18874 24.5911C6.82367 26.1824 10.4586 26.999 14.0935 27.0422C17.7285 26.999 21.3634 26.1824 24.9972 24.5911C26.5778 20.9571 27.29 17.3943 27.2344 13.9154C27.1927 10.4086 26.396 6.97171 24.9833 3.59085C21.5023 1.83042 17.9103 0.957793 14.1769 0.957793C14.1491 0.957793 14.1213 0.957793 14.0935 0.957793Z" fill="#003399"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3439 21.8169C14.1482 19.1267 14.2744 16.3233 13.4777 13.7602C12.7366 11.3663 9.92617 10.0002 9.87058 7.36601C9.815 5.30926 11.3667 2.92936 14.2744 2.92936C17.0003 2.91536 18.6922 4.91495 18.8879 7.14085C19.1252 9.71791 16.0218 11.4503 15.2112 13.9014C14.3717 16.4085 14.6102 19.1827 14.3439 21.8169Z" fill="#003399"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4217 21.1683C15.3093 18.8304 15.3093 16.5917 15.9532 14.6049C16.6654 12.3522 18.1476 10.4506 20.4126 9.83111C21.9643 9.4088 24.2421 11.2392 23.8796 13.1128C23.5716 14.6201 22.0755 16.3945 19.6715 16.5917C18.5529 16.6897 18.0781 17.5915 17.3787 18.1129C20.5099 17.8026 22.5375 16.5637 23.9491 15.2676C24.1587 16.3653 24.2988 18.2109 23.4454 18.8444C21.7686 20.0414 20.2169 19.0696 18.2448 19.633C17.1413 19.9574 16.4558 20.662 15.4217 21.1683Z" fill="#003399"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.284 21.1683C13.4091 18.8304 13.3952 16.5917 12.7664 14.6049C12.0531 12.3522 10.572 10.4506 8.307 9.83111C6.75529 9.4088 4.46247 11.2392 4.83997 13.1128C5.148 14.6201 6.64296 16.3945 9.04811 16.5917C10.1528 16.6897 10.6415 17.5915 11.3409 18.1129C8.19467 17.8026 6.18208 16.5637 4.7705 15.2676C4.5609 16.3653 4.42078 18.2109 5.27306 18.8444C6.95099 20.0414 8.5027 19.0696 10.4736 19.633C11.5783 19.9574 12.2488 20.662 13.284 21.1683Z" fill="#003399"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7341 24.6471V24.2668L21.0143 24.1968L20.7341 23.7745V23.0699L21.9928 24.8303L21.5458 24.9434L21.2378 24.506L20.7341 24.6471ZM20.7341 23.0699V23.7745L20.5384 23.4922L20.455 24.338L20.7341 24.2668V24.6471L20.4133 24.7183L20.3566 25.2386L19.9096 25.3518L20.2037 23.0559L20.6507 22.9427L20.7341 23.0699ZM16.5688 25.8732V25.5069H16.6661C16.8201 25.4929 16.9185 25.4789 16.9602 25.4638C17.0158 25.4498 17.0714 25.4078 17.1003 25.3658C17.142 25.3098 17.1559 25.2526 17.1559 25.1826C17.142 25.1126 17.1281 25.0554 17.0853 25.0134C17.0575 24.9714 17.0019 24.9434 16.9463 24.9294C16.8907 24.9154 16.7645 24.9154 16.5688 24.9294V24.5631C16.68 24.5631 16.7506 24.5491 16.7784 24.5491C16.8479 24.5351 16.9046 24.492 16.9463 24.45C16.988 24.408 17.0019 24.352 16.988 24.2808C16.988 24.2108 16.9602 24.1548 16.9185 24.1256C16.8907 24.0836 16.834 24.0556 16.7506 24.0556C16.7228 24.0556 16.6661 24.0556 16.5688 24.0696V23.7033C16.7228 23.6893 16.834 23.6893 16.9046 23.7033C16.988 23.7033 17.0714 23.7325 17.142 23.7745C17.2115 23.8025 17.2671 23.8585 17.3238 23.9285C17.3655 23.9996 17.3933 24.0836 17.4072 24.1828C17.4211 24.2808 17.3933 24.38 17.3516 24.464C17.3099 24.5491 17.2393 24.6191 17.142 24.6751C17.281 24.7043 17.3933 24.7603 17.4628 24.8443C17.5473 24.9294 17.589 25.0274 17.6029 25.1546C17.6029 25.2526 17.589 25.3518 17.5612 25.4498C17.5195 25.5489 17.4628 25.6189 17.3933 25.6901C17.3099 25.7461 17.2254 25.7881 17.1142 25.8161C17.0436 25.8301 16.8618 25.8441 16.5966 25.8732H16.5688ZM19.2102 24.6891L19.6444 24.7463C19.6166 24.9854 19.546 25.1826 19.4209 25.3238C19.2947 25.4498 19.1129 25.5489 18.8894 25.5909C18.6092 25.6329 18.3579 25.5769 18.1483 25.4218C17.9248 25.2526 17.7986 25.0134 17.7291 24.6751C17.6724 24.324 17.7152 24.0276 17.8681 23.8025C18.0082 23.5773 18.2317 23.4362 18.5258 23.3802C18.791 23.337 19.0006 23.3802 19.1963 23.5062C19.3086 23.5773 19.4059 23.6893 19.4765 23.8585L19.0712 24.0276C19.0295 23.9285 18.9589 23.8445 18.8755 23.8025C18.7771 23.7465 18.6798 23.7325 18.5675 23.7465C18.4135 23.7745 18.3023 23.8585 18.2178 23.9856C18.1344 24.1256 18.1205 24.31 18.1622 24.5631C18.2178 24.8303 18.3023 25.0134 18.4135 25.1126C18.5258 25.2106 18.6659 25.2526 18.8188 25.2246C18.9311 25.1966 19.0156 25.1406 19.0851 25.0554C19.1546 24.9714 19.1963 24.8443 19.2102 24.6891ZM16.5688 23.7033V24.0696C16.5132 24.0696 16.4565 24.0836 16.387 24.0836L16.1357 24.1128L16.1774 24.6051L16.4704 24.5771C16.4982 24.5771 16.541 24.5771 16.5688 24.5631V24.9294C16.5688 24.9294 16.5688 24.9294 16.5549 24.9294L16.2191 24.9574L16.2608 25.5349L16.5688 25.5069V25.8732L15.8694 25.9432L15.6737 23.7885L16.5271 23.7185C16.541 23.7033 16.5549 23.7033 16.5688 23.7033ZM13.8707 25.1266V24.7603C13.9679 24.7603 14.0247 24.7463 14.0664 24.7323C14.122 24.7183 14.1636 24.6751 14.2065 24.6331C14.2343 24.5771 14.2482 24.5211 14.2482 24.464C14.2621 24.38 14.2343 24.324 14.1914 24.2668C14.1497 24.2108 14.0942 24.1828 14.0247 24.1688C13.9818 24.1688 13.9402 24.1548 13.8707 24.1548V23.7885C14.0803 23.7885 14.2065 23.8025 14.276 23.8305C14.4022 23.8585 14.4995 23.9285 14.584 24.0416C14.6674 24.1548 14.7091 24.2948 14.6952 24.464C14.6952 24.5911 14.6674 24.7043 14.6257 24.8023C14.5689 24.8863 14.5134 24.9574 14.4439 25.0134C14.3593 25.0554 14.2899 25.0834 14.2065 25.1126C14.122 25.1266 14.0108 25.1266 13.8707 25.1266ZM13.8707 23.7885V24.1548C13.829 24.1548 13.7722 24.1548 13.7028 24.1548L13.4932 24.1408V24.7603H13.7167C13.7722 24.7603 13.829 24.7603 13.8707 24.7603V25.1266C13.8429 25.1266 13.8 25.1266 13.7583 25.1266H13.4793L13.4654 25.9432L13.0311 25.9292L13.074 23.7745L13.7583 23.7885C13.8 23.7885 13.8429 23.7885 13.8707 23.7885ZM9.83044 24.9154V24.2528C9.95666 24.2808 10.04 24.2808 10.0817 24.2808C10.1385 24.2668 10.1802 24.2528 10.2218 24.2108C10.2496 24.1688 10.2774 24.1256 10.2913 24.0556C10.3052 23.9856 10.2913 23.9285 10.2635 23.8725C10.2357 23.8165 10.1802 23.7885 10.1095 23.7605C10.0817 23.7465 9.98445 23.7325 9.83044 23.7033V23.337L10.0122 23.3662C10.2357 23.4082 10.3898 23.4502 10.487 23.5062C10.5855 23.5633 10.6549 23.6473 10.6966 23.7605C10.7395 23.8585 10.7534 23.9856 10.7256 24.1128C10.6966 24.2668 10.6271 24.394 10.516 24.478C10.4175 24.5631 10.2635 24.6051 10.0678 24.6051C10.1524 24.6751 10.2218 24.7463 10.2635 24.8163C10.3191 24.9014 10.3759 25.0274 10.4453 25.2106L10.6271 25.6761L10.1234 25.5769L9.89992 25.0554C9.87213 25.0134 9.85823 24.9574 9.83044 24.9154ZM11.0602 23.5773L11.4794 23.6193L11.3821 24.7883C11.3683 24.9714 11.3683 25.0986 11.3683 25.1406C11.3821 25.2386 11.4238 25.3098 11.4794 25.3658C11.5501 25.4358 11.6334 25.4638 11.7597 25.4789C11.8859 25.4929 11.9831 25.4638 12.0387 25.4218C12.1094 25.3798 12.1511 25.3238 12.1788 25.2526C12.1927 25.1826 12.2066 25.0554 12.2205 24.8863L12.319 23.6893L12.7521 23.7325L12.6548 24.8583C12.6409 25.1266 12.6119 25.3098 12.5702 25.4078C12.5425 25.5069 12.4869 25.6049 12.4301 25.6609C12.3607 25.7321 12.2634 25.7881 12.1511 25.8161C12.0526 25.8592 11.9137 25.8592 11.7458 25.8441C11.5362 25.8301 11.3821 25.7881 11.2837 25.7321C11.1864 25.6761 11.1019 25.6049 11.0463 25.5349C10.9907 25.4498 10.963 25.3658 10.9491 25.2818C10.9352 25.1546 10.9352 24.9714 10.9491 24.7323L11.0602 23.5773ZM7.66384 24.2108L7.74722 23.8585L8.65624 24.0976L8.43275 24.9294C8.32042 24.9994 8.1803 25.0414 7.9846 25.0554C7.8028 25.0694 7.63605 25.0554 7.46814 25.0134C7.24349 24.9574 7.06284 24.8583 6.93662 24.7323C6.79651 24.5911 6.71313 24.422 6.67144 24.2388C6.64249 24.0416 6.64249 23.8445 6.69923 23.6473C6.75482 23.4362 6.85209 23.253 6.99221 23.0979C7.11843 22.9579 7.28634 22.8727 7.48204 22.8307C7.63605 22.7887 7.8167 22.8027 8.01355 22.8587C8.26484 22.9287 8.46054 23.0279 8.57171 23.183C8.68403 23.323 8.73961 23.5062 8.72572 23.7033L8.29263 23.6753C8.29263 23.5633 8.26484 23.4642 8.1942 23.3802C8.12472 23.309 8.04135 23.239 7.91513 23.211C7.73332 23.169 7.57931 23.183 7.43919 23.267C7.30023 23.3522 7.2018 23.5202 7.13232 23.7465C7.06284 23.9996 7.07674 24.1968 7.14622 24.352C7.22959 24.506 7.35581 24.6051 7.52372 24.6471C7.62099 24.6751 7.70553 24.6751 7.8028 24.6751C7.90123 24.6611 7.9846 24.6331 8.06914 24.6051L8.13862 24.338L7.66384 24.2108ZM9.83044 23.337L9.10322 23.211L8.73961 25.3378L9.15881 25.4078L9.31282 24.5211L9.41125 24.5351C9.50852 24.5491 9.57916 24.5771 9.62085 24.5911C9.66253 24.6191 9.69032 24.6611 9.73201 24.7043C9.74591 24.7463 9.78875 24.8163 9.83044 24.9154V24.2528C9.78875 24.2528 9.74591 24.2388 9.69033 24.2388L9.38346 24.1828L9.46683 23.6473L9.80265 23.7033C9.81655 23.7033 9.83044 23.7033 9.83044 23.7033V23.337Z" fill="#003399"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M76.4582 20.704V16.7317H78.1917V9.74595L76.4582 13.2388V4.52067H83.266L84.9995 24.6052H78.1917V20.704H76.4582ZM76.4582 4.52067V13.2388L74.7247 16.7317H76.4582V20.704H73.1868L71.8447 24.394H67.6227V19.8022L72.3334 9.56279H71.3688L74.053 4.52067H76.4582ZM67.6227 11.2112L69.7337 6.1691L67.6227 4.98615V11.2112ZM50.833 9.28164C50.9314 8.70416 50.9314 8.14068 50.833 7.60521V9.28164ZM67.6227 4.98615V11.2112L67.3436 11.8867C63.1772 8.88732 57.0259 11.6195 56.6762 14.7881C56.3277 18.0978 58.8301 20.774 65.2187 18.7744L63.0232 24.6892C54.5941 25.633 51.3228 22.2673 50.833 18.3381V16.1122C50.9592 15.0844 51.2244 14.0846 51.588 13.1548C55.7406 2.76024 62.4777 5.09814 65.0369 4.90098L65.4144 3.74603L67.6227 4.98615ZM67.6227 19.8022L65.5117 24.394H67.6227V19.8022ZM43.2563 24.2668C47.7713 23.3662 52.2029 17.9006 47.7574 13.5491C49.4909 12.6193 50.5678 10.9441 50.833 9.28164V7.60521C50.5261 5.87278 49.1979 4.46467 46.6955 4.42267L43.2563 4.35151V8.21068H44.6817C46.2057 8.21068 46.01 12.183 44.1085 12.183H43.2563V15.2256C45.3117 15.6199 44.5845 18.4921 43.2563 19.3799V24.2668ZM50.833 16.1122V18.3381C50.7496 17.6055 50.7496 16.8588 50.833 16.1122ZM37.3007 4.22551L34.5192 9.66195L35.7629 9.56279L32.4082 24.394H42.0126C42.4318 24.394 42.8371 24.352 43.2563 24.2668V19.3799C43.0189 19.549 42.7525 19.647 42.4874 19.647H39.0342L40.1806 15.1824H42.7664C42.9482 15.1824 43.1161 15.1964 43.2563 15.2256V12.183H40.8511L41.8157 8.21068H43.2563V4.35151L37.3007 4.22551Z" fill="#003399"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0">
                                        <rect width="85" height="28" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                                <button className="btn btn-payment-method">
                                    <svg width="45" height="38" viewBox="0 0 45 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.94297 3.87545C8.94297 1.73525 10.6856 0 12.835 0H32.1887C34.3381 0 36.0792 1.73525 36.0792 3.87545V23.1467C36.0792 25.2869 34.3381 27.0222 32.1887 27.0222H12.835C10.6856 27.0222 8.94297 25.2869 8.94297 23.1467V3.87545ZM13.6769 24.3742C12.5316 24.3742 11.6023 23.4489 11.6023 22.3068V4.72014C11.6023 3.57965 12.5316 2.65429 13.6769 2.65429H16.0439C19.1639 2.65429 21.4737 5.80052 19.4785 7.79045L13.6912 13.5609L18.6587 18.743C21.067 21.2549 18.2457 24.3742 15.5737 24.3742H13.6769ZM21.1894 2.65429H23.1894C26.3078 2.65429 28.6176 5.80052 26.6239 7.79045L20.8351 13.5609L31.4754 24.3695L20.2473 24.3679C22.6588 24.3679 24.1822 20.3264 21.6008 17.6499L17.6579 13.5609L22.2474 8.85027C24.7192 6.31303 22.9257 3.04816 21.1894 2.65429ZM33.4183 22.3068L24.8018 13.5609L29.3928 8.85027C31.8646 6.31303 30.0695 3.04816 28.3332 2.65429H31.3388C32.4858 2.65429 33.4151 3.57965 33.4151 4.72014L33.4183 22.3068ZM1.77846 35.1891V36.7646H2.48379C2.85075 36.7646 3.12875 36.695 3.3178 36.559C3.50684 36.4229 3.60215 36.2236 3.60215 35.9626C3.60215 35.7048 3.51478 35.5118 3.34162 35.3821C3.16847 35.254 2.90953 35.1891 2.56481 35.1891H1.77846ZM1.77846 32.5032V34.0012H2.32334C2.70301 34.0012 2.98578 33.9363 3.17482 33.8098C3.36228 33.6816 3.456 33.4871 3.456 33.2261C3.456 32.9888 3.36863 32.8101 3.19071 32.6867C3.01438 32.5649 2.75226 32.5032 2.40913 32.5032H1.77846ZM0.0214844 31.2947H2.77768C3.59262 31.2947 4.20581 31.4402 4.61567 31.7313C5.02711 32.0239 5.23204 32.4573 5.23204 33.0331C5.23204 33.4191 5.12401 33.7417 4.90956 33.998C4.6951 34.2543 4.38215 34.4393 3.9707 34.5516C4.43298 34.6371 4.78723 34.8174 5.03505 35.0926C5.28287 35.3679 5.40678 35.719 5.40678 36.1461C5.40678 36.7757 5.1812 37.2423 4.72846 37.546C4.2773 37.8481 3.5815 38 2.64106 38H0.0214844V31.2947H0.0214844ZM9.25115 32.7911L8.37902 35.3046H10.0947L9.25115 32.7911ZM8.20428 31.2947H10.3695L12.9192 38H11.0002L10.522 36.5795H7.92945L7.42746 38H5.65142L8.20428 31.2947ZM13.3068 31.2947H15.5483L17.4975 35.3157C17.5642 35.4501 17.6421 35.6383 17.731 35.8788C17.8184 36.1192 17.9169 36.415 18.0233 36.7646C17.9677 36.434 17.9248 36.1303 17.8978 35.8535C17.8708 35.5767 17.8581 35.3236 17.8581 35.0942V31.2947H19.4785V38H17.2465L15.2211 33.8335C15.1273 33.6421 15.04 33.4333 14.9605 33.2087C14.8827 32.9841 14.8096 32.7389 14.7429 32.4747C14.8064 32.8749 14.8525 33.2419 14.8827 33.5772C14.9129 33.911 14.9288 34.2068 14.9288 34.4615V38H13.3068V31.2947ZM20.7525 31.2947H22.5476V34.1926L24.6334 31.2947H26.643L24.1695 34.3761L26.8955 38H24.6652L22.5476 34.8901V38H20.7525V31.2947ZM32.1188 35.1891V36.7646H32.8257C33.1911 36.7646 33.4691 36.695 33.6581 36.559C33.8488 36.4229 33.9425 36.2236 33.9425 35.9626C33.9425 35.7048 33.8567 35.5118 33.682 35.3821C33.5088 35.254 33.2499 35.1891 32.9052 35.1891H32.1188ZM32.1188 32.5032V34.0012H32.6637C33.0434 34.0012 33.3277 33.9363 33.5152 33.8098C33.7026 33.6816 33.7979 33.4871 33.7979 33.2261C33.7979 32.9888 33.709 32.8101 33.5311 32.6867C33.3547 32.5649 33.0942 32.5032 32.7495 32.5032H32.1188ZM30.3618 31.2947H33.1196C33.9346 31.2947 34.5462 31.4402 34.9576 31.7313C35.3675 32.0239 35.5724 32.4573 35.5724 33.0331C35.5724 33.4191 35.466 33.7417 35.2515 33.998C35.0355 34.2543 34.7225 34.4393 34.3126 34.5516C34.7733 34.6371 35.1276 34.8174 35.3754 35.0926C35.6232 35.3679 35.7471 35.719 35.7471 36.1461C35.7471 36.7757 35.5216 37.2423 35.0704 37.546C34.6192 37.8481 33.9219 38 32.9814 38H30.3618V31.2947ZM38.5637 32.4747V34.1941H39.1944C39.582 34.1941 39.8743 34.123 40.0681 33.9838C40.2619 33.843 40.3588 33.6326 40.3588 33.3526C40.3588 33.0505 40.2508 32.829 40.0347 32.6867C39.8187 32.5443 39.4771 32.4747 39.0085 32.4747H38.5637ZM36.8083 31.2947H39.4835C40.3747 31.2947 41.0355 31.4386 41.4676 31.7265C41.8997 32.0144 42.1158 32.4526 42.1158 33.041C42.1158 33.476 42.0014 33.8335 41.7742 34.1135C41.5455 34.3935 41.2166 34.5801 40.7861 34.675C41.1404 34.8031 41.4247 35.1701 41.6408 35.7744L42.4446 38H40.5733L39.9807 36.1651C39.8854 35.8693 39.7567 35.6652 39.5915 35.5513C39.4279 35.439 39.1721 35.3821 38.8242 35.3821H38.5637V38H36.8083V31.2947ZM43.1833 31.2947H44.9784V38H43.1833V31.2947Z" fill="#1F4396"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0">
                                        <rect width="45" height="38" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>                                        
                                </button>
                                <button className="btn btn-payment-method">
                                    <svg width="92" height="30" viewBox="0 0 92 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M31.1859 0.828808H43.0169L43.0247 5.54608L40.1118 5.53833L47.0203 21.8358L53.8121 5.55383H50.8212L50.8134 0.844303L60.2922 0.836561L60.2767 3.5244L48.874 30C46.1246 30.0077 44.3332 29.0162 43.3752 26.9403L33.9898 5.55383H31.1781L31.1859 0.828808ZM14.8998 0C23.1324 0 29.8073 6.68473 29.8073 14.9264C29.8073 23.1681 23.1324 29.845 14.8998 29.845C6.67491 29.845 0 23.1681 0 14.9264C0 6.68473 6.67491 0 14.8998 0ZM14.8608 4.87993C20.0481 4.87993 24.254 9.42679 24.254 15.0348C24.254 20.6429 20.0481 25.182 14.8608 25.182C9.66576 25.182 5.45987 20.6429 5.45987 15.0348C5.45987 9.42679 9.66576 4.87993 14.8608 4.87993ZM77.0924 0C85.3251 0 92 6.68473 92 14.9264C92 23.1681 85.3251 29.845 77.0924 29.845C68.8676 29.845 62.1927 23.1681 62.1927 14.9264C62.1927 6.68473 68.8676 0 77.0924 0ZM77.0535 4.87993C82.2408 4.87993 86.4467 9.42679 86.4467 15.0348C86.4467 20.6429 82.2408 25.182 77.0535 25.182C71.8585 25.182 67.6526 20.6429 67.6526 15.0348C67.6526 9.42679 71.8585 4.87993 77.0535 4.87993Z" fill="#4C3494"/>
                                    </svg>
                                </button>
                            </div>

                            <Separator />

                            <div className="d-flex justify-content-center mt-4">
                                <small className="text-muted">
                                    Pay via cash. <Link to="#" className="text-decoration-none">See how it work</Link>
                                </small>
                            </div>

                        </div>
                    </div>
                    <div className="row mt-4 d-none d-md-flex">
                        <div className="col">
                            <Link to="/ticket/booking" style={{ fontSize: "15px" }} className="btn btn-outline-primary rounded-3 py-3 w-100">Previous Step</Link>
                        </div>
                        <div className="col">
                            <Link to="/ticket/payment/result" style={{ fontSize: "15px" }} className="btn btn-primary rounded-3 py-3 w-100">Pay your order</Link>
                        </div>
                    </div>
                </div>
                </Layout>
            </Fragment>
        )
    } else {
        return <NotFound/>
    }
}

export default Order;
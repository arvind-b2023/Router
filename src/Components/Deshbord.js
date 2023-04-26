import React from "react";
import { Chart } from "react-google-charts";

export default function Deshbord() {


    const data = [
        ["Task", "Hours per Day"],
        ["Post", 11],
        ["Register Company", 5],
        ["User", 15],
    ];
    const options = {
        title: " Daily Report",
    };
    const data1 = [
        ["Year", "Sales", "Expenses"],
        ["2004", 1000, 400],
        ["2005", 1170, 460],
        ["2006", 660, 1120],
        ["2007", 1030, 540],
    ];

    const options1 = {
        title: "Company Performance",
        curveType: "function",
        legend: { position: "bottom" },
    };


    return (<>
        <section className="jumbotron text-center  deshbord float-end" style={{ width: "85%" }} >


            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"80vh"}
            />

            <div className="container d-flex">
                <div className="container">
                    <h1>Total User</h1>
                    <svg className="circle-svg">
                        <circle className="bg" cx="57" cy="57" r="52" />
                        <circle className="meter-1" cx="57" cy="57" r="52" />
                    </svg>
                    <p className="user-count1">+
                    </p>
                </div>
                <div className="container">
                    <h1>Register Compney</h1>
                    <svg className="circle-svg">
                        <circle className="bg" cx="57" cy="57" r="52" />
                        <circle className="meter-1" cx="57" cy="57" r="52" />
                    </svg>
                    <p className="user-count2">+</p>
                </div>
                <div className="container">
                    <h1>Total Post</h1>
                    <svg className="circle-svg">
                        <circle className="bg" cx="57" cy="57" r="52" />
                        <circle className="meter-1" cx="57" cy="57" r="52" />
                    </svg>
                    <p className="user-count3">+</p>
                </div>
            </div>
            <div className=" mt-5 container d-flex justify-content-evenly">
                <div className="col-lg-4 col-md-4 order-1">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-6 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="avatar flex-shrink-0">
                                        <img src="icons8-user-80.png" alt="chart success" className="rounded" />
                                    </div>
                                    <span className="fw-semibold d-block mb-1">Total User</span>
                                    <h3 className="card-title mb-2">12,628</h3>
                                    <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt"></i> +72.80%</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-6 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="avatar flex-shrink-0">
                                        <img src="icons8-user-80.png" alt="Credit Card" className="rounded" />
                                    </div>
                                    <span>Last Month</span>
                                    <h3 className="card-title text-nowrap mb-1">4,679</h3>
                                    <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt"></i> +28.42%</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="top" className="sa-app__body px-2 px-lg-4">
                <div className="container pb-6">
                    <div className="row g-4 g-xl-5">
                        <div className="col-12 col-md-4 d-flex">
                            <div className="card bg-info saw-indicator flex-grow-1 saw-indicator--size--lg" data-sa-container-query="{&quot;340&quot;:&quot;saw-indicator--size--lg&quot;}">
                                <div className="sa-widget-header saw-indicator__header">
                                    <h2 className="sa-widget-header__title">Total sells</h2>
                                </div>
                                <div className="saw-indicator__body">
                                    <div className="saw-indicator__value">$3799.00</div>
                                    <div className="saw-indicator__delta saw-indicator__delta--rise">
                                        <div className="saw-indicator__delta-direction">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="currentColor">
                                                <path d="M9,0L8,6.1L2.8,1L9,0z">
                                                </path>
                                                <circle cx="1" cy="8" r="1">
                                                </circle>
                                                <rect x="0" y="4.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.864 4.0858)" width="7.1" height="2">
                                                </rect>
                                            </svg>
                                        </div>
                                        <div className="saw-indicator__delta-value">34.7%</div>
                                    </div>
                                    <div className="saw-indicator__caption">Compared to April 2021</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 d-flex">
                            <div className="card bg-info saw-indicator flex-grow-1 saw-indicator--size--lg" data-sa-container-query="{&quot;340&quot;:&quot;saw-indicator--size--lg&quot;}">
                                <div className="sa-widget-header saw-indicator__header">
                                    <h2 className="sa-widget-header__title">Average order value</h2>
                                </div>
                                <div className="saw-indicator__body">
                                    <div className="saw-indicator__value">$272.98</div>
                                    <div className="saw-indicator__delta saw-indicator__delta--fall">
                                        <div className="saw-indicator__delta-direction">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="currentColor">
                                                <path d="M2.8,8L8,2.9L9,9L2.8,8z">
                                                </path>
                                                <circle cx="1" cy="1" r="1">
                                                </circle>
                                                <rect x="0" y="2.5" transform="matrix(0.7071 0.7071 -0.7071 0.7071 3.5 -1.4497)" width="7.1" height="2">
                                                </rect>
                                            </svg>
                                        </div>
                                        <div className="saw-indicator__delta-value">12.0%</div>
                                    </div>
                                    <div className="saw-indicator__caption">Compared to April 2021</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 d-flex">
                            <div className="card bg-info saw-indicator flex-grow-1 saw-indicator--size--lg" data-sa-container-query="{&quot;340&quot;:&quot;saw-indicator--size--lg&quot;}">
                                <div className="sa-widget-header saw-indicator__header">
                                    <h2 className="sa-widget-header__title">Total orders</h2>
                                </div>
                                <div className="saw-indicator__body">
                                    <div className="saw-indicator__value">578</div>
                                    <div className="saw-indicator__delta saw-indicator__delta--rise">
                                        <div className="saw-indicator__delta-direction">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="currentColor">
                                                <path d="M9,0L8,6.1L2.8,1L9,0z">
                                                </path>
                                                <circle cx="1" cy="8" r="1">
                                                </circle>
                                                <rect x="0" y="4.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.864 4.0858)" width="7.1" height="2">
                                                </rect>
                                            </svg>
                                        </div>
                                        <div className="saw-indicator__delta-value">27.9%</div>
                                    </div>
                                    <div className="saw-indicator__caption">Compared to April 2021</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12  d-flex">
                            <div className="card flex-grow-1 saw-chart" data-sa-data="[{&quot;label&quot;:&quot;Jan&quot;,&quot;value&quot;:50},{&quot;label&quot;:&quot;Feb&quot;,&quot;value&quot;:130},{&quot;label&quot;:&quot;Mar&quot;,&quot;value&quot;:525},{&quot;label&quot;:&quot;Apr&quot;,&quot;value&quot;:285},{&quot;label&quot;:&quot;May&quot;,&quot;value&quot;:470},{&quot;label&quot;:&quot;Jun&quot;,&quot;value&quot;:130},{&quot;label&quot;:&quot;Jul&quot;,&quot;value&quot;:285},{&quot;label&quot;:&quot;Aug&quot;,&quot;value&quot;:240},{&quot;label&quot;:&quot;Sep&quot;,&quot;value&quot;:710},{&quot;label&quot;:&quot;Oct&quot;,&quot;value&quot;:470},{&quot;label&quot;:&quot;Nov&quot;,&quot;value&quot;:640},{&quot;label&quot;:&quot;Dec&quot;,&quot;value&quot;:1110}]">
                                <div className="sa-widget-header saw-chart__header">
                                    <h2 className="sa-widget-header__title">Income statistics</h2>
                                </div>
                                <div className="saw-chart__body">
                                    <div className="saw-chart__container">
                                        <Chart
                                            chartType="LineChart"
                                            width="100%"
                                            height="400px"
                                            data={data1}
                                            options={options1}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 d-flex ">
                            <div className="card  flex-grow-1 saw-table">
                                <div className="sa-widget-header saw-table__header">
                                    <h2 className="sa-widget-header__title">Recent orders</h2>
                                </div>
                                <div className="saw-table__body sa-widget-table text-nowrap ">
                                    <table className="w-100">
                                        <thead >
                                            <tr className="bg-dark text-white "  >
                                                <th>No.</th>
                                                <th>Status</th>
                                                <th>Co.</th>
                                                <th>Customer</th>
                                                <th>Date</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <a href="app-order.html" className="text-reset">#00745</a>
                                                </td>
                                                <td>
                                                    <div className="d-flex fs-6">
                                                        <div className="badge badge-sa-primary">Pending</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img src="icons8-user-80.png" className="sa-language-icon d-block" alt="" title="Italy" />
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <a href="app-customer.html" className="sa-symbol sa-symbol--shape--circle sa-symbol--size--md me-3">
                                                            <div className="sa-symbol__text">GB</div>
                                                        </a>
                                                        <div>
                                                            <a href="app-customer.html" className="text-reset">Giordano Bruno</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>2020-11-02</td>
                                                <td>$2,742.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="app-order.html" className="text-reset">#00513</a>
                                                </td>
                                                <td>
                                                    <div className="d-flex fs-6">
                                                        <div className="badge badge-sa-warning">Hold</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img src="icons8-user-80.png" className="sa-language-icon d-block" alt="" title="Germany" />
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <a href="app-customer.html" className="sa-symbol sa-symbol--shape--circle sa-symbol--size--md me-3">
                                                            <div className="sa-symbol__text">HW</div>
                                                        </a>
                                                        <div>
                                                            <a href="app-customer.html" className="text-reset">Hans Weber</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>2020-09-05</td>
                                                <td>$204.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="app-order.html" className="text-reset">#00507</a>
                                                </td>
                                                <td>
                                                    <div className="d-flex fs-6">
                                                        <div className="badge badge-sa-primary">Pending</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img src="icons8-user-80.png" className="sa-language-icon d-block" alt="" title="Italy" />
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <a href="app-customer.html" className="sa-symbol sa-symbol--shape--circle sa-symbol--size--md me-3">
                                                            <div className="sa-symbol__text">AR</div>
                                                        </a>
                                                        <div>
                                                            <a href="app-customer.html" className="text-reset">Andrea Rossi</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>2020-08-21</td>
                                                <td>$5,039.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="app-order.html" className="text-reset">#00104</a>
                                                </td>
                                                <td>
                                                    <div className="d-flex fs-6">
                                                        <div className="badge badge-sa-danger">Canceled</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img src="icons8-user-80.png" className="sa-language-icon d-block" alt="" title="USA" />
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <a href="app-customer.html" className="sa-symbol sa-symbol--shape--circle sa-symbol--size--md me-3">
                                                            <div className="sa-symbol__text">RF</div>
                                                        </a>
                                                        <div>
                                                            <a href="app-customer.html" className="text-reset">Richard Feynman</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>2020-06-22</td>
                                                <td>$79.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="app-order.html" className="text-reset">#00097</a>
                                                </td>
                                                <td>
                                                    <div className="d-flex fs-6">
                                                        <div className="badge badge-sa-success">Completed</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img src="icons8-user-80.png" className="sa-language-icon d-block" alt="" title="Columbia" />
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <a href="app-customer.html" className="sa-symbol sa-symbol--shape--circle sa-symbol--size--md me-3">
                                                            <div className="sa-symbol__text">LG</div>
                                                        </a>
                                                        <div>
                                                            <a href="app-customer.html" className="text-reset">Leonardo Garcia</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>2020-05-09</td>
                                                <td>$826.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="app-order.html" className="text-reset">#00082</a>
                                                </td>
                                                <td>
                                                    <div className="d-flex fs-6">
                                                        <div className="badge badge-sa-success">Completed</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img src="icons8-user-80.png" className="sa-language-icon d-block" alt="" title="Srbija" />
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <a href="app-customer.html" className="sa-symbol sa-symbol--shape--circle sa-symbol--size--md me-3">
                                                            <div className="sa-symbol__text">NT</div>
                                                        </a>
                                                        <div>
                                                            <a href="app-customer.html" className="text-reset">Nikola Tesla</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>2020-04-27</td>
                                                <td>$1,052.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="app-order.html" className="text-reset">#00063</a>
                                                </td>
                                                <td>
                                                    <div className="d-flex fs-6">
                                                        <div className="badge badge-sa-primary">Pending</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img src="icons8-user-80.png" className="sa-language-icon d-block" alt="" title="France" />
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <a href="app-customer.html" className="sa-symbol sa-symbol--shape--circle sa-symbol--size--md me-3">
                                                            <div className="sa-symbol__text">MC</div>
                                                        </a>
                                                        <div>
                                                            <a href="app-customer.html" className="text-reset">Marie Curie</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>2020-02-09</td>
                                                <td>$441.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="app-order.html" className="text-reset">#00012</a>
                                                </td>
                                                <td>
                                                    <div className="d-flex fs-6">
                                                        <div className="badge badge-sa-success">Completed</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img src="icons8-user-80.png" className="sa-language-icon d-block" alt="" title="Russia" />
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <a href="app-customer.html" className="sa-symbol sa-symbol--shape--circle sa-symbol--size--md me-3">
                                                            <div className="sa-symbol__text">KT</div>
                                                        </a>
                                                        <div>
                                                            <a href="app-customer.html" className="text-reset">Konstantin Tsiolkovsky</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>2020-01-01</td>
                                                <td>$12,961.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 d-flex">
                            <div className="card flex-grow-1">
                                <div className="card-body">
                                    <div className="sa-widget-header mb-4">
                                        <h2 className="sa-widget-header__title">Recent activity</h2>
                                        <div className="sa-widget-header__actions">
                                            <div className="dropdown">
                                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="widget-context-menu-8">
                                                    <li>
                                                        <a className="dropdown-item" href="#">Settings</a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">Move</a>
                                                    </li>
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item text-danger" href="#">Remove</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sa-timeline mb-n2 pt-2">
                                        <ul className="sa-timeline__list">
                                            <li className="sa-timeline__item">
                                                <div className="sa-timeline__item-title">Yesterday</div>
                                                <div className="sa-timeline__item-content">Phasellus id mattis nulla. Mauris velit nisi, imperdiet vitae sodales in, maximus ut lectus. Vivamus commodo scelerisque lacus, at porttitor dui iaculis id. <a href="#">Curabitur imperdiet ultrices fermentum.</a>
                                                </div>
                                            </li>
                                            <li className="sa-timeline__item">
                                                <div className="sa-timeline__item-title">5 days ago</div>
                                                <div className="sa-timeline__item-content">Nulla ut ex mollis, volutpat tellus vitae, accumsan ligula. <a href="#">Curabitur imperdiet ultrices fermentum.</a>
                                                </div>
                                            </li>
                                            <li className="sa-timeline__item">
                                                <div className="sa-timeline__item-title">March 27</div>
                                                <div className="sa-timeline__item-content">Donec tempor sapien et fringilla facilisis. Nam maximus consectetur diam.</div>
                                            </li>
                                            <li className="sa-timeline__item">
                                                <div className="sa-timeline__item-title">November 30</div>
                                                <div className="sa-timeline__item-content">Many philosophical debates that began in ancient times are still debated today. In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge.</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 d-flex">
                            <div className="card flex-grow-1">
                                <div className="card-body">
                                    <div className="sa-widget-header">
                                        <h2 className="sa-widget-header__title">Recent reviews</h2>
                                        <div className="sa-widget-header__actions">
                                            <div className="dropdown">
                                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="widget-context-menu-9">
                                                    <li>
                                                        <a className="dropdown-item" href="#">Settings</a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">Move</a>
                                                    </li>
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item text-danger" href="#">Remove</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item py-2">
                                        <div className="d-flex align-items-center py-3">
                                            <a href="app-product.html" className="me-4">
                                                <div className="sa-symbol sa-symbol--shape--rounded sa-symbol--size--lg">
                                                    <img src="icons8-user-80.png" width="40" height="40" alt="" />
                                                </div>
                                            </a>
                                            <div className="d-flex align-items-center flex-grow-1 flex-wrap">
                                                <div className="col">
                                                    <a href="app-product.html" className="text-reset fs-exact-14">Wiper Blades Brandix WL2</a>
                                                    <div className="text-muted fs-exact-13">Reviewed by <a href="app-customer.html" className="text-reset">Ryan Ford</a>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-auto">
                                                    <div className="sa-rating ms-sm-3 my-2 my-sm-0" >
                                                        <div className="sa-rating__body">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item py-2">
                                        <div className="d-flex align-items-center py-3">
                                            <a href="app-product.html" className="me-4">
                                                <div className="sa-symbol sa-symbol--shape--rounded sa-symbol--size--lg">
                                                    <img src="icons8-user-80.png" width="40" height="40" alt="" />
                                                </div>
                                            </a>
                                            <div className="d-flex align-items-center flex-grow-1 flex-wrap">
                                                <div className="col">
                                                    <a href="app-product.html" className="text-reset fs-exact-14">Electric Planer Brandix KL370090G 300 Watts</a>
                                                    <div className="text-muted fs-exact-13">Reviewed by <a href="app-customer.html" className="text-reset">Adam Taylor</a>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-auto">
                                                    <div className="sa-rating ms-sm-3 my-2 my-sm-0" >
                                                        <div className="sa-rating__body">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item py-2">
                                        <div className="d-flex align-items-center py-3">
                                            <a href="app-product.html" className="me-4">
                                                <div className="sa-symbol sa-symbol--shape--rounded sa-symbol--size--lg">
                                                    <img src="icons8-user-80.png" width="40" height="40" alt="" />
                                                </div>
                                            </a>
                                            <div className="d-flex align-items-center flex-grow-1 flex-wrap">
                                                <div className="col">
                                                    <a href="app-product.html" className="text-reset fs-exact-14">Water Tap</a>
                                                    <div className="text-muted fs-exact-13">Reviewed by <a href="app-customer.html" className="text-reset">Jessica Moore</a>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-auto">
                                                    <div className="sa-rating ms-sm-3 my-2 my-sm-0" >
                                                        <div className="sa-rating__body">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item py-2">
                                        <div className="d-flex align-items-center py-3">
                                            <a href="app-product.html" className="me-4">
                                                <div className="sa-symbol sa-symbol--shape--rounded sa-symbol--size--lg">
                                                    <img src="icons8-user-80.png" width="40" height="40" alt="" />
                                                </div>
                                            </a>
                                            <div className="d-flex align-items-center flex-grow-1 flex-wrap">
                                                <div className="col">
                                                    <a href="app-product.html" className="text-reset fs-exact-14">Brandix Router Power Tool 2017ERXPK</a>
                                                    <div className="text-muted fs-exact-13">Reviewed by <a href="app-customer.html" className="text-reset">Helena Garcia</a>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-auto">
                                                    <div className="sa-rating ms-sm-3 my-2 my-sm-0" >
                                                        <div className="sa-rating__body">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item py-2">
                                        <div className="d-flex align-items-center py-3">
                                            <a href="app-product.html" className="me-4">
                                                <div className="sa-symbol sa-symbol--shape--rounded sa-symbol--size--lg">
                                                    <img src="icons8-user-80.png" width="40" height="40" alt="" />
                                                </div>
                                            </a>
                                            <div className="d-flex align-items-center flex-grow-1 flex-wrap">
                                                <div className="col">
                                                    <a href="app-product.html" className="text-reset fs-exact-14">Undefined Tool IRadix DPS3000SY 2700 Watts</a>
                                                    <div className="text-muted fs-exact-13">Reviewed by <a href="app-customer.html" className="text-reset">Ryan Ford</a>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-auto">
                                                    <div className="sa-rating ms-sm-3 my-2 my-sm-0" >
                                                        <div className="sa-rating__body">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item py-2">
                                        <div className="d-flex align-items-center py-3">
                                            <a href="app-product.html" className="me-4">
                                                <div className="sa-symbol sa-symbol--shape--rounded sa-symbol--size--lg">
                                                    <img src="icons8-user-80.png" width="40" height="40" alt="" />
                                                </div>
                                            </a>
                                            <div className="d-flex align-items-center flex-grow-1 flex-wrap">
                                                <div className="col">
                                                    <a href="app-product.html" className="text-reset fs-exact-14">Brandix Screwdriver SCREW150</a>
                                                    <div className="text-muted fs-exact-13">Reviewed by <a href="app-customer.html" className="text-reset">Charlotte Jones</a>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-auto">
                                                    <div className="sa-rating ms-sm-3 my-2 my-sm-0" >
                                                        <div className="sa-rating__body">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

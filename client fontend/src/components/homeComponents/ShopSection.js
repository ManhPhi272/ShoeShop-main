import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./pagination";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
// import products from "../../data/Products";

const ShopSection = (props) => {
  const { keyword, pagenumber } = props;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  // //USE AXIOS TO LOAD DATA
  // const [products,setProducts] = useState([])

  useEffect(() => {
  //   const fetchproducts = async () => {
  //     const { data } = await axios.get("api/products");
  //     setProducts(data);
  //   };
  //   fetchproducts();
    dispatch(listProduct(keyword, pagenumber));
  }, [dispatch, keyword, pagenumber]);
  return (
    <>
      <div className="container">
        {/* <div className="logo-nav-left1">
					<nav className="navbar navbar-default">
            <div className="navbar-header nav_2">
              <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div> 
					<div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
						<ul className="nav navbar-nav">
							<li className="active"><a href="/" className="act">Home</a></li>	
							<li className="dropdown">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown">Products <b className="caret"></b></a>
								<ul className="dropdown-menu multi-column columns-3">
									<div className="row">
										<div className="col-sm-4">
											<ul className="multi-column-dropdown">
												<li><a href="products.html">Clothing</a></li>
												<li><a href="products.html">Wallets</a></li>
											</ul>
										</div>
										<div className="clearfix"></div>
									</div>
								</ul>
							</li>

						</ul>
					</div>
					</nav>
				</div> */}
      <div id="carouselId" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselId" data-slide-to="0" className="active"></li>
          <li data-target="#carouselId" data-slide-to="1"></li>
          <li data-target="#carouselId" data-slide-to="2"></li>
          <li data-target="#carouselId" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img src="/images/a1.jpeg" style={{margin: '20px', width: '1280px', height: '400px'}} alt="First slide" />
          </div>
          <div className="carousel-item ">
            <img src="/images/a2.jpeg" style={{margin: '20px', width: '1280px', height: '400px'}}  alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img src="/images/a3.jpeg" style={{margin: '20px', width: '1280px', height: '400px'}}  alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img src="/images/a4.jpeg" style={{margin: '20px', width: '1280px', height: '400px'}}  alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>     
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {loading ? (
                  <div className="mb-5">
                    <Loading />
                  </div>
                ) : error ? (
                  <Message variant="alert-danger">{error}</Message>
                ) : (
                  <>
                    {products.map((product) => (
                      <div
                        className="shop col-lg-4 col-md-6 col-sm-6"
                        key={product._id}
                      >
                        <div className="border-product">
                          <Link to={`/products/${product._id}`}>
                            <div className="shopBack">
                              <img src={product.image} alt={product.name} />
                            </div>
                          </Link>

                          <div className="shoptext">
                            <p>
                              <Link to={`/products/${product._id}`}>
                                {product.name}
                              </Link>
                            </p>

                            <Rating
                              value={product.rating}
                              text={`${product.numReviews} reviews`}
                            />
                            <h3>${product.price}</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}

                {/* Pagination */}
                <Pagination
                  pages={pages}
                  page={page}
                  keyword={keyword ? keyword : ""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;

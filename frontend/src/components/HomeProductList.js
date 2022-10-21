import React from "react";
import { Link } from "react-router-dom";

const HomeProductList = (props) => {
  console.log(props);

  return (
    <>
      <div className="product-list">
        <div className="container">
          <div className="wrap-cate-title">
            <div className="row">
              <div className="col-lg-6">
                <div className="wrapper-title-categories">
                  Bộ sưu tập nổi bật
                </div>
              </div>
              <div className="col-lg-6">
                <div className="menu-categories">
                  <ul className="list-menu-categories">
                    <li className="nav-link-category">
                      <Link to="#">Váy đầm công sở</Link>
                    </li>
                    <li className="nav-link-category">
                      <Link to="#">Giày</Link>
                    </li>
                    <li className="nav-link-category">
                      <Link to="#">Quần</Link>
                    </li>
                    <li className="nav-link-category">
                      <Link to="#">Set bộ</Link>
                    </li>
                    <li className="nav-link-category">
                      <Link to="#">Set jean áo phông</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper-list-products">
            <h4 className="title-list-products">Sản phẩm mới nhất</h4>
            <div className="row">
              {props.products.map((product, index) => (
                <div
                  className="col-lg-2 col-md-4 col-sm-6 col-xs-6 "
                  key={index}
                >
                  <Link
                    to={`/product-detail/${product.prod_id}`}
                    className="product-small"
                  >
                    <div className="box-image">
                      <img
                        className="thumbnail"
                        src={product.prod_thumbnail}
                        alt="thumbnail"
                      />
                    </div>
                    <div className="box-text">
                      <h5 className="title-product">{product.prod_name}</h5>
                      <p className="price-product">{product.prod_price}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProductList;

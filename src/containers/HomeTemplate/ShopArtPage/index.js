import React, { useEffect,  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actFetchProductsData} from './modules/actions';
import './style.css';
export default function ShopArtPage() {
  
  
  return (
    <div className='container cover'>
      <h3 className='text-center my-3 user-title'>Cửa hàng</h3>
      <div className="shop_section shop_reverse">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <aside className="sidebar_widget">
                <div className="widget_inner">
                  <div className="widget_list widget_categories">
                    <ul>
                      <li className="widget_sub_categories"><a href="/" data-toggle="collapse" data-target="#men">Phân loại</a>
                        <ul className="widget_dropdown_categories collapse show" id="men">
                          <li><a href="#"> Tác phẩm mới </a></li>
                          <li><a href="#">Fantasy </a></li>
                          <li><a href="#">Potrait</a></li>
                          <li><a href="#">Background</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
            <div className="col-lg-9 col-md-12">
              <div className="row shop_wrapper">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

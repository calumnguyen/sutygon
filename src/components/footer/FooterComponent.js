import React from 'react'


function FooterComponent() {

  return (

    <div>

      <footer className="page-footer">

        <div className="footer-left" id="footerColor">
          <p>Bản quyền <a href="" target="_blank">
              <span className="marked">SUTYGON-BOT. </span>
            </a>
            <span></span> All rights reserved <span id='copyrightyear'>year</span>
          </p>
        </div>
        <div className="footer-right">
          <div className="alert alert-danger mb-2" role="alert">
            <strong style={{fontSize: "15px"}}>Trang web vẫn trong đang được cải tiến. Một số trang chỉ mang
              tính chất minh hoạ.</strong>
          </div>
        </div>
      </footer>


    </div>


  )
}

export default FooterComponent



import React from "react";
import { Link } from "react-router-dom";
import {Panel, Input, Button} from 'appkit-react'

const Landing = () => (
<div className="row justify-content-center h-100 align-items-center nav-template outer-leftNav">
        <div className="col-6">
          <Panel>
            <Panel.header style={{height: 'auto'}}>
              <div className="pull-left logo-box mr-3" style={{borderRight: '.0625rem solid #f2f2f2'}}>
                <img
                  alt="logo"
                  className="logo"
                  style={{height: '2.5rem', margin: '.5rem 1.25rem'}}
                  src={'http://www.pwc.com/etc/designs/pwc/css_common/image/pwclogo.gif'} />
              </div>
              <h6 className="panel-title">R&amp;R Healthcare</h6>
            </Panel.header>
            <Panel.body>
              <p>Login to your account</p>
              <Input
                label="Username"
              />
              <Input
                label="Password"
                type="password"
              />
              <div className="mt-3">
                <Button
                  size="wide"
                  kind="default"
                >
                    Log In
                </Button>
              </div>
            </Panel.body>
          </Panel>
        </div>
      </div>
);

export default Landing;

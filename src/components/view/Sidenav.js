import React from 'react'
import '../../styles/App.css'
import { Label, Input } from 'reactstrap';

  const Sidenav=()=> {
  return (
    <div style={{margin:'5px'}}>
      <p style={{fontWeight:'bolder',color:'#660000', textAlign:'center',marginTop:'25px'}}>Filter By Brand</p>
      <div className='checks'>
      <Label className="boxLabel" check>
      <Input type="checkbox" />{' '}
      Redmi
      </Label>

      <Label className="boxLabel" check>
      <Input  type="checkbox" />{' '}
      Samsung
      </Label>

      <Label className="boxLabel" check>
      <Input type="checkbox" />{' '}
      Honor
      </Label>

      <Label className="boxLabel" check>
      <Input type="checkbox" />{' '}
      Asus
      </Label>
      </div>
      {/* filter by rating--------------------------- */}
      <p style={{fontWeight:'bolder',color:'#660000', textAlign:'center',marginTop:'25px'}}>Filter By User Rating</p>
      <div className='checks'>
      <Label className="boxLabel" check>
      <Input type="checkbox" />{' '}
      <p style={{fontWeight:'bolder',marginTop:'0',marginBottom:'0'}}><i class="fas fa-user"></i><i class="fas fa-star"></i>&nbsp;4</p>
      </Label>

      <Label className="boxLabel" check>
      <Input  type="checkbox" />{' '}
      <p style={{fontWeight:'bolder',marginTop:'0',marginBottom:'0'}}><i class="fas fa-user"></i><i class="fas fa-star"></i>&nbsp;3</p>
      </Label>

      <Label className="boxLabel" check>
      <Input type="checkbox" />{' '}
      <p style={{fontWeight:'bolder',marginTop:'0',marginBottom:'0'}}><i class="fas fa-user"></i><i class="fas fa-star"></i>&nbsp;2</p>
      </Label>

      <Label className="boxLabel" check>
      <Input type="checkbox" />{' '}
      <p style={{fontWeight:'bolder',marginTop:'0',marginBottom:'0'}}><i class="fas fa-user"></i><i class="fas fa-star"></i>&nbsp;1</p>
      </Label>
      </div>

    </div>
  )
}
export default Sidenav;
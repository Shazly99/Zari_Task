import React from 'react'
import { Container, Table } from 'react-bootstrap'
import './Plans.scss';
import data from './data';
import Button from './Button';
 
function Plans() {
  return (
    <>
      <div className='container overflow-hidden text-center' style={{ marginTop: '100px', marginBottom: '100px' }}>
        <h1 className='' style={{ marginBottom: '24px' }}>Plans</h1>
        <div className="table-responsive">

          <Table striped responsive={true} className='rounded-3 w-100'>
            <thead>
              <tr >
                <th>Features</th>
                <th>Silver</th>
                <th>Gold</th>
                <th>Super</th>
                <th>Elite</th>
              </tr>
            </thead>
            <tbody className='text-center'>

              {
                data.map((item, index) => (
                  <tr>
                    <td style={{ backgroundColor: '#E4E4E4' }}>{item.Features}</td>
                    <td >{item.Silver}</td>
                    <td>{item.Gold}</td>
                    <td>{item.Super}</td>
                    <td>{item.Elite}</td>

                  </tr>
                ))
              }

              <tr className='last_col'>
                <td style={{ backgroundColor: '#E4E4E4' }}>Price Map Sales </td>
                <td>4.99$ <span className='re__span'>per month</span>   </td>
                <td className='position-relative' >3.99$ <span className='re__span'>per month</span>   </td>
                <td>2.99$ <span className='re__span'>per month</span>   </td>
                <td>-  </td>
              </tr>

              <tr className='last_border-0'>
                <td> </td>
                <td className='rounded-bottom m-0 pb-0'>  <Button title='Order' /> </td>
                <td className='rounded-bottom pb-0' >  <Button title='Order' /> </td>
                <td className='rounded-bottom pb-0'>  <Button title='Order' /> </td>
                <td className='rounded-bottom pb-0'>  <Button title='Contact Us' /> </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default Plans

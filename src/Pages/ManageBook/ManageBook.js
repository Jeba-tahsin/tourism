import React, { useEffect, useState } from 'react';

const ManageBook = () => {
    const [manageBook, setManageBook] = useState([]);

    useEffect(() => {
        fetch('https://quiet-beyond-69183.herokuapp.com/purches')
         .then(res => res.json())
         .then(data => setManageBook(data));
    }, []);
    console.log(manageBook);
    return (
        <div className='container'>
            <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Status</th>
            <th scope="col">Cancel</th>
          </tr>
        </thead>
        <tbody>
          {manageBook.map((booking) => (
            <tr>
              <td>{booking?.userName}</td>
              <td>{booking?.phoneNumber}</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          ))}
          </tbody>
         </table>
        </div>
    );
};

export default ManageBook;
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import { FaTimes, FaTrash } from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { toast } from 'react-toastify';
import { useGetOrdersQuery, useDeleteOrderMutation} from '../../slices/ordersApiSlice';

const OrderListScreen = () => {
  //getting the data from the query:
  const { data: orders, isLoading, error, refetch } = useGetOrdersQuery();

  const [deleteOrder, { isLoading: loadingDelete }] = useDeleteOrderMutation();

  const deleteHandler = async (id) => {
    if(window.confirm('Are you sure?')) {
      try {
          await deleteOrder(id);
          toast.success('Order deleted');
          refetch();
      } catch (err) {
          toast.error(err?.data?.message || err.error);
      }
  }
  }

  return (
    <> 
    <h1>Orders</h1>
    { loadingDelete && <Loader />}
    { isLoading ? <Loader /> : error ? <Message variant='danger'>{error}
    </Message> : (
      <Table striped hover responsive className='table-sm'>
        <thead>
          <tr>
            <th>ID</th>
            <th>USER</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>PAID</th>
            <th>DELIVERED</th>
          </tr>
        </thead>
        <tbody>
          { orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.user && order.user.name}</td>
              <td>{order.createdAt.substring(0,10)}</td>
              <td>{order.totalPrice}</td>
              <td>
                { order.isPaid ? (
                  order.paidAt.substring(0,10)
                ) : (
                  <FaTimes style={{ color: 'red' }} />
                )}
              </td>
              <td>
                { order.isDelivered ? (
                  order.deliveredAt.substring(0,10)
                ) : (
                  <FaTimes style={{ color: 'red' }} />
                )}
              </td>
              <td>
                <LinkContainer to={`/order/${order._id}`}>
                  <Button variant='light' className='btn-sm'>Details</Button>
                </LinkContainer>
                <Button 
                  variant='danger' 
                  className='btn-sm ms-2' 
                  onClick={ () => deleteHandler(order._id)}>
                    <FaTrash style={{color: 'white'}} />
                  </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
    }
    
    </>
  )
}

export default OrderListScreen
import { uiActions } from "./ui-slice";
import { cartSliceActions } from "./cart-slice";
export const fetchCartData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch(
                'https://react-http-realistic-be91c-default-rtdb.firebaseio.com/cart.json'
            );

            if(!response.ok) {
                throw new Error ('Could not fetch data!')
            }
            const data = await response.json();

            return data;
        };
        try{
           const cartData =  await fetchData();
            dispatch(
                cartSliceActions.replaceCart(cartData))
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                  status: "error",
                  title: "Error!",
                  message: "Sending Cart Failed",
                })
              );
        }
    }
} 

export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending",
          message: "Sending Cart Data...",
        })
      );
      const sendrequest = async () => {
        const response = await fetch(
          "https://react-http-realistic-be91c-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
  
        if (!response.ok) {
          throw new Error("Sending Cart Data Failed");
        }
      };
  
      try {
        await sendrequest();
  
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success",
            message: "Sent Cart Data!",
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Sending Cart Failed",
          })
        );
      }
    };
  };
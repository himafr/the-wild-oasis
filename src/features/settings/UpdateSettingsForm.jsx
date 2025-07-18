import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';
import {useSettings} from "./useSettings"
import useUpdateSetting from './useupdateSetting';
function UpdateSettingsForm() {
  const {isLoading,settings:{
    minBookinglength,
    maxBookinglength,
    maxGuestsPerBooking,
    breakfastPrice,
  }={}
}=useSettings()
const {isUpdating,updateSetting}=useUpdateSetting()
function handleUpdate(e,field){
  const {value}=e.target;
  updateSetting({[field]:value})
}
if(isLoading) return <Spinner/>
  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input type='number' id='min-nights' defaultValue={minBookinglength} 
        disabled={isUpdating}
        onBlur={(e)=>handleUpdate(e,"minBookinglength")}
          />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input type='number' id='max-nights'  defaultValue={maxBookinglength}
        disabled={isUpdating}
        onBlur={(e)=>handleUpdate(e,"maxBookinglength")}
         />
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input type='number' id='max-guests' defaultValue={maxGuestsPerBooking} 
        disabled={isUpdating}
        onBlur={(e)=>handleUpdate(e,"maxGuestsPerBooking")}
         />
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input type='number' id='breakfast-price' defaultValue={breakfastPrice} 
        disabled={isUpdating}
        onBlur={(e)=>handleUpdate(e,"breakfastPrice")}
         />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
